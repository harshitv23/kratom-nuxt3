<template>
    <div class="blog-cta pt-60 pb-60 position-relative">
        <picture>
            <source media="(max-width:767px)" srcset="https://kratomspot.com/wp-content/uploads/2023/03/f08567-1-1.webp">
            <img format="webp" width="1600" height="1079" loading="lazy"
                src="https://res.cloudinary.com/dv8z5nr6r/images/v1676554792/shop_by_category_bg-1-1_21776311437/shop_by_category_bg-1-1_21776311437.jpg?_i=AA"
                class="section_bg_div" alt="Kratom Spot Category Background" />
        </picture>
        <!-- <h2 class="text-center mb-40">Shop by category</h2> -->
        <div class="container position-relative" style="z-index: 1;">
            <Carousel v-bind="settings" :breakpoints="breakpoints_new" ref="carousel">
                <Slide class="single-blog-cta swiper-slide">
                    <div class="shop_category_col"><div to="/kratom-powder"
                            class="shop-category px-4 py-4 text-center p-3 "><img
                                src="https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1682677044/kratom-powder/kratom-powder.webp?_i=AA"
                                width="120" height="120" alt="icon-1" loading="lazy" class="w-30 mb-20 mb-sm-10"> <span
                                class="text-wrap shop_category_title">Kratom <strong>Powders</strong></span>
                            <div class="pro-same-action pro-cart btn-hover"><NuxtLink to="/kratom-powder" class="btn">
                                    Shop Now
                                </NuxtLink></div>
                            </div>

                    </div>
                </Slide>
                <Slide class="single-blog-cta swiper-slide">
                    <div class="shop_category_col"><div to="/kratom-capsules-for-sale"
                            class="shop-category px-4 py-4 text-center p-3 "><img
                                src="https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1682677042/kratom-capsules_2245827e5f8/kratom-capsules_2245827e5f8.webp?_i=AA"
                                width="120" height="120" alt="icon-1" loading="lazy" class="w-30 mb-20 mb-sm-10"> <span
                                class="text-wrap shop_category_title">Kratom <strong>Capsules</strong></span>
                            <div class="pro-same-action pro-cart btn-hover"><NuxtLink to="/kratom-capsules-for-sale"
                                    class="btn">
                                    Shop Now
                                </NuxtLink></div>
                            </div></div>
                </Slide>
                <Slide class="single-blog-cta swiper-slide">
                    <div class="shop_category_col"><div href="/maeng-da-kratom-powders-capsules"
                            class="shop-category px-4 py-4 text-center p-3"><img
                                src="https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1682508502/maegda-kratom/maegda-kratom.webp?_i=AA"
                                width="120" height="120" alt="icon-1" loading="lazy" class="w-30 mb-20 mb-sm-10"> <span
                                class="text-wrap shop_category_title"><strong>Maeng Da</strong> Kratom</span>
                            <div class="pro-same-action pro-cart btn-hover"><NuxtLink to="/maeng-da-kratom-powders-capsules"
                                    class="btn">
                                    Shop Now
                                </NuxtLink></div>
                            </div></div>
                </Slide>
            </Carousel>
            <div class="quickview-nav swiper-button-prev" @click="carousel_prev()">
                <i class="pe-7s-angle-left"></i>
            </div>
            <div class="quickview-nav swiper-button-next" @click="carousel_next()">
                <i class="pe-7s-angle-right"></i>
            </div>
        </div>
    </div>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel' 

import $ from "jquery";
export default {
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
    components: { Carousel, Slide, Pagination, Navigation },
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
                    itemsToShow: 3,
                    snapAlign: 'start',
                  },
                },
        }
    },
}

</script>
<style>
.blog-cta .shop_category_col,
.blog-cta .shop-category {
    width: 100%;
    height: auto;
}

.blog-cta {
    background: #f5f5f5;
}

.blog-cta .shop-category {
    box-shadow: rgb(149 157 165 / 5%) 0px 8px 24px;
    padding-top: 40px !important;
    padding-bottom: 40px !important;
}

.blog-cta .shop-category img {
    width: auto;
    max-width: 100%;
    max-height: 170px;
    height: auto;
}

.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
    pointer-events: unset;
}
.blog-cta .pro-same-action.pro-cart.btn-hover .btn{
    font-size: 16px;
}
.shop-all-inner {
	border: 2px solid white;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	border-radius: 100%;
}

.shop_category_row {
	display: inline-block;
	width: 100%;
}

.shop-category {
	background-color: #ffffff;
	width: 233px;
	max-width: calc(100% - 10px);
	height: 233px;
	padding-top: 15px !important;
	display: block;
	margin: auto;
	box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
	border-radius: 10px;
}

.shop-all {
	background-color: #FAB333;
	width: 233px;
	height: 233px;
	margin: auto;
	padding: 10px;
	box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
	border-radius: 50%;
	display: inline-block;
}

.section_shop_by_category {
	/* background: url(/img/kratom/shop_by_category_bg.jpg);
	background-position: center center;
	background-size: cover; */
	position: relative;
}
.section_shop_by_category .container {
	position: relative;
    z-index: 2;
}

.shop_category_title {
	display: flex;
	flex-direction: column;
	font-size: 24px;
	color: #333;
}

.shop_category_col {
	width: 20%;
	text-align: center;
	float: left;
}

.shop-all span {
	font-family: 'Bree serif';
	font-size: 28px;
	font-weight: 100;
}

.bg-color {
	background-color: #eeeeee;
}

.shop-category img {
	width: 120px;
}

@media only screen and (max-width:767px) {
	.shop-category {
		max-width: 100%;
	}
}
</style>