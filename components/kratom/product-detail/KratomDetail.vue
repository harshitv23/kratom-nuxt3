<template>
    <section class="py-5 product_detail_section py-sm-0">
        <div class="minicart_popup_container" v-if="showcartpopup">
            <div class="container" id="addedtocartcontainer">
                <div class="minicart-wrapper position-relative" :class="minicart_popup_class">
                    <MiniCartPopup class="minicart_popup mb-40" :pname="product.name"
                        :cross_sell_products="cross_sell_products" :product='product' :added_cart_item="added_cart_item"
                        :minicart_popup_class="minicart_popup_class" />
                    <i class="close_addedcart fa fa-times" aria-hidden="true" @click="close_addedcart()"></i>
                </div>
            </div>
            <CartRelatedProducts class="" :class="minicart_popup_class" :products='cross_sell_products'
                v-if="cross_sell_products != ''" />
        </div>
        <div class="container pt-20">

            <div class="yith_product mb-20" v-html="replacehttptohttps(yith.product_points)" v-if="yith.product_points"></div>
            <!-- <div class="yith" v-html="yith.yith_cart_total"></div> -->
            <!-- <div class="product_detail_breadcrumb mb-20 mt-30 pt-20 pb-20 pl-10 pr-10">
                Home
                <i class="fa fa-angle-double-right" aria-hidden="true" v-if="from_category_fun && from_category_fun != ''"></i>                
                <span v-if="from_category_fun && from_category_fun != ''" v-html="from_category_fun"></span>
                <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                <span v-html="product.name"></span>
            </div> -->
            <div class="row my-6 pl-15 pr-15">
                <div class="col-lg-4 col-md-12 col-sm-12 mx-auto pl-0 pr-10 mt-10 pl-md-0 pr-md-0 mt-sm-25 product_detail_silde_rows" id="sm-order3">
                    <!-- <div class="product_detail_categories_section bg-3 p-40 mb-40 pt-sm-20 pb-sm-20 pl-sm-20 pr-sm-20">
                        <p class="text-black"> <strong>SKU:</strong>
                            <span v-if="product.sku != undefined && product.sku != ''">{{ product.sku }}</span>
                            <span v-else>N/A</span>
                        </p>
                        <p class="text-black mb-0"> <strong>Categories:</strong> </p>
                        <p class="product_detail_categories" v-if="product.categories?.length > 0">
                            <a :href="`/${category.slug}`" v-for="(category, index) in product.categories" :key="index"
                                v-html="`${category.name}<span>,</span>`"></a>
                        </p>
                        <p class="product_detail_categories" v-else>
                            <a href="#">Uncategorized<span>,</span> </a>
                        </p>
                    </div> -->
                    <!-- <div class="mb-30 d-inline-block">
                            <div class="text-black green_vein_item mb-10">
                                <NuxtImg format="webp" loading="lazy" class="w-10" height="45" width="45"
                                    :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/green_vein_1.png`" alt="image_2.png" />
                                <span> {{ product.ACF.first_icon_text }} </span>
                            </div>
                            <div class="text-black green_vein_item mb-10">
                                <NuxtImg format="webp" loading="lazy" class="w-10" height="45" width="45"
                                    :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/green_vein_2.png`" alt="image_2.png" />
                                <span> {{ product.ACF.second_icon_text }} </span>
                            </div>
                            <div class="text-black green_vein_item mb-10">
                                <NuxtImg format="webp" loading="lazy" class="w-10" height="45" width="45"
                                    :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/green_vein_3.png`" alt="image_2.png" />
                                <span> {{ product.ACF.third_icon_text }} </span>
                            </div>
                        </div>
                    <ul class="product_detail_extra_list_n mb-40">
                        <li><img loading="lazy" class="w-5" height="25" width="25" :src="`/img/kratom/icons/ext_1.png`"
                                alt="ext_1.png" />Tested for
                            contaminants, heavy metals, and adulterants</li>
                        <li><img loading="lazy" class="w-5" height="25" width="25" :src="`/img/kratom/icons/ext_2.png`"
                                alt="ext_2.png" />Premium grade kratom
                            leaf powder</li>
                        <li><img loading="lazy" class="w-5" height="25" width="25" :src="`/img/kratom/icons/ext_3.png`"
                                alt="ext_3.png" />100% all-natural
                            kratom</li>
                        <li><img loading="lazy" class="w-5" height="25" width="25" :src="`/img/kratom/icons/ext_4.png`"
                                alt="ext_4.png" />No additives or
                            fillers</li>
                        <li><img loading="lazy" class="w-5" height="25" width="25" :src="`/img/kratom/icons/ext_5.png`"
                                alt="ext_5.png" />Certified GMP (Good
                            Manufacturing Practice) Product</li>
                    </ul> -->
                    <div class="product_detail_silde_row">
                        <ul class="product_detail_extra_list_n">
                            <li class="text-li text-li-1">
                                <span class="text-t">SAME DAY SHIPPING</span>
                                <span class="text-p">ON ALL ORDERS PLACED BEFORE 3PM PST</span>
                            </li>
                            <li class="text-li text-li-2">
                                <span class="text-t">100% SATISFACTION</span>
                                <span class="text-p">GUARANTEED OR YOUR MONEY BACK</span>
                            </li>
                            <li class="text-li text-li-3">
                                <span class="text-t">FREE PRIORITY SHIPPING</span>
                                <span class="text-p">ON ORDERS $100+</span>
                            </li>
                            <li class="text-li text-li-4">
                                <span class="text-t">GMP COMPLIANT</span>
                                <span class="text-p">PRODUCT AND FACILITY</span>
                            </li>
                            <li class="text-li text-li-5">
                                <span class="text-t">LAB TESTED</span>
                                <span class="text-p">QUALITY CONTROL</span>
                            </li>
                            <li class="text-li text-li-6">
                                <span class="text-t">EARN LOYALTY POINTS</span>
                                <span class="text-p">AND REDEEM FOR DEALS</span>
                            </li>
                        </ul>
                        <div id="accordion" class="product_detail_accordian">
                            <div class="tabs" v-if="description">
                                <div class="card-header" id="headingOne">
                                    <h5 class="header-btn mb-1">
                                        <button class="" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                            aria-expanded="false" aria-controls="collapseOne">
                                            PRODUCT DESCRIPTION
                                        </button>
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </h5>
                                </div>

                                <div id="collapseOne" class="collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordion">
                                    <div class="card-body product_dis" v-html="description"></div>
                                </div>
                            </div>
                            <div class="tabs" v-if="product_laberesult">
                                <div class="card-header" id="headingTwo">
                                    <h5 class="header-btn mb-1">
                                        <button class="" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                            LAB RESULTS
                                        </button>
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </h5>
                                </div>

                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordion">
                                    <div class="card-body slider-btn btn-hover btn_yellow text-center mt-0 pt-2 pb-2">
                                        <a :href="product_laberesult" class="homebanner_shop_btn" target="_blank">
                                            <i class="fa fa-download mr-10" aria-hidden="true"></i> Download Lab Results</a>
                                    </div>
                                </div>
                            </div>
                            <div class="tabs" v-if="product_moreinfo">
                                <div class="card-header" id="headingThree">
                                    <h5 class="header-btn mb-1">
                                        <button class="" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">
                                            INGREDIENTS FACTS
                                        </button>
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </h5>
                                </div>

                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordion">
                                    <div class="card-body product_info">
                                        <div id="tab_more_info" class="tab-pane p-25" v-html="product_moreinfo"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col-lg-4 col-md-12 col-sm-12 mx-auto product-mob-img pl-sm-0 pr-sm-0" id="sm-order1">
                    <div class="product-details-img  ">
                        <swiper :options="swiperOptionTop" ref="swiperTop">
                            <div class="large-img swiper-slide" v-for="(image, index) in product.images" :key="index">
                                <NuxtImg format="webp" height="800" width="800" preload class="img-fluid"
                                    :src="replaceSizeImg(image.src, 'h_500,w_500')" :alt="image.alt" />
                            </div>
                            <!-- <div class="quickview-nav swiper-button-prev2 img_prev">
                                <i class="pe-7s-angle-left"></i>
                            </div>
                            <div class="quickview-nav swiper-button-next2 img_next">
                                <i class="pe-7s-angle-right"></i>
                            </div> -->
                            <!-- <div class="quickview-nav swiper-button-prev">
                            <i class="pe-7s-angle-left"></i>
                            </div>
                            <div class="quickview-nav swiper-button-next">
                                <i class="pe-7s-angle-right"></i>
                            </div> -->
                        </swiper>
                        <swiper  :options="swiperOptionThumbs" ref="swiperThumbs">
                            <div class="thumb-img swiper-slide" v-for="(image, index) in product.images" :key="index">
                                <NuxtImg format="webp" loading="lazy" class="img-fluid"
                                    :src="replaceSizeImg(image.src, 'h_122,w_122')" :alt="image.alt" height="120" width="120"/>
                            </div>
                            <!-- <div class="thumb-img swiper-slide">
                                <NuxtImg format="webp" loading="lazy" class="img-fluid"
                                    :src="replaceSizeImg('https://res.cloudinary.com/dv8z5nr6r/images/v1683984911/2023_000_Powder-Red_226086d4987/2023_000_Powder-Red_226086d4987.png?_i=AA', 'h_300,w_300')" />
                            </div>
                            <div class="thumb-img swiper-slide">
                                <NuxtImg format="webp" loading="lazy" class="img-fluid"
                                    :src="replaceSizeImg('https://res.cloudinary.com/dv8z5nr6r/images/v1683984901/2023_012_Web-ProductFacts-2-16oz_226085fdb51/2023_012_Web-ProductFacts-2-16oz_226085fdb51.png?_i=AA', 'h_300,w_300')"/>
                            </div> -->
                        </swiper>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12 col-sm-12 product-price-box p-0" id="sm-order2">
                    <div class="mx-auto d-block  product-price-box-inner pr-sm-20 pb-sm-20 pl-sm-20 p-40">
                        <KratomTitleProduct :title="product.name" subTitle="" class="" />
                        <div class="d-inline-block mt-10 mb-10">
                            <!-- <testimonials-widget class="d-none" /> -->
                            <div class="yotpo bottomLine yotpo-small" :data-product-id="product.id"
                                :data-url="`https://kratomspottstg.wpengine.com/${product.slug}`" data-lang="en"
                                data-yotpo-element-id="2"></div>
                            <div class="yotpo QABottomLine yotpo-small"
                                data-appkey="qISoyNDMzxbhZewW638yicv9a0Q2QtUPU5p1Xr57" :data-product-id="product.id"
                                data-yotpo-element-id="3"></div>
                            <!-- <img class="w-50" :src="`${useRuntimeConfig().public.site_url}/img/kratom/Screenshot_41.png`" alt="image_1.png" /> -->
                        </div>
                        <div class="text-black mb-30"><span class="kratom-product-price" v-html="price_html2"></span>
                        </div>
                        <form>
                            <div class="product_variations mb-20" v-for="attribute in product.attributes"
                                @change="onChangeVarible($event)">
                                <label class="text-black variation_label mb-10" v-html="(attribute.name == 'Select Capsules')?'Select Size':attribute.name"></label>
                                <select class="variation_select" :name="attribute.name">
                                    <option v-for="(option, index) in attribute.options" :value="option" :key="index"  :selected="(index == parseInt(attribute.options.length/2))?'selected':''">{{
                                        option }}</option>
                                </select>
                                <button type="reset" @click="onChangeVarible($event)" class="variation_clear">CLEAR</button>
                            </div>
                        </form>
                        <div class="outofstockmsg" v-if="outofstockmsg == false">Out of stock</div>
                        <div class="product_detail_addtocart_section">
                            <label>
                                <span class="d-none">qty</span>
                                <!-- <input type="number" class="product_detail_qty" value="1" min="1" v-model="product_qty"> -->
                                <select id="qty_no" class="product_detail_qty" v-bind:value="product_qty">
                                    <option value="1" selected="selected">1</option>
                                    <option v-for="q_no in qty_no" :value="`${q_no}`" :selected="(q_no == 1 || q_no == '1')?'selected':''">{{ q_no }}</option>
                                </select>
                            </label>
                            <button type="button" class="btn product_detail_addtocart_btn text-white"
                                @click="addToCart(product, product.type, $event)" v-if="outofstockmsg == true">ADD TO
                                CART</button>
                            <button type="button" class="btn product_detail_addtocart_btn text-white" v-else disabled>ADD TO
                                CART</button>
                            <input type="hidden" id="selected_product_variation" v-bind:value="variation_id">
                            <input type="hidden" id="selected_product_id" v-bind:value="product_id" />
                            <input type="hidden" id="selected_product_type" v-bind:value="product.type" />
                        </div>
                        <!-- <div class="yith_product mt-20" v-html="yith.product_points" v-if="yith.product_points"></div> -->
                        <div class="row product-price-box-logo align-items-center">
                            <div class="col-4">
                                <div class="side-logo">
                                    <img v-if="product.ACF.customer_favorite_image && product.ACF.customer_favorite_image != ''" :src="replaceSizeImg(product.ACF.customer_favorite_image,'h_110,q_auto')" alt="kratom favorite" width="110" height="110">
                                    <img src="/img/kratom/logo1.png" alt="kratom favorite" width="110" height="110" v-else>
                                </div>
                            </div>
                            <div class="col-4">
                                <div>
                                    <img v-if="product.ACF.customer_favorite_image_2 && product.ACF.customer_favorite_image_2 != ''" :src="replaceSizeImg(product.ACF.customer_favorite_image_2,'h_110,q_auto')" alt="kratom favorite" width="110" height="110">
                                    <img src="/img/kratom/logo2.png" alt="kratom favorite" width="110" height="110" v-else>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="side-logo">
                                    <span class="side-logo-text" v-html="(product.ACF.customer_favorite_text)?product.ACF.customer_favorite_text:'1.37% MIT'"></span>
                                    <img v-if="product.ACF.customer_favorite_image_3 && product.ACF.customer_favorite_image_3 != ''" :src="replaceSizeImg(product.ACF.customer_favorite_image_3,'h_110,q_auto')" alt="kratom favorite" width="110" height="110">
                                    <img src="/img/kratom/logo3.png" alt="kratom favorite" width="110" height="110" v-else>
                                </div>
                            </div>
                        </div>
                        <div class="row category-compare-bar">
                            <div class="bar_box bar_box-1" v-for="attribute in product.ACF.bar_graph">
                                <div class="bar_box-titel" v-if="product.ACF.bar_graph">
                                    <span class="bar_title" v-html="attribute.bar_title"></span>
                                    <span class="bar_percentage">{{ attribute.bar_percentage }}%</span>
                                </div>
                                <div class="bar_box-bar">
                                    <div class="bar_box_inener" :style="`width:${attribute.bar_percentage}%; background-color:${(attribute.bar_background_color)}`"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import axios from "axios";
