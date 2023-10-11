<template>
    <div class="promotion-page-wrapper">
        <div class="sticky-bar">
            <header class="header-area header-hm9">
                <div class="header_middle">
                    <div class="container">
                        <div class="header-top-area justify-content-center">                            
                            <div class="logo-hm9">
                                <img height="93" width="93"
                                        loading="lazy"
                                        src="https://res.cloudinary.com/dv8z5nr6r/images/v1677748967/kratom_logo/kratom_logo.webp?_i=AA"
                                        alt="Kratomspot" class="header_logo">
                                    </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        <div class="promotion-page-wrapper-inner pt-50">
            <div class="container container_landing">
                <!--  Red Vein Start  -->
                <div class="row" v-if="landing_page_data">
                    <div class="col-12">
                        <div class="colored_title mt-sm-30 mb-sm-20 mb-40 text-lg-start text-md-center">
                            <h2 v-html="landing_page_data.red_vein_label"></h2>
                        </div>
                    </div>
                </div>
                <div class="row pb-40" v-if="landing_page_data">
                    <div class="col-sm">
                        <div class="promo-img">
                            <img :src="`${landing_page_data.red_vein_image}`" alt="promo img">
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="promo-dis">
                            <h3 class="mb-30">Benefits</h3>
                            <ul class="promo-ul double_border_left pl-sm-25">
                                <li class="promo-li" v-for="(dis, index) in landing_page_data.red_vein_description"
                                    :key="index" v-html="dis.landing_page_description_lines"> </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div v-if="loading == true" class="pt-140 pb-140 text-center "><img width="120" height="120"
                        :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/Spinner-1s-200px.gif`"></div>
                <div class="row d-flex justify-content-center" v-else>
                    <div class="product_single_item col-xl-4 col-lg-6 col-md-4 col-6 mb-30"
                        v-for="(product, index) in red_vein_products" :key="index">
                        <ProductGridItem :yotpoonce="index" :product="product"
                            :yotpo_reviews_count="yotpo_reviews_count_red" is_landing='yes' />
                    </div>
                    <div class="slider-btn btn-hover btn_yellow text-center mt-10 mt-sm-10" v-if="loading == false">
                        <n-link to="/red-vein-kratom" class="homebanner_shop_btn">Shop All</n-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="banner_sep mt-sm-10"></div> -->
        <!--  Red Vein End  -->

        <!--  Green Vein Kratom Start  -->
        <div class="promotion-page-wrapper-inner promotion-page-wrapper-inner-gray">
            <div class="container container_landing">
                <div class="row" v-if="landing_page_data">
                    <div class="col-12">
                        <div class="colored_title mt-sm-30 mb-sm-20 mb-40 text-lg-start text-md-center">
                            <h2 v-html="landing_page_data.green_vein_label"></h2>
                        </div>
                    </div>
                </div>
                <div class="row pb-40  flex-row-reverse" v-if="landing_page_data">
                    <div class="col-sm">
                        <div class="promo-img">
                            <img :src="`${landing_page_data.green_vein_image}`" alt="promo img">
                        </div>
                    </div>
                    <div class="col-sm ">
                        <div class="promo-dis">
                            <h3 class="mb-30">Benefits</h3>
                            <ul class="promo-ul double_border_left pl-sm-25">
                                <li class="promo-li" v-for="(dis, index) in landing_page_data.green_vein_description"
                                    :key="index" v-html="dis.landing_page_description_lines"> </li>
                            </ul>
                        </div>
                    </div>                    
                </div>
                <div v-if="loading == true" class="text-center"></div>
                <div class="row d-flex justify-content-center" v-else>
                    <div class="product_single_item col-xl-4 col-lg-6 col-md-4 col-6 mb-30"
                        v-for="(product, index) in green_vein_products" :key="index">
                        <ProductGridItem :yotpoonce="index" :product="product"
                            :yotpo_reviews_count="yotpo_reviews_count_green" is_landing='yes' />
                    </div>
                    <div class="slider-btn btn-hover btn_yellow text-center mt-10 mt-sm-10">
                        <n-link to="/green-vein-kratom" class="homebanner_shop_btn">Shop All</n-link>
                    </div>
                </div>
            </div>
        </div>

        <!--  Green Vein Kratom End  -->

        <!--  White Vein Kratom Start  -->
        <div class="promotion-page-wrapper-inner mb-40">
            <div class="container container_landing">
                <div class="row" v-if="landing_page_data">
                    <div class="col-12">
                        <div class="colored_title mt-sm-30 mb-sm-20 mb-40 text-lg-start text-md-center">
                            <h2 v-html="landing_page_data.white_vein_label"></h2>
                        </div>
                    </div>
                </div>
                <div class="row pb-40" v-if="landing_page_data">
                    <div class="col-sm">
                        <div class="promo-img">
                            <img :src="`${landing_page_data.white_vein_image}`" alt="promo img">
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="promo-dis">
                            <h3 class="mb-30">Benefits</h3>
                            <ul class="promo-ul double_border_left pl-sm-25">
                                <li class="promo-li" v-for="(dis, index) in landing_page_data.white_vein_description"
                                    :key="index" v-html="dis.landing_page_description_lines"> </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div v-if="loading == true" class="pt-140 pb-140 text-center "><img width="120" height="120"
                        :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/Spinner-1s-200px.gif`"></div>
                <div class="row d-flex justify-content-center" v-else>
                    <div class="product_single_item col-xl-4 col-lg-6 col-md-4 col-6 mb-30"
                        v-for="(product, index) in white_vein_products" :key="index">
                        <ProductGridItem :yotpoonce="index" :product="product"
                            :yotpo_reviews_count="yotpo_reviews_count_white" is_landing='yes' />
                    </div>
                    <div class="slider-btn btn-hover btn_yellow text-center mt-10 mt-sm-10">
                        <n-link to="/white-vein-kratom" class="homebanner_shop_btn">Shop All</n-link>
                    </div>
                </div>
            </div>
            <!--  White Vein Kratom End  -->
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import $ from 'jquery';

