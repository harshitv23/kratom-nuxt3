<template>
    <ul v-if="kratom_header_data">
        <li>
            <NuxtLink v-for="(menu_heading,index) in kratom_header_data.buy_kratom" :key="index" :to="`/${menu_heading.menu_slug}`"> {{ menu_heading.menu_text }} <i class="fa fa-angle-down"></i></NuxtLink>
            <ul class="mega-menu mega-menu-padding">
                <li class="mega-menu-img mb-2 mega_menu_col-3 text-center menu_img_column_center">
                    <img format="webp" loading="lazy" width="135" height="280" class="w-auto menu_cat_img" :src="`${useRuntimeConfig().public.site_url}/img/kratom/redkratom.png`" alt="Kratom Spot" />
                    <!-- <img loading="lazy" width="135" height="280" class="w-auto max-width-135 menu_cat_img" :src="`${useRuntimeConfig().public.site_url}/img/kratom/redkratom.png`" alt="Kratom Spot" /> -->
                </li>
                <li class="mega_menu_col-3">
                    <ul>
                        <li class="mega-menu-title">
                            <span>Shop by Strain</span>
                        </li>
                        <li v-for="(submenu,index) in kratom_header_data.buy_kratom_kratom_strains" :key="index">
                            <NuxtLink :to="`/${submenu.menu_slug}`" :cimg="submenu.category_menu_image">{{ submenu.menu_text }}</NuxtLink>
                        </li>
                    </ul>
                </li>
                <li class="mega_menu_col-3">
                    <ul>
                        <li class="mega-menu-title">
                            <span>Shop by Products</span>
                        </li>
                        <li v-for="(submenu,index) in kratom_header_data.buy_kratom_kratom_category" :key="index">
                            <NuxtLink :to="`/${submenu.menu_slug}`" :cimg="submenu.category_menu_image">{{ submenu.menu_text }}</NuxtLink>
                        </li>
                    </ul>
                </li>
                <!-- <li class="menu-border-left mega_menu_col-4">
                    <ul>
                        <li class="mega-menu-title">
                            <span>Kratom Detail</span>
                        </li>
                        <li v-for="(submenu,index) in kratom_header_data.kratom_university_kratom_detail_submenu" :key="index">
                            <NuxtLink :to="`/${submenu.menu_slug}`">{{ submenu.menu_text }}</NuxtLink>
                        </li>
                    </ul>
                </li> -->
            </ul>
        </li>
        <!-- <li>
            <NuxtLink v-for="(menu_heading,index) in kratom_header_data.kratom_strains" :key="index" :to="menu_heading.menu_slug"> {{ menu_heading.menu_text }} <i class="fa fa-angle-down"></i></NuxtLink>
            <ul class="submenu">
                <li v-for="(submenu, index) in kratom_header_data.buy_kratom_kratom_strains" :key="index">
                    <NuxtLink :to="`/${submenu.menu_slug}`">{{ submenu.menu_text }}</NuxtLink>
                </li>
            </ul>
        </li> -->
        <li>
            <a :href="`/${kratom_header_data.blog_slug}`"> Kratom News </a>
            <!-- <ul class="submenu">
                <li class="">
                    <ul>
                        <li>
                            <NuxtLink :to="`/${kratom_header_data.blog_slug}`">Kratom News</NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul> -->
        </li>
        <li>
            <a v-for="(menu_heading,index) in kratom_header_data.our_story" :key="index" :href="`/${menu_heading.menu_slug}`">{{ menu_heading.menu_text }}</a>
        </li>
        <li>
            <a v-for="(menu_heading,index) in kratom_header_data.wholesale" :key="index" :href="`/${menu_heading.menu_slug}`"> {{ menu_heading.menu_text }} </a>
        </li>
        <li>
            <a v-for="(menu_heading,index) in kratom_header_data.our_reviews" :key="index" :href="`/${menu_heading.menu_slug}`"> {{ menu_heading.menu_text }} </a>
        </li>
    </ul>
</template>

