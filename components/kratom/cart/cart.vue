<template>
    <client-only>
        <div>
            <div class="cart-main-area pt-20 pb-60">
                <div class="container">
                    <div class="row">
                        <div class="col-12" v-if="products != undefined && products.length > 0">
                            <div class="row">
                                <div class="col-lg-8 col-md-12">
                                    <div class="table-content table-responsive cart-table-content" :class="loading">
                                        <table>
                                            <colgroup>
                                                <col span="1" style="width: 10%;">
                                                <col span="1" style="width: 30%;">
                                                <col span="1" style="width: 20%;">
                                                <col span="1" style="width: 25%;">
                                                <col span="1" style="width: 15%;">
                                            </colgroup>
                                            <!-- <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Product Name</th>
                                                    <th>Until Price</th>
                                                    <th>Qty</th>
                                                    <th>Subtotal</th>                                                    
                                                </tr>
                                            </thead> -->
                                            <tbody>
                                                <tr v-for="(product, index) in products" :key="index">
                                                    <td class="product-thumbnail">
                                                        <a :href="product.permalink">
                                                            <img :src="product.images[0].src"
                                                                :alt="getProductName(product)">
                                                        </a>
                                                    </td>
                                                    <td class="product-name">
                                                        <a :href="product.permalink">{{ getProductName(product) }}
                                                        </a>
                                                        <!--<div class="cart_variations" v-for="(variation, key, index) in product.display_variations" v-if="variation != ''"><b>{{key}}:</b> {{variation}}</div>-->
                                                    </td>
                                                    <td class="product-price-cart">
                                                        <span class="amount"
                                                            v-if="product.selectedVariationPrice != undefined && product.selectedVariationPrice != ''">${{
                                                                product.selectedVariationPrice
                                                            }}</span>
                                                        <!-- <span class="amount" v-else>${{
                                                            formatprice(product.prices.price, 2)
                                                        }}</span> -->
                                                        <span v-else-if="product.prices.sale_price && product.prices.sale_price != '' && product.prices.sale_price != product.prices.regular_price">${{ formatprice(product.prices.sale_price,2)}} <del>{{ formatprice(product.prices.regular_price, 2) }}</del></span>
                                                        <span v-else>${{ formatprice(product.prices.price, 2) }}</span>
                                                        <del class="old d-none">${{ product.prices.price }}</del>
                                                    </td>
                                                    <td class="product-quantity">
                                                        <div class="cart-plus-minus">
                                                            <button
                                                                @click="decrementProduct(`cart_qty_box_${product.key}`)"
                                                                class="dec qtybutton">-</button>
                                                            <input @change="qty_changed(`cart_qty_box_${product.key}`)"
                                                                :class="`cart-plus-minus-box qty cart_qty_box_${product.key}`"
                                                                type="text" :value="product.quantity"
                                                                :actual_value="product.quantity" :pkey="product.key">
                                                            <button
                                                                @click="incrementProduct(`cart_qty_box_${product.key}`)"
                                                                class="inc qtybutton">+</button>
                                                        </div>
                                                        <button class="class_item_btn"
                                                            @click="updateCartItem(product.key, `cart_qty_box_${product.key}`)">Update</button>
                                                    </td>
                                                    <td class="product-subtotal">${{
                                                        formatprice(product.totals.line_total,
                                                        product.totals.currency_minor_unit)
                                                    
                                                    }}
                                                        <button @click="removeProduct(product.key)"><i
                                                                class="fa fa-times ml-20"></i></button>
                                                    </td>
                                                    <!-- formatprice(product.totals.line_subtotal,product.prices.currency_minor_unit) -->
                                                    <!-- <td class="product-remove">
                                                
                                            </td> -->
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="cart-shiping-update-wrapper">
                                                <div class="cart-clear">
                                                    <div class="discount-code-wrapper">

                                                        <div class="discount-code">
                                                            <form>
                                                                <input type="text" required="" name="coupon_code"
                                                                    placeholder="Coupon Code">
                                                                <button class="cart-btn-2" type="submit"
                                                                    @click.prevent="couponApply()">Apply Coupon</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- <div class="cart-shiping-update">
                                                    <button @click="clearCart()">Clear Shopping Cart</button>                                                    
                                                </div> -->
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-lg-4 col-md-12">
                                    <a :href="`${this.$config.site_url}/checkout`" class="cart_checkout_button" @click="checkoutclicked()">Proceed to Checkout</a>
                                    <div class="col-lg-12 col-md-12" :class="loading">
                                        <div class="grand-total">
                                            <div class="title-wrap mb-20">
                                                <h4 class="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
                                            </div>
                                            <!-- <h5>Total products <span>{{ items_count }}</span></h5> -->
                                            <h4 class="grand-total-title">Subtotal <span>${{ total_items }}</span></h4>
                                            <h4 class="grand-total-title" v-if="kratom_cart.coupons[0] != undefined">
                                                Coupon:
                                                {{ kratom_cart.coupons[0].code }} <span>- ${{
                                                    formatprice(kratom_cart.coupons[0].totals.total_discount,
                                                    kratom_cart.currency_minor_unit)
                                                }} <button class="remove_coupon"
                                                        @click.prevent="remove_coupon(kratom_cart.coupons[0].code)">[Remove]</button></span>
                                            </h4>
                                            <h4 class="grand-total-title"
                                                v-if="kratom_cart.shipping_rates[0] != undefined && kratom_cart.shipping_rates[0].shipping_rates != undefined">
                                                Shipping
                                                <span>{{
                                                    shippingRate
                                                }}</span>
                                            </h4>
                                            <h4 class="grand-total-title" v-if="total_tax > 0">Tax <span>${{ total_tax }}</span></h4>
                                            <h4 class="grand-total-title">Grand Total <span>${{ total_price }}</span></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <!-- <div class="row"> -->
                                <!-- <div class="col-lg-2 col-md-6">
                                    <div class="cart-tax d-none">
                                        <div class="title-wrap">
                                            <h4 class="cart-bottom-title section-bg-gray">Estimate Shipping And Tax</h4>
                                        </div>
                                        <div class="tax-wrapper">
                                            <p>Enter your destination to get a shipping estimate.</p>
                                            <div class="tax-select-wrapper">
                                                <div class="tax-select">
                                                    <label>
                                                        * Country
                                                    </label>
                                                    <select class="email s-email s-wid">
                                                        <option>Bangladesh</option>
                                                        <option>Albania</option>
                                                        <option>Aland Islands</option>
                                                        <option>Afghanistan</option>
                                                        <option>Belgium</option>
                                                    </select>
                                                </div>
                                                <div class="tax-select">
                                                    <label>
                                                        * Region / State
                                                    </label>
                                                    <select class="email s-email s-wid">
                                                        <option>Bangladesh</option>
                                                        <option>Albania</option>
                                                        <option>Aland Islands</option>
                                                        <option>Afghanistan</option>
                                                        <option>Belgium</option>
                                                    </select>
                                                </div>
                                                <div class="tax-select">
                                                    <label>
                                                        * Zip/Postal Code
                                                    </label>
                                                    <input type="text">
                                                </div>
                                                <button class="cart-btn-2" type="submit">Get A Quote</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                                <!-- <div class="col-lg-5 col-md-6">
                                    <div class="discount-code-wrapper">
                                        <div class="title-wrap">
                                            <h4 class="cart-bottom-title section-bg-gray">Use Coupon Code</h4>
                                        </div>
                                        <div class="discount-code">
                                            <p>Enter your coupon code if you have one.</p>
                                            <form>
                                                <input type="text" required="" name="coupon_code">
                                                <button class="cart-btn-2" type="submit"
                                                    @click.prevent="couponApply()">Apply Coupon</button>
                                            </form>
                                        </div>
                                    </div>
                                </div> -->

                            <!-- </div> -->
                        </div>
                        <div class="col-12" v-else>
                            <div class="empty-cart text-center">
                                <div class="icon">
                                    <i class="pe-7s-cart"></i>
                                </div>
                                <h4>No items found in cart</h4>
                                <NuxtLink to="/shop" class="empty-cart__button">Shop Now</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CartRelatedProducts :products='cross_sell_products' v-if="cross_sell_products != ''" class="pb-60"/>
            <!--<pre>{{ kratom_cart }}</pre>-->
        </div>
    </client-only>
