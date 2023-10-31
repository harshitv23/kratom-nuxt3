<template>
    <div class="homebestseller">
        <div class="product-area pt-55 pb-95 pt-sm-35 pb-sm-40">
            
                        <div v-if="loading == true" class="pt-30 pb-30 text-center "><img width="30" height="30"
                                :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/Spinner-1s-200px.gif`"/></div>
                        <div class="" :class="loading == true ? 'hidden' : ''">
                            <div class="row">
                                <div class="product_single_item col-xl-4 col-lg-6 col-md-4 col-6 mb-30" v-for="(product, index) in kratom_products_red" :key="index">
                                <ProductGridItem :yotpoonce="index" :product="product"  :layout="layout" :yotpo_reviews_count="yotpo_reviews_count"/>
                            </div>
                            </div>                           
                            <div class="slider-btn btn-hover btn_yellow text-center mt-40 mt-sm-20">
                                <NuxtLink :to="`/${to_link}`" class="homebanner_shop_btn">
                                    Shop All
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
        
                    
    </div>
</template>



<script>
import axios from "axios";
import KratomTitle from "./KratomTitle.vue";
import $ from "jquery";
import { Buffer } from "buffer";
export default {
    props: ['category_id','to_link'],
    components: {
        ProductGridItem: () => import("@/components/product/ProductGridItem"),
        KratomTitle
    },
    data() {
        return {
            kratom_products_red: '',            
            layout: 'twoColumn',
            loading: true,
            yotpo_reviews_count: [],
        }
    },
    methods: {        
        fetch() {
            //const Buffer = require('buffer').Buffer;
            const encodedCredentials = Buffer.from(`${useRuntimeConfig().public.consumer_key}:${useRuntimeConfig().public.secret_key}`).toString('base64');
            axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/wc/v3/products',
                {
                    params: {
                        per_page: 3,
                        order: 'desc',
                        category: this.category_id,
                        status: 'publish',
                    },
                        headers: {
                            authorization: 'Basic ' + encodedCredentials
                        }
                }
            ).then((result) => {
                this.kratom_products_red = result.data;
                this.yotporeviews(result.data);
            }, (error) => {
                console.log(error);
            }).finally(() => (this.loading = false));
        },
        yotporeviews(data) {
            const product_ids = [];
            $.each(data, function(i, item) {
                product_ids.push(data[i].id);
            });
            
            axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/yotpo/reviews/',
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
    }, created() {
        this.fetch()
    },
    computed: {        
    }
};
</script>