<script>
import $ from "jquery";
export default {
    props : ['kratom_header_data'],
    data() {
        return {
            // kratom_header_data: '',
            //kratom_header_data: {"twitter_link":"https:\/\/twitter.com\/kspot_naturals","instagram_link":"https:\/\/www.instagram.com\/kspot_naturals\/","youtube_link":"https:\/\/www.youtube.com\/channel\/UCwn1_B06zZufKrmj7JtiB7g","pinterest_link":"https:\/\/www.pinterest.com\/kspot_naturals\/","contact_us_slug":"kratom-spot-customer-support","topbar_user_coupon_text":"USE COUPON CODE KSPOT15 TO SAVE 15% AT CHECKOUT","blog_slug":"blog","buy_kratom":[{"menu_text":"Buy Kratom","menu_slug":"buy-kratom-online"}],"kratom_strains":[{"menu_text":"Shop by Strain","menu_slug":"kratom-categories"}],"buy_kratom_kratom_strains":[{"menu_text":"Red Veins","menu_slug":"red-vein-kratom"},{"menu_text":"White Veins","menu_slug":"white-vein-kratom"},{"menu_text":"Green Veins","menu_slug":"green-vein-kratom"},{"menu_text":"Bali Kratom","menu_slug":"bali-kratom-powders-capsules"},{"menu_text":"Indo Kratom ","menu_slug":"indo-kratom"},{"menu_text":"Maeng Da Kratom","menu_slug":"maeng-da-kratom-powders-capsules"},{"menu_text":"Thai Kratom","menu_slug":"thai-kratom-buy-kratom-online"},{"menu_text":"Malay Kratom","menu_slug":"malay-kratom"},{"menu_text":"Sumatra Kratom","menu_slug":"sumatra-kratom"}],"buy_kratom_kratom_category":[{"menu_text":"Kratom Capsules","menu_slug":"kratom-capsules-for-sale"},{"menu_text":"Kratom Powders","menu_slug":"kratom-powder"},{"menu_text":"Kratom Extracts","menu_slug":"buy-kratom-extract"},{"menu_text":"Kratom Shots","menu_slug":"kratom-shots"},{"menu_text":"Kratom Deals","menu_slug":"special"},{"menu_text":"Kratom Leaves","menu_slug":"kratom-leaves"}],"kratom_university_kratom_detail_submenu":[{"menu_text":"Kratom News","menu_slug":"blog"},{"menu_text":"Wholesale","menu_slug":"wholesale-kratom"},{"menu_text":"Support","menu_slug":"kratom-spot-customer-support"},{"menu_text":"Accessories And Merchandise","menu_slug":"accessories-and-merchandise"}],"our_story":[{"menu_text":"Our Story","menu_slug":"about-kratom-spot"}],"wholesale":[{"menu_text":"Wholesale","menu_slug":"about-kratom-spot"}],"our_reviews":[{"menu_text":"Our Reviews","menu_slug":"our-reviews"}],"footer_phone":"8885102038","footer_email":"info@kratomspot.com"}
        }
    },
    computed: {
        navigation() {
            return this.$store.state.header_data.navigation;
        },
    },
    methods: {
        /* fetch() {
            axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/acf/v3/header?data_type=header_section').then((result) => {
                    this.kratom_header_data = result.data;
                }, (error) => {
                    console.log(error);
                })
        } */
    },
    mounted(){
        setTimeout(() => {
            $(".main-menu nav ul li ul.mega-menu > li ul li a").on("mouseover", function () {       
                
                if($(this).attr('cimg') != undefined){
                    $('.menu_cat_img').attr('src',$(this).attr('cimg'));
                }    
            });  
        }, 1000)
        /* $(".main-menu nav ul li ul.mega-menu > li ul li a").on("mouseover", function () {
            console.log($(this));
            if($(this).attr('cimg') != undefined){
                $('.menu_cat_img').attr('src',$(this).attr('cimg'));
            }    
        });    */
    },
    created() {    
         
        //this.fetch()
        //this.$store.dispatch('loadPosts');  
    }
};
</script>

<style>
/*Mega Menu Css - Start*/

.mega-menu .mega-menu-img {
    padding-right: 40px !important;
}

.mega-menu .menu-border-left {
    border-left: 2px solid #d1d1d1 !important;
    padding-left: 50px !important;
}

.main-menu nav ul li ul.mega-menu {
    width: 900px;
    padding: 40px 40px 40px 40px !important;
}

.main-menu .mega_menu_col-4 {
    width: 25% !important;
}

/* .main-menu nav ul li ul.submenu li a, .main-menu nav ul li ul.mega-menu > li ul li a  {
    font-size: 14px;
} */
/*Mega Menu Css - END*/
</style>