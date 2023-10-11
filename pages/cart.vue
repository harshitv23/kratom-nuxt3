<template>
    <client-only>
        <div class="cart-page-wrapper">
            <!-- <KratomTheHeader /> -->
            <TitleBar title="Cart" />
            <cart />
            <!-- <KratomTheFooter /> -->
        </div>
    </client-only>
</template>

<script>

import TitleBar from '../components/kratom/product-category/TitleBar.vue';

export default {
    components: {
        
        cart: () => import("@/components/kratom/cart/cart"),
        TitleBar
    },
    head() {
            return {
                htmlAttrs: { lang: 'en-US' },
                title: "Cart",
                meta: [
            
            {
                    hid: 'robots',
                    name: 'robots',
                    content: 'noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
                },],
            link: [
            
        ],
            }
        },
    /* head() {
        return {
            title: "Cart"
        }
    }, */
};
</script>

<!--

    <template>
        

    <div class="cart-page-wrapper">
        <KratomTheHeader />
        
        <div class="cart-main-area pt-90 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-12" v-if="products != undefined && products.length > 0">
                        <h3 class="cart-page-title">Your cart items</h3>
                        <div class="table-content table-responsive cart-table-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th>Until Price</th>
                                        <th>Qty</th>
                                        <th>Subtotal</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody>                                    
                                    <tr v-for="(product, index) in products" :key="index">
                                        <td class="product-thumbnail">
                                            <n-link :to="`/${product.slug}`">
                                                <img :src="product.featured_image" :alt="product.name">
                                            </n-link>
                                        </td>
                                        <td class="product-name">
                                            <n-link :to="`/${product.slug}`">{{ product.name }}</n-link>
                                            
                                        </td>
                                        <td class="product-price-cart">
                                            <span class="amount" v-if="product.selectedVariationPrice != undefined && product.selectedVariationPrice != ''">${{ product.selectedVariationPrice }}</span>
                                            <span class="amount" v-else>${{ formatprice(product.price,2) }}</span>
                                            <del class="old d-none">${{ product.price }}</del>
                                        </td>
                                        <td class="product-quantity">
                                            <div class="cart-plus-minus">
                                                <button @click="decrementProduct(product)" class="dec qtybutton">-</button>
                                                <input class="cart-plus-minus-box" type="text" :value="product.quantity.value" readonly>
                                                <button @click="incrementProduct(product)" class="inc qtybutton">+</button>
                                            </div>
                                        </td>
                                        <td class="product-subtotal">${{ product.totals.total }}</td>
                                        
                                        <td class="product-remove">
                                            <button @click="removeProduct(product)"><i class="fa fa-times"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="cart-shiping-update-wrapper">
                                    <div class="cart-shiping-update">
                                        <n-link to="/shop">Continue Shopping</n-link>
                                    </div>
                                    <div class="cart-clear">
                                        <button @click="clearCart()">Clear Shopping Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <div class="cart-tax">
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
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="discount-code-wrapper">
                                    <div class="title-wrap">
                                    <h4 class="cart-bottom-title section-bg-gray">Use Coupon Code</h4> 
                                    </div>
                                    <div class="discount-code">
                                        <p>Enter your coupon code if you have one.</p>
                                        <form>
                                            <input type="text" required="" name="name">
                                            <button class="cart-btn-2" type="submit">Apply Coupon</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12">
                                <div class="grand-total">
                                    <div class="title-wrap">
                                        <h4 class="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
                                    </div>
                                    <h5>Total products <span>{{ kratom_cart.item_count }}</span></h5>
                                    <h4 class="grand-total-title">Subtotal  <span>${{ formatprice(kratom_cart.totals.subtotal,2) }}</span></h4>
                                    <h4 class="grand-total-title">Grand Total  <span>${{ formatprice(kratom_cart.totals.total,2) }}</span></h4>
                                    <n-link to="/checkout">Proceed to Checkout</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12" v-else>
                        <div class="empty-cart text-center">
                            <div class="icon">
                                <i class="pe-7s-cart"></i>
                            </div>
                            <h4>No items found in cart</h4>
                            <n-link to="/shop" class="empty-cart__button">Shop Now</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <pre>{{kratom_cart}}</pre>
        <KratomTheFooter />
    </div>   