import $ from "jquery";
import KratomTitleProduct from "../KratomTitleProduct.vue";
import MiniCartPopup from "./MiniCartPopup.vue";

export default {
    props: ["product", "product_id", "product_price", "description", "product_moreinfo", "product_laberesult"],
    data() {
        return {
            showcartpopup: false,
            outofstockmsg: true,
            singleQuantity: 1,
            /*  swiperOptionTop: {
                 loop: false,
                 slidesPerView: 1,
                 spaceBetween: 10,
                 effect: "fade",
                 loopedSlides: 5,
                 navigation: {
                     nextEl: ".img_next",
                     prevEl: ".img_prev"
                 }
             }, */
            swiperOptionTop: {
                loop: false,
                slidesPerView: 1,
                // spaceBetween: 10,
                effect: "fade",
                //loopedSlides: 5,
                navigation: {
                    nextEl: ".detail-swiper-button-next",
                    prevEl: ".detail-swiper-button-prev"
                }
            },
            /* swiperOptionThumbs: {
                loop: false,
                spaceBetween: 20,
                centeredSlides: false,
                slidesPerView: 3,
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                slideToClickedSlide: true,
                loopedSlides: 3, // looped slides should be the same
            }, */
            swiperOptionThumbs: {
                // loop: false,
                spaceBetween: 20,
                //centeredSlides: false,
                slidesPerView: 3,
                //freeMode: true,
                //watchSlidesVisibility: true,
                //watchSlidesProgress: true,
                slideToClickedSlide: true,
                //loopedSlides: 5, // looped slides should be the same
                on: {
                    click: () => {
                        const topSwiper = this.$refs.swiperTop.$swiper;
                        const thumbsSwiper = this.$refs.swiperThumbs.$swiper;
                        const activeIndex = thumbsSwiper.clickedIndex;
                        topSwiper.slideTo(activeIndex);
                    }
                }
            },
            variations: [],
            variation_id: "",
            variation_price: "",
            price_html: this.product_price,
            product_qty: 1,
            kratom_cart: "",
            minicart_popup_class: 'hidden',
            cross_sell_products: '',
            from_category: this.$store.state.from_category,
            added_cart_item: {
                name: '',
                qty: '',
                price: ''
            },
            yith: '',
            qty_no: []
        };
    },
    mounted() {
        //this.fetch();
        this.$nextTick(() => {
            const swiperTop = this.$refs.swiperTop.$swiper;
            const swiperThumbs = this.$refs.swiperThumbs.$swiper;
            swiperTop.controller.control = swiperThumbs;
            swiperThumbs.controller.control = swiperTop;
        });
        var i
        for(i = 2; i < 100; i++) {
             $('select#qty_no').val(i);
             this.qty_no.push(i);
        }
        
        /* omnisend.push(["track", "$productViewed",{
 $productID:"prod666",
 $variantID: "prod666_1",
 $currency: "USD",
 $price: 6666, //price in cents (integer)
 $oldPrice: 6999, //old price in cents (integer)
 $title:"Container",
 $description:"",
 $imageUrl: "http://www.example.com/images/products/prod-666.png",
 $productUrl:"http://www.example.com/products/prod-666",
 $vendor: "vendor"
}]); */


        omnisend.push(["track", "$productViewed", {
            $productID: this.product_id + "",
            $variantID: this.product_id + "",
            $currency: "USD",
            $price: parseInt(this.product.price), //price in cents (integer)
            $oldPrice: parseInt(this.product.regular_price), //old price in cents (integer)
            $title: this.product.name,
            $description: this.product.description,
            $imageUrl: this.product.images[0].src,
            $productUrl: this.product.permalink,
            $vendor: "Kratomspot"
        }]);

        /* $('.header-btn.mb-1').on('click' , function (){
            $('.header-btn.mb-1').find('.fa').addClass('fa-plus');
            $('.header-btn.mb-1').find('.fa').removeClass('fa-minus');
            if($(this).find('.fa').hasClass('fa-plus')){
                $(this).find('.fa').addClass('fa-minus');
                $(this).find('.fa').removeClass('fa-plus');
            } else {
                $(this).find('.fa').addClass('fa-minus');
                $(this).find('.fa').removeClass('fa-plus');
            }
        }); */
    },
    computed: {
        
        price_html2: function () {
            if (this.price_html == undefined) {
                return this.product.price_html;
            }
            else {
                return this.price_html;
            }
        },
        from_category_fun() {
            var is_valid = false;
            var from_category = this.from_category;
            if (this.from_category && this.product.categories.length > 0) {
                $.each(this.product.categories, function (i, item) {
                    if (from_category == item.name && is_valid == false) {
                        is_valid = true;
                    }
                });
                if (is_valid) {
                    return this.from_category;
                } else if (this.product.categories[0]) {
                    return this.product.categories[0].name;
                }
            } else if (this.product.categories[0]) {
                return this.product.categories[0].name;
            } else {
                return '';
            }
        }
    },
    created() {
        this.fetch();
        this.fetch_yith();
    },
    methods: {
        replacehttptohttps(content){
            content = content.replace('http://', 'https://');
            content = content.replace('http://', 'https://');
            return content;
        },
        variationwithdiscount(variation_price,type,value){
            var new_price = false;
            var phtml = '<ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>' + variation_price + '</bdi></span></ins>';
            if (type && type == 'percentage') {
                new_price = parseFloat(variation_price - ((variation_price * value) / 100)).toFixed(2);
            }
            if (new_price) {
                phtml = '<del><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>' + variation_price + '</bdi></span></del><br><ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>' + new_price + '</bdi></span></ins>';
            }
            return phtml;
        },
        replaceSizeImg(img, replacewith = 'h_400,w_400') {
            if (img.indexOf('f_auto,q_auto') > -1) {
                img = img.replace("f_auto,q_auto", replacewith);
            }
            return img;
        },
        close_addedcart() {
            this.minicart_popup_class = 'hidden';
            this.showcartpopup = false;
        },
        listenerChild(reply) {
            this.added_cart_item = reply;
        },
        onChangeVarible(event) {
            var list = [];
            var list2 = [];
            const children = this.$el.querySelectorAll(".product_variations select");
            children.forEach((value, index) => {
                list[value.getAttribute("name")] = value.value;
            });
            var variation_id;
            var variation_price;
            var variation_avail = false;
            /* console.log(this.variations); */
            this.variations.forEach(function (value, index) {                
                value.attributes.map(function (attr) {
                    list2[attr.name] = attr.option;
                });
                var flag;
                if (Object.keys(list).length == Object.keys(list2).length) {
                    for (var key in list) {
                        if (list[key] == list2[key]) {
                            flag = true;
                            variation_avail = true;
                        } else {
                            flag = false;
                            return;
                        }
                    }
                }
                if (flag) {
                    variation_id = value.id;
                    variation_price = value.price;                    
                    if(value.stock_status == "outofstock"){
                        variation_avail = false;
                    }
                }
            });

            this.variation_id = variation_id;
            if (variation_price != undefined && variation_price != "") {
                variation_price = this.variationwithdiscount(variation_price, this.product.discount_type, this.product.discount_value)
                this.price_html = variation_price;
                this.variation_price = variation_price;
            }
            else {
                this.price_html = this.product.price_html;
                this.variation_price = "";
            }
            /* if ($(event.target).find(":selected").val() == "") {
                variation_avail = true;
            } */
            this.outofstockmsg = variation_avail;
        },
        addToCart(product, ptype = "variable", event) {
            //this.onChangeVarible();
            $(event.target).addClass("btn-loading-icon");
            var option_valid = true;
            $(".product_variations .variation_select").each(function () {
                if ($(this).find(":selected").val() == "") {
                    $(this).addClass("invalid_select");
                    option_valid = false;
                }
                else {
                    $(this).removeClass("invalid_select");
                }
            });
            if (!option_valid) {
                this.$notify({
                    title: "Please select product options before adding this product to your cart.",
                    type: "error"
                });
                $(event.target).removeClass("btn-loading-icon");
                return 0;
            }
            if (this.$cookies.isKey("kratom_token") && this.$cookies.get("kratom_token") != "") {
                var kratom_token = this.$cookies.get("kratom_token");
                var headers = {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + kratom_token
                };
            } else {
                var headers = {
                    "Content-Type": "application/json",
                };
            }
            if (this.$cookies.isKey("kratom_token")) {
                var url = useRuntimeConfig().public.api_url + "/wp-json/wc/store/v1/cart/add-item";
                if (ptype == "variable") {
                    var data = { "id": "" + this.variation_id, "quantity": "" + this.product_qty };
                }
                else {
                    var data = { "id": "" + this.product_id, "quantity": "" + this.product_qty };
                }
            } /* else if (this.$cookies.isKey('cart_key') && this.$cookies.get('cart_key') != "") {
                var url = useRuntimeConfig().public.api_url+'/wp-json/cocart/v2/cart/add-item';
                var cart_key = this.$cookies.get('cart_key');
                if (ptype == 'variable') {
                    var data = { "id": '' + this.variation_id, "quantity": '' + this.product_qty, "cart_key": cart_key };
                } else {
                    var data = { "id": '' + this.product_id, "quantity": '' + this.product_qty, "cart_key": cart_key };
                }
            } */
            else {
                //var url = useRuntimeConfig().public.api_url+'/wp-json/cocart/v2/cart/add-item';
                var url = useRuntimeConfig().public.api_url + "/wp-json/wc/store/v1/cart/add-item";
                if (ptype == "variable") {
                    var data = { "id": "" + this.variation_id, "quantity": "" + this.product_qty };
                }
                else {
                    var data = { "id": "" + this.product_id, "quantity": "" + this.product_qty };
                }
            }
            /*  var config = {
                 method: 'post',
                 //url: useRuntimeConfig().public.api_url+'/wp-json/wc/store/v1/cart/add-item',
                 url: url,
                 headers: headers,
                 credentials: 'include',
                 params: data
             }; */
            var config = {
                method: "POST",
                headers: headers,
                withCredentials: true,
                credentials: true,
                params: data,
                //body: JSON.stringify(data),
                //body: data,
                url: url
            };
            /*  if (this.$cookies.isKey('kratom_token')) {
                 axios(config)
                     .then((result) => {
                         this.$store.dispatch("addToCartItemKratom", result.data);
                         console.log(result.data.item_count);
                         if (result.data.cart_key != undefined) {
                             this.$cookies.set('cart_key', result.data.cart_key);
                         }
                     }, (error) => {
                         console.log(error);
                     });
             } else { */
            /* axios(config)
                .then((result) => {
                    console.log(result.data);
                    this.$store.dispatch("addToCartItemKratom", result.data);
                    console.log(result.data.item_count);
                    if (result.data.cart_key != undefined) {
                        this.$cookies.set('cart_key', result.data.cart_key);
                    }
                }, (error) => {
                    console.log(error);
                }); */
            axios(config)
                .then((result) => {
                    this.added_cart_item.qty = this.product_qty;
                    this.added_cart_item.name = this.product.name;
                    if (this.variation_price) {
                        this.added_cart_item.price = this.variation_price;
                    } else {
                        this.added_cart_item.price = this.product.price;
                    }
                    this.$store.dispatch("addToCartItemKratom", result.data);
                    this.$notify({ title: "Product added to cart successfully!" });
                    this.minicart_popup_class = "show";
                    this.showcartpopup = true;
                    window.scroll({
                        top: 0,
                        behavior: "smooth",
                    });
                    this.cross_sell_products = result.data.cross_sells;
                }, (error) => {
                    this.$notify({ title: error.response.data.message, type: "error" });
                }).finally((result) => {
                    $(event.target).removeClass("btn-loading-icon");
                });
            /* fetch(url, config)
            .then(res => {
                this.$notify({title: "Product added to cart successfully!"});
                return res.json();
            }).then(json => {
                console.log(json);
            }).finally(json => {
                $(event.target).removeClass('btn-loading-icon');
            }); */
            /* } */
            /* var list = [];
            const children = this.$el.querySelectorAll(".kratom_product_variations select");
            children.forEach((value, index) => {
                list[value.getAttribute("name")] = value.value;
            }); */
            //var list = { ...list };
            //const prod = { ...product, cartQuantity: this.singleQuantity, selectedVariation: this.variation_id, selectedVariationPrice: this.variation_price, display_variations: list };
            // for notification
            /* if (this.$store.state.cart.find(el => product.id === el.id)) {
                this.$notify(
                    {
                        title: "Already added to cart update with one",
                        type: 'error'
                    }
                );
            }
            else {
                this.$notify({ title: "Add to cart successfully!" });
            } */
            //this.$store.dispatch("addToCartItem", prod);
        },
        discountedPrice(product) {
            return product.price - (product.price * product.discount / 100);
        },
        increaseQuantity() {
            this.singleQuantity++;
        },
        decreaseQuantity() {
            if (this.singleQuantity > 1)
                this.singleQuantity--;
        },
        fetch() {
            const Buffer = require('buffer').Buffer;
            const encodedCredentials = Buffer.from(`${useRuntimeConfig().public.consumer_key}:${useRuntimeConfig().public.secret_key}`).toString('base64');
            //axios.get(useRuntimeConfig().public.api_url+"/wp-json/wc/v3/products/" + this.product_id + "/variations/", {
            axios.get(useRuntimeConfig().public.api_url + "/wp-json/wc/v3/products/" + this.product_id + "/variations/", {
                params: {
                    /* consumer_key: useRuntimeConfig().public.consumer_key,
                    consumer_secret: useRuntimeConfig().public.secret_key, */
                    in_stock: true,
                    status: 'publish',
                },
                headers: {
                    authorization: 'Basic ' + encodedCredentials
                }
            }).then((result) => {
                this.variations = result.data;
                if(this.variations.length > 0){
                    this.onChangeVarible();
                }
            }, (error) => {
                console.log(error);
            });
        },
        fetch_yith() {
            //axios.get(useRuntimeConfig().public.api_url+"/wp-json/wc/v3/products/" + this.product_id + "/variations/", {
            axios.get(useRuntimeConfig().public.api_url + "/wp-json/yith/v3/data/", {
                params: {
                    product_id: this.product_id
                }
            }).then((result) => {
                this.yith = result.data;
                /* var result_data_yith = result.data
                this.yith = result_data_yith.replace("http://", "https://"); */
            }, (error) => {
                console.log(error);
            });
        },
        fetchx() {
            this.loading = "loading";
            if (this.$cookies.isKey("kratom_token") && this.$cookies.get("kratom_token") != "" && this.cartload) {
                var kratom_token = this.$cookies.get("kratom_token");
                var headers = {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + kratom_token
                };
                /* axios.get(
                    useRuntimeConfig().public.api_url+'/wp-json/wc/store/v1/cart',
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
            } /* else if(this.$cookies.isKey('cart_key') && this.$cookies.get('cart_key') != "" && this.cartload) {
                    var cart_key = this.$cookies.get('cart_key');
                    var headers = {
                        'Content-Type': 'application/json',
                    }
                    var data = {"cart_key":cart_key};
                    
                    var config = {
                        method: 'get',
                        url: useRuntimeConfig().public.api_url+'/wp-json/cocart/v2/cart',
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
                    "Content-Type": "application/json",
                };
            }
            var url = useRuntimeConfig().public.api_url + "/wp-json/wc/store/v1/cart";
            var config = {
                method: "get",
                url: url,
                headers: headers,
                withCredentials: true
            };
            axios(config)
                .then((result) => {

                    this.cartdata = result.data;
                    this.$store.dispatch("addToCartItemKratom", result.data);
                    this.kratom_cart = result.data;
                    this.loading = "";
                }, (error) => {
                    console.log(error);
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
        }
    },
    components: { MiniCartPopup, CartRelatedProducts: () => import("@/components/kratom/cart/CartRelatedProducts"), KratomTitleProduct }
};
</script>

<style>
.green_vein_item {
    background: #fff;
    padding-right: 20px;
    clear: both;
    float: left;
}

.green_vein_item img {
    background: #F0B22F;
    padding: 8px;
    margin-right: 12px;
    max-width: 46px;
}

.green_vein_item {
    background: #FDF5E4;
}

.product_detail_categories a {
    color: #B0B2AF;
    font-size: 16px;
    line-height: 16px;
    text-decoration: underline;
    margin-right: 3px;
}

.product_detail_categories_section p {
    font-size: 16px;
}

.product_detail_categories a:last-child span {
    opacity: 0;
}

/* .product-price-box {
    padding: 40px 40px 20px 40px;
} */

.p-40 {
    padding: 20px;
}

.product_detail_breadcrumb {
    width: 100%;
    background: #4A6230;
    text-align: center;
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
}

.product_detail_breadcrumb i.fa {
    margin: 0 15px;
    font-size: 22px;
}

.product-details-img .swiper-slide-active .img-fluid {
    box-shadow: 0 2px 8px 0 #63636333;
}

.product-details-img .thumb-img .img-fluid {
    box-shadow: 0 2px 8px 0 #63636333;
    padding: 15px;
}

.variation_label {
    font-weight: 500;
    width: 100%;
}

.product_variations {
    display: inline-block;
    width: 100%;
}

select.variation_select {
    background: #fff;
    border: 1px solid #e9ecef;
    padding: 13px 10px;
    max-width: 260px;
    float: left;
    margin-right: 15px;
    font-size: 16px;
    color: #656565;
}

.variation_clear {
    line-height: 50px;
    font-size: 17px;
}

input.product_detail_qty {
    background: #fff;
    width: 110px;
    margin-right: 10px;
    height: 50px;
    border: unset;
}

select.product_detail_qty {
    background: #fff;
    width: 110px;
    margin-right: 10px;
    height: 50px;
    border: unset;
    padding: 5px;
}

.product_detail_addtocart_section {
    display: inline-block;
    width: 100%;
}

.product_detail_addtocart_btn {
    background: #4A6230 !important;
    border-radius: 50px;
    width: calc(100% - 130px);
    padding: 12px 10px;
    position: relative;
}

.product_detail_extra_list_n li {
    color: #fff;
    position: relative;
    margin: 0 0 5px 0;
    padding: 5px;
}

.product_detail_extra_list_n li.text-li-1 {
    background: #759463;
}

.product_detail_extra_list_n li.text-li-2 {
    background: #658056;
}

.product_detail_extra_list_n li.text-li-3 {
    background: #59704b;
}

.product_detail_extra_list_n li.text-li-4 {
    background: #475a3c;
}

.product_detail_extra_list_n li.text-li-5 {
    background: #3d4d33;
}

.product_detail_extra_list_n li.text-li-6 {
    background: #33402b;
}

.product_detail_extra_list_n li .text-t {
    display: block;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
}

.product_detail_extra_list_n li .text-p {
    display: block;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
}

/* .product_detail_extra_list_n li:first-child {
    padding: 0px 0 15px 40px;
    border-top: 0px dashed #dee2e6;
} */

/* .product_detail_extra_list_n li:last-child {
    padding: 15px 0 0px 40px;
    border-bottom: 0px dashed #dee2e6;
} */

.kratom-product-price {
    font-family: 'Roboto';
    color: #4A6230;
    font-weight: 600;
    font-size: 26px;
}
.kratom-product-price ins {
    text-decoration: unset;
}

.product_detail_extra_list_n li img {
    position: absolute;
    left: 0;
    max-width: 25px;
}


.product-detail-breadcrums {
    background-color: #4A6230;
}

.product-price-box {
    /* background-color: #F3F5F2; */
    margin-bottom: 0 !important;
}

.bg-1 {
    background-color: #FAB333;
}

.bg-2 {
    background-color: #ffffff;
}

.bg-3 {
    background-color: #F3F5F2;
}

.product-details-page-wrapper .yotpo .text-m {
    font-size: 15px;
    padding-top: 5px;
    padding-left: 8px;
}

.product-details-page-wrapper .yotpo.bottomLine .yotpo-bottomline .yotpo-icon-star,
.product-details-page-wrapper .yotpo.bottomLine .yotpo-bottomline .rating-star {
    font-size: 21px;
}

.product_detail_section #sm-order2 .yotpo .standalone-bottomline .star-clickable {
    align-items: center;
}

.product_detail_section .yotpo.bottomLine.yotpo-small {
    margin-bottom: 7px;
}

.outofstockmsg {
    color: red;
    font-size: 16px;
}

.quickview-nav {
    color: #fff;
    width: 40px;
    height: 40px;
    font-size: 40px;
    line-height: 40px;
    background-color: #4A6230;
    transition: 0.4s;
    border-radius: 20px;
}

div.product_detail_accordian {
    margin-bottom: 30px;
}

div.product_detail_accordian button {
    padding: 15px 10px 15px 10px;
    font-size: 20px;
    font-weight: 600;
    width: 100%;
    text-align: left;
    position: relative;
    z-index: 5;
    font-family: "Roboto";
}

div.product_detail_accordian i.fa.fa-plus, div.product_detail_accordian i.fa.fa-minus {
    position: absolute;
    right: 15px;
    top: 50%;
    font-size: 20px;
    margin-top: -10px;
    color: #5b6d4b;
    z-index: 1;
}

div.product_detail_accordian h5.header-btn {
    position: relative;
    border-bottom: 2px solid #F3F5F2;
}
div#headingOne h5.header-btn {
    border-top: 2px solid #F3F5F2;
}

.product-price-box .product-price-box-logo {
    margin-top: 20px;
}

div.product_detail_accordian #headingOne .card-body {
    padding: 10px;
}

div.product_detail_accordian #collapseOne .card-body h1 {
    font-size: 25px;
}

