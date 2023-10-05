<template>
    <div class="featuredcontainer" v-if="kratom_differences_data">
        <div class="kratomsportfeatured-container">
            <picture>
                <source media="(max-width:767px)" srcset="https://res.cloudinary.com/dv8z5nr6r/images/v1692088821/TheKratomDifferenceMobile/TheKratomDifferenceMobile.webp?_i=AA">
                <source srcset="https://res.cloudinary.com/dv8z5nr6r/images/v1692088825/TheKratomDifference/TheKratomDifference.webp?_i=AA">
                <img width="600" height="350" format="webp" class="theKratomdifference-img"
                    src="https://res.cloudinary.com/dv8z5nr6r/images/v1692088825/TheKratomDifference/TheKratomDifference.webp?_i=AA" alt="kratomspot-1"
                    loading="lazy" />
            </picture>
            <div class="row kratomsportfeatured-row">
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="colored_title mt-sm-30 mb-sm-20 text-lg-start text-md-center">
                        <h2 class="kratomsportfeatured-heading" v-html="kratom_differences_data.kratom_difference_titel"></h2>
                    </div>
                    <div class="double_border_left_dis" v-html="kratom_differences_data.kratom_difference_description"></div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
                    <div class="row">
                        <div class="col-6 col-sm-4 pr-0 pl-0 difficons" v-for="(icon, index) in kratom_differences_data.kratom_difference_icons" :key="index">
                            <img width="80" height="80" :src="`${icon.img}`" alt="" loading="lazy"/>
                            <span class="difftext mt-20" v-html="icon.icon_label"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-20 pl-15 pr-15 pt-lg-0">
            <div class="col-lg-5 col-md-12 col-sm-12 mt-sm-40 diff-img">
                <picture>
                    <source :srcset="kratom_differences_data.kratom_difference_img">
                    <source media="(max-width:767px)" :srcset="kratom_differences_data.kratom_difference_img_mobile">
                    <img width="600" height="350" format="webp"
                        :src="kratom_differences_data.kratom_difference_img" alt="kratomspot-1"
                        loading="lazy" />
                </picture>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
                <div class="diffdis pr-sm-0 pl-sm-0 pr-20 pl-30" v-html="kratom_differences_data.kratom_difference_description_2"></div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios";
