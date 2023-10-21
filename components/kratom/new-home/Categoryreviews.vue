<template>    
    <section class="category_section_2 pb-60 " v-if="hasReviews(yotpo_reviews)">
        <div class="container">
            <div class="row yotpo-display-wrapper carousel-display-wrapper">
        <div class="col-md-6 carousel-top-panel" id="carousel-top-panel">
            <h4 class="headline">Real Reviews From Real Customers</h4>
        </div>
        <div class="col-md-6">
            <div class="carousel-reviews-bottom-line">
                <span class="yotpo-review-stars">
                    <img src="/img/kratom/icons/star-rating-filled.webp" alt="Reviwe Star" width="107" height="19" loading="lazy"/>
                </span>
                <span class="yotpo-num-of-reviews" v-html="`${(review_total)?review_total:'3075'} Reviews `"> </span>
                <div class="swiper-button-prev2" @click="carousel_prev()">
                    <i class="pe-7s-angle-left"></i>
                </div>
                <div class="swiper-button-next2" @click="carousel_next()">
                    <i class="pe-7s-angle-right"></i>
                </div>
            </div>
        </div>
    </div>
            <Carousel v-bind="settings" :breakpoints="breakpoints_new" ref="carousel">
                <Slide v-for="(review, index) in yotpo_reviews" :key="index">
                    <div class="row" v-if="review.bottomline.total_review > 0 && review.reviews[0].score == 5">
                        <div class="col-3 pr-0">
                            <a class="carousel-product-image-container" :href="`${review.products[0].product_link}`">
                                <img class="carousel-product-image" :src="`${review.products[0].image_url}`" :alt="`${review.products[0].name}`" />
                                <p class="carousel-product-name" v-html="review.products[0].name"></p>
                            </a>
                        </div>
                        <div class="col-9 pr-5">
                            <img class="review-star-slider" src="/img/kratom/icons/star-rating-filled.webp" alt="" width="87" height="15"/>
                            <p class="review-date-cat" v-html="date(review.reviews[0].created_at)"></p>
                            <p class="review-titel" v-html="review.reviews[0].title"></p>
                            <div class="review-dis review-content" v-html="review.reviews[0].content"></div>
                            <p class="review-author-name" v-html="review.reviews[0].user.display_name"></p>
                        </div>
                    </div>
                </Slide>
            </Carousel>

            <!-- <swiper :options="swiperOption" :pagination="true">
                <swiper-slide v-if="yotpo_reviews && review.bottomline.total_review > 0" v-for="(review, index) in yotpo_reviews" :key="index">
                    <div class="row" v-if="review.bottomline.total_review > 0 && review.reviews[0].score == 5">
                        <div class="col-3 pr-0">
                            <a class="carousel-product-image-container" :href="`${review.products[0].product_link}`">
                                <img class="carousel-product-image" :src="`${review.products[0].image_url}`" :alt="`${review.products[0].name}`" />
                                <p class="carousel-product-name" v-html="review.products[0].name"></p>
                            </a>
                        </div>
                        <div class="col-9 pr-5">
                            <img class="review-star-slider" src="/img/kratom/icons/star-rating-filled.webp" alt="" width="87" height="15"/>
                            <p class="review-date-cat" v-html="date(review.reviews[0].created_at)"></p>
                            <p class="review-titel" v-html="review.reviews[0].title"></p>
                            <read-more class="review-dis review-content" more-str="Read more" :text="review.reviews[0].content" link="#" less-str="Read less" :max-chars="150"></read-more>
                            <p class="review-author-name" v-html="review.reviews[0].user.display_name"></p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper> -->
        </div>
    </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import axios from "axios";
