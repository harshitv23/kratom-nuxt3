<template>
    <div class="sticky-bar" :class="{ 'is-sticky': isSticky }">
        <header class="header-area header-hm9">
            <div class="top_bar">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-md-0 d-lg-block d-md-none">
                            <a v-if="kratom_header_data.twitter_link" :href="kratom_header_data.twitter_link"
                                class="header_social_item" target="_blank" aria-label="Twitter">
                                <i aria-hidden="true" class="fa fa-twitter"></i>
                            </a>
                            <a v-if="kratom_header_data.instagram_link" :href="kratom_header_data.instagram_link"
                                class="header_social_item" target="_blank" aria-label="Instagram">
                                <i aria-hidden="true" class="fa fa-instagram"></i>
                            </a>
                            <a v-if="kratom_header_data.youtube_link" :href="kratom_header_data.youtube_link"
                                class="header_social_item" target="_blank" aria-label="Youtube">
                                <i aria-hidden="true" class="fa fa-youtube-play"></i>
                            </a>
                            <a v-if="kratom_header_data.pinterest_link" :href="kratom_header_data.pinterest_link"
                                class="header_social_item" target="_blank" aria-label="Pinterest">
                                <i aria-hidden="true" class="fa fa-pinterest"></i>
                            </a>
                        </div>
                        <div class="col-lg-6 col-md-7 col-10 text-lg-center text-md-start  d-block d-md-none font_family_bree mobile_coupon">
                            <div class="mobile_coupon_large" v-html="kratom_header_data.for_mobile_top_bar_large_text" v-if="kratom_header_data.for_mobile_top_bar_large_text"></div>
                            <div class="mobile_coupon_copy" @click="copyToClipboard(kratom_header_data.for_mobile_coupon_code)" v-if="kratom_header_data.for_mobile_coupon_code">{{ kratom_header_data.for_mobile_coupon_code }}<i aria-hidden="true" class="pe-7s-copy-file"></i></div>
                        
                        </div>
                        <div class="col-lg-6 col-md-7 col-10 text-lg-center text-md-start d-none d-lg-block font_family_bree desktop_coupon">
                            <div class="desktop_coupon_large" v-html="kratom_header_data.topbar_user_coupon_text" v-if="kratom_header_data.topbar_user_coupon_text"></div>
                            <div class="mobile_coupon_copy" @click="copyToClipboard(kratom_header_data.for_desktop_coupon_code)" v-if="kratom_header_data.for_desktop_coupon_code && kratom_header_data.for_desktop_coupon_code != ''">{{ kratom_header_data.for_desktop_coupon_code }}<i aria-hidden="true" class="pe-7s-copy-file"></i></div>
                        
                        </div>
                        <!-- <div class="col-lg-6 col-md-7 col-10 text-lg-center text-md-start d-none d-lg-block font_family_bree"
                            v-html="kratom_header_data.topbar_user_coupon_text"></div> -->
                        <div class="col-lg-3 col-md-5 top_bar_menu text-right" v-if="kratom_header_data.contact_us_slug">
                            <a :href="`/rewards`">Rewards</a> |
                            <a :href="`/${kratom_header_data.contact_us_slug}`">Contact us</a> |
                            <a :href="`/${kratom_header_data.blog_slug}`">Blog</a>
                            <!-- <NuxtLink to="/blog">Blog</NuxtLink> -->
                        </div>


                        <div class="header-right-wrap d-block d-xl-none d-lg-none d-md-none col-2">
                            <div class="same-style header-search">
                                <button class="search-active" @click="secondary_menu_click" aria-label="Secondary Menu"><i class="fa fa-bars"></i><span
                                        class="header_icons_label">Search</span></button>
                                <div class="secondary-menu-content" :class="{ active: isOpenSecondaryMenu }">
                                    <div class="container">
                                        <div class="search_close" @click="secondary_menu_click"><i class="pe-7s-close"
                                                aria-hidden="true"></i></div>

                                        <a :href="`/rewards`">Rewards</a>
                                        <a :href="`/${kratom_header_data.contact_us_slug}`">Contact us</a>
                                        <a :href="`/${kratom_header_data.blog_slug}`">Blog</a>


                                        <div class="social_icons_sm">
                                            <a v-if="kratom_header_data.twitter_link"
                                                :href="kratom_header_data.twitter_link" class="header_social_item"
                                                target="_blank" aria-label="Twitter">
                                                <i aria-hidden="true" class="fa fa-twitter"></i>
                                            </a>
                                            <a v-if="kratom_header_data.instagram_link"
                                                :href="kratom_header_data.instagram_link" class="header_social_item"
                                                target="_blank" aria-label="Instagram">
                                                <i aria-hidden="true" class="fa fa-instagram"></i>
                                            </a>
                                            <a v-if="kratom_header_data.youtube_link"
                                                :href="kratom_header_data.youtube_link" class="header_social_item"
                                                target="_blank" aria-label="Youtube">
                                                <i aria-hidden="true" class="fa fa-youtube-play"></i>
                                            </a>
                                            <a v-if="kratom_header_data.pinterest_link"
                                                :href="kratom_header_data.pinterest_link" class="header_social_item"
                                                target="_blank" aria-label="Pinterest">
                                                <i aria-hidden="true" class="fa fa-pinterest"></i>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div class="header_middle">
                <div class="container">
                    <div class="header-top-area">
                        <div class="header-leftside d-block d-lg-none">
                            <div class="header-leftside-mlogo mobile-menu-toggler d-block d-xl-none d-lg-block d-md-block">
                                <button class="mobile-aside-button mr-md-15 mr-sm-15 pl-sm-0 pr-sm-0"
                                    @click="mobileAsideButtonClick()" aria-label="Menu">
                                    <i class="pe-7s-menu"></i>
                                </button>
                            </div>
                            <div class="header-right-wrap                                                                                                                                                                                      ">
                                <div class="same-style header-search">
                                    <button class="search-active" @click="search_click" aria-label="Mobile Search"><i class="pe-7s-search"></i><span
                                            class="header_icons_label">Search</span></button>
                                    <div class="search-content" :class="{ active: isOpenSearch }">
                                        <div class="container">
                                            <div class="search_close" @click="search_click"><i class="fa fa-times"
                                                    aria-hidden="true"></i></div>
                                            <form :action="`${useRuntimeConfig().public.site_url}/s`">
                                                <input type="text" name="s" placeholder="Search"
                                                    @keyup="searchkeychange($event)" autocomplete="off" />
                                                <!-- <input type="text" name="s" placeholder="Search"
                                                    :value="useRoute().query.s" @keyup="searchkeychange($event)" /> -->
                                                <button class="button-search" type="submit"><i
                                                        class="pe-7s-search"></i></button>
                                            </form>
                                            <div class="searchedresult" v-html="searchedresult"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="logo-hm9">
                            <a href="/">
                                <img height="93" width="93" loading="lazy"
                                    src="https://res.cloudinary.com/dv8z5nr6r/images/v1677748967/kratom_logo/kratom_logo.webp?_i=AA"
                                    alt="Kratomspot" class="header_logo" />
                            </a>
                        </div>
                        <div class="d-none d-xl-block main-desktop-menu">
                            <div class="main-menu">
                                <nav>
                                    <Navigation :kratom_header_data="kratom_header_data" />
                                </nav>
                            </div>
                        </div>
                        <div class="">
                            <div class="header-right-wrap">
                                <div class="same-style header-search d-none d-lg-block">
                                    <button class="search-active" @click="search_click"><i class="pe-7s-search"></i><span
                                            class="header_icons_label">Search</span></button>
                                    <div class="search-content" :class="{ active: isOpenSearch }">
                                        <div class="container">
                                            <div class="search_close" @click="search_click"><i class="fa fa-times"
                                                    aria-hidden="true"></i></div>
                                            <form :action="`${useRuntimeConfig().public.site_url}/s`">
                                                <input type="text" name="s" placeholder="Search"
                                                    @keyup="searchkeychange($event)" autocomplete="off" />
                                                <!-- <input type="text" name="s" placeholder="Search"
                                                    :value="useRoute().query.s" @keyup="searchkeychange($event)" /> -->
                                                <button class="button-search" type="submit"><i
                                                        class="pe-7s-search"></i></button>
                                            </form>
                                            <div class="searchedresult" v-html="searchedresult"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="same-style account-setting">
                                    <!-- <a :href="`${useRuntimeConfig().public.site_url}/my-account`" class="account-setting-active" @click="account_click"><i class="pe-7s-user-female"></i><span class="header_icons_label" v-html="username"></span></a> -->
                                    <a :href="`${useRuntimeConfig().public.site_url}/my-account`" class="account-setting-active" aria-label="Login"  name="Profile"><i
                                            class="pe-7s-user-female"></i><span class="header_icons_label"
                                            v-html="username"></span></a>
                                    <!-- <div class="account-dropdown" :class="{ active:isOpenAccountSettings }">
                                        <ul>
                                            <li><NuxtLink to="/login-register" v-if="loggedin == false">Login</NuxtLink></li>
                                            <li><NuxtLink to="/login-register" v-if="loggedin == false">Register</NuxtLink></li>
                                            <li><NuxtLink to="/my-account" v-if="loggedin">my account</NuxtLink></li>
                                            <li><a @click="logout()" v-if="loggedin">Log Out</a></li>
                                        </ul>
                                    </div> -->
                                </div>
                                <div class="same-style cart-wrap">
                                    <button class="icon-cart" @click="cart_click">
                                        <i class="pe-7s-shopbag"></i>
                                        <span class="count-style">{{ Kratom_cartitem.kratom_cart.items_count }}</span>
                                        <span class="header_icons_label">Cart</span>
                                    </button>
                                    <MiniCart :miniCart="{ visible: openCart }" @minicartClose="openCart = !openCart" />
                                </div>
                                <!-- <div class="same-style mobile-menu-toggler d-block d-lg-none d-sm-none">
                                    <button class="mobile-aside-button" @click="navOpen = !navOpen">
                                        <i class="pe-7s-menu"></i>
                                    </button>
                                </div> -->
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>

        <OffCanvasMobileMenu :class="{ 'show-mobile-menu': navOpen }" @toggleAsideMenu="toggleAsideMenu1"
            :kratom_header_data="kratom_header_data" />
    </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
