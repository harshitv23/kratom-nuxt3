<template>
    <div class="home_banner_new home_banner pt-sm-20 pb-sm-25">
        <picture>
            <!-- <source media="(max-width:767px)" :srcset="kratom_header_data.new_home_page_banner_background_image_mobile">
            <source :srcset="kratom_header_data.new_home_page_banner_background_image">
            <NuxtImg preload :src="kratom_header_data.new_home_page_banner_background_image" alt="Kratom Spot Banner" width="1900" height="917" class="banner_bg" /> -->
            <source media="(max-width:575px)" :srcset="kratom_header_data.new_home_page_banner_background_image_mobile">
            <source media="(max-width:767px)" :srcset="kratom_header_data.new_home_page_banner_background_image_mobile">            
            <img preload :src="kratom_header_data.new_home_page_banner_background_image" alt="Kratom Spot Banner"  width="1900" height="917" class="banner_bg"/>
        </picture>
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-9">
                    <h2 class="d-sm-block" style="" v-html="kratom_header_data.home_page_banner_title"></h2>
                </div>
                <div class="col-lg-7 col-md-9 d-sm-block">
                    <div class="banner_logos">
                        <img width="150" height="150" format="webp" preload
                        :src="kratom_header_data.new_home_banner_certified_review_image"
                        alt="Certified Reviews Kratom Spot" />
                        <img width="150" height="150" format="webp" preload
                        :src="kratom_header_data.new_home_banner_qualified_vendor_image"
                        alt="Qualified Vendor Kratom Spot" />
                    </div>
                </div>
                <div class="homebanner_shop mt-40 ">
                    <div class="slider-btn btn-hover pt-sm-10 pb-sm-10">
                        <NuxtLink to="/shop" class="homebanner_shop_btn d-sm-inline-block" style="">Shop Now</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios";
/* const var1 = useState('user', () => ({
    id : 3,
    name: 'Michael',
    profile: '...',
})); */
export default {
    
    data() {
        return {
            kratom_header_data: {}
            /* kratom_header_data: {
              "new_home_page_banner_background_image": "https://res.cloudinary.com/dv8z5nr6r/images/v1692093518/2023_012_Web-homepage-Banner-8_11-2-1-1/2023_012_Web-homepage-Banner-8_11-2-1-1.webp?_i=AA",
              "new_home_page_banner_background_image_mobile": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081637/2023_012_Web-homepage-Banner-Mobile-8_11/2023_012_Web-homepage-Banner-Mobile-8_11.webp?_i=AA",
              "new_home_banner_certified_review_image": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081679/AKA-BannerIcon/AKA-BannerIcon.webp?_i=AA",
              "new_home_banner_qualified_vendor_image": "https://res.cloudinary.com/dv8z5nr6r/images/v1692081660/Yotpo-BannerIcon-01-2/Yotpo-BannerIcon-01-2.webp?_i=AA",
              "home_page_banner_title": "BUY KRATOM <span>powder and capsules</span> ONLINE"
            } */
        };
    },

    methods: {
        async fetch() {
            console.log(useRuntimeConfig().public.api_url);
            const configs = useRuntimeConfig() //configs.public.
            console.log(configs);
            await axios.get(
                configs.public.api_url + '/wp-json/acf/v3/header?data_type=homebanner').then((result) => {
                    this.kratom_header_data = result.data;
                }, (error) => {
                    console.log(error);
                })
        },
    },
    
    created() {
        this.fetch();
    },
};
</script>

<style>
.home_banner_new.home_banner{
    margin: 0px 0px 0px;
}
.banner_logos {
    display: flex;
    /* width: 100%; */
    align-items: center;
    width: 350px;
    height: 140px;
}
.home_banner_new .banner_logos img{
    margin-top: 0;
}
.home_banner_new .banner_logos img {
    margin-top: 0;
    max-height: unset;
}
.banner_logos img {
    max-height: 150px;
    margin: 10px 10px 10px 0px;
}

@media only screen and (max-width:767px) {
    .banner_logos img {
        max-height: 100px;
    }
    .home_banner_new .banner_logos {
        justify-content: start;
        margin-top: 0px;
        margin-bottom: 0px;
    }
    .home_banner .homebanner_shop {
        margin-top: 0;
    }
    .home_banner_new .banner_logos img {
        margin-top: 10px;
        max-height: 120px;
    }
}</style>