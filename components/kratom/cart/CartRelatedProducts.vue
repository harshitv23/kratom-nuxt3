<template>
    <div class="custom_related_products_section pb-10 mt-0 mb-10">
        <div class="container position-relative">
            <KratomTitle title="You may be" subTitle="Interested In..." class="mb-40 with_arrows"/>
            <div class="product-carousel product-carousel-nav-center">
                <swiper :options="swiperOption" :pagination="true">
                    <swiper-slide v-for="(product, index) in products" :key="index">
                        <ProductGridItemCrossSell :yotpoonce="index" :product="product"  :layout="layout" :yotpo_reviews_count="yotpo_reviews_count"/>
                    </swiper-slide>
                </swiper>
                <!-- Swiper Navigation Start -->
                <div class="product-carousel-nav swiper-button-prev">
                    <i class="pe-7s-angle-left"></i>
                </div>
                <div class="product-carousel-nav swiper-button-next">
                    <i class="pe-7s-angle-right"></i>
                </div>
                <!-- Swiper Navigation End -->
            </div>
        </div>
        <!--<pre>{{products}}</pre>-->
    </div>
</template>

<script>
import axios from "axios";
import $ from 'jquery';
    export default {
        props: ['products'],
        components: {
        },
        data() {
            return {
                swiperOption: {
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
                },
                kratom_products: '',
                layout: 'twoColumn',
                yotpo_reviews_count : [],
            }
        },

        computed: {
            /* products() {
                return this.$store.getters.getNewProducts.filter(item => item.category.includes("book"))
            },             */
        },
        methods : {
            yotporeviews() {
                const product_ids = [];
                var data = this.products;
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
            /* fetch() {
                var include_products = '';                
                if(this.product_related != undefined){
                    this.product_related.map(function(value, key) {            
                        include_products = include_products + value + ',';
                    });            
                }
                console.log(include_products);
                axios.get( 
                    useRuntimeConfig().public.api_url+'/wp-json/wc/v3/products',
                    {
                        params: {
                            per_page: 16,
                            order:'asc',
                            include:include_products,
                            consumer_key:useRuntimeConfig().public.consumer_key,
                            consumer_secret:useRuntimeConfig().public.secret_key,
                        }
                    }
                ).then((result) => {            
                    this.kratom_products = result.data;
                },(error) => {
                    console.log(error);
                });
         
            } */
        },created () {
            //this.fetch()
            this.yotporeviews();
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