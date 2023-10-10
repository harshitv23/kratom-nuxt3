<template>
    <div class="product-wrap">
        <div class="product-img">
            <NuxtLink :to="`/${product.slug}`">
                <img format="webp" loading="lazy" width="250" height="250" class="default-img" v-if="product.images[0] !== undefined" :src="replaceSizeImg(product.images[0].src)" :alt="product.name"/>
            </NuxtLink>
            <div class="product-badges">
                <!--<span class="product-label pink" v-if="product.new">New</span>-->
                <span class="product-label purple" v-if="product.on_sale">SALE</span>
                <span class="sold_in_day" v-if="is_landing && is_landing == 'yes'">{{product.order_count_last_day}} Sold in past 24 hours!</span>
            </div>
        </div>
        <div class="product-content text-center">
            <h3>
                <NuxtLink :to="`/${product.slug}`">{{ product.name }}</NuxtLink>
            </h3>
            <!-- <StarRating :id="`${product.id+''}`" v-if="yotpo_reviews_count == null || yotpo_reviews_count == undefined"/> -->
            <!-- index == product.id && review_count.total_review > 0 && yotpo_reviews_count -->
            <div class="yotpo-reviews-bottom-line" v-for="(review_count, index) in yotpo_reviews_count" :key="index" :absc="index" :ppp="product.id">
                <div class="starttttt" :style="`--ratingwidth: ${review_count.average_score * 20}%`" v-if="index == product.id && review_count.total_review > 0 && yotpo_reviews_count">
                    <img src="/img/kratom/icons/star-rating-empty.webp" alt="Review Stars" width="87" height="15" loading="lazy"/>
                </div>
                <p class="yotpo-cat-review-text" v-html="`${review_count.total_review} Reviews`" v-if="index == product.id && review_count.total_review > 0 && yotpo_reviews_count"></p>
            </div>
            <!-- <div class="yotpo bottomLine" :data-product-id="product.id" /> -->

            
<!-- <div class="yotpo bottomLine"
:data-product-id="`${product.id+''}`"
data-url="The url to the page where the product is url escaped">
</div> -->
            <div class="product-price">
                <span v-html="product.price_html"></span>
                    <!--<span class="old" v-if="product.sale_price != ''">${{ product.regular_price }}</span>-->
            </div>
            <!-- <div class="product-content__list-view" v-if="layout === 'list'">
                <p v-html="product.description"></p>
                </div> -->
            <div class="pro-same-action pro-cart btn-hover">
                <NuxtLink :to="`/${product.slug}`" class="btn" v-if="product.type == 'variable'">
                    + Select Options
                </NuxtLink>
                <button class="btn" title="Add To Cart" @click="addToCart(product,$event)" v-else>
                    <i class="pe-7s-cart"></i> 
                    Add to cart
                </button>
            </div>
           <!--  <div class="product-content__list-view" v-if="layout === 'list'">
                <p v-html="product.description"></p>
                <div class="pro-action d-flex align-items-center" >
                    <div class="pro-cart btn-hover">
                        <NuxtLink :to="`/${product.slug}`" class="btn" v-if="product.type == 'variable'">
                            + Select Options
                        </NuxtLink>
                        <button class="btn" title="Add To Cart" @click="addToCart(product,$event)" v-else>
                            <i class="pe-7s-cart"></i> 
                            Add to cart
                        </button>
                    </div>                    
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
//import StarRating from "@nacelle/nacelle-yotpo-nuxt-module/lib/components/StarRating.vue";
import axios from "axios";  
import * as $ from "jquery";
    export default {
    props: ["product", "layout", "yotpoonce", "yotpo_reviews_count", "is_landing"],
    methods: {
        replaceSizeImg(img){
            if(img.indexOf('f_auto,q_auto') > -1){
                img = img.replace("f_auto,q_auto", "h_300,w_300");
            }
            return img;
        },
        addToCart(product, event) {
            $(event.target).addClass("btn-loading-icon");
            if (this.$cookies.isKey("kratom_token") && this.$cookies.get("kratom_token") != "") {
                var kratom_token = this.$cookies.get("kratom_token");
                var headers = {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + kratom_token
                };
            }
            else {
                var headers = {
                    "Content-Type": "application/json"
                };
            }
            if (this.$cookies.isKey("cart_key") && this.$cookies.get("cart_key") != "") {
                var cart_key = this.$cookies.get("cart_key");
                var data = { "id": "" + product.id, "quantity": "" + 1, "cart_key": cart_key };
            }
            else {
                var data = { "id": "" + product.id, "quantity": "" + 1 };
            }
            var config = {
                method: "post",
                url: useRuntimeConfig().public.api_url + "/wp-json/wc/store/v1/cart/add-item",
                headers: headers,
                params: data,
                withCredentials: true
            };
            axios(config)
                .then((result) => {
                this.$store.dispatch("addToCartItemKratom", result.data);
                this.$notify({ title: "Product added to cart successfully!" });
            }, (error) => {
                console.log(error);
            }).finally(() => $(event.target).removeClass("btn-loading-icon"));
            /*  var list = [];
             const children = this.$el.querySelectorAll(".kratom_product_variations select");
             children.forEach((value, index) => {
                 list[value.getAttribute("name")] = value.value;
             });
             var list = { ...list };
             const prod = { ...product, cartQuantity: this.singleQuantity, selectedVariation: this.variation_id, selectedVariationPrice: this.variation_price, display_variations: list };
             // for notification
             if (this.$store.state.cart.find(el => product.id === el.id)) {
                 this.$notify(
                     {
                         title: "Already added to cart update with one",
                         type: 'error'
                     }
                 );
             }
             else {
                 this.$notify({ title: "Add to cart successfully!" });
             }
             this.$store.dispatch("addToCartItem", prod); */
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