<template>
    <div class="offcanvas-mobile-menu-wrapper">
        <div class="mobile-menu-overlay" @click="$emit('toggleAsideMenu')"></div>
        <div class="mobile-menu-inner">
            <button class="close-btn" @click="$emit('toggleAsideMenu')">
                <i class="pe-7s-close"></i>
            </button>
            <div class="mobile-menu-inner-wrapper">
                <div class="offcanvas-mobile-search">
                    <form class="mobile-search-inner" :action="`${this.$config.site_url}/s`">
                        <input type="text" placeholder="Search here" name="s">
                        <button type="submit"><i class="pe-7s-search"></i></button>
                    </form>
                </div>
                <div class="offcanvas-body-inner">
                    <div class="menu-navigation">
                        <ResponsiveMobileMenu :kratom_header_data = "kratom_header_data"/>
                    </div>
                    <div class="offcanvas-widget-area">
                        <ul v-if="kratom_header_data">
                            <li>
                                <i class="fa fa-phone"></i>
                                <a :href="`callto:${kratom_header_data.footer_phone}`"> {{ kratom_header_data.footer_phone }} </a>
                            </li>
                            <li>
                                <i class="fa fa-envelope"></i>
                                <a :href="`mailto:${kratom_header_data.footer_email}`"> {{ kratom_header_data.footer_email }} </a>
                            </li>
                        </ul>
                    </div>
                    <!-- <div class="offcanvas-widget-area-rewards">
                        <NuxtLink :to="`/rewards`">Rewards</NuxtLink>
                        <NuxtLink :to="`/${kratom_header_data.contact_us_slug}`">Contact us</NuxtLink>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios";

export default {
    props: ['kratom_header_data'],
    data() {
        return {
            //kratom_header_data: ''
        }
    },
    components: {
        ResponsiveMobileMenu: () => import('@/components/ResponsiveMobileMenu'),
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