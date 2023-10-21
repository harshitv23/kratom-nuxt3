<template>
    <div class="section_reviews text-center pt-60 container">
        
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
                <div class="swiper-button-prev2" @click="carousel_prev">
                    <i class="pe-7s-angle-left"></i>
                </div>
                <div class="swiper-button-next2" @click="carousel_next">
                    <i class="pe-7s-angle-right"></i>
                </div>
            </div>
        </div>
    </div>
        

        <Carousel v-bind="settings" :breakpoints="breakpoints_new" ref="carousel">
            <!-- <swiper-slide v-if="review_list && review.score == 5 && index < 12" v-for="(review, index) in review_list.slice().reverse() " :key="index"> -->
            <Slide v-for="(review, index) in review_list.slice().reverse() " :key="index">
                <img class="review-star-slider" src="/img/kratom/icons/star-rating-filled.webp" alt="" width="87" height="15" loading="lazy"/>
                <p class="review-date" v-html="date(review.created_at)"></p><br/>
                <p class="review-titel" v-html="review.title"></p>
                <div class="review-dis review-content" v-html="review.content"/>
                <!-- <ReadMore class="review-dis review-content" more-str="Read more" :text="review.content" link="#" less-str="Read less" :max-chars="150"></ReadMore> -->
                <p class="review-author-name" v-html="review.name"></p>
            </Slide>
        </Carousel>
   </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
//import ReadMore from 'vue-read-more';
import axios from "axios";
//import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import YotpoReviewTotals from "./YotpoReviewTotals.vue";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css'

export default {
    components: {
        //ReadMore,
        Swiper,
        SwiperSlide,
        YotpoReviewTotals,
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

            review_list: [],
            review_total: "",
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
                        slidesPerView: 3
                    },
                    992: {
                        slidesPerView: 4
                    },
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
        fetch (date) {
            axios.get("https://api.yotpo.com/v1/apps/qISoyNDMzxbhZewW638yicv9a0Q2QtUPU5p1Xr57/reviews", {
                params: {
                    utoken : "DmBJCjrcRF5U3Jh6KyZQKvVPeXcD0CiPHfC7P5ql",
                    since_date : date,
                    count : 50
                }
            }).then((result) => {
                if(result.data.reviews.length < 8){                    
                    this.fetch(this.todaysdate(16));
                }else{
                    this.review_list = result.data.reviews;
                }                
            }, (error) => {
                console.log(error);
            });
        },

        todaysdate(interval) {
            const date = new Date();
            date.setDate(date.getDate() - interval);
            //console.log( "date :- "+date.getFullYear() + '-' +  date.getMonth() + '-' + date.getDate());
            return date.getFullYear() + '-' +  (date.getMonth() + 1 ) + '-' + date.getDate();
        },

        date(created_at) {
            //console.log("get : - "+ created_at)
            const date = new Date(created_at);
            //console.log("created : - "+date.getDate() + '/' +  date.getMonth() + '/' + date.getFullYear())
            return date.getDate() + '/' +  (date.getMonth() + 1) + '/' + date.getFullYear();
        }, 
    },

    created() {
        //console.log('----------');
        this.fetch(this.todaysdate(8));
        this.totalReview();
    },
};

</script>
<!-- <script>

import axios from "axios";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import YotpoReviewTotals from "./YotpoReviewTotals.vue";

export default {
    components: {
        Swiper,
        YotpoReviewTotals,
    },

    data() {
        return {
            review_list: [],
            review_total: "",
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
                        slidesPerView: 3
                    },
                    992: {
                        slidesPerView: 4
                    },
                }
            },
        }
    },

    methods: {
        fetch (date) {
            axios.get("https://api.yotpo.com/v1/apps/qISoyNDMzxbhZewW638yicv9a0Q2QtUPU5p1Xr57/reviews", {
                params: {
                    utoken : "DmBJCjrcRF5U3Jh6KyZQKvVPeXcD0CiPHfC7P5ql",
                    since_date : date,
                    count : 50
                }
            }).then((result) => {
                if(result.data.reviews.length < 8){                    
                    this.fetch(this.todaysdate(16));
                }else{
                    this.review_list = result.data.reviews;
                }                
            }, (error) => {
                console.log(error);
            });
        },

        todaysdate(interval) {
            const date = new Date();
            date.setDate(date.getDate() - interval);
            //console.log( "date :- "+date.getFullYear() + '-' +  date.getMonth() + '-' + date.getDate());
            return date.getFullYear() + '-' +  (date.getMonth() + 1 ) + '-' + date.getDate();
        },

        date(created_at) {
            //console.log("get : - "+ created_at)
            const date = new Date(created_at);
            //console.log("created : - "+date.getDate() + '/' +  date.getMonth() + '/' + date.getFullYear())
            return date.getDate() + '/' +  (date.getMonth() + 1) + '/' + date.getFullYear();
        }, 
    },

    created() {
        this.fetch(this.todaysdate(8));
    },
};

</script> -->

<style>

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