div.product_detail_accordian .card-body {
    border-bottom: 2px solid #F3F5F2;
}
div.product_detail_accordian .card-body.product_dis {
    overflow: auto;
    height: 430px;
}
div.product_detail_accordian .card-body.product_info {
    overflow-y: auto;
    overflow-x: hidden;
    height: 430px;
}





div.product_detail_accordian #collapseThree div.tab-pane {
    padding: 10px;
}

#tab_more_info .col-12.col-md-6,
#tab_more_info .col-12.co-md-6 {
    width: 100%
}

.product-price-box .product-price-box-logo .col-4 .side-logo-text {
    font-family: "Bree Serif";
    font-weight: 500;
    color: #4A6230;
    text-align: center;
    text-transform: uppercase;
    display: block;
}

/* .product-details-img.sticky-top {
    position: sticky;
    top: 170px;
    z-index: 1;
    margin-bottom: 20px;
} */

.product-price-box-inner {
    /* position: sticky; */
    top: 180px;
    background: #F3F5F2;
    z-index: 1;
}
#collapseOne .product_dis{
    padding: 0 10px;
}
button[aria-expanded="true"] + .fa-plus::before {
    content: "\f068" !important;
}

/**** box_bar */

.bar_box-bar {
    display: inline-block;
    width: 100%;
    height: 25px;
    background: #fff;
    margin-top: 5px;
    border-radius: 20px;
    box-shadow: rgb(0 0 0 / 9%) 0px 3px 4px 1px inset;
    overflow: hidden;
}

