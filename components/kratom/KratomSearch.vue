<template>
    <div class="shop-page-wrapper">        
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
                                    <a class="listpage_filter_button d-md-none" @click="scrollToFilter">Filters</a>
                                    <!-- <p>Showing {{perPage * currentPage - perPage + 1}} to {{perPage * currentPage > filterItems.length ? filterItems.length : perPage * currentPage}} of {{filterItems.length}} result</p> -->
                                </div>
                                <div class="shop-tab">
                                    <button @click="layout = 'threeColumn'" name="grid"
                                        :class="{ active: layout === 'threeColumn' }">
                                        <i class="fa fa-th"></i>
                                    </button>
                                    <button @click="layout = 'list'" :class="{ active: layout === 'list' }"  name="list">
                                        <i class="fa fa-list-ul"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div v-if="loading == true" class="pt-140 pb-140 text-center "><img width="120" height="120"
                :src="`${this.$config.site_url}/img/kratom/icons/Spinner-1s-200px.gif`"></div>
                        <CategoryList :kratom_products="kratom_products" :layout="layout" :yotpo_reviews_count="yotpo_reviews_count" v-else/>
                    </div>
                    <div class="col-lg-3">
                        <ShopSidebar classes="mt-sm-30" id="filter"/>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
import axios from "axios";
import TitleBar from '@/components/kratom/product-category/TitleBar.vue';
import CategoryList from '@/components/kratom/product-category/CategoryList.vue';
import $ from 'jquery';

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
            perPage: 9,
            selectedPrice: 'default',
            kratom_products: '',
            category_id: '',
            title: 'Search: '+this.$route.query.s,
            loading : true,
            yotpo_reviews_count : []
        }
    },
    methods: {
        scrollToFilter() { 
            document.getElementById('filter').scrollIntoView({ 
                behavior: 'smooth' 
            });
        },
        sortby(event) {
            this.loading = true;
            var sortby = event.target.value;
            const Buffer = require('buffer').Buffer;
            const encodedCredentials = Buffer.from(`${this.$config.consumer_key}:${this.$config.secret_key}`).toString('base64');
            if (sortby == 'price-desc') {
                var params = {
                    per_page: 100,
                    order: 'desc',
                    orderby: 'price',
                    status: 'publish',
                    search: this.$route.query.s,
                    /* consumer_key: this.$config.consumer_key,
                    consumer_secret: this.$config.secret_key, */
                }
            } else {
                var params = {
                    per_page: 100,
                    order: 'asc',
                    orderby: sortby,
                    status: 'publish',
                    search: this.$route.query.s,
                    /* consumer_key: this.$config.consumer_key,
                    consumer_secret: this.$config.secret_key, */
                }
            }
            axios.get(
                this.$config.api_url + '/wp-json/wc/v3/products',
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
            }).finally(() => {this.loading = false});

        },
        fetch() {
            const Buffer = require('buffer').Buffer;
            const encodedCredentials = Buffer.from(`${this.$config.consumer_key}:${this.$config.secret_key}`).toString('base64');
            axios.get(
                this.$config.api_url + '/wp-json/wc/v3/products',
                {
                    params: {
                        per_page: 100,
                        search: this.$route.query.s,
                        status: 'publish',
                        /* consumer_key: this.$config.consumer_key,
                        consumer_secret: this.$config.secret_key, */
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
            }).finally(() => {this.loading = false});
        },
        yotporeviews(data) {
            const product_ids = [];
            $.each(data, function(i, item) {
                product_ids.push(data[i].id);
            });
            axios.get(
                this.$config.api_url + '/wp-json/yotpo/reviews/',
                {
                    params: {
                        product_id: product_ids,
                        per_page: 2
                    }
                }
            ).then((result) => {
                this.yotpo_reviews_count = result.data;
            }, (error) => {
                console.log(error);
            }).finally(() => (this.loading = false));
        }
    },    
    created() {
        this.fetch();
    },
    head() {
        return {
            htmlAttrs: { lang: 'en-US' },
            title: 'Buy Kratom Online',
            meta: [

            ],
            link: [

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
