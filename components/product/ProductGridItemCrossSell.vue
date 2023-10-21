<template>
    <div class="product-wrap cart_crosssell_section">
        <div class="product-img">
            <a :href="product.permalink">
                <img class="default-img" v-if="product.images[0] !== undefined" :src="product.images[0].src"
                    :alt="product.name">
            </a>
            <div class="product-badges">
                <!--<span class="product-label pink" v-if="product.new">New</span>-->
                <span class="product-label purple" v-if="product.on_sale">SALE</span>
            </div>
        </div>
        <div class="product-content text-center">
            <h3>
                <a :href="product.permalink" v-html="product.name"></a>
            </h3>
            <!-- <testimonials-widget class="d-none" v-if="yotpoonce == 1" /> -->
            <!-- <div class="yotpo bottomLine yotpo-small" :data-product-id="product.id"
                :data-url="`https://kratomspot.com${remove_base_url(product.permalink)}`" data-lang="en" data-yotpo-element-id="1"></div> -->

            <div class="yotpo-reviews-bottom-line" v-for="(review_count, index) in yotpo_reviews_count" :key="index" v-if="index == product.id">
                <div class="starttttt" :style="`--ratingwidth: ${review_count.average_score * 20}%`" >
                    <img src="/img/kratom/icons/star-rating-empty.webp" alt="" width="87" height="15"/>
                </div>
                <p class="yotpo-cat-review-text" v-html="`${review_count.total_review} Reviews`"></p>
            </div>
            
            <div class="product-price">
                <span v-html="product.price_html"></span>
                <span class="old" v-if="product.sale_price != ''">${{ product.regular_price }}</span>
            </div>
            <!-- <div class="product-content__list-view" v-if="layout === 'list'">
                <p v-html="product.description"></p>
                </div> -->
            <div class="pro-same-action pro-cart btn-hover">
                <a :href="product.permalink" class="btn" v-if="product.type == 'variable'">
                    + Select Options
                </a>
                <button class="btn" title="Add To Cart" @click="addToCart(product, $event)" v-else>
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
import axios from "axios";
import $ from "jquery";
import { useKratom_cartStore } from '~/stores';
import { useToast } from "vue-toast-notification";
export default {
    setup() {
        const add_item = useKratom_cartStore();
        const toast = useToast();
        return { add_item, toast }
    },
    props: ["product", "layout", "yotpoonce", "yotpo_reviews_count"],

    methods: {
        remove_base_url(fullurl){
            var url;
            url = fullurl.replace(useRuntimeConfig().public.site_url+'/', "");
            return url;
        },   
        addToCart(product, event) {
            $(event.target).addClass('btn-loading-icon');
            if (this.$cookies.isKey('kratom_token') && this.$cookies.get('kratom_token') != "") {
                var kratom_token = this.$cookies.get('kratom_token');
                var headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + kratom_token
                }
            } else {
                var headers = {
                    'Content-Type': 'application/json'
                }
            }

            if (this.$cookies.isKey('cart_key') && this.$cookies.get('cart_key') != "") {
                var cart_key = this.$cookies.get('cart_key');
                var data = { "id": '' + product.id, "quantity": '' + 1, "cart_key": cart_key };
            } else {
                var data = { "id": '' + product.id, "quantity": '' + 1 };
            }
            var config = {
                method: 'post',
                url: useRuntimeConfig().public.api_url + '/wp-json/wc/store/v1/cart/add-item',
                headers: headers,
                params: data,
                withCredentials: true
            };
            axios(config)
                .then((result) => {
                    this.add_item.kratom_cart = result.data;
                    /* this.$store.dispatch("addToCartItemKratom", result.data); */
                    this.toast.success("Product added to cart successfully!");
                    /* this.$notify({ title: "Product added to cart successfully!" }); */

                }, (error) => {
                    console.log(error);
                }).finally(() => $(event.target).removeClass('btn-loading-icon'));

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

        discountedPrice(product) {
            return product.price - (product.price * product.discount / 100)
        }

    },
};
</script>
<style>
.cart_crosssell_section .product-price span.old {
    display: none;
}
.cart_crosssell_section .product-wrap .product-content .product-price span:before {
    opacity: 0;
}
</style>