export default {

    data() {
        return {
            red_vein_products: '',
            green_vein_products: '',
            white_vein_products: '',
            yotpo_reviews_count_red: [],
            yotpo_reviews_count_green: [],
            yotpo_reviews_count_white: [],
            landing_page_data: '',
            loading: true
        }
    },

    components: {
        ProductGridItem: () => import("@/components/product/ProductGridItem")
    },

    head() {

    },

    methods: {
        fatch() {
            this.loading = true;
            axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/acf/v3/header?data_type=landingpage').then((result) => {
                    this.landing_page_data = result.data;
                    this.fatch_red_vein_products();
                    this.fatch_green_vein_products();
                    this.fatch_white_vein_products();
                }, (error) => {
                    console.log(error);
                }).finally(() => {
                    //this.loading = false;
                });
        },
        fatch_red_vein_products() {
            this.loading = true;
            const product_ids = this.landing_page_data.red_vein_products;
            const Buffer = require('buffer').Buffer;
            const encodedCredentials = Buffer.from(`${useRuntimeConfig().public.consumer_key}:${useRuntimeConfig().public.secret_key}`).toString('base64');


            axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/wc/v3/products',
                {
                    params: {
                        include: product_ids,
                        is_list: "yes",
                        is_landing: "yes"
                    },
                    headers: {
                        authorization: 'Basic ' + encodedCredentials
                    }
                }
            ).then((result) => {
                this.red_vein_products = result.data;
                this.yotporeviews(result.data, 'red');
            }, (error) => {
                console.log(error);
            }).finally(() => {
                this.loading = false;
            });
        },
        fatch_green_vein_products() {
            this.loading = true;
            const product_ids = this.landing_page_data.green_vein_products;
            const Buffer = require('buffer').Buffer;
            const encodedCredentials = Buffer.from(`${useRuntimeConfig().public.consumer_key}:${useRuntimeConfig().public.secret_key}`).toString('base64');
            axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/wc/v3/products',
                {
                    params: {
                        include: product_ids,
                        is_list: "yes",
                        is_landing: "yes"
                    },
                    headers: {
                        authorization: 'Basic ' + encodedCredentials
                    }
                }
            ).then((result) => {
                this.green_vein_products = result.data;
                this.yotporeviews(result.data, 'green');
            }, (error) => {
                console.log(error);
            }).finally(() => {
                this.loading = false;
            });
        },
        fatch_white_vein_products() {
            this.loading = true;
            const product_ids = this.landing_page_data.white_vein_products;
            const Buffer = require('buffer').Buffer;
            const encodedCredentials = Buffer.from(`${useRuntimeConfig().public.consumer_key}:${useRuntimeConfig().public.secret_key}`).toString('base64');

            this.loading = true;
            axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/wc/v3/products',
                {
                    params: {
                        include: product_ids,
                        is_list: "yes",
                        is_landing: "yes"
                    },
                    headers: {
                        authorization: 'Basic ' + encodedCredentials
                    }
                }
            ).then((result) => {
                this.white_vein_products = result.data;
                this.yotporeviews(result.data, 'white');
            }, (error) => {
                console.log(error);
            }).finally(() => {
                this.loading = false;
            });
        },
        yotporeviews(data, type = 'red') {
            const product_ids = [];
            $.each(data, function (i, item) {
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
                if (type == 'red') {
                    this.yotpo_reviews_count_red = result.data;
                }
                if (type == 'green') {
                    this.yotpo_reviews_count_green = result.data;
                }
                if (type == 'white') {
                    this.yotpo_reviews_count_white = result.data;
                }
            }, (error) => {
                console.log(error);
            }).finally({});
        }
    },

    created() {
        this.fatch();
    },

    mounted() {
        omnisend.push(["track", "$pageViewed"]);
    }
};
</script>

<style>.promo-prod {
    width: 332.5px;
    margin-right: 20px;
}

body .container_landing {
    max-width: 1020px !important;
}

/* .promotion-page-wrapper .banner_sep {
    width: 100%;
    display: inline-block;
    border-top: 1px solid #fab333;
    border-bottom: 1px solid #fab333;
    height: 5px;
    margin: 15px 0;
} */
.promotion-page-wrapper-inner-gray {
    background: #ebebeb;
    padding-top: 40px;
    margin-top: 60px;
    padding-bottom: 60px;
    margin-bottom: 45px;
}

.double_border_left .promo-li {
    margin-bottom: 20px;
}

.double_border_left .promo-li:last-child {
    margin-bottom: 0px;
}

.sold_in_day {
    position: absolute;
    top: 0;
    right: 0;
    width: 70px;
    height: 70px;
    background: #35492D;
    color: #fff;
    font-size: 12px;
    text-align: center;
    line-height: 15px;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 90px;
}
@media only screen and (max-width:767px){
    .promotion-page-wrapper .colored_title h2{
        font-size: 30px;

    }
    .promo-dis {
    margin-top: 30px;
}
}
</style>