import { useKratom_cartStore } from "~/stores/index"

export default {
    setup() {
        const Kratom_cartitem = useKratom_cartStore()

        return { Kratom_cartitem }
    },
    components: {
        Navigation: () => import("@/components/Navigation"),
        MiniCart: () => import("@/components/MiniCart"),

    },

    props: ['containerClass', 'content_type'],

    computed: {
        cartItemCount() {
            return 0
        }
    },

    data() {
        return {
            isSticky: false,
            isOpenSearch: false, 
            isOpenAccountSettings: false,
            openCart: false,
            navOpen: false,
            loggedin: false,
            isOpenSecondaryMenu: false,
            username: 'Login',
            searchedresult: '',
            kratom_header_data: {
                  "twitter_link": "http://twitter.com/kspot_naturals",
                  "instagram_link": "http://www.instagram.com/kspot_naturals/",
                  "youtube_link": "http://www.youtube.com/channel/UCwn1_B06zZufKrmj7JtiB7g",
                  "pinterest_link": "http://www.pinterest.com/kspot_naturals/",
                  "contact_us_slug": "kratom-spot-customer-support",
                  "topbar_user_coupon_text": "",
                  "for_desktop_coupon_code": "",
                  "for_mobile_top_bar_large_text": "",
                  "for_mobile_coupon_code": "",
                  "blog_slug": "blog",
                  "buy_kratom": [
                    {
                      "menu_text": "Buy Kratom",
                      "menu_slug": "shop"
                    }
                  ],
                  "kratom_strains": [
                    {
                      "menu_text": "Kratom Strains",
                      "menu_slug": "kratom-strains"
                    }
                  ],
                  "buy_kratom_kratom_strains": [
                    {
                      "menu_text": "Red Veins",
                      "menu_slug": "red-vein-kratom",
                      "category_menu_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1682492447/redkratom-1/redkratom-1.webp?_i=AA"
                    },
                    {
                      "menu_text": "White Veins",
                      "menu_slug": "white-vein-kratom",
                      "category_menu_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1682492626/2022_000_Caps-100ct-WhiteBorneo_201458619a9_224383cf9d3/2022_000_Caps-100ct-WhiteBorneo_201458619a9_224383cf9d3.webp?_i=AA"
                    },
                    {
                      "menu_text": "Green Veins",
                      "menu_slug": "green-vein-kratom",
                      "category_menu_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1682493176/2022_000_Powder-4oz-MaengDa_201315fcfd1_2243845dc04/2022_000_Powder-4oz-MaengDa_201315fcfd1_2243845dc04.webp?_i=AA"
                    },
                    {
                      "menu_text": "Bali Kratom",
                      "menu_slug": "bali-kratom-powders-capsules",
                      "category_menu_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1682508503/bali-kratom/bali-kratom.webp?_i=AA"
                    },
                    {
                      "menu_text": "Indo Kratom ",
                      "menu_slug": "indo-kratom",
                      "category_menu_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1682508505/indo-kratom/indo-kratom.webp?_i=AA"
                    },
                    {
                      "menu_text": "Maeng Da Kratom",
                      "menu_slug": "maeng-da-kratom-powders-capsules",
                      "category_menu_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1682508502/maegda-kratom/maegda-kratom.webp?_i=AA"
                    },
                    {
                      "menu_text": "Thai Kratom",
                      "menu_slug": "thai-kratom-buy-kratom-online",
                      "category_menu_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1682508507/thai-kratom/thai-kratom.webp?_i=AA"
                    },
                    {
                      "menu_text": "Malay Kratom",
                      "menu_slug": "malay-kratom",
                      "category_menu_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1682508500/Ultra-Malay_224389f8fa0/Ultra-Malay_224389f8fa0.webp?_i=AA"
                    },
                    {
                      "menu_text": "Sumatra Kratom",
                      "menu_slug": "sumatra-kratom",
                      "category_menu_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1682508497/sumatra-kratom/sumatra-kratom.webp?_i=AA"
                    }
                  ],
                  "buy_kratom_kratom_category": [
                    {
                      "menu_text": "Kratom Capsules",
                      "menu_slug": "kratom-capsules-for-sale",
                      "category_menu_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1682677042/kratom-capsules_2245827e5f8/kratom-capsules_2245827e5f8.webp?_i=AA"
                    },
                    {
                      "menu_text": "Kratom Powders",
                      "menu_slug": "kratom-powder",
                      "category_menu_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1682677044/kratom-powder/kratom-powder.webp?_i=AA"
                    },
                    {
                      "menu_text": "Kratom Extracts",
                      "menu_slug": "buy-kratom-extract",
                      "category_menu_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1682677046/kratom-extracts/kratom-extracts.webp?_i=AA"
                    },
                    {
                      "menu_text": "Kratom Drinks",
                      "menu_slug": "kratom-shots",
                      "category_menu_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1682677048/kratom-shot/kratom-shot.webp?_i=AA"
                    },
                    {
                      "menu_text": "Kratom Deals",
                      "menu_slug": "bundleandsave",
                      "category_menu_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1682677050/kratom-deals/kratom-deals.webp?_i=AA"
                    },
                    {
                      "menu_text": "Accessories & Merchandise",
                      "menu_slug": "accessories-and-merchandise",
                      "category_menu_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1682677040/kratom-accesories/kratom-accesories.webp?_i=AA"
                    },
                    {
                      "menu_text": "Kratom Leaves",
                      "menu_slug": "kratom-leaves",
                      "category_menu_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1682677053/kratom-leaves_2245873c05d/kratom-leaves_2245873c05d.webp?_i=AA"
                    },
                    {
                      "menu_text": "Special Blends",
                      "menu_slug": "specialblends",
                      "category_menu_image": "https://kratomspot.com/wp-content/uploads/2023/06/2023_000_KratomPowder-4oz-KspotSig-1.webp"
                    },
                    {
                      "menu_text": "Gummies",
                      "menu_slug": "edibles",
                      "category_menu_image": false
                    },
                    {
                      "menu_text": "Kratom on Sale",
                      "menu_slug": "sale",
                      "category_menu_image": false
                    }
                  ],
                  "kratom_university_kratom_detail_submenu": [
                    {
                      "menu_text": "Kratom News",
                      "menu_slug": "blog"
                    },
                    {
                      "menu_text": "Wholesale",
                      "menu_slug": "wholesale-kratom"
                    },
                    {
                      "menu_text": "Support",
                      "menu_slug": "kratom-spot-customer-support"
                    },
                    {
                      "menu_text": "Accessories And Merchandise",
                      "menu_slug": "accessories-and-merchandise"
                    }
                  ],
                  "our_story": [
                    {
                      "menu_text": "Our Story",
                      "menu_slug": "about-kratom-spot"
                    }
                  ],
                  "wholesale": [
                    {
                      "menu_text": "Wholesale",
                      "menu_slug": "wholesale-kratom"
                    }
                  ],
                  "our_reviews": [
                    {
                      "menu_text": "Our Reviews",
                      "menu_slug": "our-reviews"
                    }
                  ],
                  "footer_phone": "8885102038",
                  "footer_email": "info@kratomspot.com"
                }
        }
    },

    mounted() {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag("js", new Date());
        gtag("config", "UA-88635737-1", { "cookie_domain": "auto" });

        window.addEventListener('scroll', () => {
            //console.log(window.innerWidth);
            let scroll = window.scrollY
            if (scroll >= 200 && window.innerWidth > 767) {
                this.isSticky = true
            } else {
                this.isSticky = false
            }
        })
        const user_display_name = useCookie('user_display_name')
        
        if (user_display_name.value && user_display_name.value != "") {
            this.loggedin = true;
            this.username = 'Hi, ' + user_display_name.value.split(" ")[0]
        } else {
            this.loggedin = false;
        }        
        
        
        /* const script = document.createElement('script')
        script.src = 'https://staticw2.yotpo.com/qISoyNDMzxbhZewW638yicv9a0Q2QtUPU5p1Xr57/widget.js'
        script.async = true;        
        script.onload = function() {
            yotpo.refreshWidgets()
        }
        document.head.appendChild(script)  */
        
    },
    methods: {
        async fetch() {
            const configs = useRuntimeConfig() //configs.public.
            await axios.get(
                configs.public.api_url + '/wp-json/acf/v3/header?data_type=header_section').then((result) => {
                    this.kratom_header_data = result.data;
                }, (error) => {
                    console.log(error);
                })
        },
        copyToClipboard(text) {
            var sampleTextarea = document.createElement("textarea");
            document.body.appendChild(sampleTextarea);
            sampleTextarea.value = text; //save main text in it
            sampleTextarea.select(); //select textarea contenrs
            document.execCommand("copy");
            document.body.removeChild(sampleTextarea);
        },
        toggleAsideMenu1() {
            this.navOpen = !this.navOpen
            $('body').removeClass('menuoepn');
            $('html').removeClass('menuoepn');
        },
        mobileAsideButtonClick() {
            this.navOpen = !this.navOpen
            $('body').addClass('menuoepn');
            $('html').addClass('menuoepn');
        },
        handleNewEvent(event) {
            console.log('LiveChatWidget.onNewEvent', event)
        },
        searchkeychange(event) {
            if (event.target.value.length > 3) {
                axios.get(
                    useRuntimeConfig().public.api_url + '/wp-json/search/v3/suggest',
                    {
                        params: {
                            search: event.target.value,
                        }
                    }
                ).then((result) => {

                    this.searchedresult = result.data.product_data;
                }, (error) => {
                    console.log(error);
                }).finally(() => { this.loading = false });
            } else {
                this.searchedresult = '';
            }
        },
        logout() {
            this.$cookies.remove("kratom_token");
            this.$cookies.remove("cart_key");
            this.$cookies.remove("user_display_name");
            this.loggedin = false;
        },
        account_click() {
            this.openCart = false
            this.isOpenSearch = false
            this.isOpenAccountSettings = !this.isOpenAccountSettings
        },
        cart_click() {
            this.isOpenSearch = false
            this.isOpenAccountSettings = false
            this.openCart = !this.openCart
        },
        search_click() {
            this.openCart = false
            this.isOpenAccountSettings = false
            this.isOpenSearch = !this.isOpenSearch
        },
        secondary_menu_click() {
            this.openCart = false
            this.isOpenAccountSettings = false
            this.isOpenSearch = false
            this.isOpenSecondaryMenu = !this.isOpenSecondaryMenu
        },

        
    },
    fetch() {
        const configs = useRuntimeConfig() //configs.public.
            axios.get(
                configs.public.api_url + '/wp-json/acf/v3/header?data_type=header_section').then((result) => {
                    this.kratom_header_data = result.data;
                }, (error) => {
                    console.log(error);
                })
        },
    created() {
        this.fetch()
    }
};
</script>
<style>
i.pe-7s-copy-file {
    font-size: 21px;
    cursor: pointer;
}
.mobile_coupon_copy {
    display: flex;
    align-items: center;
}
.mobile_coupon_large {
    font-size: 20px;
    display: inline-block;
    margin-right: 20px;
    line-height: 22px;
}
/* .mobile_coupon {
    display: flex !important;
} */
.desktop_coupon {
    display: flex !important;
    align-items: center;
    justify-content: center;
}
.desktop_coupon_large {
    padding-right: 10px;
}
@media only screen and (max-width:768px){
    .mobile_coupon {
        display: flex !important;
    }
    body .desktop_coupon {
        display: none !important;
    }
}
</style>