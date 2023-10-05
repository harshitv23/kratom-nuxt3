<template>
    <div class="home_banner_main_div">
    <!-- <div class="home_banner pt-sm-0 pb-sm-0" id="mob-banner">
		<img :src="`${this.$config.site_url}/img/kratom/mobile_banner_image.jpg`"/>
	</div>
    <div class="after_banner1 d-sm-block" id="mob-afterbanner" style="display:none;">
        <img :src="`${this.$config.site_url}/img/kratom/bannerbg-2.png`"/>
    </div> -->
    <!-- <div class="home_banner home_banner_mob pt-sm-10 pb-sm-25" :style="`background-image:url(${home_page_banner_background_image_mobile2});`">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-9">
                    <h2 v-html="kratom_header_data.home_page_banner_title"></h2>                    
                    <div class="homebanner_shop">                        
                        <div class="slider-btn btn-hover pt-sm-20 pb-sm-20"><NuxtLink to="/shop" class="homebanner_shop_btn">Shop Now</NuxtLink></div>
                    </div>
                </div>                
            </div>
        </div>
    </div>
    <div class="after_banner1 d-sm-block" id="mob-afterbanner" style="display:none;">
        <NuxtImg width="1600" height="157" format="webp" loading="lazy"  src="https://res.cloudinary.com/dv8z5nr6r/images/v1676547633/bannerbg-2-gray-1/bannerbg-2-gray-1.png?_i=AA"/>
    </div> -->
    <div class="home_banner pt-sm-20 pb-sm-25">
        <!-- <div class="home_banner pt-sm-10 pb-sm-25" :style="`background-image:url(${kratom_header_data.home_page_banner_background_image});`"></div> -->
        <!-- <img :src="kratom_header_data.home_page_banner_background_image" :srcset="`${home_page_banner_background_image_mobile2} 767w`" class="banner_bg"> -->
        <picture>
            <source media="(max-width:575px)" :srcset="home_page_banner_background_image_mobile_400">
            <source media="(max-width:767px)" :srcset="home_page_banner_background_image_mobile_767">            
            <NuxtImg preload :src="kratom_header_data.home_page_banner_background_image" alt="Kratom Spot Banner"  width="1900" height="917" class="banner_bg"/>
        </picture>
        <!-- <img width="1900" height="917" :srcset="`${home_page_banner_background_image_mobile2} 700w,
                    ${kratom_header_data.home_page_banner_background_image} 1900w`" 
            :src="kratom_header_data.home_page_banner_background_image"
            class="banner_bg"/> -->
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-9">
                    <h2 class="d-sm-block" style="" v-html="kratom_header_data.home_page_banner_title"></h2>
                    <i v-html="kratom_header_data.home_banner_text_1" class="d-sm-block" style="display:none;"></i>
                    <div class="banner_sep mt-sm-10 d-sm-block" style="display:none;"></div>                   
                    <div v-html="kratom_header_data.home_banner_text_2" class="d-sm-block" style="display:none;"></div>
                    <div class="banner_sep mt-sm-10 d-sm-block" style="display:none;"></div>
                    <div v-if="kratom_header_data.home_banner_text_4 && kratom_header_data.home_banner_text_4 != ''" v-html="kratom_header_data.home_banner_text_4" class="d-sm-block" style="display:none;"></div>
                    <div v-if="kratom_header_data.home_banner_text_4 && kratom_header_data.home_banner_text_4 != ''" class="banner_sep mt-sm-10 d-sm-block" style="display:none;"></div>                    
                    <div class="homebanner_shop">
                        <div class="font-weight-400 pr-30 pr-sm-0 mb-md-30 d-sm-block" style="display:none;" v-html="kratom_header_data.home_banner_text_3"></div>
                        <div class="slider-btn btn-hover pt-sm-20 pb-sm-20 text-center">
                            <NuxtLink to="/shop" class="homebanner_shop_btn d-sm-inline-block" style="">Shop Now</NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">

                </div>
                <div class="col-lg-7 col-md-9 d-sm-block" style="display:none;" >
                    <div class="banner_logos">
                        <NuxtImg width="150" height="150" format="webp" loading="lazy" :src="kratom_header_data.home_banner_certified_review_image" alt="Certified Reviews Kratom Spot"/>
                        <NuxtImg width="150" height="151" format="webp" loading="lazy" :src="kratom_header_data.home_banner_qualified_vendor_image" alt="Qualified Vendor Kratom Spot"/>
                                
                            </div> 
                </div>
            </div>
        </div>
    </div>
    <div class="after_banner">
        <picture>
            <source media="(max-width:575px)" srcset="https://res.cloudinary.com/dv8z5nr6r/images/v1676547633/bannerbg-2-gray-1/bannerbg-2-gray-1.png?_i=AA">            
            <img src="https://res.cloudinary.com/dv8z5nr6r/images/v1676547781/bannerbg-2_21775495b52/bannerbg-2_21775495b52.png?_i=AA" alt="ks"  width="1600" height="157">
        </picture>
        <!-- <img width="1600" height="157" loading="lazy"
            :srcset="`https://res.cloudinary.com/dv8z5nr6r/images/v1676547633/bannerbg-2-gray-1/bannerbg-2-gray-1.png?_i=AA 700w,
                    https://res.cloudinary.com/dv8z5nr6r/images/v1676547781/bannerbg-2_21775495b52/bannerbg-2_21775495b52.png?_i=AA 1900w`" 
            src="https://res.cloudinary.com/dv8z5nr6r/images/v1676547781/bannerbg-2_21775495b52/bannerbg-2_21775495b52.png?_i=AA"/> -->
    </div>
    <div class="home_banner pt-sm-10 pb-sm-25 d-sm-none">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-9">                    
                    <i v-html="kratom_header_data.home_banner_text_1"></i>
                    <div class="banner_sep mt-sm-10 mb-sm-10"></div>                   
                    <div v-html="kratom_header_data.home_banner_text_2"></div>
                    <div class="banner_sep mt-sm-10 mb-sm-10"></div>
                    <div v-if="kratom_header_data.home_banner_text_4 && kratom_header_data.home_banner_text_4 != ''" v-html="kratom_header_data.home_banner_text_4"></div>
                    <div v-if="kratom_header_data.home_banner_text_4 && kratom_header_data.home_banner_text_4 != ''" class="banner_sep mt-sm-10 mb-sm-10"></div>
                    <div class="homebanner_shop">
                        <div class="font-weight-400 pr-30 pr-sm-0 mb-md-30" v-html="kratom_header_data.home_banner_text_3"></div>
                        <div class="slider-btn btn-hover pt-sm-20 pb-sm-20 text-center">                            
                        </div>
                    </div>
                </div>
                <div class="col-md-5">

                </div>
                <div class="col-lg-7 col-md-9">
                    <div class="banner_logos">
                        <NuxtImg width="150" height="150" format="webp"    loading="lazy"  :src="kratom_header_data.home_banner_certified_review_image" alt="Certified Reviews Kratom Spot"/>
                        <NuxtImg width="150" height="151" format="webp"    loading="lazy"  :src="kratom_header_data.home_banner_qualified_vendor_image" alt="Qualified Vendor Kratom Spot"/>
                                
                            </div> 
                </div>
            </div>
        </div>
    </div>
    
    </div>
