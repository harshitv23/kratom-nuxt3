<template>
    <footer class="footer-area pt-100 pb-40">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12 col-sm-4 pr-40 pr-sm-20">
                    <img width="208" height="205"  loading="lazy"  :src="`${useRuntimeConfig().public.site_url}/img/kratom/kratom_logo.png`" class="footer_logo" alt="Kratom Spot"/>
                    <h3 class="mt-sm-10 mb-sm-20">Kratom Spot</h3>
                    <div class="footer_contact_item">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <a :href="`tel:${kratom_header_data.footer_phone}`"> {{ kratom_header_data.footer_phone }} </a></div>
                    <div class="footer_contact_item">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <a :href="`mailto:${kratom_header_data.footer_email}`"> {{ kratom_header_data.footer_email }} </a>
                    </div>
                    <div class="footer_social mt-70 my-md-5 mt-sm-40 pt-sm-20">
                        <h4 class="mr-sm-10">Follow Us:</h4>
                        <a class="footer_social_item mt-sm-10 mb-sm-10 pt-sm-10 pb-sm-10"
                            :href="kratom_header_data.twitter_link" target="_blank" aria-label="Facebook">
                            <i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a class="footer_social_item mt-sm-10 mb-sm-10 pt-sm-10 pb-sm-10"
                            :href="kratom_header_data.instagram_link" target="_blank" aria-label="Instagram">
                            <i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a class="footer_social_item mt-sm-10 mb-sm-10 pt-sm-10 pb-sm-10"
                            :href="kratom_header_data.youtube_link" target="_blank" aria-label="Youtube"><i
                                class="fa fa-youtube-play" aria-hidden="true"></i></a>
                        <a class="footer_social_item mt-sm-10 mb-sm-10 pt-sm-10 pb-sm-10"
                            :href="kratom_header_data.pinterest_link" target="_blank" aria-label="Pinterest"><i class="fa fa-pinterest"
                                aria-hidden="true"></i></a>
                    </div>

                </div>
                <div class="col-lg-8 col-md-12 col-sm-4">
                    <div class="row">
                        <div class="col-md-4 pl-10 pl-sm-15">
                            <h4 class="footer_widget_title pt-sm-30 mt-sm-20 mb-sm-20">Quick Links</h4>
                            <ul class="footer_menu">
                                <!-- <li><a href="/">Home</a></li> -->
                                <li>                                    
                                    <a href="/">Home</a>
                                </li>
                                <li v-for="submenu in kratom_header_data.footer_quick_links">
                                    <a :href="`/${submenu.menu_slug_}`" v-if="submenu.menu_slug_ == 'kratom-spot-affiliate-program'">{{ submenu.menu_text }}</a>
                                    <a :href="`/${submenu.menu_slug_}`" v-else>{{ submenu.menu_text }}</a>
                                </li>
                                <li class="d-none"><NuxtLink to="/kratom-information">Kratom Buying Information</NuxtLink>
                                </li>
                                <li class="d-none"><NuxtLink to="/shipping">Kratom Shipping</NuxtLink></li>
                                <li class="d-none"><NuxtLink to="/what-is-kratom">What is kratom?</NuxtLink></li>
                                <li class="d-none"><NuxtLink to="/wholesale-thank-you">Thank you</NuxtLink></li>
                                <li class="d-none"><NuxtLink to="/xshop/blog-data">Blog Data</NuxtLink></li>
                                <li class="d-none"><NuxtLink to="/contact-form-thank-you">Contact form thank you</NuxtLink></li>
                                <li class="d-none"><NuxtLink to="/shop2">Shop Full</NuxtLink></li>                                
                                <li class="d-none"><NuxtLink to="/edibles">Edibles</NuxtLink></li>                                
                            </ul>
                        </div>                        
                        <div class="col-md-4 pl-10 pl-sm-15">
                            <h4 class="footer_widget_title pt-sm-30 mt-sm-20 mb-sm-20">Buy Kratom</h4>
                            <ul class="footer_menu two-col">
                                <li v-for="(submenu,index) in kratom_header_data.footer_buy_kratom_links" :key="index">
                                    <NuxtLink :to="`/${submenu.menu_slug}`">{{ submenu.menu_text }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4 pl-10 pl-sm-15">
                            <h4 class="footer_widget_title pt-sm-30 mt-sm-20 mb-sm-20">Kratom Strains</h4>
                            <ul class="footer_menu two-col">
                                <li v-for="(submenu,index) in kratom_header_data.footer_kratom_strains_links" :key="index">
                                    <NuxtLink :to="`/${submenu.menu_slug}`">{{ submenu.menu_text }}</NuxtLink>
                                </li>
                            </ul>
                        </div>

                         <div
                            class="col-lg-4 col-md-12 pl-60 pl-sm-15 d-lg-none text-md-start mt-md-30 mb-md-30 px-md-3">
                            <div class="footer_privacy_mobile_menu d-lg-block pt-sm-30 pb-sm-30 mt-sm-30">
                                <img format="webp"  loading="lazy"  width="600" height="94" class="w-200 payment-icon" style="" src="https://res.cloudinary.com/dv8z5nr6r/images/v1676547918/payment-icons-1_217755f7e10/payment-icons-1_217755f7e10.png?_i=AA" alt="Payments Accepted"/>
                            </div>
                        </div> 
                    </div>

                    <div class="row footer_subscribe mt-40 mt-sm-20 mt-md-0">
                        <div class="col-md-3">
                            <h3>Subscribe Now</h3>
                        </div>
                        <div class="col-md-4">
                            <input type="text" placeholder="Name" name="nl_name" v-model="nl_name" />
                            <div class="omni_msg"></div>
                        </div>
                        <div class="col-md-5 position-relative">
                            <input type="text" placeholder="Email" name="nl_email" v-model="nl_email" />
                            <button class="footer_subscribe_submit" v-on:click="newsletter_subscribe" aria-label="Menu"><i
                                    class="fa fa-paper-plane" aria-hidden="true"></i></button>
                        </div>
                        <!-- <Newsletter/> -->
                    </div>
                    <div class="footer_privacy_section align-items-center mt-20 mt-sm-40 pt-sm-30">
                        <a href="https://www.americankratom.org/" target="_blank" aria-label="American Kratom"><img format="webp" loading="lazy"  width="126" height="52" :src="`${useRuntimeConfig().public.site_url}/img/kratom/american_kratom_asociation.png`" alt="Americal Kratom Asociation"/></a>
                        <a href="https://www.authorize.net/" target="_blank" aria-label="Authorize Net"><img format="webp" loading="lazy"  width="126" height="52"  :src="`${useRuntimeConfig().public.site_url}/img/kratom/authorize_net.png`" alt="Authorize net"/></a>
                        <img format="webp" loading="lazy"  width="200" height="31"  src="https://res.cloudinary.com/dv8z5nr6r/images/v1676547918/payment-icons-1_217755f7e10/payment-icons-1_217755f7e10.png?_i=AA" class="mobile-pay-dis" style="max-width:200px;" alt="payment"/>
                    </div>
                </div>
            </div>
            <div class="row mt-40 mt-sm-10">
                <div class="col-md-7 mb-sm-25">
                    <div class="footer_instructions px-md-5 py-md-5" v-html="kratom_header_data.footer_text_left"></div>
                </div>
                <div class="col-md-5">
                    <div class="footer_instructions px-md-5 py-md-5" v-html="kratom_header_data.footer_text_right"></div>
                </div>
            </div>
            <div class="row mt-60 mt-sm-50 mb-sm-10 footer_copyright">
                <div class="col-md-12 text-center" v-html="kratom_header_data.footer_copy_right">
                    
                </div>
            </div>
        </div>
        <client-only>
            <SetAffiliateCookies />
        </client-only>
        <!-- <NuxtLink class="livechat_button" to="/kratom-spot-customer-support?livechat=yes"><img src="https://res.cloudinary.com/dv8z5nr6r/images/v1694239852/livechat-1/livechat-1.webp?_i=AA" width="22" height="22" alt="Livechat" aria-label="Click to livechat"/></NuxtLink> -->
        <!-- <LiveChatWidget license="11403208" /> -->
    </footer>
</template>

<script>
import axios from "axios";
import SetAffiliateCookies from './setAffiliateCookies.vue';
import $ from "jquery";


export default {
    props: ["yotpo_review"],
    data() {
        return {
            nl_name: '',
            nl_email: '',
            kratom_header_data: {
                "twitter_link": "https://twitter.com/kspot_naturals",
                "instagram_link": "https://www.instagram.com/kspot_naturals/",
                "youtube_link": "https://www.youtube.com/channel/UCwn1_B06zZufKrmj7JtiB7g",
                "pinterest_link": "https://www.pinterest.com/kspot_naturals/",
                "footer_quick_links": [
                    {
                    "menu_text": "Categories",
                    "menu_slug_": "kratom-categories"
                    },
                    {
                    "menu_text": "Products",
                    "menu_slug_": "kratom-capsules-for-sale"
                    },
                    {
                    "menu_text": "Blog",
                    "menu_slug_": "blog"
                    },
                    {
                    "menu_text": "FAQ",
                    "menu_slug_": "faq"
                    },
                    {
                    "menu_text": "Customer Support",
                    "menu_slug_": "kratom-spot-customer-support"
                    },
                    {
                    "menu_text": "Privacy Policy",
                    "menu_slug_": "privacy-policy"
                    },
                    {
                    "menu_text": "Terms & Conditions",
                    "menu_slug_": "terms-conditions"
                    },
                    {
                    "menu_text": "Sitemap",
                    "menu_slug_": "sitemap"
                    },
                    {
                    "menu_text": "Refund Policy",
                    "menu_slug_": "refund-policy"
                    },
                    {
                    "menu_text": "Affiliate Program",
                    "menu_slug_": "kratom-spot-affiliate-program"
                    }
                ],
                "footer_buy_kratom_links": [
                    {
                    "menu_text": "Kratom Capsules",
                    "menu_slug": "kratom-capsules-for-sale"
                    },
                    {
                    "menu_text": "Kratom Powders",
                    "menu_slug": "kratom-powder"
                    },
                    {
                    "menu_text": "Kratom Extracts",
                    "menu_slug": "buy-kratom-extract"
                    },
                    {
                    "menu_text": "Kratom Shots",
                    "menu_slug": "kratom-shots"
                    },
                    {
                    "menu_text": "Kratom Deals",
                    "menu_slug": "special"
                    },
                    {
                    "menu_text": "Kratom Leaves",
                    "menu_slug": "kratom-leaves"
                    }
                ],
                "footer_kratom_strains_links": [
                    {
                    "menu_text": "Red Veins",
                    "menu_slug": "red-vein-kratom"
                    },
                    {
                    "menu_text": "White Veins",
                    "menu_slug": "white-vein-kratom"
                    },
                    {
                    "menu_text": "Green Veins",
                    "menu_slug": "green-vein-kratom"
                    },
                    {
                    "menu_text": "Bali Kratom",
                    "menu_slug": "bali-kratom-powders-capsules"
                    },
                    {
                    "menu_text": "Indo Kratom",
                    "menu_slug": "indo-kratom"
                    },
                    {
                    "menu_text": "Maeng Da Kratom",
                    "menu_slug": "maeng-da-kratom-powders-capsules"
                    },
                    {
                    "menu_text": "Thai Kratom",
                    "menu_slug": "thai-kratom-buy-kratom-online"
                    },
                    {
                    "menu_text": "Malay Kratom",
                    "menu_slug": "malay-kratom"
                    },
                    {
                    "menu_text": "Sumatra Kratom",
                    "menu_slug": "sumatra-kratom"
                    }
                ],
                "footer_contact_item": [
                    {
                    "footer_contact_item_image": false,
                    "footer_contact_item_text": "888-510-2038"
                    },
                    {
                    "footer_contact_item_image": false,
                    "footer_contact_item_text": "info@kratomspot.com"
                    }
                ],
                "footer_phone": "8885102038",
                "footer_email": "info@kratomspot.com",
                "footer_privacy_section_img": "",
                "footer_text_left": "This product is not for use by or sale to persons under the age of 21. The US FDA Has Not Approved Kratom as a Dietary Supplement. This product should be used only as directed on the label. It should not be used if you are pregnant or nursing. Consult with a physician before use if you have a serious medical condition or use prescription medications. A Doctor's advice should be sought before using this and any supplemental dietary product. All trademarks and copyrights are property of their respective owners and are not affiliated with nor do they endorse this product. These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure or prevent any disease. Individual weight loss results will vary. By using this site, you agree to follow the Privacy Policy and all Terms & Conditions printed on this site. Void Where Prohibited by Law.",
                "footer_text_right": "We do not ship to the following states, cities and counties in the US where Kratom is banned: Alabama, Arkansas, Indiana, Rhode Island, Tennessee, Vermont, Wisconsin. Sarasota County, Union County, Denver, San Diego. Furthermore, Kratom is also banned in the following countries where shipment cannot be executed: Australia, Burma, Denmark, Finland, Israel, Lithuania, Malaysia, Myanmar, Poland, Romania, South Korea, Sweden, Thailand, United Kingdom, Vietnam.",
                "footer_copy_right": "© KratomSpot 2023 - All Right reserved.",
                "free_shipping_boxes": [
                    {
                    "free_shiping_boxes_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1675076546/trust_icon_1/trust_icon_1.png?_i=AA",
                    "free_shipping_boxes_title": "LAB TESTED",
                    "free_shipping_boxes_text": "Third Party Certified for Purity & Potency"
                    },
                    {
                    "free_shiping_boxes_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1675076548/trust_icon_2/trust_icon_2.png?_i=AA",
                    "free_shipping_boxes_title": "AKA GMP CERTIFIED",
                    "free_shipping_boxes_text": "Approved by the Americal Kratom Association Good Manufacturing Process"
                    },
                    {
                    "free_shiping_boxes_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1675076544/trust_icon_3/trust_icon_3.png?_i=AA",
                    "free_shipping_boxes_title": "PHONE SUPPORT",
                    "free_shipping_boxes_text": "Call Us At 888-510-2038"
                    },
                    {
                    "free_shiping_boxes_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1675076542/trust_icon_4/trust_icon_4.png?_i=AA",
                    "free_shipping_boxes_title": "MONEY BACK GUARANTEE!",
                    "free_shipping_boxes_text": "100% Satisfaction Or Your Money Back"
                    },
                    {
                    "free_shiping_boxes_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1675076540/banner_logo_1/banner_logo_1.png?_i=AA",
                    "free_shipping_boxes_title": "TRUSTED REVIEWS",
                    "free_shipping_boxes_text": "Over 6,000 Verified Reviews"
                    },
                    {
                    "free_shiping_boxes_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1675076538/trust_icon_6/trust_icon_6.png?_i=AA",
                    "free_shipping_boxes_title": "FREE SHIPPING",
                    "free_shipping_boxes_text": "On All Orders $100 or More!"
                    }
                ]
            }
        };
    },
    computed: {

    },
    mounted(){
        
        if ((this.yotpo_review == undefined || this.yotpo_review == '') && this.yotpo_review != "no") {            
            
            const script = document.createElement('script')
            script.src = 'https://staticw2.yotpo.com/qISoyNDMzxbhZewW638yicv9a0Q2QtUPU5p1Xr57/widget.js'
            script.onload = function() {
                yotpo.refreshWidgets()
            }
            document.head.appendChild(script) 
        }        
        
    },
    methods: {
        newsletter_subscribe() {
            const options = {
                method: 'POST',
                url: 'https://api.omnisend.com/v3/contacts',
                headers: { accept: 'application/json', 'content-type': 'application/json', 'X-API-KEY': '636a9f5fe67810becfd76425-2Dg4sY9vf4Iiq3o6rz8QBMNuh7Tp27FuwAAfa47sONMJAIvBPV' },
                data: {
                    identifiers: [{ type: 'email', id: this.nl_email, sendWelcomeMessage: true, channels: { email: { status: 'subscribed' } } }],
                    firstName: this.nl_name
                }
            };

            axios
                .request(options)
                .then(function (response) {
                    $('.omni_msg').html('Subscribed Successfully!');
                    $('.omni_msg').show();
                    $('.footer_subscribe input[name="nl_name"]').val('');
                    $('.footer_subscribe input[name="nl_email"]').val('');
                    this.nl_name = '';
                    this.nl_email = '';
                })
                .catch(function (error) {
                    console.error(error);
                });
        },
        
    },
    async fetch() {
        await axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/acf/v3/header?data_type=footer').then((result) => {
                    this.kratom_header_data = result.data;
                }, (error) => {
                    console.log(error);
                })
        },
    created() {
        //this.fatch();
    },
    components: { SetAffiliateCookies }
};
</script>


<style> 
.footer_contact_item i.fa {
    color: #35492D;
    background: #F3C458;
    width: 60px;
    height: 60px;
    margin-right: 40px;
    text-align: center;
    font-size: 28px;
    padding: 17px 0;
    border-radius: 60px;
}
@media only screen and (max-width:767px) {
    .footer_privacy_section {
        display: block;
        text-align: center;
        padding-bottom: 0;
    }

    .footer_privacy_section img {
        margin-bottom: 30px;
        margin-right: 15px;
        margin-left: 15px;
    }
}
</style>