.bar_box_inener {
    display: inline-block;
    height: 25px;
    border-radius: 20px;
}

/* .bar_box {
    margin-top: 20px;
} */

.category-compare-bar {
    margin-top: 15px;
}

.bar_box-titel {
    padding: 0 10px;
}

span.bar_title {
    color: #000;
    font-weight: 600;
}

span.bar_percentage {
    float: right;
    color: #000;
    font-weight: 600;
}

/*********** End */

@media only screen and (min-width: 769px) and (max-width: 1024px) {
    /* .product-price-box .product-price-box-logo .col-md-4 {
        display: flex;
        justify-content: center;
        height: auto;
    } */

    .product-price-box .product-price-box-logo .col-4 .side-logo {
        max-width: 125px;
    }
}
@media only screen and (max-width: 768px) {
    .swiper-container {
        margin-right: -10px;
    }
    /* body .product-details-img.sticky-top {
        margin-bottom: 10px;
    } */
    .product-price-box-inner .colored_title h1 {
        font-size: 28px;
    }
    div.product_detail_accordian .card-body.product_dis,
    div.product_detail_accordian .card-body.product_info{
        height: auto;
    }


    .yith_product {
        font-size: 16px;
    }

    .yith_product img {
        margin-top: -5px;
    }

    .kratom-product-price {
        font-size: 26px;
    }

    .same-style.cart-wrap {
        position: unset;
    }

    /* .header_middle {
    position: relative;
} */

    .header-right-wrap .same-style.cart-wrap .minicart-wrapper {
        width: 100%;
        top: calc(100% + 1px);
        margin-top: 0;
    }

    /* .product-price-box .product-price-box-logo .col-md-4 {
        max-width: 110px;
    } */
    .product-price-box .product-price-box-logo .col-4 .side-logo-text {
        font-size: 15px;
    }

    .product-price-box-inner {
        margin-bottom: 0px !important;
        padding-top: 20px;
    }
}


@media only screen and (min-width:992px){
    .product_detail_silde_rows {
        position: relative;
        height: 640px;
    }
    ul.product_detail_extra_list_n {
        position: absolute;
        top: 0;
        width: 100%;
    }
    div.product_detail_accordian {
        position: absolute;
        bottom: 0;
        width: 100%;
        background: #fff;
    }
}
</style>