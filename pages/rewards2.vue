<template>
    <div class="reward-page-wrapper">
        <!-- <KratomTheHeader /> -->
        <div v-if="loading == true" class="pt-140 pb-140 text-center spin_loader">
            <img width="120px" :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/Spinner-1s-200px.gif`">
        </div>
        <div class="reward-main-baner home_banner home_banner_rewards pt-sm-50 pb-sm-50"
            :style="`background-image: url(${page_content.banner[0].banner_img});`"
            v-if="page_content.banner && loading == false">
            <div class="container" v-if="page_content.banner">
                <div class="row">
                    <div class="col-lg-7 col-md-9 reward-baner" v-if="page_content.banner">
                        <h2 v-html="page_content.banner[0].banner_titel"></h2>
                        <i v-html="page_content.banner[0].banner_dis"></i>
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
                            <div class="text">
                                <h4 v-html="item.text"></h4>
                                <p v-html="item.text_dis"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="redeem-points-container">
            <div class="container container-reward">
                <div class="col-12 pt-40 pb-40 pt-sm-50 pb-sm-50">
                    <div class="redeem-title-ready">
                        <h2 class="redeem-title-ready-h2">redeem points for discounts</h2>
                        <p class="redeem-title-ready-p">Redeeming your hard earned points is essy! Simply apply your Points
                            for
                            a discount at checkout or create coupon code!</p>
                        <p class="redeem-title-ready-p">* you must have an account and logged in to redeem Reward Points</p>
                    </div>
                    <div class="row pb-20">
                        <div class="col-12 col-xl-3 col-sm-3 points-box-image">
                            <div class="points-box position-relative">
                                <img src="/img/kratom/people_agree_bg.jpg"
                                width="340" height="142" alt="Kratom Spot People Agree Background" loading="lazy" class="section_bg_div">
                                <div class="redeem-points-text position-relative">
                                    <span>100 POINTS</span>
                                    <h4>$10 OFF</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-xl-3 col-sm-3 points-box-image">
                            <div class="points-box position-relative">
                                <img src="/img/kratom/people_agree_bg.jpg"
                                width="340" height="142" alt="Kratom Spot People Agree Background" loading="lazy" class="section_bg_div">
                                <div class="redeem-points-text position-relative">
                                    <span>200 POINTS</span>
                                    <h4>$20 OFF</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-xl-3 col-sm-3 points-box-image">
                            <div class="points-box position-relative">
                                <img src="/img/kratom/people_agree_bg.jpg"
                                width="340" height="142" alt="Kratom Spot People Agree Background" loading="lazy" class="section_bg_div">
                                <div class="redeem-points-text position-relative">
                                    <span>300 POINTS</span>
                                    <h4>$30 OFF</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-xl-3 col-sm-3 points-box-image">
                            <div class="points-box position-relative">
                                <img src="/img/kratom/people_agree_bg.jpg"
                                width="340" height="142" alt="Kratom Spot People Agree Background" loading="lazy" class="section_bg_div">
                                <div class="redeem-points-text position-relative">
                                    <span>400 POINTS</span>
                                    <h4>$40 OFF</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="membership-benefits-container">
            <div class="container container-reward">
                <div class="col-12 pt-40 pb-40 pt-sm-50 pb-sm-50">
                    <div class="redeem-title-ready">
                        <h2 class="redeem-title-ready-h2 mb-20">membership benefits</h2>
                        <p class="redeem-title-ready-p">Get rewardded for your purchases and earn the conveted VIP kratom
                            Spot
                            title!*</p>
                    </div>
                    <table class="table table-striped text-center mt-40 mb-20 rewards_table">
                        <colgroup>
                            <col span="1" style="width: 25%;">
                            <col span="1" style="width: 25%;">
                            <col span="1" style="width: 25%;">
                            <col span="1" style="width: 25%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col" class="tab-head-1">MEMBER</th>
                                <th scope="col" class="tab-head-2">INSIDER</th>
                                <th scope="col" class="tab-head-3">VIP</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">SPAND PER YEAR</th>
                                <td>FREE</td>
                                <td>$2000</td>
                                <td>$4000</td>
                            </tr>
                            <tr>
                                <th scope="row">POINTS PER $1</th>
                                <td>1</td>
                                <td>1.25</td>
                                <td>1.5</td>
                            </tr>
                            <tr>
                                <th scope="row">REDEEM POINTS FOR DISCOUNTS</th>
                                <td><span class="green-dot">●</span></td>
                                <td><span class="low-green-dot">●</span></td>
                                <td><span class="yello-dot">●</span></td>
                            </tr>
                            <tr>
                                <th scope="row">REDEEM POINTS FOR DISCOUNTS</th>
                                <td><span class="green-dot">●</span></td>
                                <td><span class="low-green-dot">●</span></td>
                                <td><span class="yello-dot">●</span></td>
                            </tr>
                            <tr>
                                <th scope="row">REDEEM POINTS FOR DISCOUNTS</th>
                                <td><span class="green-dot">●</span></td>
                                <td><span class="low-green-dot">●</span></td>
                                <td><span class="yello-dot">●</span></td>
                            </tr>
                            <tr>
                                <th scope="row">EXCLUSIVE UPDATES ON RESTOCKS & NEW PRDUCTS</th>
                                <td><span class="green-dot">●</span></td>
                                <td><span class="low-green-dot">●</span></td>
                                <td><span class="yello-dot">●</span></td>
                            </tr>
                            <tr>
                                <th scope="row">$10 COUPON</th>
                                <td></td>
                                <td><span class="low-green-dot">●</span></td>
                                <td><span class="yello-dot">●</span></td>
                            </tr>
                            <tr>
                                <th scope="row">FREE SHIPING ON $50+</th>
                                <td></td>
                                <td><span class="low-green-dot">●</span></td>
                                <td><span class="yello-dot">●</span></td>
                            </tr>
                            <tr>
                                <th scope="row">FREE SHIPING ON $25+</th>
                                <td></td>
                                <td></td>
                                <td><span class="yello-dot">●</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="redeem-title-ready-p">*Membership renews every celendar year on January 1st.</p>
                    <p class="redeem-title-ready-p">Once membership status is a chieved, boosted points will be added on all
                        orders cluring membership status</p>
                    <p class="redeem-title-ready-p">Points cannot be retroactively appllied</p>
                </div>
            </div>
        </div>
        <div class="your-benefits-container position-relative">
            <img src="/img/kratom/people_agree_bg.jpg"
                width="1600" height="467" alt="Kratom Spot People Agree Background" loading="lazy" class="section_bg_div p-0">
            <div class="col-12 pt-40 pb-40 pt-sm-50 pb-sm-50 position-relative">
                <div class="container container-reward">
                    <div class="row">
                        <div class="col-12 pt-40 pb-40 pt-sm-50 pb-sm-50">
                            <div class="text-center">
                                <h3 class="your-benefits-h3 text-white pt-sm-0 pb-sm-0 pl-sm-20 pr-sm-20">YOUR PERMANENT BENEFITS</h3>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 mb-20 text-center">
                            <div class="benefits-steps"><img src="https://kratomspot.com/wp-content/uploads/2023/09/2023_012_Web-Icon-EarnPoints.svg" alt="" width="100" height="100"></div>
                            <div class="benefits-info">
                                <p class="benefits-p">EARN POINTS ON EVERY PURCHASE</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 mb-20 text-center">
                            <div class="benefits-steps"><img src="https://kratomspot.com/wp-content/uploads/2023/09/2023_012_Web-Icon-ExclusiveOffers.svg" alt="" width="100" height="100"></div>
                            <div class="benefits-info">
                                <p class="benefits-p">Exclusive Offers all year around</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 mb-20 text-center">
                            <div class="benefits-steps"><img src="https://kratomspot.com/wp-content/uploads/2023/09/2023_012_Web-Icon-BirthdayGift.svg" alt="" width="100" height="100"></div>
                            <div class="benefits-info">
                                <p class="benefits-p">Free<br> birthday gift</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="learn-more-container">
            <div class="col-12 pt-40 pb-40 pr-10 pl-10 pt-sm-40 pb-sm-40">
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-4 col-sm-12 pr-20 pl-20 pb-20 pt-20 ml-20 mr-20 mt-20 d-flex align-items-center learn-more-box">
                            <!-- <div class="learn-more-steps">?</div> -->
                            <img src="https://kratomspot.com/wp-content/uploads/2023/09/2023_012_Web-Icon-FAQ.svg"
                            width="60" height="60" alt="EARN POINTS ON EVERY PURCHASE"/>
                            <div class="learn-more-info">
                                <h4 class="learn-more-h4">Frequantly Asked Quastions</h4>
                                <a class="learn-more-a" href="#">Learn More</a>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 pr-20 pl-20 pb-20 pt-20 ml-20 mr-20 mt-20 d-flex align-items-center learn-more-box">
                            <!-- <div class="learn-more-steps"><i class="fa fa-list" aria-hidden="true"></i></div> -->
                            <img src="https://kratomspot.com/wp-content/uploads/2023/09/2023_012_Web-Icon-Terms.svg"
                            width="60" height="60" alt="EARN POINTS ON EVERY PURCHASE"/>
                            <div class="learn-more-info">
                                <h4 class="learn-more-h4">Terms and Conditions</h4>
                                <a class="learn-more-a" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="title-ready" v-if="page_content.how_to_earn_points && loading == false">
            <h2 v-html="page_content.how_to_earn_points[0].label"></h2>
        </div> -->
        <!-- <div class="reward-grid" v-if="loading == false">
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
                </div>
            </div>
        </div> -->

        <!-- <div class="reward-discount" v-if="loading == false">
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
                        </div>
                        <p class="bucks" v-if="page_content.redeem_discount_footer_description"
                            v-html="page_content.redeem_discount_footer_description"></p>
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
    components: {

    },

    data() {
        return {
            user_display_name: '',
            loggedin: false,
            yith: '',
            page_content: [],
            yoast_head_json: head_json["rewards"],
            loading: true,
        }
    },
    computed: {

    },
    mounted() {
        if (this.$cookies.isKey('user_display_name') && this.$cookies.get('user_display_name') != "") {
            this.loggedin = true;
            let user_display_name = this.$cookies.get('user_display_name')
            this.username = user_display_name.split(" ")[0]
        } else {
            this.loggedin = false;
        }
        omnisend.push(["track", "$pageViewed"]);
    },
    methods: {
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
                this.page_content = result.data.ACF;
            }, (error) => {
                console.log(error);
            }).finally(() => { this.loading = false });
        },

    },
    created() {
        this.fetch();
    },
    head() {
        const schema_scripts = []
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
    }
};
</script>

<style>
.benefits-steps img {
    max-height: 100px;
}
.reward-page-wrapper .position-relative{
    z-index: 1;
}
.rewards_table{
    vertical-align: middle;
}
body .rewards_table tr th {
    padding: 18px 10px;
}
body .rewards_table th, body .rewards_table td {
    border: unset;
}

.points-bar {
    display: block;
    background: #d3d9ca61;
    text-align: center;
    padding: 35px 15px;
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

.reward-steps .info .text h4 {
    text-transform: uppercase;
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
    top: 38%;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;
    color: #fff;
}

.reward-grid .last-text {
    position: absolute;
    top: 50%;
    left: 20%;
    text-align: center;
    color: #fff;
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
}

/***  new  */

.container-reward {
    max-width: 1160px !important;
}

p.redeem-title-ready-p {
    margin: 5px 0;
    font-size: 16px;
    text-align: center;
}

.redeem-points-container {
    background: #f2f5f0;
}

h2.redeem-title-ready-h2 {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 20px;
}

.points-box {
    padding: 30px;
    color: #fff;
    /* border: 5px dashed #779d82; */
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' stroke='%23749362FF' stroke-width='8' stroke-dasharray='16' stroke-linecap='square'/%3E%3C/svg%3E");
}

.points-box-image {
    text-align: center;
    padding: 20px 20px;
}

.points-box-image h4 {
    color: #fff;
    font-size: 30px;
}

span.green-dot {
    color: #4d642f;
    font-size: 25px;
}

span.low-green-dot {
    color: #769563;
    font-size: 25px;
}

span.yello-dot {
    color: #fab332;
    font-size: 25px;
}

th.tab-head-3 {
    border-bottom: 10px solid #fab332 !important;
    text-align: center;
}

th.tab-head-2 {
    border-bottom: 10px solid #769563 !important;
    text-align: center;
}

th.tab-head-1 {
    border-bottom: 10px solid #4d642f !important;
    text-align: center;
}

.benefits-steps {
    width: 100px;
    height: 100px;
}

p.benefits-p {
    color: #fff;
    text-transform: uppercase;
}

h3.your-benefits-h3 {
    font-size: 30px;
}

.benefits-info {
    max-width: 180px;
    margin: auto;
    margin-top: 10px;
}

.benefits-steps {
    max-width: 180px;
    margin: auto;
}

.learn-more-box {
    background: #f2f5f0;
}

/* .learn-more-steps {
    display: block;
    width: 60px;
    height: 60px;
    margin: 0 30px;
    border: 3px solid #2a5135;
    color: #2a5135;
    font-weight: bold;
    font-family: "Bree Serif";
    border-radius: 132px;
    padding-top: 10px;
    padding-bottom: 8px;
    text-align: center;
    font-size: 40px;
} */

.learn-more-steps {
    display: block;
    width: 60px;
    height: 60px;
    margin: 0 10px 0 5px;
    border: 3px solid #2a5135;
    color: #2a5135;
    font-weight: bold;
    font-family: "Bree Serif";
    border-radius: 132px;
    padding-top: 10px;
    padding-bottom: 8px;
    text-align: center;
    font-size: 40px;
}

h4.learn-more-h4 {
    margin-bottom: 15px;
}

a.learn-more-a {
    border-bottom: 2px solid #2a5135;
}

.learn-more-info {
    max-width: 290px;
    margin-left: 20px;
}

@media screen and (min-width: 768px)
    and (max-width: 1024px) {
        .learn-more-info {
            width: 180px;
        }
        body .rewards_table tbody th {
    font-size: 12px;
    padding: 4px 5px;
    line-height: 18px;
}
}

@media screen and (min-width: 320px)
    and (max-width: 767px) {
        .learn-more-info {
            width: 200px;
        }
}


/***  new  */</style>
