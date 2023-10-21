<template>
    <div class="category_sec pb-sm-25">
        <div class="category_title">
            <h3 class="titel_text" >Shop By <span>Product Category</span></h3>
        </div>
        <div class="row category_container">
            <div class="col-md-8 col-xl-4 col-lg-8 col-12 box first-box" v-if="kratom_category_data">
                <NuxtLink class="cat_box cat_img_1" :to="`/${kratom_category_data.kratom_capsules[0]._slug}`"
                    :style="`--bgimg : url(${kratom_category_data.kratom_capsules[0].img}); --bgmimg : url(${kratom_category_data.kratom_capsules[0].imgmobile});`">
                    <span v-html="kratom_category_data.kratom_capsules[0].name"></span>
                </NuxtLink>
                <NuxtLink class="cat_box cat_img_2" :to="`/${kratom_category_data.kratom_powders[0]._slug}`"
                    :style="`--bgimg : url(${kratom_category_data.kratom_powders[0].img}); --bgmimg : url(${kratom_category_data.kratom_powders[0].imgmobile});`">
                    <span v-html="kratom_category_data.kratom_powders[0].name"></span>
                </NuxtLink>
            </div>
            <div class="col-md-4 col-xl-2 col-lg-4 col-12 box" v-if="kratom_category_data">
                <NuxtLink class="cat_box cat_img_3" :to="`/${kratom_category_data.kratom_special_blends[0]._slug}`"
                    :style="`--bgimg : url(${kratom_category_data.kratom_special_blends[0].img}); --bgmimg : url(${kratom_category_data.kratom_special_blends[0].imgmobile});`">
                    <span v-html="kratom_category_data.kratom_special_blends[0].name"></span>
                </NuxtLink>
                <NuxtLink class="cat_box cat_img_4" :to="`/${kratom_category_data.kratom_leaves[0]._slug}`"
                    :style="`--bgimg : url(${kratom_category_data.kratom_leaves[0].img}); --bgmimg : url(${kratom_category_data.kratom_leaves[0].imgmobile});`">
                    <span v-html="kratom_category_data.kratom_leaves[0].name"></span>
                </NuxtLink>
            </div>
            <div class="col-md-4 col-xl-2 col-lg-4 col-12 box" v-if="kratom_category_data">
                <NuxtLink class="cat_box cat_img_5" :to="`/${kratom_category_data.kratom_drink[0]._slug}`"
                    :style="`--bgimg : url(${kratom_category_data.kratom_drink[0].img}); --bgmimg : url(${kratom_category_data.kratom_drink[0].imgmobile});`">
                    <span v-html="kratom_category_data.kratom_drink[0].name"></span>
                </NuxtLink>
                <NuxtLink class="cat_box cat_img_6" :to="`/${kratom_category_data.kratom_extracts[0]._slug}`"
                    :style="`--bgimg : url(${kratom_category_data.kratom_extracts[0].img}); --bgmimg : url(${kratom_category_data.kratom_extracts[0].imgmobile});`">
                    <span v-html="kratom_category_data.kratom_extracts[0].name"></span>
                </NuxtLink>
            </div>
            <div class="col-md-4 col-xl-2 col-lg-4 col-12 box" v-if="kratom_category_data">
                <NuxtLink class="cat_box cat_img_7" :to="`/${kratom_category_data.kratom_gummies[0]._slug}`"
                    :style="`--bgimg : url(${kratom_category_data.kratom_gummies[0].img}); --bgmimg : url(${kratom_category_data.kratom_gummies[0].imgmobile});`">
                    <span v-html="kratom_category_data.kratom_gummies[0].name"></span>
                </NuxtLink>
                <NuxtLink class="cat_box cat_img_8" :to="`/${kratom_category_data.kratom_bundle_save[0]._slug}`"
                    :style="`--bgimg : url(${kratom_category_data.kratom_bundle_save[0].img}); --bgmimg : url(${kratom_category_data.kratom_bundle_save[0].imgmobile});`">
                    <span v-html="kratom_category_data.kratom_bundle_save[0].name"></span>
                </NuxtLink>
            </div>
            <div class="col-md-4 col-xl-2 col-lg-4 col-12 box" v-if="kratom_category_data">
                <NuxtLink class="cat_box cat_img_9" :to="`/${kratom_category_data.kratom_on_sale[0]._slug}`"
                    :style="`--bgimg : url(${kratom_category_data.kratom_on_sale[0].img}); --bgmimg : url(${kratom_category_data.kratom_on_sale[0].imgmobile});`">
                    <span v-html="kratom_category_data.kratom_on_sale[0].name"></span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            kratom_category_data: {
                "kratom_capsules": [
                    {
                    "img": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081900/CategoryPanels-Capsules-1/CategoryPanels-Capsules-1.webp?_i=AA",
                    "imgmobile": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081883/Category-Capsules-1/Category-Capsules-1.webp?_i=AA",
                    "name": "CAPSULES",
                    "_slug": "kratom-capsules-for-sale"
                    }
                ],
                "kratom_powders": [
                    {
                    "img": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081898/CategoryPanels-Powders-1/CategoryPanels-Powders-1.webp?_i=AA",
                    "imgmobile": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081881/Category-Powders-1/Category-Powders-1.webp?_i=AA",
                    "name": "POWDERS",
                    "_slug": "kratom-powder"
                    }
                ],
                "kratom_special_blends": [
                    {
                    "img": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081895/CategoryPanels-Blends-1/CategoryPanels-Blends-1.webp?_i=AA",
                    "imgmobile": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081880/Category-Blends-1/Category-Blends-1.webp?_i=AA",
                    "name": "SPECIAL BLENDS",
                    "_slug": "specialblends"
                    }
                ],
                "kratom_leaves": [
                    {
                    "img": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081894/CategoryPanels-Leaves-1/CategoryPanels-Leaves-1.webp?_i=AA",
                    "imgmobile": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081879/Category-Leaves-1/Category-Leaves-1.webp?_i=AA",
                    "name": "LEAVES",
                    "_slug": "kratom-leaves"
                    }
                ],
                "kratom_drink": [
                    {
                    "img": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081892/CategoryPanels-Drinks-1/CategoryPanels-Drinks-1.webp?_i=AA",
                    "imgmobile": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081877/Category-Drinks-1/Category-Drinks-1.webp?_i=AA",
                    "name": "DRINKS",
                    "_slug": "kratom-shots"
                    }
                ],
                "kratom_extracts": [
                    {
                    "img": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081890/CategoryPanels-Extracts-1/CategoryPanels-Extracts-1.webp?_i=AA",
                    "imgmobile": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081876/Category-Extracts-1/Category-Extracts-1.webp?_i=AA",
                    "name": "EXTRACTS",
                    "_slug": "buy-kratom-extract"
                    }
                ],
                "kratom_gummies": [
                    {
                    "img": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081888/CategoryPanels-Gummies-1/CategoryPanels-Gummies-1.webp?_i=AA",
                    "imgmobile": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081874/Category-Gummies-1/Category-Gummies-1.webp?_i=AA",
                    "name": "GUMMIES",
                    "_slug": "edibles"
                    }
                ],
                "kratom_bundle_save": [
                    {
                    "img": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081887/CategoryPanels-Bundles-1/CategoryPanels-Bundles-1.webp?_i=AA",
                    "imgmobile": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081873/Category-Bundles-1/Category-Bundles-1.webp?_i=AA",
                    "name": "BUNDLE & SAVE",
                    "_slug": "bundleandsave"
                    }
                ],
                "kratom_on_sale": [
                    {
                    "img": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081885/CategoryPanels-Sale-1/CategoryPanels-Sale-1.webp?_i=AA",
                    "imgmobile": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081871/Category-Sale-1/Category-Sale-1.webp?_i=AA",
                    "name": "ON SALE",
                    "_slug": "sale"
                    }
                ]
            }
        };
    },
    async setup(){
        let kratom_category_data = '';
        await axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/acf/v3/header?data_type=homecategory').then((result) => {
                    kratom_category_data = result.data;
                }, (error) => {
                    console.log(error);
                })        
        return {
            kratom_category_data
        }
    },
    /* async fetch() {
        await axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/acf/v3/header?data_type=homecategory').then((result) => {
                    this.kratom_category_data = result.data;
                }, (error) => {
                    console.log(error);
                })
        }, */
    created() {
        //this.fetch();
    },
}

