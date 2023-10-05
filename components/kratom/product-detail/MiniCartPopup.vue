<template>
    <client-only>
        
            <div class="cart-main-area mt-40">
                <div class="cart-pro">                    
                    <div class="row box addedtocart_box">
                        <div class="col-12 col-lg-6">
                            <div class="row align-items-center">
                                <div class="col-5 col-lg-4">
                                    <a href="#">                                        
                                        <img :src="product.images[0].src" :alt="product.images[0].alt"
                                            :srcset="product.images[0].src">
                                    </a>
                                </div>
                                <div class="col-7 col-lg-8">
                                    <div class="pro-dis">
                                        <div class="pro-name">
                                            <h2 v-html="added_cart_item.name"></h2>
                                        </div>
                                        <div class="pro-qty">
                                            Quantity : <span v-html="added_cart_item.qty"></span>
                                        </div>

                                        <div class="pro-price">
                                            <span v-html="added_cart_item.price"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="added-basket">
                                <i class="fa fa-check" aria-hidden="true"></i> Added To Your Cart
                            </div>
                            <div class="added-offer">                                
                                FREE Priority shipping on all orders $100 or more!
                            </div>
                            <div class="addedcart_actions shopping-cart-btn btn-hover text-center">
                                <NuxtLink to="/cart" class="default-btn">View Cart</NuxtLink> 
                                <a :href="`${this.$config.site_url}/checkout`" class="default-btn addedcart_checkout" @click="checkoutclicked()">Checkout</a>
                            </div>


                        </div>                        
                    </div>
                </div>
            </div>
            
            
            
        

    </client-only>
</template>

<script>
import axios from "axios";
import $ from "jquery";
export default {
    props: ["miniCart", "pname", 'cross_sell_products','product','added_cart_item','minicart_popup_class'],
    components: { CartRelatedProducts: () => import("@/components/kratom/cart/CartRelatedProducts"), },
    data() {
        return {
            kratom_cart: this.$store.state.kratom_cart,
            loading: ''
        }
    },

    computed: {
        total_price() {
            return this.formatprice(this.$store.state.kratom_cart.totals.total_price, 2);
        },
        products() {
            if (this.$store.state.kratom_cart.items == undefined) {
                return ''
            } else {
                return this.$store.state.kratom_cart.items
            }
        },
        total() {
            if (this.$store.state.kratom_cart == undefined) {
                return ''
            } else {
                //return this.$store.state.kratom_cart.totals.total_price
            }
        }
    },

    methods: {
        checkoutclicked(){
            console.log('ch');
            $('.addedcart_checkout').addClass('btn-loading-icon');
        },
        remove_base_url(fullurl) {
            var url;
            url = fullurl.replace(this.$config.site_url + '/', "");
            return url;
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

            var url = this.$config.api_url + '/wp-json/wc/store/v1/cart';
            var config = {
                method: 'get',
                url: url,
                headers: headers,
                withCredentials: true
            };

            axios(config)
                .then((result) => {
                    console.log(result.data);
                    this.cartdata = result.data;
                    this.cart_type = 'loggedin';
                    this.$store.dispatch("addToCartItemKratom", result.data);
                    this.kratom_cart = result.data;
                    this.loading = '';
                }, (error) => {
                    console.log(error);
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
                    this.loading = '';
                    this.$notify({ title: 'Item remove from cart!' })
                    this.fetchcart();
                }, (error) => {
                    console.log(error);
                });

            console.log('Remove');
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
                    console.log(result.data);
                    this.cartdata = result.data;
                    this.$store.dispatch("addToCartItemKratom", result.data);
                    this.kratom_cart = result.data;
                    this.loading = '';
                }, (error) => {
                    console.log(error);
                });
        },
        fetchxxxx() {
            /*if(this.$cookies.isKey('cart_key') && this.$cookies.get('cart_key') != ""){
                
            }else{
            
            }*/
            //var cart_key = this.$cookies.get('cart_key');
            if (this.$cookies.isKey('kratom_token') && this.$cookies.get('kratom_token') != "") {
                var kratom_token = this.$cookies.get('kratom_token');
                var headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + kratom_token
                }
                axios.get(
                    this.$config.api_url + '/wp-json/wc/store/v1/cart',
                    {
                        params: {

                        },
                        headers: headers,
                    }
                ).then((result) => {
                    this.cartdata = result.data;

                    this.$store.dispatch("addToCartItemKratom", result.data);
                    this.kratom_cart = result.data;
                    console.log(result.data);


                }, (error) => {
                    console.log(error);
                });

            }/*  else if (this.$cookies.isKey('cart_key') && this.$cookies.get('cart_key') != "") {
                var cart_key = this.$cookies.get('cart_key');
                var headers = {
                    'Content-Type': 'application/json',
                }
                var data = { "cart_key": cart_key };

                var config = {
                    method: 'get',
                    url: this.$config.api_url + '/wp-json/cocart/v2/cart',
                    headers: headers,
                    params: data
                };

                axios(config)
                    .then((result) => {
                        this.cartdata = result.data;

                        this.$store.dispatch("addToCartItemKratom", result.data);
                        this.kratom_cart = result.data;
                    }, (error) => {
                        console.log(error);
                    });



            } else {

            } */


            this.$store.state.kratom_cart = this.kratom_cart;





            /*axios.get( 
                this.$config.api_url+'/wp-json/wc/store/v1/cart',
                {
                    params: {
                        
                    },
                    headers: { 
                        'Content-Type': 'application/json',
                    },
                }
            ).then((result) => {            
                this.cartdata = result.data;
                this.$store.dispatch("addToCartItemKratom", result.data);
                console.log('Cart Loaded');
            },(error) => {
                console.log(error);
            });*/
        },
        formatprice(price, decimalplace = 0) {
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
        /*removeProduct(product) {
            // for notification
            this.$notify({ title: 'Item remove from cart!'})
            this.$store.dispatch('removeProductFromCart', product)
        },*/

        discountedPrice(product) {
            if (product.selectedVariationPrice != undefined && product.selectedVariationPrice != '') {
                return product.selectedVariationPrice - (product.selectedVariationPrice * 0 / 100)
            } else {
                return product.price - (product.price * 0 / 100)
            }
        }
    }, mounted() {
        this.fetch()
    },
};
</script>



