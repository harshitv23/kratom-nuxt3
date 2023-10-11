<template>
    <div class="shop-page-wrapper">
        <div v-if="s != undefined && s != ''">
            <KratomSearch/>
        </div>
        <div v-else>
        <TitleBar :title="title" />
        <div class="shop-area pt-100 pb-100 pt-sm-0">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-9">
                        <div class="mb-20 mt-md-30 mt-sm-30">
                            <p v-if="loading == false && totalCount >= 1">Showing {{ perPage * currentPage - perPage + 1}} to {{ perPage * currentPage >
                                totalCount ? totalCount : perPage * currentPage}} of {{ totalCount }}
                                    results</p>
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
                                    <a class="listpage_filter_button d-md-none" @click="scrollToFilter">Filters</a>                                    
                                </div>
                                <div class="shop-tab">
                                    <button @click="layout = 'threeColumn'" name="grid"
                                        :class="{ active: layout === 'threeColumn' }">
                                        <i class="fa fa-th"></i>
                                    </button>
                                    <button @click="layout = 'list'" :class="{ active: layout === 'list' }" name="list">
                                        <i class="fa fa-list-ul"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div v-if="loading == true" class="pt-140 pb-140 text-center "><img width="120" height="120" :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/Spinner-1s-200px.gif`"></div>
                        <CategoryList :kratom_products="kratom_products" :layout="layout" :yotpo_reviews_count="yotpo_reviews_count" v-else/>
                        <div v-if="getPaginateCount > 1">
                        <Pagination class="pro-pagination-style shop-pagination mt-30" v-model="currentPage"
                            :per-page="perPage" :records="totalCount" @paginate="paginateClickCallback"
                            :page-count="getPaginateCount" />
                    </div>
                    </div>
                    <div class="col-lg-3">
                        <ShopSidebar classes="mt-sm-30" id="filter"/>
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
import $ from 'jquery';
import { Buffer } from "buffer";
import Pagination from 'v-pagination-3';


export default {
    components: {
        
        ProductGridItem: () => import("@/components/product/ProductGridItem"),
        Pagination,
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
            perPage: 12,
            selectedPrice: 'default',
            slug: useRoute().params.slug,
            kratom_products: '',
            category_id: '',
            title: 'Shop for Kratom',
            s: useRoute().query.s,
            loading: true,
            totalCount: '',
            sorted: 'popularity',
            yotpo_reviews_count: []
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
        omnisend.push(["track", "$pageViewed"]);
        /* this.updateProductData() */
    },
    /* fetch() {
        const Buffer = require('buffer').Buffer;
            const encodedCredentials = Buffer.from(`${useRuntimeConfig().public.consumer_key}:${useRuntimeConfig().public.secret_key}`).toString('base64');
        axios.get(
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

    }, */
    methods: {
        yotporeviews(data) {
            const product_ids = [];
            $.each(data, function(i, item) {
                product_ids.push(data[i].id);
            });
            /* console.log(product_ids); */
            axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/yotpo/reviews/?dfvsf',
                {
                    params: {
                        product_id: product_ids,
                        per_page: 2
                    }
                }
            ).then((result) => {
                /* console.log(result.data); */
                this.yotpo_reviews_count = result.data;
            }, (error) => {
                console.log(error);
            }).finally(() => (this.loading = false));
        },
        scrollToFilter() { 
            document.getElementById('filter').scrollIntoView({ 
                behavior: 'smooth' 
            });
        },
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
                        is_list: "yes"
                        /* consumer_key: useRuntimeConfig().public.consumer_key,
                        consumer_secret: useRuntimeConfig().public.secret_key, */
                    },
                        headers: {
                            authorization: 'Basic ' + encodedCredentials
                        }
                }
            ).then((result) => {
                this.kratom_products = result.data;
                this.yotporeviews(result.data);
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
                /* consumer_key: useRuntimeConfig().public.consumer_key,
                consumer_secret: useRuntimeConfig().public.secret_key, */
            };

            if(this.sorted){
                if (this.sorted == 'price') {
                    params['orderby'] = 'price';
                    params['order'] = 'asc';
                } else if (this.sorted == 'price-desc') {
                    params['orderby'] = 'price';
                    params['order'] = 'desc';
                } else if (this.sorted == 'popularity') {
                    params['orderby'] = 'popularity';
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

        /* paginateClickCallback(page) {
            this.currentPage = Number(page);
        },
        updateProductData() {
            this.paginateClickCallback(1);

            const categoryName = useRoute().query.category;
            const sizeName = useRoute().query.size;
            const colorName = useRoute().query.color;
            const tagName = useRoute().query.tag;

            if (Object.keys(useRoute().query).length === 0) {
                this.filterItems = [...this.products]
            }

            if (categoryName && this.prevSelectedCategoryName !== categoryName) {
                if (Boolean(categoryName) === false || categoryName === this.slugify("all categories")) {
                    this.filterItems = [...this.products]
                }
                else {
                    const resultData = this.products.filter((item) => this.slugify(item.category).includes(categoryName));
                    this.filterItems = [];
                    this.filterItems.push(...resultData);
                }
            }

            if (colorName && this.prevSelectedColorName !== colorName) {
                if (Boolean(colorName) === false || colorName === this.slugify("all colors")) {
                    this.filterItems = [...this.products]
                }
                else {
                    const resultData = this.products.filter((item) => item.variation?.color.includes(colorName));
                    this.filterItems = [];
                    this.filterItems.push(...resultData);
                }
            }

            if (sizeName && this.prevSelectedSizeName !== sizeName) {
                if (Boolean(sizeName) === false || sizeName === this.slugify("all sizes")) {
                    this.filterItems = [...this.products]
                }
                else {
                    const resultData = this.products.filter((item) => item.variation?.sizes.includes(sizeName));
                    this.filterItems = [];
                    this.filterItems.push(...resultData);
                }
            }

            if (tagName && this.prevSelectedTagName !== tagName) {
                if (tagName) {
                    const resultData = this.products.filter((item) => this.slugify(item.tag).includes(tagName));
                    this.filterItems = [];
                    this.filterItems.push(...resultData);
                }
                else {
                    this.filterItems = [...this.products]
                }
            }

            this.prevSelectedCategoryName = categoryName;
            this.prevSelectedColorName = colorName;
            this.prevSelectedSizeName = sizeName;
            this.prevSelectedTagName = tagName;
        }, */
    },

    watch: {
        /* $route() {
            this.updateProductData()
        },

        selectedPrice() {
            switch (this.selectedPrice) {
                case "low2high":
                    this.filterItems = this.filterItems.sort((a, b) => this.discountedPrice(a) - this.discountedPrice(b))
                    break;
                case "high2low":
                    this.filterItems = this.filterItems.sort((a, b) => this.discountedPrice(b) - this.discountedPrice(a))
                    break;
                default:
                    this.filterItems = [...this.products]
            }
        } */
    },
    created() {
        if(!(this.s != undefined && this.s != '')){
            this.fetch();
        }   
        /* this.productCount(); */     
    },
    head() {
            return {
                htmlAttrs: { lang: 'en-US' },
                title: "Shop All Kratom Products | Kratom Spot",
                meta: [
            
            {
                    hid: 'description',
                    name: 'description',
                    content: 'Looking for high-quality kratom products? Kratom Spot has a wide range of strains and blends available for purchase. Shop now and enjoy fast shipping!'
                }],
            link: [
            {
                href: 'https://kratomspot.com/shop',
                rel: 'canonical'
            },
            
        ],
            }
        },
    /* head() {
        return {
            title: "Buy Kratom Online"
        }
    }, */
};
</script>
