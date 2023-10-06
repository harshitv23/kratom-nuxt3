<template>
    <div class="section_kratom_specials">
        <div class="product-area pt-75 pb-95">            
            <NuxtImg format="webp" width="1600" height="1107" loading="lazy" src="https://res.cloudinary.com/dv8z5nr6r/images/v1676554801/kratom_special_bg-1_217764f5e8e/kratom_special_bg-1_217764f5e8e.png?_i=AA" class="section_bg_div" alt="Kratom Special Background"/>
            <div class="container position-relative" v-if="kratom_header_data.kratom_specials_section">
                <KratomTitle :title="kratom_header_data.kratom_specials_section[0].kratom_specials_section_titel" class="text-center mb-20 mb-md-40" />
                <!-- <div class="text-center mb-20 mb-md-40">
                    <h2 v-html="kratom_header_data.kratom_specials_section[0].kratom_specials_section_titel"></h2>
                </div> -->
                <p class="text-center kratom_spcials_subtitle mb-30" v-html="kratom_header_data.kratom_specials_section[0].kratom_specials_section_text"></p>
                <div class="rowx">
                    <div class="product-carousel product-carousel-nav-center">
                        <swiper :options="swiperOption" :pagination="true">
                            <swiper-slide v-for="(product, index) in kratom_products_red" :key="index">
                                <ProductGridItem :yotpoonce="index" :product="product" :layout="layout" :yotpo_reviews_count = "yotpo_reviews_count"/>
                            </swiper-slide>
                        </swiper>
                        <!-- Swiper Navigation Start -->
                        <div class="product-carousel-nav swiper-button-prev swiper-button-prev1">
                            <i class="pe-7s-angle-left"></i>
                        </div>
                        <div class="product-carousel-nav swiper-button-next swiper-button-next1">
                            <i class="pe-7s-angle-right"></i>
                        </div>
                        <!-- Swiper Navigation End -->
                    </div>
                    <div class="slider-btn btn-hover btn_yellow text-center mt-40">
                        <NuxtLink :to="`/${kratom_header_data.kratom_specials_section[0].kratom_specials_section_btn.btn_slug}`" class="homebanner_shop_btn">
                            {{ kratom_header_data.kratom_specials_section[0].kratom_specials_section_btn.btn_text }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import axios from "axios";
import KratomTitle from "./KratomTitle.vue";
import $ from 'jquery';


export default {
    components: {
        
        ProductGridItem: () => import("@/components/product/ProductGridItem"),
        
        KratomTitle
    },
    data() {
        return {
            kratom_header_data: {
                "kratom_specials_section": [
                    {
                    "kratom_specials_section_titel": "Kratom <span>Specials</span>",
                    "kratom_specials_section_text": "Buy discount Kratom online with confidence knowing that even our best deals come with purity and potency guaranteed.",
                    "kratom_specials_section_btn": {
                        "btn_text": "Shop All Specials",
                        "btn_slug": "bundleandsave"
                    }
                    }
                ]
            },
            swiperOption: {
                loop: false,
                speed: 200,
                spaceBetween: 30,
                slidesPerView: 4,
                autoplay: {
                    delay: 6000
                },
                navigation: {
                    nextEl: '.swiper-button-next1',
                    prevEl: '.swiper-button-prev1',
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
            kratom_products_red: '',
            layout: 'twoColumn',
            yotpo_reviews_count: [],
        }
    },
    methods: {
        fetch() {
            const Buffer = require('buffer').Buffer;
            const encodedCredentials = Buffer.from(`${useRuntimeConfig().public.consumer_key}:${useRuntimeConfig().public.secret_key}`).toString('base64');
            axios.get(
                useRuntimeConfig().public.api_url+'/wp-json/wc/v3/products',
                {
                    params: {
                        per_page: 8,
                        order: 'desc',
                        category: 173,
                        status: 'publish',
                        /* consumer_key: useRuntimeConfig().public.consumer_key,
                        consumer_secret: useRuntimeConfig().public.secret_key */
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
            });        
        },

        fetch_data() {
            axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/acf/v3/header?data_type=section_6').then((result) => {
                    this.kratom_header_data = result.data;
                }, (error) => {
                    console.log(error);
                })
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
        this.fetch();
        this.fetch_data();
    }
};
</script>

<style>
.kratom_spcials_subtitle {
    color: #6a6a6a;
    max-width: 510px;
    margin-left: auto;
    margin-right: auto;
}

.section_kratom_specials {
    background-color: #F3F5F2;
    position: relative;
}

.section_kratom_specials:before {
    content: '';
    /* background-image: url(/img/kratom/kratom_special_bg.png); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.5;
}
.section_bg_div + .position-relative {
    z-index: 2;
}
.section_kratom_specials .section_bg_div {
    opacity: 0.5;
}
.section_kratom_specials .product-carousel-nav-center .product-carousel-nav:not(.swiper-button-disabled) {
    background-color: #35492d;
}

.section_kratom_specials .product-carousel-nav-center .product-carousel-nav {
    opacity: 1;
    visibility: visible;
    top: 60px;
    border-radius: 100%;
    width: 55px;
    height: 55px;
}
</style>