<template>
    <client-only>
        <div class="minicart-wrapper" :class="miniCart">
            <div class="shopping-cart-content" v-if="products != undefined && products.length > 0">
                <ul :class="loading">
                    <li class="single-shopping-cart" v-for="(product, index) in products" :key="index">
                        <div class="shopping-cart-img">
                            <a :href="product.permalink">
                                <img :src="replaceSizeImg(product.images[0].src,'h_75,w_75')" :alt="getProductName(product)">
                            </a>
                            <div class="shopping-cart-delete">
                                <button @click="removeProduct(product.key)">
                                    <i class="fa fa-times-circle"></i>
                                </button>
                            </div>
                        </div>
                        <div class="shopping-cart-title">
                            <h4>
                                <a :href="product.permalink">{{ getProductName(product) }}</a>
                            </h4>
                            <h6>Qty: {{ product.quantity }}</h6>
                            <span v-if="product.prices.sale_price && product.prices.sale_price != '' && product.prices.sale_price != product.prices.regular_price">${{ formatprice(product.prices.sale_price,2)}} <del>{{ formatprice(product.prices.regular_price, 2) }}</del></span>
                            <span v-else>${{ formatprice(product.prices.price, 2) }}</span>

                        </div>                        
                    </li>
                </ul>
                <div class="shopping-cart-total">
                    <h4>Total : <span class="shop-total">${{ total_price }}</span></h4>
                </div>
                <div class="shopping-cart-btn btn-hover text-center" @click="$emit('minicartClose')">
                    <NuxtLink to="/cart" class="default-btn">view cart</NuxtLink>
                    <a :href="this.$config.site_url+'/checkout'" class="default-btn">checkout</a>
                </div>
            </div>
            <div class="shopping-cart-content text-center" v-else>
                <p>You have no items in your shopping cart.</p>
            </div>
        </div>
    </client-only>
</template>

<script>
import axios from "axios";
export default {
    props: ["miniCart"],

    data() {
        return {
            kratom_cart: '',
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
        replaceSizeImg(img, replacewith = 'h_400,w_400'){
            if(img.indexOf('f_auto,q_auto') > -1){
                img = img.replace("f_auto,q_auto", replacewith);
            }
            return img;
        },
        remove_base_url(fullurl) {   
            var url;
            const configs = useRuntimeConfig() //configs.public.
            url = fullurl.replace(configs.public.site_url+'/', "");
            return url;
        },        
        fetchcart() {
            
            this.loading = 'loading';
            const kratom_token_c = useCookie('kratom_token')
            if (kratom_token_c.value && kratom_token_c.value != "" && this.cartload) {
                var kratom_token = kratom_token_c.value;
                var headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + kratom_token
                }
            } else {
                var headers = {
                    'Content-Type': 'application/json',
                }
            }
            const configs = useRuntimeConfig() //configs.public.
            var url = configs.public.api_url+'/wp-json/wc/store/v1/cart';
            var config = {
                method: 'get',
                url: url,
                headers: headers,
                withCredentials: true
            };

            axios(config)
                .then((result) => {
                    
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
            if(this.$store.state.kratom_cart.shipping_rates[0] != undefined && this.$store.state.kratom_cart.shipping_rates[0].items != undefined){
                this.$store.state.kratom_cart.shipping_rates[0].items.map(function (value, key) {
                    if (pkey == value.key) {
                        pname = value.name;
                    }
                });
            }
            if(pname == ''){
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
            const kratom_token_c = useCookie('kratom_token')
            if (kratom_token_c.value && kratom_token_c.value != "") {
                var kratom_token = kratom_token_c.value;
                var headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + kratom_token
                }
            } else {
                var headers = {
                    'Content-Type': 'application/json',
                }
            }
            const configs = useRuntimeConfig() //configs.public.
            var config = {
                method: 'delete',
                url: configs.public.api_url+'/wp-json/wc/store/v1/cart/items/' + product_key + '?sadf',
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
            const kratom_token_c = useCookie('kratom_token')
            if (kratom_token_c.value && kratom_token_c.value != "" && this.cartload) {
                var kratom_token = kratom_token_c.value;
                var headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + kratom_token
                }
            } else {
                var headers = {
                    'Content-Type': 'application/json',
                }
            }
            const configs = useRuntimeConfig() //configs.public.
            var url = configs.public.api_url+'/wp-json/wc/store/v1/cart';
            var config = {
                method: 'get',
                url: url,
                headers: headers,
                withCredentials: true
            }
            axios(config)
                .then((result) => {
                    
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
            const kratom_token_c = useCookie('kratom_token')
            if (kratom_token_c.value && kratom_token_c.value != "") {
                var kratom_token = kratom_token_c.value;                            
                var headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + kratom_token
                }
                axios.get(
                    this.$config.api_url+'/wp-json/wc/store/v1/cart',
                    {
                        params: {

                        },
                        headers: headers,
                    }
                ).then((result) => {
                    this.cartdata = result.data;

                    this.$store.dispatch("addToCartItemKratom", result.data);
                    this.kratom_cart = result.data;
                    


                }, (error) => {
                    console.log(error);
                });

            } /* else if (this.$cookies.isKey('cart_key') && this.$cookies.get('cart_key') != "") {
                var cart_key = this.$cookies.get('cart_key');
                var headers = {
                    'Content-Type': 'application/json',
                }
                var data = { "cart_key": cart_key };

                var config = {
                    method: 'get',
                    url: this.$config.api_url+'/wp-json/cocart/v2/cart',
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