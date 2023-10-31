<template>
    <div class="custom_related_products_section pb-10 mt-60">
        <div class="container position-relative">
            <KratomTitle title="Related" subTitle="Products" class="mb-40"/>
            <div class="product-carousel product-carousel-nav-center">
                <Carousel v-bind="settings" :breakpoints="breakpoints_new" v-model="currentSlide" ref="carousel">
                  <Slide v-for="(product, index) in kratom_products" :key="index">
                      <ProductGridItem :yotpoonce="index" :product="product"  :layout="layout" :yotpo_reviews_count="yotpo_reviews_count"/>
                  </Slide>              
                  
                </Carousel>

                <!-- <Swiper :options="swiperOption" :pagination="true" :loop="false" :slides-per-view="4" :spaceBetween="30">
                    <SwiperSlide v-for="(product, index) in kratom_products" :key="index">
                        <ProductGridItem :yotpoonce="index" :product="product"  :layout="layout" :yotpo_reviews_count="yotpo_reviews_count"/>
                    </SwiperSlide>
                </swiper> -->
                <!-- Swiper Navigation Start -->
                <div class="product-carousel-nav swiper-button-prev" @click="carousel_prev()">
                    <i class="pe-7s-angle-left"></i>
                </div>
                <div class="product-carousel-nav swiper-button-next" @click="carousel_next()">
                    <i class="pe-7s-angle-right"></i>
                </div>
                <input type="hidden" v-model="currentSlide" />
                <!-- Swiper Navigation End -->
            </div>
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import axios from "axios";
import $ from 'jquery';
import { Buffer } from "buffer";

    export default {
        props: ['product_related'],
        components: {            
            Carousel, Slide, Pagination, Navigation     
        },
        setup(){
            const carousel = ref(null);
            const carousel_next = () => {
                carousel.value.next();
            };
            const carousel_prev = () => {
                carousel.value.prev();
            };

            return {
                carousel,
                carousel_next,
                carousel_prev
            };            
        },
        data() {
            return {
                currentSlide: 1,
                settings: {
                    itemsToShow: 2,
                    snapAlign: 'center',
                },
                breakpoints_new: {
                  700: {
                    itemsToShow: 3,
                    snapAlign: 'center',
                  },
                  1024: {
                    itemsToShow: 4,
                    snapAlign: 'start',
                  },
                },
                /* swiperOption: {
                    loop: false,
                    speed: 750,
                    spaceBetween: 30,
                    slidesPerView: 4,
                    autoplay: {
                        delay: 6000
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
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
                            slidesPerView: 4
                        }
                    }
                }, */
                kratom_products: '',
                layout: 'twoColumn',
                yotpo_reviews_count: []
            }
        },

        computed: {
            products() {
                return this.$store.getters.getNewProducts.filter(item => item.category.includes("book"))
            },            
        },
        methods : {
            
            fetch() {
                
            const encodedCredentials = Buffer.from(`${useRuntimeConfig().public.consumer_key}:${useRuntimeConfig().public.secret_key}`).toString('base64');
                var include_products = '';                
                if(this.product_related != undefined){
                    this.product_related.map(function(value, key) {            
                        include_products = include_products + value + ',';
                    });            
                }
                /* console.log(include_products); */
                axios.get( 
                    useRuntimeConfig().public.api_url+'/wp-json/wc/v3/products',
                    {
                        params: {
                            per_page: 16,
                            order:'asc',
                            include:include_products,
                            status: 'publish',
                            /* consumer_key:useRuntimeConfig().public.consumer_key,
                            consumer_secret:useRuntimeConfig().public.secret_key, */
                        },
                        headers: {
                            authorization: 'Basic ' + encodedCredentials
                        }
                    }
                ).then((result) => {            
                    this.kratom_products = result.data;
                    this.yotporeviews(result.data);
                },(error) => {
                    console.log(error);
                });
         
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
            
        },created () {
            this.fetch()
        }
    };
</script>


<style>
.custom_related_products_section .product-carousel-nav-center .product-carousel-nav {
    opacity: 1;
    visibility: visible;
    border-radius: 100%;
}
.custom_related_products_section .product-carousel-nav.swiper-button-next {
    top: 26px;
    right: 20px;
}
.custom_related_products_section .product-carousel-nav.swiper-button-prev {
    top: 26px;
    right: 80px;
    left: unset;
}
.product-carousel-nav-center .product-carousel-nav:not(.swiper-button-disabled) {
    background-color: #35492D;
}
</style>