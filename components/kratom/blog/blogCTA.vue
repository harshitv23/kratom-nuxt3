<template>
    <div class="blog-cta pt-60 pb-60 position-relative">
        <picture>
            <source media="(max-width:767px)" srcset="https://kratomspot.com/wp-content/uploads/2023/03/f08567-1-1.webp">
            <NuxtImg format="webp" width="1600" height="1079" loading="lazy"
                src="https://res.cloudinary.com/dv8z5nr6r/images/v1676554792/shop_by_category_bg-1-1_21776311437/shop_by_category_bg-1-1_21776311437.jpg?_i=AA"
                class="section_bg_div" alt="Kratom Spot Category Background" />
        </picture>
        <!-- <h2 class="text-center mb-40">Shop by category</h2> -->
        <div class="container position-relative">
            <swiper :options="blog_cta_options">
                <div class="single-blog-cta swiper-slide">
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
                </div>
                <div class="single-blog-cta swiper-slide">
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
                </div>
                <div class="single-blog-cta swiper-slide">
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
                </div>
            </swiper>
            <div class="quickview-nav swiper-button-prev">
                <i class="pe-7s-angle-left"></i>
            </div>
            <div class="quickview-nav swiper-button-next">
                <i class="pe-7s-angle-right"></i>
            </div>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
export default {
    data() {
        return {
            blog_cta_options: {
                speed: 750,
                spaceBetween: 20,
                slidesPerView: 3,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                // Responsive breakpoints
                breakpoints: {
                    320: {
                        slidesPerView: 1
                    },
                    480: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    }
                }
            }
        }
    },
    methods: {

    },
    created(){
/*         
$(".main-menu nav ul li ul.mega-menu>li ul li a").each(function() {
    console.log($(this).attr("href"));
	console.log($(this).attr("cimg"));
}); */
    }
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