</template>

<script>
    import axios from "axios";
    export default {
        components: {
            
        },
        data() {
            return {
                singleQuantity: 1,
                cartdata:'',
                kratom_cart:this.$store.state.kratom_cart
            }
        },

        computed: {
            products() {
                console.log(this.$store.getters.getCartKratom.items);
                if(this.$store.getters.getCartKratom.items == undefined){
                    console.log(this.$store.getters.getCartKratom.items);
                    return ''
                }else{
                    console.log(this.$store.getters.getCartKratom.items);
                    return this.$store.getters.getCartKratom.items
                }
            },
            total() {
                return this.$store.getters.getTotal
            },
        },

        methods: {
            getProductName(product){
                var pkey = product.key;
                var pname = '';
                this.kratom_cart.shipping_rates[0].items.map(function(value, key) {
                    if(pkey == value.key){
                        pname = value.name;
                    }
                });
                return pname;
            },
            formatprice(price,decimalplace = 0){
                if(decimalplace == 1){
                    price = price/10;
                }
                if(decimalplace == 2){
                    price = price/100;
                }
                if(decimalplace == 3){
                    price = price/1000;
                }
                if(decimalplace == 4){
                    price = price/10000;
                }
                return price;
            },
            fetch() {                
                if(this.$cookies.isKey('cart_key') && this.$cookies.get('cart_key') != ""){
                    
                }else{
                
                }
                //var cart_key = this.$cookies.get('cart_key');
                if(this.$cookies.isKey('kratom_token') && this.$cookies.get('kratom_token') != ""){
                    var kratom_token = this.$cookies.get('kratom_token');
                    var headers = { 
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + kratom_token
                    }
                    var data = {};
                }else if(this.$cookies.isKey('cart_key') && this.$cookies.get('cart_key') != "") {
                    var cart_key = this.$cookies.get('cart_key');                                
                    var headers = { 
                        'Content-Type': 'application/json',
                    }
                    var data = {"cart_key":cart_key};
                }                
                    
                
                var config = {
                    method: 'get',                
                    url: useRuntimeConfig().public.api_url+'/wp-json/cocart/v2/cart',
                    headers: headers,
                    params : data
                };     
                       
                axios(config)
                .then((result) => {
                    this.cartdata = result.data;
                    this.$store.dispatch("addToCartItemKratom", result.data);
                },(error) => {
                    console.log(error);
                });




                /*axios.get( 
                    useRuntimeConfig().public.api_url+'/wp-json/wc/store/v1/cart',
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
            incrementProduct(product) {
                const prod = { ...product, cartQuantity: 1 }
                if (product.cartQuantity < product.quantity) {
                    this.$store.dispatch('addToCartItem', prod)
                }
            },

            decrementProduct(product) {
                const prod = { ...product, cartQuantity: 1 }
                if (product.cartQuantity > 1) {
                    this.$store.dispatch('decreaseProduct', prod)
                }
            },

            removeProduct(product) {
                // for notification
                this.$notify({ title: 'Item remove from cart!'})

                this.$store.dispatch('removeProductFromCart', product)
            },

            discountedPrice(product) {
                return product.price - (product.price * product.discount / 100)
            },

            clearCart() {
                if (confirm("Are you sure you want to clear cart")) {
                    // for notification
                    this.$notify({ title: 'Item remove from cart!'})
                    
                    this.$store.commit('CLEAR_CART')
                }
            }
            
        },mounted () {
            this.fetch()
        },

        head() {
            return {
                title: "Cart"
            }
        },
    };
</script>


-->