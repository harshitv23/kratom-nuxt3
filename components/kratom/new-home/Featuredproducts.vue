<template>
    <div class="product-area pt-55 pb-95 pt-sm-35 pb-sm-40">
        <div class="container">
            <div class="bestseller_title">
                <KratomTitle class="txt-md-center-home" title="Kratom Spot" subTitle="Featured Products" />
            </div>
            <div class="tab-content mt-sm-30 mt-55">
                <div class="tab-pane fade show active" id="new-product" role="tabpanel">
                    <div v-if="loading == true" class="pt-30 pb-30 text-center ">
                        <img width="120" height="120" :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/Spinner-1s-200px.gif`"/>
                    </div>
                    <div class="" :class="loading == true ? 'hidden' : ''">
                        <div class="product-carousel product-carousel-nav-center position-relative">
                            <Carousel v-bind="settings" :breakpoints="breakpoints_new">
                  <Slide v-for="(product, index) in kratom_products_red" :key="index">
                      <ProductGridItem :yotpoonce="index" :product="product"  :layout="layout" :yotpo_reviews_count="yotpo_reviews_count"/>
                  </Slide>              
                  <template #addons>
                    <Pagination />
                    <Navigation />
                  </template>
                </Carousel>
                            <!-- <swiper class="swiper" :options="swiperOption" :pagination="swiperOption.pagination" :loop="swiperOption.loop" :slides-per-view="swiperOption.slidesPerView" :spaceBetween="swiperOption.spaceBetween" :navigation="swiperOption.navigation">
                                <swiper-slide class="slide" v-for="(product, index) in kratom_products_red" :key="index">
                                    <ProductGridItem :yotpoonce="index" :product="product" :layout="layout" :yotpo_reviews_count="yotpo_reviews_count" />
                                </swiper-slide>
                            </swiper> -->
                            <!-- Swiper Navigation Start -->
                            <!-- <div class="product-carousel-nav swiper-button-prev swiper-button-prev5">
                                <i class="pe-7s-angle-left"></i>
                            </div>
                            <div class="product-carousel-nav swiper-button-next swiper-button-next5">
                                <i class="pe-7s-angle-right"></i>
                            </div> -->
                            <!-- Swiper Navigation End -->
                        </div>
                        <div class="slider-btn btn-hover btn_yellow text-center mt-40 mt-sm-20">
                            <NuxtLink :to="`/shop`" class="homebanner_shop_btn">
                                Shop All
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import axios from "axios";
import KratomTitle from "../KratomTitle.vue";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import $ from "jquery";
import { Buffer } from "buffer";
import 'swiper/css'

export default {
    components: {
        ProductGridItem: () => import("@/components/product/ProductGridItem"),
        KratomTitle,
        Swiper,
        SwiperSlide,
        Carousel, Slide, Pagination, Navigation
    },
    data() {
        return {
            settings: {
                    itemsToShow: 1,
                    snapAlign: 'start',
                },
                breakpoints_new: {
                  700: {
                    itemsToShow: 3,
                    snapAlign: 'start',
                  },
                  1024: {
                    itemsToShow: 4,
                    snapAlign: 'start',
                  },
                },

            swiperOption: {
                loop: false,
                speed: 200,
                spaceBetween: 30,
                slidesPerView: 4,
                // autoplay: {
                //     delay: 6000
                // },
                navigation: {
                    nextEl: '.swiper-button-next5',
                    prevEl: '.swiper-button-prev5',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    480: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    },
                    992: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    }
                }
            },
            kratom_products_red: '',
            layout: 'twoColumn',
            slider: null,
            loading: true,
            yotpo_reviews_count : [],
        }
    },

    methods: {
        fetch() {
            this.loading = true;
            const configs = useRuntimeConfig() //configs.public.
            //const Buffer = require('buffer').Buffer;
            const encodedCredentials = Buffer.from(`${configs.public.consumer_key}:${configs.public.secret_key}`).toString('base64');

            
            axios.get(
                configs.public.api_url + '/wp-json/wc/v3/products',
                {
                    params: {
                        per_page: 8,
                        order: 'asc',
                        category: 39,
                        status: 'publish'
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
            const configs = useRuntimeConfig() //configs.public.
            axios.get(
                configs.public.api_url + '/wp-json/yotpo/reviews/',
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
        this.fetch()
    },
};
</script>