</script>

<style>
.category_sec {
    background-image: linear-gradient(150deg,
            hsl(39deg 95% 60%) 0%,
            hsl(37deg 100% 84%) 11%,
            #FFF2DD 29%, hsl(300deg 100% 100%) 44%,
            #FFF2DD 58%, #FFF2DD 72%,
            hsl(37deg 100% 84%) 86%,
            hsl(39deg 95% 60%) 100%);
}

.category_container {
    padding: 25px 10px 50px 10px;
    max-width: 1700px;
    margin: 0 auto;
    width: 100%;
}

.category_title {
  text-align: center;
  margin: 0;
  padding-top: 40px;
}

.titel_text {
  color: #fab42e;
  font-weight: 600;
}

.titel_text span {
    color: #35492D;
}

.category-name {
    position: absolute;
    top: 10px;
    left: 50px;
    color: black;
}

.cat_img_9 {
    height: 525px !important;
}

a.cat_box {
    position: relative;
    background-image: var(--bgimg);
    background-size: cover;
    height: 250px;
    display: block;
    padding: 15px;
    margin-bottom: 25px;
}

a.cat_box span {
    position: relative;
    z-index: 5;
    font-weight: 600;
    font-size: 18px;
}

a.cat_box:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0;
    z-index: 1;
}

