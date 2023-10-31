<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import axios from "axios";

// Define a ref for the carousel
const carousel = ref(null);

// Define two functions for controlling the carousel
const carousel_next = () => {
    carousel.value.next();
};
const carousel_prev = () => {
    carousel.value.prev();
};

// Fetch data from the WordPress API
let kratom_header_data = '';
await axios.get(
    useRuntimeConfig().public.api_url + '/wp-json/acf/v3/header?data_type=homebanner'
).then((result) => {
    kratom_header_data = result.data;
}, (error) => {
    console.log(error);
});

// Return the data and functions
/* return {
  kratom_header_data,
  carousel_next,
  carousel_prev
}; */
/* export default {
    async setup() {
        let kratom_header_data = '';
        await axios.get(
            useRuntimeConfig().public.api_url + '/wp-json/acf/v3/header?data_type=homebanner').then((result) => {
                kratom_header_data = result.data;
            }, (error) => {
                console.log(error);
            });
        return {
            kratom_header_data
        }

    },
    components: {
        Carousel, Slide, Pagination, Navigation
    }
}; */
</script>
<template>
    <div class="home_banner_new home_banner">
        <Carousel v-bind="settings" :breakpoints="breakpoints_new" ref="carousel">
            <Slide v-for="(slide, index) in kratom_header_data.banner_slider" :key="index">
                <div v-if="slide.slide_type == 'type1'" class="banner_slide banner_slide_type1 pt-sm-20 pb-sm-25">
                    <picture>
                        <source media="(max-width:575px)"
                            :srcset="slide.new_home_page_banner_background_image_mobile">
                        <source media="(max-width:767px)"
                            :srcset="slide.new_home_page_banner_background_image_mobile">
                        <img preload :src="slide.new_home_page_banner_background_image"
                            alt="Kratom Spot Banner" width="1900" height="917" class="banner_bg" />
                    </picture>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 col-md-9">
                                <h2 class="d-sm-block" style="" v-html="slide.home_page_banner_title"></h2>
                            </div>
                            <div class="col-lg-7 col-md-9 d-sm-block">
                                <div class="banner_logos">
                                    <img width="150" height="150" format="webp" preload
                                        :src="slide.new_home_banner_certified_review_image"
                                        alt="Certified Reviews Kratom Spot" />
                                    <img width="150" height="150" format="webp" preload
                                        :src="slide.new_home_banner_qualified_vendor_image"
                                        alt="Qualified Vendor Kratom Spot" />
                                </div>
                            </div>
                            <div class="homebanner_shop mt-40 ">
                                <div class="slider-btn btn-hover pt-sm-10 pb-sm-10">
                                    <NuxtLink to="/shop" class="homebanner_shop_btn d-sm-inline-block" style="">Shop Now
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="slide.slide_type == 'type2'" class="banner_slide banner_slide_type2 pt-sm-20 pb-sm-25">
                    <picture>
                        <source media="(max-width:575px)"
                            :srcset="slide.new_home_page_banner_background_image_mobile">
                        <source media="(max-width:767px)"
                            :srcset="slide.new_home_page_banner_background_image_mobile">
                        <img preload :src="slide.new_home_page_banner_background_image"
                            alt="Kratom Spot Banner" width="1900" height="917" class="banner_bg" />
                    </picture>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 col-md-9">
                                <h2 class="d-sm-block" style="" v-html="slide.home_page_banner_title"></h2>
                            </div>
                            <!-- <div class="col-lg-7 col-md-9 d-sm-block">
                                <div class="banner_logos">
                                    <img width="150" height="150" format="webp" preload
                                        :src="slide.new_home_banner_certified_review_image"
                                        alt="Certified Reviews Kratom Spot" />
                                    <img width="150" height="150" format="webp" preload
                                        :src="slide.new_home_banner_qualified_vendor_image"
                                        alt="Qualified Vendor Kratom Spot" />
                                </div>
                            </div> -->
                            <div class="homebanner_shop mt-40 " v-if="slide.button_url">
                                <div class="slider-btn btn-hover pt-sm-10 pb-sm-10">
                                    <a :href="slide.button_url" class="homebanner_shop_btn d-sm-inline-block" :style="(slide.button_color)?'background:'+slide.button_url:''">Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </Carousel>
        <div class="product-carousel-nav swiper-button-prev swiper-button-prev5" @click="carousel_prev()">
                                <i class="pe-7s-angle-left"></i>
                            </div>
                            <div class="product-carousel-nav swiper-button-next swiper-button-next5" @click="carousel_next()">
                                <i class="pe-7s-angle-right"></i>
                            </div>
    </div>
</template>

<!-- <script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import axios from "axios";
export default {
    async setup() {
        let kratom_header_data = '';
        await axios.get(
            useRuntimeConfig().public.api_url + '/wp-json/acf/v3/header?data_type=homebanner').then((result) => {
                kratom_header_data = result.data;
            }, (error) => {
                console.log(error);
            });
        return {
            kratom_header_data
        }

    },
    components: {
        Carousel, Slide, Pagination, Navigation
    }
};
</script> -->

<style>
/* Type 2 Banner */
.home_banner .swiper-button-next, .home_banner .swiper-button-prev {
    justify-content: center;
    font-size: 100px;
    top: 50%;
    margin-top: -50px;
    cursor: pointer;
}
.home_banner .banner_slide_type2 h2, .home_banner .banner_slide_type2 .h2 {
    font-style: italic;
    text-align: center;
    font-size: 50px;
    display: flex !important;
    flex-direction: column;
    max-width: 350px;
}
.home_banner .banner_slide_type2 h2 span:first-child {
    font-size: 20px;
    font-style: normal;
    text-shadow: unset;
}
.home_banner .banner_slide_type2 h2 span:nth-child(2) {
    font-size: 38px;
    font-style: normal;
}
/* Type 2 Banner End */
.banner_slide {
    padding: 70px 0 70px;
    height: 100%;
    display: flex;
    align-items: center;
}
.home_banner_new.home_banner {
    margin: 0px 0px 0px;
}
.home_banner h2, .home_banner .h2 {
    text-align: left;
}



.banner_logos {
    display: flex;
    /* width: 100%; */
    align-items: center;
    width: 350px;
    height: 140px;
}

.home_banner_new .banner_logos img {
    margin-top: 0;
}

.home_banner_new .banner_logos img {
    margin-top: 0;
    max-height: unset;
}

.banner_logos img {
    max-height: 150px;
    margin: 10px 10px 10px 0px;
}

@media only screen and (max-width:767px) {
    .banner_logos img {
        max-height: 100px;
    }

    .home_banner_new .banner_logos {
        justify-content: start;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    .home_banner .homebanner_shop {
        margin-top: 0;
    }

    .home_banner_new .banner_logos img {
        margin-top: 10px;
        max-height: 120px;
    }
}</style>