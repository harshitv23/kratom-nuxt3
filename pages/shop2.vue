<template>
    <div class="shop-page-wrapper">
        <div v-if="s != undefined && s != ''">
            <KratomSearch />
        </div>
        <div v-else>
            <TitleBar :title="title" />
            <div class="shop-area pt-100 pb-100 pt-sm-0">
                <div class="container">
                    <div class="row flex-row-reverse">
                        <div class="col-lg-9">
                            <div class="mb-20 mt-md-30 mt-sm-30">
                                <div class="shop-top-bar">
                                    <div class="select-showing-wrap">
                                        <div class="shop-select">
                                            <select @change="sortby($event)">
                                                <option value="popularity">Sort by Popularity</option>
                                                <option value="date">Sort by latest</option>
                                                <option value="price">Price - Low to High</option>
                                                <option value="price-desc">Price - High to Low</option>
                                            </select>
                                        </div>
                                        <p v-if="loading == false && totalCount >= 1">Showing {{ perPage * currentPage -
                                            perPage + 1 }} to {{ perPage * currentPage >
        totalCount ? totalCount : perPage * currentPage }} of {{ totalCount }}
                                            results</p>
                                    </div>
                                    <div class="shop-tab">
                                        <button @click="layout = 'threeColumn'"
                                            :class="{ active: layout === 'threeColumn' }">
                                            <i class="fa fa-th"></i>
                                        </button>
                                        <button @click="layout = 'list'" :class="{ active: layout === 'list' }">
                                            <i class="fa fa-list-ul"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div v-if="loading == true" class="pt-140 pb-140 text-center "><img width="120" height="120"
                                    :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/Spinner-1s-200px.gif`">
                            </div>
                            <CategoryList :kratom_products="kratom_products" :layout="layout" v-else />
                            <div v-if="getPaginateCount > 1">
                                <pagination class="pro-pagination-style shop-pagination mt-30" v-model="currentPage"
                                    :per-page="perPage" :records="totalCount" @paginate="paginateClickCallback"
                                    :page-count="getPaginateCount" />
                            </div>
                        </div>
                        <div class="col-lg-3 mob-place">
                            <ShopSidebar classes="mt-sm-30" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import TitleBar from '../components/kratom/product-category/TitleBar.vue';
import CategoryList from '../components/kratom/product-category/CategoryList.vue';
import { Buffer } from "buffer";

export default {
    components: {

        ProductGridItem: () => import("@/components/product/ProductGridItem"),

        TitleBar,
        CategoryList
    },

    data() {
        return {
            layout: "threeColumn",
            filterItems: [],
            prevSelectedCategoryName: '',
            prevSelectedTagName: '',
            prevSelectedSizeName: '',
            prevSelectedColorName: '',
            currentPage: 1,
            perPage: 100,
            selectedPrice: 'default',
            slug: useRoute().params.slug,
            kratom_products: '',
            category_id: '',
            title: 'Buy Kratom Online',
            s: useRoute().query.s,
            loading: true,
            totalCount: '',
            sorted: 'popularity'
        }
    },

    computed: {
        products() {
            return this.$store.getters.getProducts
        },

        getItems() {
            let start = (this.currentPage - 1) * this.perPage;
            let end = this.currentPage * this.perPage;
            return this.filterItems.slice(start, end);
        },
        /* getPaginateCount() {
            return Math.ceil(this.filterItems.length / this.perPage);
        }, */

        getPaginateCount() {
            return Math.ceil(this.totalCount / this.perPage);
        },
    },

    mounted() {
        /* this.updateProductData() */
    },
    async fetch() {
        //const Buffer = require('buffer').Buffer;
        const encodedCredentials = Buffer.from(`${useRuntimeConfig().public.consumer_key}:${useRuntimeConfig().public.secret_key}`).toString('base64');
        await axios.get(
            useRuntimeConfig().public.api_url + '/wp-json/wc/v3/products',
            {
                params: {
                    per_page: this.perPage,
                    orderby: this.sorted,
                    status: 'publish',
                },
                headers: {
                    authorization: 'Basic ' + encodedCredentials
                }
            }
        ).then((result) => {
            this.kratom_products = result.data;
        }, (error) => {
            console.log(error);
        }).finally(() => { this.loading = false });

    },
    methods: {
        sortby(event) {
            //const Buffer = require('buffer').Buffer;
            const encodedCredentials = Buffer.from(`${useRuntimeConfig().public.consumer_key}:${useRuntimeConfig().public.secret_key}`).toString('base64');

            this.loading = true;
            var sortby = event.target.value;
            this.sorted = sortby;

            if (sortby == 'price-desc') {
                var params = {
                    per_page: this.perPage,
                    order: 'desc',
                    orderby: 'price',
                    status: 'publish',
                    search: useRoute().query.s,
                    /* consumer_key: useRuntimeConfig().public.consumer_key,
                    consumer_secret: useRuntimeConfig().public.secret_key, */
                }
            } else if (sortby == 'price') {
                var params = {
                    per_page: this.perPage,
                    order: 'asc',
                    orderby: 'price',
                    status: 'publish',
                    search: useRoute().query.s,
                    /* consumer_key: useRuntimeConfig().public.consumer_key,
                    consumer_secret: useRuntimeConfig().public.secret_key, */
                }

            } else {
                var params = {
                    per_page: this.perPage,
                    order: 'asc',
                    orderby: sortby,
                    status: 'publish',
                    search: useRoute().query.s,
                    /* consumer_key: useRuntimeConfig().public.consumer_key,
                    consumer_secret: useRuntimeConfig().public.secret_key, */
                }
            }

            axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/wc/v3/products',
                {
                    params: params,
                    headers: {
                        authorization: 'Basic ' + encodedCredentials
                    }
                }
            ).then((result) => {
                this.kratom_products = result.data;
            }, (error) => {
                console.log(error);
            }).finally(() => {
                this.loading = false
                this.productCount();
            });

        },
        fetch() {
            //const Buffer = require('buffer').Buffer;
            const encodedCredentials = Buffer.from(`${useRuntimeConfig().public.consumer_key}:${useRuntimeConfig().public.secret_key}`).toString('base64');

            this.loading = true;
            axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/wc/v3/products',
                {
                    params: {
                        per_page: this.perPage,
                        order: 'desc',
                        status: 'publish',
                        orderby: this.sorted,

                    },
                    headers: {
                        authorization: 'Basic ' + encodedCredentials
                    }
                }
            ).then((result) => {
                this.kratom_products = result.data;
            }, (error) => {
                console.log(error);
            }).finally(() => {
                this.loading = false
                this.productCount();
            });

        },

        productCount() {
            this.loading = true;
            axios.get(useRuntimeConfig().public.api_url + '/wp-json/total/v3/product').then((result) => {
                this.totalCount = result.data.total_count;
            }, (error) => {
                console.log(error);
            }).finally(() => { this.loading = false; });
        },

        paginateClickCallback(page) {
            //const Buffer = require('buffer').Buffer;
            const encodedCredentials = Buffer.from(`${useRuntimeConfig().public.consumer_key}:${useRuntimeConfig().public.secret_key}`).toString('base64');

            window.scroll({
                top: 350,
                behavior: "smooth",
            });
            this.loading = true;
            this.currentPage = Number(page);
            var params = {
                per_page: this.perPage,
                order: 'desc',
                page: page,
                status: 'publish',
            };

            if (this.sorted) {
                if (this.sorted == 'price') {
                    params['orderby'] = 'price';
                    params['order'] = 'asc';
                } else if (this.sorted == 'price-desc') {
                    params['orderby'] = 'price';
                    params['order'] = 'desc';
                } else if (this.sorted == 'popularity') {
                    params['orderby'] = 'popularity';
                    params['order'] = '';
                } else if (this.sorted == 'date') {
                    params['orderby'] = 'date';
                    params['order'] = 'desc';
                }
            }
            axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/wc/v3/products',
                {
                    params: params,
                    headers: {
                        authorization: 'Basic ' + encodedCredentials
                    }
                }
            ).then((result) => {
                this.kratom_products = result.data;
            }, (error) => {
                console.log(error);
            }).finally(() => {
                this.loading = false;
                this.productCount();
            });
        },


    },

    watch: {

    },
    created() {
        this.fetch();
        if (!(this.s != undefined && this.s != '')) {

        }
    },
    head() {
        return {
            title: 'Kratom Spot',
            meta: [{
                hid: 'robots',
                name: 'robots',
                content: 'noindex,nofollow'
            }
            ]
        }
    },
};
</script>