a.cat_box:hover:before {
    opacity: 0.5;
}

@media only screen and (min-width: 320px) and (max-width: 480px) {
    .category_container {
        padding: 0px 20px;
        max-width: 1400px;
        margin: 0 auto;
        width: 100%;
    }
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
    .category_container {
        padding: 30px 5px;
        max-width: 1400px;
        margin: 0 auto;
        width: 100%;
    }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
    .category_container {
        padding: 20px 5px;
        max-width: 1400px;
        margin: 0 auto;
        width: 100%;
    }
}

@media only screen and (min-width: 320px) and (max-width: 767px) {
    .category_sec {
        background-image: linear-gradient(220deg,
                hsl(39deg 95% 60%) 0%,
                hsl(37deg 100% 84%) 11%,
                #FFF2DD 29%, hsl(300deg 100% 100%) 44%,
                #FFF2DD 58%, #FFF2DD 72%,
                hsl(37deg 100% 84%) 86%,
                hsl(39deg 95% 60%) 100%);
    }

    .box {
        display: flex;
        padding: 10px 0px;
    }

    .cat_box.cat_img_1,
    .cat_box.cat_img_3,
    .cat_box.cat_img_5,
    .cat_box.cat_img_7 {
        width: 50%;
        margin: 0 20px 0 0px;
        height: 180px !important;
        text-align: center;
        padding: 10px 0;
    }

    .cat_box.cat_img_2,
    .cat_box.cat_img_4,
    .cat_box.cat_img_6,
    .cat_box.cat_img_8 {
        width: 50%;
        margin: 0;
        height: 180px !important;
        text-align: center;
        padding: 10px 0;
    }

    .cat_box.cat_img_9 {
        width: 100%;
        margin: 0 0px 0 0px;
        height: 180px !important;
        text-align: center;
        padding: 10px 0;
    }

    a.cat_box {
        background-image: var(--bgmimg);
    }
}</style>