</template>

<script>
import axios from "axios";
import $ from "jquery";
import CartRelatedProducts from "./CartRelatedProducts.vue";
export default {
    components: {
        
        CartRelatedProducts
    },
    data() {
        return {
            singleQuantity: 1,
            cartdata: '',
            kratom_cart: this.$store.state.kratom_cart,
            cartload: true,
            loading: 'loading',
            cart_type: this.$store.state.cart_type // loggedin , guest
        }
    },

    computed: {
        items_count() {
            return this.$store.state.kratom_cart.items_count;
        },
        total_items() {
            return this.formatprice(this.$store.state.kratom_cart.totals.total_items, this.$store.state.kratom_cart.currency_minor_unit);
        },
        total_price() {
            return this.formatprice(this.$store.state.kratom_cart.totals.total_price,
                this.$store.state.kratom_cart.currency_minor_unit)
        },
        total_tax() {
            if(this.$store.state.kratom_cart.totals.total_tax > 0){
                return this.formatprice(this.$store.state.kratom_cart.totals.total_tax,
                this.$store.state.kratom_cart.currency_minor_unit)
            }else{
                return 0;
            }
        },
        products() {
            if (this.$store.state.kratom_cart.items == undefined) {
                return ''
            } else {
                return this.$store.state.kratom_cart.items
            }
        },
        cross_sell_products() {
            if (this.$store.state.kratom_cart.cross_sells == undefined) {
                return ''
            } else {
                return this.$store.state.kratom_cart.cross_sells
            }
        },
        shippingRate() {
            var shipping_rates = this.$store.state.kratom_cart.shipping_rates[0].shipping_rates;
            var selected_shipping_rate = '';
            shipping_rates.map(function (value, key) {
                var price = value.price;
                if (value.currency_minor_unit == 1) {
                    price = price / 10;
                }
                if (value.currency_minor_unit == 2) {
                    price = price / 100;
                }
                if (value.currency_minor_unit == 3) {
                    price = price / 1000;
                }
                if (value.currency_minor_unit == 4) {
                    price = price / 10000;
                }
                if (value.selected == true) {
                    selected_shipping_rate = value.name + " : " + value.currency_symbol + price;
                }
            });
            return selected_shipping_rate;
        },
        /* total() {
            return this.$store.getters.getTotal
        } */
    },

    methods: {
        checkoutclicked(){
            $('.cart_checkout_button').addClass('btn-loading-icon');
        },
        fetchcart() {
            console.log('fetch cart');
            this.loading = 'loading';
            if (this.$cookies.isKey('kratom_token') && this.$cookies.get('kratom_token') != "" && this.cartload) {
                var kratom_token = this.$cookies.get('kratom_token');
                var headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + kratom_token
                }
            } else {
                var headers = {
                    'Content-Type': 'application/json',
                }
            }

            var url = this.$config.api_url + '/wp-json/wc/store/v1/cart?asfd';
            var config = {
                method: 'get',
                url: url,
                headers: headers,
                withCredentials: true
            };

            axios(config)
                .then((result) => {
                    /* console.log(result.data); */
                    this.cartdata = result.data;
                    this.cart_type = 'loggedin';
                    this.$store.dispatch("addToCartItemKratom", result.data);
                    this.kratom_cart = result.data;
                    this.loading = '';
                }, (error) => {
                    console.log(error);
                }).finally(() => {
                    this.loading = '';

                });
        },
        formatprice(price, decimalplace = 2) {
            if (decimalplace == 1) {
                price = price / 10;
            }
            if (decimalplace == 2) {
                price = price / 100;
            }
            if (decimalplace == 3) {
                price = price / 1000;
            }
            if (decimalplace == 4) {
                price = price / 10000;
            }
            return price;
        },
        couponApply() {
            var coupon_code = $('input[name=coupon_code]').val();
            /* console.log(coupon_code); */

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


            if (this.$cookies.isKey('kratom_token')) {
                var url = this.$config.api_url + '/wp-json/wc/store/v1/cart/coupons';
                var data = { "code": coupon_code };
            } else if (this.$cookies.isKey('cart_key') && this.$cookies.get('cart_key') != "") {
                var url = this.$config.api_url + '/wp-json/wc/store/v1/cart/coupons';
                var cart_key = this.$cookies.get('cart_key');
                var data = { "code": coupon_code, "cart_key": cart_key };
            } else {
                var url = this.$config.api_url + '/wp-json/wc/store/v1/cart/coupons';
                var data = { "code": coupon_code };
            }

            var config = {
                method: 'post',
                url: url,
                headers: headers,
                withCredentials: true,
                params: data

            };

            axios(config)
                .then((result) => {
                    /* console.log(result.data); */
                    this.fetchcart();
                }, (error) => {
                    /* console.log(error.response.data.message); */
                    if (error.response.code == "rest_invalid_param") {
                        this.$notify(
                            {
                                title: "Invalid Couopon Code",
                                type: 'error'
                            });
                    } else {
                        this.$notify(
                            {
                                title: error.response.data.message,
                                type: 'error'
                            }
                        );
                    }
                }).finally(() => {

                });


        },
        remove_coupon(coupon_code) {

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


            if (this.$cookies.isKey('kratom_token')) {
                var url = this.$config.api_url + '/wp-json/wc/store/v1/cart/coupons/' + coupon_code;
                var data = {};
            } else if (this.$cookies.isKey('cart_key') && this.$cookies.get('cart_key') != "") {
                var url = this.$config.api_url + '/wp-json/wc/store/v1/cart/coupons';
                var cart_key = this.$cookies.get('cart_key');
                var data = { "code": coupon_code, "cart_key": cart_key };
            } else {
                var url = this.$config.api_url + '/wp-json/wc/store/v1/cart/coupons';
                var data = { "code": coupon_code };
            }

            var config = {
                method: 'DELETE',
                url: url,
                headers: headers,
                withCredentials: true,
                params: data
            };

            axios(config)
                .then((result) => {
                    /* console.log(result.data); */
                    this.fetchcart();
                }, (error) => {
                    console.log(error.response.data.message);
                    this.$notify(
                        {
                            title: error.response.data.message,
                            type: 'error'
                        }
                    );
                }).finally(() => {

                });

        },
        
        getProductName(product) {
            var pkey = product.key;
            var pname = '';
            if (this.$store.state.kratom_cart.shipping_rates[0] != undefined && this.$store.state.kratom_cart.shipping_rates[0].items != undefined) {
                this.$store.state.kratom_cart.shipping_rates[0].items.map(function (value, key) {
                    if (pkey == value.key) {
                        pname = value.name;
                    }
                });
            }
            if (pname == '') {
                pname = product.name;
            }
            return pname;
        },

        fetch() {
            this.loading = 'loading';
            if (this.$cookies.isKey('kratom_token') && this.$cookies.get('kratom_token') != "" && this.cartload) {
                var kratom_token = this.$cookies.get('kratom_token');
                var headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + kratom_token
                }
                /* axios.get( 
                    this.$config.api_url+'/wp-json/wc/store/v1/cart',
                    {
                        headers: headers,
                        withCredentials: true
                    }
                ).then((result) => {            
                    this.cartdata = result.data;
                    this.cart_type = 'loggedin';
                    this.$store.dispatch("addToCartItemKratom", result.data);
                    this.kratom_cart = result.data;
                    this.loading = '';
                },(error) => {
                    console.log(error);
                }); */

            }/* else if(this.$cookies.isKey('cart_key') && this.$cookies.get('cart_key') != "" && this.cartload) {
                    var cart_key = this.$cookies.get('cart_key');                                
                    var headers = { 
                        'Content-Type': 'application/json',
                    }
                    var data = {"cart_key":cart_key};
                    
                    var config = {
                        method: 'get',                
                        url: this.$config.api_url+'/wp-json/cocart/v2/cart',
                        headers: headers,
                        params : data,
                        withCredentials: true
                    };     

                    axios(config)
                    .then((result) => {
                        this.cartdata = result.data;
                        this.cart_type = 'guest';                        
                        this.$store.dispatch("addToCartItemKratom", result.data);
                        this.kratom_cart = result.data;
                        this.loading = '';
                    },(error) => {
                        console.log(error);
                    });

                    
                    console.log(this.cart_type);
                } */
            else {
                var headers = {
                    'Content-Type': 'application/json',
                }
            }

            var url = this.$config.api_url + '/wp-json/wc/store/v1/cart';
            var config = {
                method: 'get',
                url: url,
                headers: headers,
                withCredentials: true
            };

            axios(config)
                .then((result) => {
                    /* console.log(result.data); */
                    this.cartdata = result.data;
                    this.cart_type = 'loggedin';
                    this.$store.dispatch("addToCartItemKratom", result.data);
                    this.kratom_cart = result.data;
                    
                }, (error) => {
                    console.log(error);
                }).finally(() => {
                    this.loading = '';
                });


            /* fetch(url, config)
            .then((result) => {
                //this.cartdata = result.json();
                this.cart_type = 'loggedin';
                this.$store.dispatch("addToCartItemKratom", result.json());
                //console.log(result.json());
                this.kratom_cart = result.json();
                this.loading = '';
            },(error) => {
                console.log(error);
            }); */

            this.$store.state.kratom_cart = this.kratom_cart;
        },
        incrementProduct(qty_class) {
            var new_qty = parseInt($('.' + qty_class).val()) + 1;
            $('.' + qty_class).val(new_qty);
            $('.' + qty_class).closest('.product-quantity').find('.class_item_btn').addClass('active');
        },
        qty_changed(qty_class) {
            $('.' + qty_class).closest('.product-quantity').find('.class_item_btn').addClass('active');
        },
        decrementProduct(qty_class) {
            if ($('.' + qty_class).val() > 1) {
                var new_qty = parseInt($('.' + qty_class).val()) - 1;
                $('.' + qty_class).val(new_qty);
                $('.' + qty_class).closest('.product-quantity').find('.class_item_btn').addClass('active');
            }
        },

        removeProduct(product_key) {
            this.loading = 'loading';
            if (this.$cookies.isKey('kratom_token') && this.$cookies.get('kratom_token') != "") {
                var kratom_token = this.$cookies.get('kratom_token');
                var headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + kratom_token
                }
            } else {
                var headers = {
                    'Content-Type': 'application/json',
                }
            }
            var config = {
                method: 'delete',
                url: this.$config.api_url + '/wp-json/wc/store/v1/cart/items/' + product_key,
                headers: headers,
                withCredentials: true
            };

            axios(config)
                .then((result) => {
                    //this.$store.dispatch("removeProductFromCartKratom");
                    console.log(result.data);
                    this.$notify({ title: 'Item remove from cart!' })
                    this.loading = '';
                    this.fetchcart();
                }, (error) => {
                    console.log(error);
                }).finally(() => {
                    this.loading = '';
});
            //for notification
        },
        discountedPrice(product) {
            return product.price - (product.price * product.discount / 100)
        },
       /*  clearCart() {
            if (confirm("Are you sure you want to clear cart")) {
                // for notification
                this.loading = 'loading';
                if (this.$cookies.isKey('kratom_token') && this.$cookies.get('kratom_token') != "") {
                    var kratom_token = this.$cookies.get('kratom_token');
                    var headers = {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + kratom_token
                    };
                } else {
                    var headers = {
                        'Content-Type': 'application/json'
                    };
                }
                axios({
                    method: 'DELETE',
                    url: this.$config.api_url + '/wp-json/wc/store/v1/cart/items/',
                    headers: headers,
                    withCredentials: true
                })
                    .then((result) => {
                        console.log(result.data);
                        this.loading = '';
                        this.$notify({ title: 'Cart cleared!' })
                        this.$store.dispatch("addToCartItemKratom", result.data);
                    }, (error) => {
                        console.log(error);
                    }).finally(() => {

                    });
                //this.$store.commit('CLEAR_CART')
            }
        }, */
        updateCartItem(key, qty_class) {
            this.loading = 'loading';
            var quantity = $('.' + qty_class).val();
            if (this.$cookies.isKey('kratom_token') && this.$cookies.get('kratom_token') != "") {
                var kratom_token = this.$cookies.get('kratom_token');
                var headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + kratom_token
                };
            } else {
                var headers = {
                    'Content-Type': 'application/json'
                };
            }
            axios({
                method: 'POST',
                url: this.$config.api_url + '/wp-json/wc/store/v1/cart/update-item',
                headers: headers,
                withCredentials: true,
                params: {
                    key: key,
                    quantity: quantity
                }
            })
                .then((result) => {
                    /* console.log(result.data); */
                    this.$store.dispatch("addToCartItemKratom", result.data);
                    
                }, (error) => {
                    console.log(error);
                }).finally(() => {
                    this.loading = '';
                    $('.' + qty_class).val(quantity);
                    $('.' + qty_class).closest('.product-quantity').find('.class_item_btn').removeClass('active');
                });
        }
    },
    mounted() {
        /* console.log('mounted'); */
        /* console.log(process.env.VUE_APP_TITLE);
        console.log(process.env.vue_app_secretkey);        
        console.log(process.env); */
        /* console.log(this.$config.title);
        console.log(this.$config.title2); */
    },
    created() {
        if (this.cartload) {
            this.fetch();
            this.cartload = false;
        }
    },
    head() {
        return {
        htmlAttrs: { lang: 'en-US' },
            title: 'Cart',            
            meta: [
                
            ]
        }
    },
    /* head() {
        return {
            title: "Cart"
        }
    }, */
};
</script>