import $ from "jquery";
import YotpoReviewTotals from "./YotpoReviewTotals.vue";

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
    components: {
        YotpoReviewTotals,
        Carousel, Slide, Pagination, Navigation
    },
    props: ["yotpo_reviews"],
    data() {
        return {
            review_total: "",
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
                autoplay: {
                    delay: 3000
                },
                navigation: {
                    nextEl: '.swiper-button-next2',
                    prevEl: '.swiper-button-prev2',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
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
            },
        }
    }, 
    methods: {
        totalReview() {
            axios.get(useRuntimeConfig().public.api_url + "/wp-json/yotpo/bottomline", {
            }).then((result) => {
                this.review_total = result.data;
            }, (error) => {
                console.log(error);
            });
        },
        hasReviews(yotpo_reviews){
            var hasreviews = false;
            $.each(yotpo_reviews, function (index, data) {                
                if(data.bottomline.total_review && data.bottomline.total_review > 0){
                    hasreviews = true;                    
                }
            })
            return hasreviews;
        },
        date(created_at) {
            
            const date = new Date(created_at);
            return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
        }
    },
    created(){
        this.totalReview();
    }
}
</script>

<style>
.carousel-product-image {
    border: 1px solid #e1e5ee;
    width: 90px;
    height: auto;
    border-radius: 4px;
    text-align: center;
    float: right;
}

.carousel-product-name
{
    text-decoration: none;
    color: #c6c6c6;
    font-size: 10px !important;
    font-weight: 400;
    height: 52px;
    line-height: 1;
    margin-top: 3px;
    letter-spacing: -0.5px;
    overflow: hidden;
}

.carousel-product-image-container {
    display: grid;
}

.carousel-product-name:hover {
    text-decoration: underline;
}

.review-star-date {
    display: flex;
}

.review-date-cat {
    line-height: 20px;
    padding-left: 6px;
    font-style: italic !important;
    font-size: 12px;
    margin: 5px 0px 0px 0px;
}

.section_reviews .yotpo-reviews-carousel .carousel-display-wrapper .yotpo-carousel .carousel-site-quote-container{
    display: none !important;
}
.section_reviews .product-link-container{
    display:none !important;
}
.section_reviews .yotpo-reviews-carousel .carousel-display-wrapper .yotpo-carousel .big-version .right-side{
    float:left;    
    padding-left: 5px;
}
.section_reviews .yotpo-reviews-carousel .carousel-display-wrapper .yotpo-carousel .small-version .right-side{
    float:left;
    padding-left: 5px;
}

.yotpo-display-wrapper.carousel-display-wrapper .carousel-top-panel .headline {
    color: #4f4f4f;
    font-size: 1em;
    font-weight: 700;
    display: inline-block;
    vertical-align: top;
    font-style: normal;
    font-family: "Roboto";
    float: left;
}

.carousel-reviews-bottom-line {
    display: flex;
    float: right;
}

span.yotpo-review-stars {
    color: #fec600;
    font-size: 19px;
    float: left;
}

span.yotpo-num-of-reviews {
    margin-left: 7px;
    font-style: normal;
    font-size: 14px;
    line-height: 30px;
    color: #6A6C77;
    border: none;
    padding: 0;
    font-family: "Roboto";
}

.row.yotpo-display-wrapper.carousel-display-wrapper {
    border-bottom: 2px solid #e3e3e3;
}

p.review-date {
    line-height: 29px;
    padding-left: 6px;
    font-style: italic !important;
    font-size: 12px !important;
    float: left;
    margin: 0;
}

p.review-titel {
    margin-bottom: 0;
    color: #4f4f4f;
    font-size: 1em;
    line-height: 24px;
    margin-top: 1px;
    text-align: left;
    font-weight: 600;
    display: inline-block;
    width: 100%;
}

.review-content .review-dis p, .review-content .review-dis{
    float: left;
    text-align: left;
    font-style: italic !important;
    font-size: 14px;
    line-height: 17px;
    width: 100%;
    margin: 0;
}

.review-dis.review-content p, .review-dis.review-content{
    float: left;
    text-align: left;
    font-style: italic !important;
    font-size: 14px;
    line-height: 17px;
    width: 100%;
    margin: 0;
}

.content-read-more-bnt:hover {
    border-bottom : 1px solid;
    cursor: pointer;
}

p.review-author-name {
    color: rgb(115, 115, 115);
    font-size: 12px;
    font-weight: 700;
    text-align: left;
    margin-top: 4px;
    float: left;
}

.review-star-slider {
    float: left;
    margin: 5px 5px 0px 0px;
}
</style>