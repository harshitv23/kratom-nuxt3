<template>
    <ul class="mobile-menu" data-v-71ab4b50="">
        <li data-v-71ab4b50="" class="active">
            <NuxtLink v-for="menu_heading in kratom_header_data.buy_kratom" :to="`/${menu_heading.menu_slug}`" data-v-71ab4b50="" class="" v-if="kratom_header_data.buy_kratom" > {{ menu_heading.menu_text }} </NuxtLink> 
            <span class="submenu-toggle active" data-v-71ab4b50="">
                <i class="fa fa-plus" data-v-71ab4b50=""></i>
            </span>
            <ul class="submenu active" data-v-71ab4b50="">
                <li class="title" data-v-71ab4b50="">
                    <NuxtLink to="" data-v-71ab4b50="" class=""> Shop by Strain </NuxtLink> 
                    <span class="submenu-toggle" data-v-71ab4b50="">
                        <i class="fa fa-plus" data-v-71ab4b50=""></i>
                    </span>
                    <ul class="submenu" data-v-71ab4b50="">
                        <li data-v-71ab4b50="" v-for="submenu in kratom_header_data.buy_kratom_kratom_strains">
                            <NuxtLink :to="`/${submenu.menu_slug}`">{{ submenu.menu_text }}</NuxtLink>
                        </li>
                    </ul>
                </li>
                <li class="title active" data-v-71ab4b50="">
                    <NuxtLink to="" data-v-71ab4b50="" class=""> Shop by Products </NuxtLink>
                    <span class="submenu-toggle active" data-v-71ab4b50="">
                        <i class="fa fa-plus" data-v-71ab4b50=""></i>
                    </span>
                    <ul class="submenu active" data-v-71ab4b50="">
                        <li data-v-71ab4b50="" v-for="submenu in kratom_header_data.buy_kratom_kratom_category">
                            <NuxtLink :to="`/${submenu.menu_slug}`">{{ submenu.menu_text }}</NuxtLink>
                        </li>
                    </ul>
                </li>
                <!-- <li class="title" data-v-71ab4b50="">
                    <NuxtLink to="" data-v-71ab4b50="" class=""> Kratom Details </NuxtLink>
                    <span class="submenu-toggle" data-v-71ab4b50="">
                        <i class="fa fa-plus" data-v-71ab4b50=""></i>
                    </span>
                    <ul class="submenu" data-v-71ab4b50="">
                        <li v-for="submenu in kratom_header_data.kratom_university_kratom_detail_submenu">
                            <NuxtLink :to="submenu.menu_slug">{{ submenu.menu_text }}</NuxtLink>
                        </li>
                    </ul>
                </li> -->
            </ul>
        </li>
        <!-- <li data-v-71ab4b50="">
            <NuxtLink v-for="menu_heading in kratom_header_data.kratom_strains" :to="`/${menu_heading.menu_slug}`" data-v-71ab4b50="" class="" v-if="kratom_header_data"> {{ menu_heading.menu_text }} </NuxtLink> 
            <span class="submenu-toggle" data-v-71ab4b50="">
                <i class="pe-7s-angle-down" data-v-71ab4b50=""></i>
            </span>
            <ul class="submenu" data-v-71ab4b50="">
                <li class="title" data-v-71ab4b50="" v-for="submenu in kratom_header_data.buy_kratom_kratom_strains" v-if="kratom_header_data">
                    <NuxtLink :to="`/${submenu.menu_slug}`" data-v-71ab4b50="" class="">{{ submenu.menu_text }}</NuxtLink>
                </li>
            </ul>
        </li> -->
        <li data-v-71ab4b50="">
            <a :href="`/${kratom_header_data.blog_slug}`" data-v-71ab4b50="" class="" v-if="kratom_header_data"> Kratom News </a>
        </li>
        <!-- <li data-v-71ab4b50="">
            <NuxtLink :to="kratom_header_data.blog_slug" aria-current="page" class="nuxt-link-exact-active nuxt-link-active" data-v-71ab4b50="" v-if="kratom_header_data"> Kratom University </NuxtLink> 
            <span class="submenu-toggle" data-v-71ab4b50="">
                <i class="pe-7s-angle-down" data-v-71ab4b50=""></i>
            </span>
            <ul class="submenu" data-v-71ab4b50="">
                <li data-v-71ab4b50="">
                    <NuxtLink :to="kratom_header_data.blog_slug" data-v-71ab4b50="" class="" v-if="kratom_header_data">Kratom News</NuxtLink>
                </li>
            </ul>
        </li> -->
        <li data-v-71ab4b50="">
            <a v-for="menu_heading in kratom_header_data.our_story" :href="`/${menu_heading.menu_slug}`" data-v-71ab4b50="" class="" v-if="kratom_header_data"> {{ menu_heading.menu_text }} </a>
        </li>
        <li data-v-71ab4b50="">
            <a v-for="menu_heading in kratom_header_data.wholesale" :href="`/${menu_heading.menu_slug}`" data-v-71ab4b50="" class="" v-if="kratom_header_data"> {{ menu_heading.menu_text }} </a>
        </li>
        <li data-v-71ab4b50="">
            <a v-for="menu_heading in kratom_header_data.our_reviews" :href="`/${menu_heading.menu_slug}`" data-v-71ab4b50="" class="" v-if="kratom_header_data"> {{ menu_heading.menu_text }} </a>
        </li>        
    </ul>
