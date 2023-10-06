<template>
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
                <div class="swiper-button-prev2">
                    <i class="pe-7s-angle-left"></i>
                </div>
                <div class="swiper-button-next2">
                    <i class="pe-7s-angle-right"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios";

export default {
    data () {
        return {
            review_total: "",
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
    },
    created () {
        this.totalReview();
    }
}
</script>

<style>
.swiper-button-prev2 .pe-7s-angle-left, .swiper-button-next2 .pe-7s-angle-right {
    font-size: 35px;
    line-height: 30px;
}
</style>