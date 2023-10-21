<template>
    <div class="shop-page-wrapper">
        <!-- <KratomTheHeader /> -->
        <div v-if="loading == true" class="pt-140 pb-140 text-center spin_loader">
            <img width="120" height="120" :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/Spinner-1s-200px.gif`">
        </div>
        <div class="reward-main-baner home_banner home_banner_rewards pt-sm-50 pb-sm-50"
            :style="`background-image: url(${page_content.banner[0].banner_img});`" v-if="page_content.banner && loading == false">
            <div class="container" v-if="page_content.banner">
                <div class="row">
                    <div class="col-lg-7 col-md-9 reward-baner" v-if="page_content.banner">
                        <h2 v-html="page_content.banner[0].banner_titel"></h2>
                        <i v-html="page_content.banner[0].banner_dis"></i>
                        <!-- <div class="banner_sep mt-sm-10"></div> -->
                        <div class="homebanner_shop">
                            <div class="slider-btn btn-hover  pb-sm-20">
                                <a :href="`${useRuntimeConfig().public.site_url}/${page_content.banner[0].banner_btn_link}`"
                                    class="homebanner_shop_btn">{{ page_content.banner[0].banner_btn_txt }}</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5"></div>
                </div>
            </div>
        </div>
        <!-- <div class="points-bar" >
            <h2>Hi <span v-html="user_display_name"></span>!<span>You have 10 points</span></h2>
            <a class="rd-now" :href="`${useRuntimeConfig().public.site_url}/checkout`">Reedem Now</a>
            <a class="rd-history" :href="`${useRuntimeConfig().public.site_url}/my-account/my-points/`">Reward History</a>
        </div> -->
        <div class="title-ready" v-if="loading == false">
            <div class="container" v-if="page_content.getting_started_is_easy">
                <h2 v-html="page_content.getting_started_is_easy[0].label"></h2>
            </div>
        </div>
        <div class="reward-steps" v-if="loading == false">
            <div class="container">
                <div class="row" v-if="page_content.getting_started_is_easy">
                    <div class="col-md-4 col-sm-12"
                        v-for="(item, index) in page_content.getting_started_is_easy[0].reward_steps" :key="index">
                        <div class="steps">{{ index + 1 }}</div>
                        <div class="info">
                            <!-- <div class="img"> <img src="/img/reward/add-member-icon.png" alt="icon"> </div> -->
                            <div class="text">
                                <h4 v-html="item.text"></h4>
                                <!-- <a style="text-decoration: underline;" :href="`${useRuntimeConfig().public.site_url}/my-account/`">Create an Account</a> and Start Earning -->
                                <p v-html="item.text_dis"></p>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-md-4 col-sm-12">
                        <div class="steps">1</div>
                        <div class="info">
                            <div class="img"> <img src="/img/reward/add-member-icon.png" alt="icon"> </div>
                            <div class="text">
                                <h4>Sign Up</h4> 
                                <a style="text-decoration: underline;" :href="`${useRuntimeConfig().public.site_url}/my-account/`">Create an Account</a> and Start Earning
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <div class="steps">2</div>
                        <div class="info">
                            <div class="img"><img src="/img/reward/pay-money-icon.png" alt="icon"></div>
                            <div class="text">
                                <h4>EARN POINTS</h4>
                                <div class="lil-text">
                                    <p>Earn Points Every Time You Shop.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <div class="steps">3</div>
                        <div class="info">
                            <div class="img"><img src="/img/reward/redeem.png" alt="icon"></div>
                            <div class="text">
                                <h4>Reedem Points</h4>
                                <div class="lil-text">
                                    <p>Redeem Points for Exclusive Discounts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <!-- <div class="container">
        <div class="login_must_note">Note : You must be logged in to redeem reward points.</div>
        </div> -->
        <div class="title-ready" v-if="page_content.how_to_earn_points && loading == false">
            <h2 v-html="page_content.how_to_earn_points[0].label"></h2>
        </div>
        <div class="reward-grid" v-if="loading == false">
            <div class="container">
                <div class="row" v-if="page_content.how_to_earn_points">
                    <div class="reward-grid-box col-md-4 col-sm-12"
                        v-for="(item, index) in page_content.how_to_earn_points[0].reward_grid_box" :key="index">
                        <div class="img"> <img :src="`${item.box_img}`" alt="icon"> </div>

                        <div class="last-text">
                            <div class="text" v-html="item.text"></div>
                            <div class="text-details" v-html="item.text_details"></div>
                            <div class="slider-btn btn-hover btn_yellow text-center ">
                                <a :href="`/${item.btn_link}`" class="homebanner_shop_btn"> {{ item.btn_text }} </a>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="reward-grid-box col-md-4 col-sm-12">
                        <div class="img"> <img src="/img/kratom/rewards/reward3.jpg" alt="icon"> </div>

                        <div class="last-text">
                            <div class="text">10 Points</div>
                            <div class="text-details">Create an account</div>
                            <div class="slider-btn btn-hover btn_yellow text-center ">
                                <a :href="`${useRuntimeConfig().public.site_url}/my-account/`" class="homebanner_shop_btn">Sign up</a>
                            </div>
                        </div>
                    </div>
                    <div class="reward-grid-box col-md-4 col-sm-12">
                        <div class="img"> <img src="/img/kratom/rewards/reward5.jpg" alt="icon"> </div>

                        <div class="last-text">
                            <div class="text">1 Point</div>
                            <div class="text-details">Per $1 spent</div>
                            <div class="slider-btn btn-hover btn_yellow text-center ">
                                <n-link to="/shop" class="homebanner_shop_btn">Shop Now</n-link>
                            </div>
                        </div>
                    </div>
                    <div class="reward-grid-box col-md-4 col-sm-12">
                        <div class="img"> <img src="/img/kratom/rewards/reward2.jpg" alt="icon"> </div>

                        <div class="last-text">
                            <div class="text">50 Points</div>
                            <div class="text-details">Birthday Reward</div>
                            <div class="slider-btn btn-hover btn_yellow text-center">
                                <a :href="`${useRuntimeConfig().public.site_url}/my-account/`" class="homebanner_shop_btn" v-if="loggedin">Add DOB</a>
                                <a :href="`${useRuntimeConfig().public.site_url}/my-account/`" class="homebanner_shop_btn" v-else>Add DOB</a>                                
                            </div>
                        </div>
                    </div>
                    <div class="reward-grid-box col-md-4 col-sm-12">
                        <div class="img"> <img src="/img/kratom/rewards/reward7.jpg" alt="icon"> </div>

                        <div class="last-text">
                            <div class="text">10 Points</div>
                            <div class="text-details">Referrals Sign Up</div>
                            <div class="slider-btn btn-hover btn_yellow text-center ">
                                <a :href="`${useRuntimeConfig().public.site_url}/my-account/my-points/`" class="homebanner_shop_btn" v-if="loggedin"> Refer a Friend </a>
                                <a :href="`${useRuntimeConfig().public.site_url}/my-account/`" class="homebanner_shop_btn" v-else>Refer a Friend</a>
                            </div>
                        </div>
                    </div>
                    <div class="reward-grid-box col-md-4 col-sm-12">
                        <div class="img"> <img src="/img/kratom/rewards/reward6.jpg" alt="icon"> </div>

                        <div class="last-text">
                            <div class="text">10 Points</div>
                            <div class="text-details">Referrals Purchase</div>
                            <div class="slider-btn btn-hover btn_yellow text-center ">
                                <a :href="`${useRuntimeConfig().public.site_url}/my-account/my-points/`" class="homebanner_shop_btn" v-if="loggedin"> Refer a Friend </a>
                                <a :href="`${useRuntimeConfig().public.site_url}/my-account/`" class="homebanner_shop_btn" v-else>Refer a Friend</a>
                            </div>
                        </div>
                    </div>
                    <div class="reward-grid-box col-md-4 col-sm-12">
                        <div class="img"> <img src="/img/kratom/rewards/reward4.jpg" alt="icon"> </div>

                        <div class="last-text">
                            <div class="text">10 Points</div>
                            <div class="text-details">Make an Order over $100</div>
                            <div class="slider-btn btn-hover btn_yellow text-center ">
                                <n-link to="/shop" class="homebanner_shop_btn">Shop Now</n-link>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>

        <div class="reward-discount" v-if="loading == false">
            <div class="container">
                <div class="row align-items-center">
                    <div class="reward-discount-img col-md-6 col-sm-12" v-if="page_content.redeem_discount_image">
                        <img :src="`${page_content.redeem_discount_image}`" alt="" />
                    </div>
                    <div class="reward-discount-texts col-md-6 col-sm-12">
                        <div class="underline" style="height:6px">
                            <div class="seprator"></div>
                        </div>

                        <div class="text_column">
                            <div class="reward-wrapper">
                                <h3 v-if="page_content.redeem_discount_label" v-html="page_content.redeem_discount_label">
                                </h3>
                                <p v-if="page_content.redeem_discount_header_description"
                                    v-html="page_content.redeem_discount_header_description"></p>
                                <i style="font-size: 15px;" v-if="page_content.redeem_discount_notice"
                                    v-html="page_content.redeem_discount_notice"></i>
                            </div>
                        </div>

                        <div class="reward-discount-expl">
                            <div class="reward-wrapper" v-if="page_content.redeem_discount_plan">
                                <p><strong>{{ page_content.redeem_discount_plan }}</strong></p>
                            </div>
                        </div>


                        <div class="Reward-details" style="--hwrapper-gap:0"
                            v-if="page_content.redeem_discount_reward_details">
                            <div class="rew-point" v-for="(item, index) in page_content.redeem_discount_reward_details"
                                :key="index">
                                <div class="reward-wrapper">
                                    <p><span>{{ item.off_on }}</span><br> {{ item.points }}</p>
                                </div>
                            </div>
                            <!-- <div class="rew-point">
                                <div class="reward-wrapper">
                                    <p><span>$10 OFF</span><br> 100 POINTS</p>
                                </div>
                            </div>
                            <div class="rew-point">
                                <div class="reward-wrapper">
                                    <p><span>$20 OFF</span><br> 200 POINTS</p>
                                </div>
                            </div>
                            <div class="rew-point">
                                <div class="reward-wrapper">
                                    <p><span>$30 OFF</span><br> 300 POINTS</p>
                                </div>
                            </div> 
                            <div class="rew-point-last">
                                <div class="reward-wrapper">
                                    <p><span>$40 OFF</span><br> 400 POINTS</p>
                                </div>
                            </div> -->
                        </div>
                        <p class="bucks" v-if="page_content.redeem_discount_footer_description"
                            v-html="page_content.redeem_discount_footer_description"></p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="reward-Extra-point">
            <div class="container">
                <div class="accordion" id="accordionExample">

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Extra Points
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>Extra points when the user registers in your shop</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div> -->
        <!-- <KratomTheFooter /> -->
    </div>
</template>

<script>
import axios from "axios";
import head_json from "../data/seo_data.json";
export default {
    /* asyncData(context) {
        return axios.get(
            context.$config.api_url + '/wp-json/kratom/v3/get_head',
            {
                params: {
                    slug: context.params.slug

                }
            }
        ).then(response => {
            let yoast_head_json = response.data
             console.log(response.data);
            return { yoast_head_json };
        })
    }, */
    components: {

    },
    setup(){
        const yoast_head_json = head_json["rewards"]        
        const schema_scripts = []
        //console.log(this.yoast_head_json);
        if (yoast_head_json && yoast_head_json.meta.schema) {
            schema_scripts.push({
                type: 'application/ld+json',
                json: yoast_head_json && yoast_head_json.meta.schema
                    ? yoast_head_json.meta.schema
                    : ''
            });
        }
        if (yoast_head_json && yoast_head_json.product_schema) {
            schema_scripts.push({
                type: 'application/ld+json',
                json: yoast_head_json && yoast_head_json.product_schema
                    ? yoast_head_json.product_schema
                    : ''
            });
        }
        if (yoast_head_json && yoast_head_json.review_schema) {
            schema_scripts.push({
                type: 'application/ld+json',
                json: yoast_head_json && yoast_head_json.review_schema
                    ? yoast_head_json.review_schema
                    : ''
            });
        }
        var robots = 'noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
        if (yoast_head_json && yoast_head_json.meta.robots) {
            if (yoast_head_json.meta.robots.index == 'noindex' && yoast_head_json.meta.robots.follow == 'nofollow') {
                robots = 'noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
            } else if (yoast_head_json.meta.robots.index == 'noindex') {
                robots = 'noindex, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
            } else if (yoast_head_json.meta.robots.follow == 'nofollow') {
                robots = 'index, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
            }
        }
        useHead({
            htmlAttrs: { lang: 'en-US' },
            title: yoast_head_json && yoast_head_json.meta.title ? yoast_head_json.meta.title : 'Kratom Spot',
            link: [{
                href: yoast_head_json.meta.permalink ? yoast_head_json.meta.permalink : yoast_head_json && yoast_head_json.meta.canonical
                    ? yoast_head_json.meta.canonical
                    : '',
                rel: 'canonical'
            },
            
            ],
            meta: [
                
                {
                    hid: 'description',
                    name: 'description',
                    content: yoast_head_json && yoast_head_json.meta.description
                        ? yoast_head_json.meta.description
                        : 'Kratom Spot'
                },
                {
                    hid: 'robots',
                    name: 'robots',
                    content: robots
                },
                {
                    hid: 'og:locale',
                    name: 'og:locale',
                    content: yoast_head_json && yoast_head_json.meta.og_locale
                        ? yoast_head_json.meta.og_locale
                        : 'en_US'
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: yoast_head_json && yoast_head_json.meta.og_type
                        ? yoast_head_json.meta.og_type
                        : 'page'
                },
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: yoast_head_json && yoast_head_json.meta.title ? yoast_head_json.meta.title : 'Kratom Spot'
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: yoast_head_json && yoast_head_json.meta.og_description
                        ? yoast_head_json.meta.og_description
                        : 'Kratom Spot'
                },
                {
                    hid: 'og:url',
                    name: 'og:url',
                    content: yoast_head_json.meta.permalink ? yoast_head_json.meta.permalink : yoast_head_json && yoast_head_json.meta.og_url
                        ? yoast_head_json.meta.og_url
                        : ''
                },
                {
                    hid: 'og:site_name',
                    name: 'og:site_name',
                    content: yoast_head_json && yoast_head_json.meta.og_site_name
                        ? yoast_head_json.meta.og_site_name
                        : 'Buy Kratom Online'
                },
                {
                    hid: 'article:publisher',
                    name: 'article:publisher',
                    content: yoast_head_json && yoast_head_json.meta.article_publisher
                        ? yoast_head_json.meta.article_publisher
                        : 'https://www.facebook.com/KSPOTNaturalCo'
                },
                {
                    hid: 'article:modified_time',
                    name: 'article:modified_time',
                    content: yoast_head_json && yoast_head_json.meta.article_modified_time
                        ? yoast_head_json.meta.article_modified_time
                        : ''
                },
                {
                    hid: 'og:image',
                    name: 'og:image',
                    content: yoast_head_json && yoast_head_json.meta && yoast_head_json.meta.og_image
                        ? yoast_head_json.meta.og_image[0].url
                        : ''
                },
                {
                    hid: 'og:image:width',
                    name: 'og:image:width',
                    content: yoast_head_json && yoast_head_json.meta && yoast_head_json.meta.og_image
                        ? yoast_head_json.meta.og_image[0].width
                        : ''
                },
                {
                    hid: 'og:image:height',
                    name: 'og:image:height',
                    content: yoast_head_json && yoast_head_json.meta && yoast_head_json.meta.og_image
                        ? yoast_head_json.meta.og_image[0].height
                        : ''
                },
                {
                    hid: 'og:image:type',
                    name: 'og:image:type',
                    content: yoast_head_json && yoast_head_json.meta && yoast_head_json.meta.og_image
                        ? yoast_head_json.meta.og_image[0].og_type
                        : ''
                },
                
            ],
            script: schema_scripts
        })
    },
    data() {
        return {
            user_display_name: '',
            loggedin: false,
            yith: '',
            page_content: [],
            //yoast_head_json: head_json["rewards"],
            loading: true,
        }
    },
    computed: {

    },
    mounted() {
        const user_display_name = useCookie('user_display_name')
        if (user_display_name.value && user_display_name.value != "") {
            this.loggedin = true;
            this.username = user_display_name.value.split(" ")[0]
        } else {
            this.loggedin = false;
        }
        omnisend.push(["track", "$pageViewed"]);
    },
    methods: {
        /* fetch_yith() {
            axios.get(useRuntimeConfig().public.api_url + "/wp-json/yith/v3/data/", {
                params: {                    
                    
                }
            }).then((result) => {
                this.yith = result.data;
            }, (error) => {
                console.log(error);
            });
        }, */
        fetch() {
            this.loading = true;
            axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/wp/v2/pages/228358/?_embed',
                {
                    params: {
                        per_page: 1
                    }
                }
            ).then((result) => {
                /* console.log(result.data.ACF); */
                this.page_content = result.data.ACF;
            }, (error) => {
                console.log(error);
            }).finally(() => { this.loading = false });
        },

    },
    created() {
        //this.fetch_yith();
        this.fetch();
    },
    /* head() {
            return {
                htmlAttrs: { lang: 'en-US' },
                title: "Rewards",
                meta: [{ charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                    hid: 'description',
                    name: 'description',
                    content: 'Earn rewards points for your purchases at Kratom Spot. Redeem them for discounts on your favorite kratom products. Join now and start saving!'
                }],
            link: [
            {
                href: 'https://kratomspot.com/rewards',
                rel: 'canonical'
            },
            { rel: 'icon', type: 'image/x-icon', href: '/new-favicon.png' },
        ],
            }
        }, */
    /* head() {
        const schema_scripts = []
        //console.log(this.yoast_head_json);
        if (this.yoast_head_json && this.yoast_head_json.meta.schema) {
            schema_scripts.push({
                type: 'application/ld+json',
                json: this.yoast_head_json && this.yoast_head_json.meta.schema
                    ? this.yoast_head_json.meta.schema
                    : ''
            });
        }
        if (this.yoast_head_json && this.yoast_head_json.product_schema) {
            schema_scripts.push({
                type: 'application/ld+json',
                json: this.yoast_head_json && this.yoast_head_json.product_schema
                    ? this.yoast_head_json.product_schema
                    : ''
            });
        }
        if (this.yoast_head_json && this.yoast_head_json.review_schema) {
            schema_scripts.push({
                type: 'application/ld+json',
                json: this.yoast_head_json && this.yoast_head_json.review_schema
                    ? this.yoast_head_json.review_schema
                    : ''
            });
        }
        var robots = 'noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
        if (this.yoast_head_json && this.yoast_head_json.meta.robots) {
            if (this.yoast_head_json.meta.robots.index == 'noindex' && this.yoast_head_json.meta.robots.follow == 'nofollow') {
                robots = 'noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
            } else if (this.yoast_head_json.meta.robots.index == 'noindex') {
                robots = 'noindex, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
            } else if (this.yoast_head_json.meta.robots.follow == 'nofollow') {
                robots = 'index, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
            }
        }
        return {
            htmlAttrs: { lang: 'en-US' },
            title: this.yoast_head_json && this.yoast_head_json.meta.title ? this.yoast_head_json.meta.title : 'Kratom Spot',
            link: [{
                href: this.permalink ? this.permalink : this.yoast_head_json && this.yoast_head_json.meta.canonical
                    ? this.yoast_head_json.meta.canonical
                    : '',
                rel: 'canonical'
            },
            
            ],
            meta: [
                
                {
                    hid: 'description',
                    name: 'description',
                    content: this.yoast_head_json && this.yoast_head_json.meta.description
                        ? this.yoast_head_json.meta.description
                        : 'Kratom Spot'
                },
                {
                    hid: 'robots',
                    name: 'robots',
                    content: robots
                },
                {
                    hid: 'og:locale',
                    name: 'og:locale',
                    content: this.yoast_head_json && this.yoast_head_json.meta.og_locale
                        ? this.yoast_head_json.meta.og_locale
                        : 'en_US'
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: this.yoast_head_json && this.yoast_head_json.meta.og_type
                        ? this.yoast_head_json.meta.og_type
                        : 'page'
                },
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.yoast_head_json && this.yoast_head_json.meta.title ? this.yoast_head_json.meta.title : 'Kratom Spot'
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: this.yoast_head_json && this.yoast_head_json.meta.og_description
                        ? this.yoast_head_json.meta.og_description
                        : 'Kratom Spot'
                },
                {
                    hid: 'og:url',
                    name: 'og:url',
                    content: this.permalink ? this.permalink : this.yoast_head_json && this.yoast_head_json.meta.og_url
                        ? this.yoast_head_json.meta.og_url
                        : ''
                },
                {
                    hid: 'og:site_name',
                    name: 'og:site_name',
                    content: this.yoast_head_json && this.yoast_head_json.meta.og_site_name
                        ? this.yoast_head_json.meta.og_site_name
                        : 'Buy Kratom Online'
                },
                {
                    hid: 'article:publisher',
                    name: 'article:publisher',
                    content: this.yoast_head_json && this.yoast_head_json.meta.article_publisher
                        ? this.yoast_head_json.meta.article_publisher
                        : 'https://www.facebook.com/KSPOTNaturalCo'
                },
                {
                    hid: 'article:modified_time',
                    name: 'article:modified_time',
                    content: this.yoast_head_json && this.yoast_head_json.meta.article_modified_time
                        ? this.yoast_head_json.meta.article_modified_time
                        : ''
                },
                {
                    hid: 'og:image',
                    name: 'og:image',
                    content: this.yoast_head_json && this.yoast_head_json.meta && this.yoast_head_json.meta.og_image
                        ? this.yoast_head_json.meta.og_image[0].url
                        : ''
                },
                {
                    hid: 'og:image:width',
                    name: 'og:image:width',
                    content: this.yoast_head_json && this.yoast_head_json.meta && this.yoast_head_json.meta.og_image
                        ? this.yoast_head_json.meta.og_image[0].width
                        : ''
                },
                {
                    hid: 'og:image:height',
                    name: 'og:image:height',
                    content: this.yoast_head_json && this.yoast_head_json.meta && this.yoast_head_json.meta.og_image
                        ? this.yoast_head_json.meta.og_image[0].height
                        : ''
                },
                {
                    hid: 'og:image:type',
                    name: 'og:image:type',
                    content: this.yoast_head_json && this.yoast_head_json.meta && this.yoast_head_json.meta.og_image
                        ? this.yoast_head_json.meta.og_image[0].og_type
                        : ''
                },
                
            ],
            script: schema_scripts
        }
    }, */
    /* head() {
        return {
            title: "Rewards"
        }
    }, */
};
</script>

<style>
.points-bar {
    display: block;
    /* background: #e8f8ff; */
    background: #d3d9ca61;
    text-align: center;
    padding: 35px 15px;
    /* margin-top: 50px; */
}

.points-bar h2 {
    display: inline-block;
    margin-right: 55px;
    color: #2b5154;
    font-size: 45px;
    text-transform: capitalize;
    width: 100%;
    margin-bottom: 30px;
}

.points-bar p {
    display: inline-block;
}

h2 {}

.points-bar .rd-now {
    margin-right: 10px;
    padding: 10px;
}

/* .points-bar p.rd-now a {
    border: 1px;
    border-radius: 50px;
    background-color: #f66a1d;
    padding: 10px;
} */
.points-bar .rd-now {}

.points-bar .rd-now {
    border: 1px;
    border-radius: 50px;
    background-color: #FAB333;
    padding: 10px 30px;
    top: -6px;
    position: relative;
    margin-right: 10px;
    margin-bottom: 0;
}

.points-bar .rd-history {
    border: 1px;
    border-radius: 50px;
    background-color: #2a5135;
    padding: 10px 30px;
    top: -6px;
    position: relative;

}

.points-bar a {
    color: #fff;
    font-family: "Bree Serif";
    text-transform: uppercase;
}

.points-bar h2 span {
    color: #7a9c4b;
    margin-left: 10px;
}

.points-bar p a {
    color: #fff;
    font-family: "Bree Serif";
    text-transform: uppercase;
}

.title-ready {
    text-align: center;
    margin-top: 25px;
}

.title-ready h2 {
    color: #2d2f31;
    text-transform: capitalize;
    margin-top: 60px;
    margin-bottom: 50px;
}

.reward-steps {
    text-align: center;
    padding: 35px 15px 0;
    margin-top: 50px;
    /* background: #dce5d6; */
    background: transparent;
    padding-top: 15px;

}

.reward-steps .info .img {
    margin-right: 10px;
    display: none;
}

.reward-steps .info .text {
    text-align: center;
}

.reward-steps .steps {
    display: block;
    width: 50px;
    margin: 0 auto;
    border: 3px solid #2a5135;
    color: #2a5135;
    font-weight: bold;
    font-family: "Bree Serif";
    border-radius: 132px;
    padding-top: 8px;
    padding-bottom: 8px;
}

.reward-steps .info .img img {
    width: 90px;
}

.steps p {
    color: #166840;
    border: 2px;
    border-radius: 50px;
    width: 50px;
    display: inline-block;
}

.reward-steps .info {}

.reward-steps .info .text h4 {
    /* display: inline-block; */
    text-transform: uppercase;
    /* color: #dce5d6; */
}

.reward-steps .info {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 60px;
}

.reward-discount {
    display: flex;
    flex-wrap: wrap;
    background: #ffffff;
    margin: 40px 0;
    position: relative;
    padding: 35px 0px 70px 0px;
    /* max-width: 900px; */
    margin: 0 auto;
}

.reward-discount .underline {
    color: #789b4a;
    width: 50px;
    overflow: hidden;
    position: relative;
}

.reward-discount-texts {
    padding: 30px 70px 30px 30px;
}

.reward-discount .underline {
    display: none;
}

.reward-discount img {
    border: 1px gainsboro;
    border-radius: 15px;
}

.reward-discount .underline .seprator:before {
    left: 50%;
    transform: translateX(-50%);
    right: auto;
    content: 'd';
    margin-top: -2px;
    border-top-width: 5px;
    width: 100vw;
    position: absolute;
    top: 50%;
    height: 0;
    border-top-style: solid;
}

.text_column .reward-wrapper {
    margin-bottom: 1.5rem;
}

.reward-wrapper h3 {
    color: #2b5138;
}

.reward-discount .text_column {
    margin-top: 0px;
}

.text_column .reward-wrapper h3 {}

.text_column .reward-wrapper p {
    margin-bottom: 10px;
}

.reward-discount-expl {
    display: block;
    width: 100%;
}

.reward-discount-expl .reward-wrapper {
    margin-bottom: 10px;
}

.reward-discount .Reward-details {
    align-items: flex-start;
    flex-wrap: wrap;
    display: flex;
    text-align: left;
}

.reward-discount .Reward-details .rew-point {
    margin-bottom: 1.5rem;
    padding-right: 15px;
    margin-right: 25px;
    position: relative;
}

.reward-discount .Reward-details .rew-point:after {
    background: url(https://cdn.katsbotanicals.com/wp-content/uploads/2022/07/01182046/lines-border.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    content: '';
    width: 5px;
    height: calc(100% - 10px);
    right: -3px;
    top: 10px;
    position: absolute;
}

.reward-discount .Reward-details .rew-point p {
    font-weight: 600;
    font-size: 15px;
    width: 95px;
    line-height: 18px;
    padding-top: 6px;
    margin-bottom: 6px !important;
}

.reward-discount .Reward-details .rew-point p span {
    color: #789b4a;
}

.reward-discount .Reward-details .rew-point-last p span {
    color: #789b4a;
}

.reward-discount .bucks {
    display: block;
    width: 100%;
    /* text-align: center; */
}

.rew-point-last .reward-wrapper p {
    font-weight: 600;
    font-size: 15px;
    width: 95px;
    line-height: 18px;
    padding-top: 6px;
    margin-bottom: 6px !important;
}

.reward-Extra-point {
    margin-bottom: 25px;
}

.reward-Extra-point div#accordionExample h2.accordion-header button.accordion-button {
    color: #65a7c6;
    background: transparent;
    border-top: 1px solid;
    border-bottom: 1px solid;
    box-shadow: unset;
    border-radius: unset;
    border-color: gray;
    padding: 20px;
    font-size: 22px;
}

.reward-Extra-point div#accordionExample .accordion-item {
    border: unset;
}

.reward-discount-expl .reward-wrapper p {
    color: #404040;
}

.home_banner .reward-baner h2 {
    font-size: 60px;
}

.reward-baner .homebanner_shop {
    margin-top: 35px;
}

.cls-1 {
    fill-rule: evenodd;
}

.reward-grid {
    text-align: center;
    margin-top: 50px;
    background: transparent;
}

.reward-grid-box {
    position: relative;
    margin-bottom: 30px;
}

.reward-grid-box .text {
    position: absolute;
    /* top: 50%; */
    top: 38%;
    /* left: 43%; */
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;
    color: #fff;
}

.reward-grid .last-text {
    position: absolute;
    /* top: 62%; */
    top: 50%;
    left: 20%;
    text-align: center;
    color: #fff;
}

.reward-grid .last-text .slider-btn.btn-hover.btn_yellow a.homebanner_shop_btn {
    /* left: 50%;
    transform: translate(-50%, 0); */
}

.reward-grid .last-text {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
}

.reward-grid .last-text .text-details {
    font-size: 20px;
    margin-bottom: 20px;
}

.reward-grid .last-text .text {
    margin-bottom: 12px;
    font-size: 32px;
}

.text-details {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;
    color: #fff;
}

.reward-grid-box .text {
    font-family: "Bree Serif", serif;
    font-size: 28px;
}

.reward-grid-box .img {
    position: relative;
    cursor: pointer;
    border-radius: 15px;
    overflow: hidden;
}

.reward-grid-box .img:after {
    content: '\A';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    /* opacity: 0; */
    -webkit-transition: all 1s;
}

.reward-grid-box .img img {
    object-fit: cover;
    height: 100%;
}

.reward-grid .last-text .text {
    position: unset;
    width: 100%;
    max-width: 100%;
    transform: unset;
}

.reward-grid .last-text .text-details {
    position: unset;
    transform: unset;
}

.login_must_note {
    background: rgba(171, 203, 135, 0.5) !important;
    padding: 5px 15px;
    color: #000;
    text-align: center;
    border-radius: 10px;
    margin-top: 5px;
}

@media only screen and (max-width:767px) {
    .points-bar p.rd-now {
        margin-bottom: 15px;
    }

    .points-bar h2 {
        margin-right: 0;
    }

    .home_banner .reward-baner h2 {
        font-size: 42px;
    }

    .reward-discount .reward-discount-texts {
        padding: 15px;
    }
}


@media only screen and (min-width: 768px) and (max-width: 991px) {
    .reward-discount-img {
        width: 100%;
    }

    .reward-discount-texts {
        padding: 15px;
        width: 100%;
    }

    .btn_yellow .homebanner_shop_btn {
        padding: 10px 15px 13px;
    }

    .reward-grid .last-text {
        /* left: 20%;
        margin-top: 10px; */
    }

    .reward-grid-box {
        width: 50%;
    }

    .reward-main-baner {
        margin-bottom: 0;
    }

    .reward-discount {
        padding-top: 30px;
    }
}

.reward-discount .Reward-details .rew-point:last-child {
    padding-right: 0;
    margin-right: 0;
}

.reward-discount .Reward-details .rew-point:last-child:after {
    display: none;
}</style>