</template>

<script>

import axios from "axios";
import $ from 'jquery';

export default {
    props: ['kratom_header_data'],
    data() {
        return {
            /* kratom_header_data: {
                "twitter_link": "https://twitter.com/kspot_naturals",
                "instagram_link": "https://www.instagram.com/kspot_naturals/",
                "youtube_link": "https://www.youtube.com/channel/UCwn1_B06zZufKrmj7JtiB7g",
                "pinterest_link": "https://www.pinterest.com/kspot_naturals/",
                "contact_us_slug": "kratom-spot-customer-support",
                "topbar_user_coupon_text": "USE COUPON CODE KSPOT15 TO SAVE 15% AT CHECKOUT",
                "blog_slug": "blog",
                "buy_kratom": [
                    {
                    "menu_text": "Buy Kratom",
                    "menu_slug": "buy-kratom-online"
                    }
                ],
                "kratom_strains": [
                    {
                    "menu_text": "Shop by Strain",
                    "menu_slug": "kratom-strains"
                    }
                ],
                "buy_kratom_kratom_strains": [
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
                    "menu_text": "Indo Kratom ",
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
                "buy_kratom_kratom_category": [
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
                    "menu_slug": "bundleandsave"
                    },
                    {
                    "menu_text": "Kratom Leaves",
                    "menu_slug": "kratom-leaves"
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
                    "menu_slug": "about-kratom-spot"
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
            } */
        }
    },
    mounted() {

        $('body').on('click','.mobile-menu .submenu li.title > a',function(){
           $(this).closest('li').find('.submenu-toggle').trigger('click');
        })


        let getSiblings = function (e) {
            let siblings = [];
            if (!e.parentNode) {
                return siblings;
            }
            let sibling = e.parentNode.firstChild;
            while (sibling) {
                if (sibling.nodeType === 1 && sibling !== e) {
                    siblings.push(sibling);
                }
                sibling = sibling.nextSibling;
            }
            return siblings;
        };

        const subMenuToggle = document.querySelectorAll('.submenu-toggle');
        subMenuToggle.forEach(function (btn) {
            btn.addEventListener('click', function () {
                if (!this.classList.contains('active')) {
                    this.classList.add('active')
                    this.nextElementSibling.classList.add('active')
                    this.closest('li').classList.add('active')
                    getSiblings(this.closest('li')).forEach(function (item) {
                        item.classList.remove('active')
                        item.querySelectorAll('li, .submenu-toggle, .submenu').forEach(function (child) {
                            child.classList.remove('active')
                        })
                    })
                } else {
                    this.closest('li').classList.remove('active')
                    this.closest('li').querySelectorAll('li, .submenu-toggle, .submenu').forEach(function (child) {
                        child.classList.remove('active')
                    })
                }
            })
        })
    },
    methods: {
        /* fatch() {
            axios.get(
                this.$config.api_url + '/wp-json/acf/v3/header?data_type=header_section').then((result) => {
                    this.kratom_header_data = result.data;
                }, (error) => {
                    console.log(error);
                })
        }, */
    },
    created() {
        //this.fatch();
    },
}
</script>



<style lang='scss' scoped>
.mobile-menu {
    li:not(:last-child) {
        margin-bottom: 5px;
    }

    li {
        position: relative;

        a {
            font-weight: 600;
            line-height: 35px;
            text-transform: capitalize;
        }
    }

    .submenu {
        display: none;
        padding-top: 5px;
        padding-left: 15px;

        &.active {
            display: block;
        }

        li {
            margin-bottom: 5px;

            &.title> {
                a {
                    font-weight: 500;
                }
            }

            .submenu {
                li {
                    a {
                        line-height: 25px;
                        font-weight: 400;
                    }
                }
            }
        }
    }

    .submenu-toggle {
        width: 35px;
        height: 35px;
        background-color: #f3f3f3;
        text-align: center;
        font-size: 28px;
        display: inline-block;
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;

        i {
            transition: 0.3s;
            line-height: 35px;
        }

        &.active {
            i {
                transform: rotate(-180deg);
            }
        }
    }
}
</style>