<style>

.row.box.addedtocart_box {
    border: 2px solid #4A6230;
    margin-top: 0px;
    padding-top: 20px;
    padding-bottom: 20px;
    position: relative;
    margin-left: 0 !important;
    margin-right: 0 !important;
    align-items: center;
}
.close_addedcart {
    position: absolute;
    right: 10px;
    top: 10px;
    width: auto;
    cursor: pointer;
}
.addedtocart_box h2 {
    font-size: 30px;
    color: #1f1b1b;
    margin-bottom: 20px;
}
.addedtocart_box .pro-price {
    font-size: 20px;
    margin-top: 15px;
}
.addedtocart_box .pro-qty {
    font-size: 20px;
}
.addedtocart_box .pro-special-price{
    color: red !important;
}

.addedtocart_box .added-offer {
    background: rgb(95 175 62 / 30%);
    margin-top: 25px;
    padding: 10px;
    font-size: 21px;
}

.addedtocart_box .added-basket {
    font-size: 20px;
    color: green;
}

.addedtocart_box .addtocart-btn button.btn.btn-default {
    border: 1px solid #0dcaf0;
    border-radius: 0px;
    padding: 10px;
    padding-left: 90px;
    padding-right: 90px;
    margin-top: 35px;
}



.addedtocart_box .checkout-btn {
    border: 1px solid #0dcaf0;
    border-radius: 0px;
    padding: 3px;
    padding-left: 90px;
    padding-right: 90px;
    margin-top: 35px;
    margin-left: 20px;
    background: #ff1919;

}
@media only screen and (max-width:767px){
    .addedtocart_box .added-offer {
        padding: 1px 6px;
        font-size: 13px;
    }
    .addedtocart_box h2 {
        font-size: 20px;
        margin-bottom: 10px;
    }
    .addedtocart_box .pro-qty {
        font-size: 16px;
    }
    .addedtocart_box .pro-price {
        font-size: 16px;
        margin-top: 5px;
    }
    .addedtocart_box .added-basket {
        margin-top: 20px;
    }
    .addedcart_actions {    
        flex-direction: column;
        width: 100%;
        margin: 20px -10px 0 -10px;
    }
    .addedcart_actions a {
        width: 100%;
    }
    .addedcart_actions a.default-btn.addedcart_checkout {
        margin-top: 15px;
    }
}

</style>