export default {
    data() {
        return {
            kratom_differences_data: {
                "kratom_difference_titel": "The Kratom Spot Difference",
                "kratom_difference_description": "<p>Welcome to Kratom Spot, your destination for the finest quality kratom products. We carefully hand-select the best green, red, and white strains and offer a wide variety of kratom products to suit every preference and need.</p><p>Whether you prefer powders, capsules, drinks, or extracts, we have everything you need to enjoy the many benefits of this incredible plant. We’re committed to providing our customers with an exceptional experience, from the quality of our products to the level of customer service we offer.</p><p>At Kratom Spot, we do the hard work to ensure every harvest is small batch and rigorously tested for purity and strength. We're confident you'll love our kratom as much as we do, which is why we offer a 100% satisfaction guarantee on all our products.</p><p>Shop with confidence, order now and experience the Kratom Spot difference.</p>",
                "kratom_difference_icons": [
                    {
                    "img": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081943/Reviews-Icon/Reviews-Icon.webp?_i=AA",
                    "icon_label": "OVER 6000 RREVIEWS <br/><span>Powered by YOTPO</span>"
                    },
                    {
                    "img": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081948/LabTested-Icon/LabTested-Icon.webp?_i=AA",
                    "icon_label": "3RD PARTY LAB TESTED <br/><span> for Purity & Potency</span>"
                    },
                    {
                    "img": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081941/Shipping-Icon/Shipping-Icon.webp?_i=AA",
                    "icon_label": "FREE SHIPPING <br/><span> On All Orders $100 or More!</span></span>"
                    },
                    {
                    "img": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081947/MoneyBack-Icon/MoneyBack-Icon.webp?_i=AA",
                    "icon_label": "100% SATISFACTION GUARANTEE <br/><span> or Your Money Back</span>"
                    },
                    {
                    "img": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081946/PhoneSupport-Icon/PhoneSupport-Icon.webp?_i=AA",
                    "icon_label": "PHONE SUPPORT <br/><span> Call Us At 888-510-2038</span>"
                    },
                    {
                    "img": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081950/AKA-Icon-1/AKA-Icon-1.webp?_i=AA",
                    "icon_label": "AMERICAN KRATOM ASSOCIATION <br/><span> Good Manufacturing Process Certified</span>"
                    }
                ],
                "kratom_difference_img": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081939/TheKratomDifference-PersonDrinking1/TheKratomDifference-PersonDrinking1.webp?_i=AA",
                "kratom_difference_img_mobile": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081938/TheKratomDifference-PersonDrinking/TheKratomDifference-PersonDrinking.webp?_i=AA",
                "kratom_difference_description_2": "<p>We are committed to delivering the purest all-natural Kratom products with the highest quality standards in the industry.</p><p>You can see it from the carefully selected harvests rigorously tested to be free from additives, and the transparent labeling so you know exactly what youre getting. Enjoy peace of mind whether you prefer quality Kratom capsules, or in a cup of savory Maeng Da Kratom tea.</p><p>If youre not pleased with your purchase for any reason, simply return it within 30 days and well give you a refund, no questions asked.</p>"
            }
        };
    },
    computed: {

    },
    methods: {
        fatch() {
            const configs = useRuntimeConfig() //configs.public.
            axios.get(
                configs.public.api_url + '/wp-json/acf/v3/header?data_type=homedifference').then((result) => {
                    this.kratom_differences_data = result.data;
                }, (error) => {
                    console.log(error);
                })
        },
    },
    created() {
        this.fatch();
    },
};
</script>

<style>

.featuredcontainer {
    padding-right: 20px;
    max-width: 1700px;
    padding-left: 20px;
    margin: 0 auto;
}

.theKratomdifference-img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    object-fit: cover;
}
.kratomsportfeatured-container {
    position: relative;
    padding: 30px 50px !important;
}

.kratomsportfeatured-heading {
    color: #fff;
    margin-bottom: 20px;
}

.double_border_left_dis p {
    color: #fff;
    font-size: 19px;
    line-height: 30px;
}

.double_border_left_dis p:first-child {
    margin-top: 20px;
}

.kratomsportfeatured-row {
    padding: 25px 0;
    position: relative;
    z-index: 5;
}

.difftext {
    color: #fff;
    text-align: center;
    font-size: 15px;
    line-height: 25px;
}

.difficons {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 20px;
}

.diffdis p::after {
  content: '';
  height: 7px;
  border-top: 1px solid #FEB437;
  position: absolute;
  left: 0;
  bottom: -10px;
  border-bottom: 1px solid #FEB437;
  width: inherit;
  margin: 0 5px;
}

.diffdis p {
    font-size: 16px;
    position: relative;
    width: 100%;
    color: #333;
    padding: 5px;
}
.diffdis p:last-child::after{
    display: none;
}

.diff-img {
    display: flex;
    justify-content: center;
    align-items: end;
}

.double_border_left_dis {
    position: relative;
    padding-top: 5px;
}

.double_border_left_dis::before {
    content: "";
    height: 7px;
    border-top: 1px solid #FEB437;
    width: 100%;
    position: absolute;
    left: 0px;
    display: inline-block;
    border-bottom: 1px solid #FEB437;
    top: 0;
}

@media only screen and (min-width: 320px) and (max-width: 1023px) 
{ 
    .diff-img {
        order: 2;
    }
    .diff-dis {
        order: 1;
    }
}
@media only screen and (min-width: 320px) and (max-width: 768px) 
{ 
    .featuredcontainer {
        padding-right: 0px !important;
        max-width: 1440px !important;
        padding-left: 0px !important;
    }
    .kratomsportfeatured-row{
        padding: 0;
    }
    .kratomsportfeatured-container {
        padding: 20px 20px !important;
    }
}
</style>