<style>
@media only screen and (max-width: 767px) {

    .cart-table-content table,
    .cart-table-content tbody,
    .cart-table-content table tbody tr {
        display: inline-block;
        width: 100%;
        float: left;
    }

    .cart-table-content table tbody>tr td.product-thumbnail {
        width: 25%;
        display: inline-block;
        padding: 0px 0 0 20px;
        float: left;
        text-align: left;
    }

    .cart-table-content table tbody>tr td.product-name {
        width: 75%;
        display: inline-block;
        padding: 0;
        float: left;
        text-align: left;
    }

    .cart-table-content table tbody>tr td.product-price-cart {
        width: 25%;
        display: inline-block;
        float: left;
        padding: 0;
        text-align: left;
        margin-top: 6px;
    }

    .cart-table-content table tbody>tr td.product-quantity {
        width: 51%;
        float: left;
        display: inline-block;
        padding: 0;
    }

    .cart-table-content table tbody>tr td.product-subtotal {
        /* display: none; */
        width: 22%;
        text-align: right;
        padding: 3px 0;
        float: left;
        display: flex;
        flex-direction: column;
        line-height: 1.1;
    }

    .cart-table-content table tbody tr {
        padding-bottom: 20px;
        padding-top: 20px;
        position: relative;
    }

    .cart-table-content table tbody>tr td.product-subtotal button {
        position: absolute;
        left: 0;
        top: 23px;
    }

    .cart-table-content table tbody>tr td.product-subtotal button i {
        margin: 0;
    }

    .cart-table-content table tbody>tr td.product-subtotal:before {
        content: 'Total: ';
        width: 100%;
        float: left;
        color: #6a6c77;
        font-size: 12px;
    }
}

/* .cart-table-content table tbody>tr td.product-thumbnail{
    width: 40%;
} */
</style>