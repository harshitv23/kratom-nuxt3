<template>
    <div class="product-wrap">
        <div class="product-img">
            <NuxtLink :to="`/${product.slug}`">
                <img format="webp" loading="lazy" width="250" height="250" class="default-img" v-if="product.images[0] !== undefined" :src="replaceSizeImg(product.images[0].src)" :alt="product.name"/>
            </NuxtLink>
            <div class="product-badges">                
                <span class="product-label purple" v-if="product.on_sale">SALE</span>
                <span class="sold_in_day" v-if="is_landing && is_landing == 'yes'">{{product.order_count_last_day}} Sold in past 24 hours!</span>
            </div>
        </div>
        <div class="product-content text-center">
            <h3>
                <NuxtLink :to="`/${product.slug}`">{{ product.name }}</NuxtLink>
            </h3>
            <div class="yotpo-reviews-bottom-line" v-for="(review_count, index) in yotpo_reviews_count" :key="index" :absc="index" :ppp="product.id">
                <div class="starttttt" :style="`--ratingwidth: ${review_count.average_score * 20}%`" v-if="index == product.id && review_count.total_review > 0 && yotpo_reviews_count">
                    <img src="/img/kratom/icons/star-rating-empty.webp" alt="Review Stars" width="87" height="15" loading="lazy"/>
                </div>
                <p class="yotpo-cat-review-text" v-html="`${review_count.total_review} Reviews`" v-if="index == product.id && review_count.total_review > 0 && yotpo_reviews_count"></p>
            </div>
            <div class="product-price">
                <span v-html="product.price_html"></span>                    
            </div>
            <div class="pro-same-action pro-cart btn-hover">
                <NuxtLink :to="`/${product.slug}`" class="btn" v-if="product.type == 'variable'">
                    + Select Options
                </NuxtLink>
                <button class="btn" title="Add To Cart" @click="addToCart(product,$event)"  :class="button_loading_class" v-else>
                    <i class="pe-7s-cart"></i> 
                    Add to cart
                </button>
            </div>           
        </div>
    </div>
</template>

<script>
import axios from "axios";  
import * as $ from "jquery";
import { useKratom_cartStore } from "~/stores/index";
import { useToast } from 'vue-toast-notification';

export default {
        setup() {
            const add_item = useKratom_cartStore() 
            const toast = useToast();
            return { add_item, toast }
        },
    props: ["product", "layout", "yotpoonce", "yotpo_reviews_count", "is_landing"],

    data() {
        return {
            button_loading_class: ''
        }
    },
    methods: {
        replaceSizeImg(img){
            if(img.indexOf('f_auto,q_auto') > -1){
                img = img.replace("f_auto,q_auto", "h_300,w_300");
            }
            return img;
        },
        addToCart(product, event) {
            this.button_loading_class = 'btn-loading-icon';
            //$(event.target).addClass("btn-loading-icon");
            var headers = {
                "Content-Type": "application/json"
            };            
            var data = { "id": "" + product.id, "quantity": "" + 1 };            
            var config = {
                method: "post",
                url: useRuntimeConfig().public.api_url + "/wp-json/wc/store/v1/cart/add-item",
                headers: headers,
                params: data,
                withCredentials: true
            };
            axios(config)
                .then((result) => {
                    this.toast.success("Product added to cart successfully!");
                this.add_item.kratom_cart = result.data;
                
            }, (error) => {
                console.log(error);
            }).finally(() => 
                this.button_loading_class = ''
                //$(event.target).removeClass("btn-loading-icon")
            );
        },                
    },
    components: { /* StarRating */ }
};
</script>

<style>

.yotpo-reviews-bottom-line {
    display: flex;
    justify-content: center;
    float: inherit;
    align-items: center;
}

.yotpo-cat-review-text {
    font-size: 13px !important;
    font-family: "Roboto";
    color: gray;
    line-height: 1;
}

.starttttt {
    width: 87px;
    height: 15px;
    position: relative;
}

.starttttt:before {
    content: '';
    position: absolute;
    width: 87px;
    height: 15px;
    background-image: url(/img/kratom/icons/star-rating-filled.webp);
    top: 0;
    left: 0;
    z-index: 9;
    width: var(--ratingwidth);
}

.starttttt img {
    position: absolute;
    top: 0px;
    left: 0;
}

.homebestseller.threeColumn .yotpo-reviews-bottom-line {
    justify-content: center;
}

.homebestseller.list .yotpo-reviews-bottom-line {
    justify-content: left;
}

@media only screen and (max-width: 769px)
{ 
    .homebestseller.threeColumn .yotpo-reviews-bottom-line {
        flex-direction: column;
    }

    .homebestseller.list .yotpo-reviews-bottom-line {
        flex-direction: row;
    }

    .yotpo-reviews-bottom-line {
        flex-direction: column;
    }

    .homebestseller.list .starttttt {
        margin-bottom: 0px;
    }

    .starttttt {
        margin-bottom: 4px;
    }

    .carousel-reviews-bottom-line {
        float: unset;
    }
}
</style>