</template>

<script>

    import axios from "axios";
    export default {
    data() {
        return {
            home_page_banner_background_image_mobile_767: "https://res.cloudinary.com/dv8z5nr6r/images/v1677741844/2023_012_Web-Homepage-Banner-_1_-1-1/2023_012_Web-Homepage-Banner-_1_-1-1.webp?_i=AA",
            home_page_banner_background_image_mobile_400: "https://res.cloudinary.com/dv8z5nr6r/images/v1677837865/2023_012_Web-Homepage-Banner-_1_-1-1-1-1/2023_012_Web-Homepage-Banner-_1_-1-1-1-1.webp?_i=AA",
            kratom_header_data: {                                
                "home_page_banner_background_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1677597527/2023_012_Web-Homepage-Banner-_1_-1/2023_012_Web-Homepage-Banner-_1_-1.webp?_i=AA",
                "home_page_banner_title": "BUY KRATOM <span>powder and capsules</span> ONLINE",
                "home_banner_text_1": 'Welcome to <a href="https://kratomspot.com/about-kratom-spot">Kratom Spot</a>, your destination for the finest quality kratom products. We carefully hand-select the best green, red, and white strains and offer a wide variety of kratom products to suit every preference and need.',
                "home_banner_text_2": 'Whether you prefer <a href="https://kratomspot.com/kratom-powder">powders</a>, <a href="https://kratomspot.com/kratom-capsules-for-sale">capsules</a>, <a href="https://kratomspot.com/kratom-shots">drinks</a>, or <a href="https://kratomspot.com/buy-kratom-extract">extracts</a>, we have everything you need to enjoy the many benefits of this incredible plant. We’re committed to providing our customers with an exceptional experience, from the quality of our products to the level of customer service we offer.',
                "home_banner_text_4": "At Kratom Spot, we do the hard work to ensure every harvest is small batch and rigorously tested for purity and strength. We're confident you'll love our kratom as much as we do, which is why we offer a <b>100% satisfaction guarantee</b> on all our products.",
                "home_banner_text_3": "Shop with confidence, order now and experience the Kratom Spot difference.",
                "home_banner_certified_review_image": "https://res.cloudinary.com/dv8z5nr6r/images/v1676460896/banner_logo_1-1-1-1_2176597fdf3/banner_logo_1-1-1-1_2176597fdf3.png?_i=AA",
                "home_banner_qualified_vendor_image": "https://res.cloudinary.com/dv8z5nr6r/images/v1676460904/banner_logo_2_217450bc348_2176603bfd9/banner_logo_2_217450bc348_2176603bfd9.png?_i=AA"
                }
        };
    },
    computed: {

    },
    methods: {
        fatch() {
            axios.get(
                this.$config.api_url + '/wp-json/acf/v3/header?data_type=banner').then((result) => {
                    this.kratom_header_data = result.data;
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
.banner_logos {
    display: flex;
    width: 100%;    
    align-items: center;
}

.banner_logos img {
    max-height: 120px;
    margin: 20px 5px 0;
}
@media only screen and (max-width:767px){
    .banner_logos {
        justify-content: center;
        margin-top: -20px;
        margin-bottom: 20px;
    }
}
</style>