<template>
    <div class="find_your_favourite_new_main pl-sm-0 pr-sm-0 pl-20 pr-20" v-if="kratom_find_data">
        <div class="find_your_favourite_new">
            <div class="row">
                <div class="col-12 col-lg-4 pl-20 pr-20 pt-sm-20" v-for="(find, index) in kratom_find_data.kratom_find" :key="index">
                    <div class="row pb-30 pb-sm-20 align-items-center">
                        <div class="col-3 col-md-2 col-lg-2 pr-0"><img
                                :src="find.icon"
                                width="80" height="72" alt="icon-1" loading="lazy" class="">
                        </div>
                        <div class="col-9">
                            <h3 class="mb-0" v-html="find.titel"></h3>
                        </div>
                    </div>
                    <div class="row pr-sm-0 pr-lg-20 pr-10">
                        <div class="col-12 fyfn_desc" v-html="find.description"></div>
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
            kratom_find_data: {
                "kratom_find": [
                    {
                    "icon": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1676271818/fav2_217468d6ce5/fav2_217468d6ce5.png?_i=AA",
                    "titel": "Purchase Kratom Securely",
                    "description": "If you've been around the kratom industry, you're aware that credit card processing for kratom is not always available. At Kratom Spot, we are at the forefront, consistently advocating for Kratom. You have the option to purchase our exceptional kratom products using various methods. We now accept all major credit cards, E-Check through Autorize.net, ACH, or Cryptocurrency through Coinbase. Rest assured that all our payment methods are safe and secure, providing you with peace of mind."
                    },
                    {
                    "icon": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1676271799/fav1_217467758b3/fav1_217467758b3.png?_i=AA",
                    "titel": "Find Your Favorite Strain of Kratom",
                    "description": "At Kratom Spot, we carefully source all our strains from the most experienced and sustainable farms in Indonesia. Our close connection with our farming partners in Borneo makes them an integral part of our Kratom Spot family. Upon arrival, our small batch strains are independently lab tested to ensure purity, potency, and overall quality. We then meticulously process and package each strain in a Certified GMP (Good Manufacturing Practices) facility. With our innovative fresh seal packaging, your favorite strains stay fresh for longer, delivering an exceptional Kratom experience."
                    },
                    {
                    "icon": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1676271818/fav2_217468d6ce5/fav2_217468d6ce5.png?_i=AA",
                    "titel": "The Best Place to Buy Kratom Online",
                    "description": "At Kratom Spot, our customers are at the center of everything that we do. We have personally gone through countless batches, so you don't have to. We firmly believe that not all kratom should be sold, which is why we meticulously test and evaluate our products to ensure they meet exceptional standards before making them available to you. Our commitment to customer satisfaction is evident through our same-day shipping, 100% Satisfaction Guarantee, and exceptional customer service."
                    }
                ]
            }
        };
    },
    computed: {

    },
    methods: {
        fatch() {
            axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/acf/v3/header?data_type=homefind').then((result) => {
                    this.kratom_find_data = result.data;
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

.find_your_favourite_new_main {
    margin-top: 120px;
}
.find_your_favourite_new {
    max-width: 1700px;
    display: block;
    margin: 0px auto;
    width: 100%;
    padding: 70px;
    background-image: linear-gradient( 150deg, hsl(39deg 95% 60%) 0%, hsl(37deg 100% 84%) 11%, hsl(300deg 100% 100%) 29%, hsl(300deg 100% 100%) 44%, hsl(300deg 100% 100%) 58%, hsl(300deg 100% 100%) 72%, hsl(37deg 100% 84%) 86%, hsl(39deg 95% 60%) 100% );
    margin-top: 80px;
    position: relative;
    overflow: visible;
}
.find_your_favourite_new h3{
    font-size: 35px;
}
.fyfn_desc {
    font-size: 16px;
    text-align: justify;
    color: #333;
}
.find_your_favourite_new:before {
    content: url(https://res.cloudinary.com/dv8z5nr6r/images/v1692081987/kratom-discover-img_21747296536_22909855d9a/kratom-discover-img_21747296536_22909855d9a.webp?_i=AA);
    bottom: -60px;
    position: absolute;
    left: -120px;
}
.find_your_favourite_new:after {
    content: url(https://res.cloudinary.com/dv8z5nr6r/images/v1692081986/fav5_229099838fd/fav5_229099838fd.webp?_i=AA);
    top: -70px;
    position: absolute;
    right: -20px;
}
@media only screen and  (max-width: 1200px) 
{ 
    .find_your_favourite_new {
        padding: 50px 40px;
    }
    .find_your_favourite_new h3 {
        font-size: 25px;
    }
}
@media only screen and (max-width:991px){
    .find_your_favourite_new {
        padding: 60px;
    }
    .find_your_favourite_new_main {
        margin-top: 0px;
    }
}
@media only screen and (max-width:767px){
    .find_your_favourite_new {
        background-image: linear-gradient( 220deg, hsl(40deg 95% 60%) 0%, hsl(40deg 100% 85%) 20%, hsl(440deg 100% 100%) 40%, hsl(600deg 100% 100%) 20%, hsl(440deg 100% 100%) 25%, hsl(300deg 100% 100%) 20%, hsl(40deg 100% 84%) 83%, hsl(30deg 95% 60%) 100% );
        padding: 15px;
        margin-top: 40px;
    }

    .find_your_favourite_new h3{
        font-size: 24px;
        color: #333;
    }

    .find_your_favourite_new:before,.find_your_favourite_new:after {
        opacity: 0;
    }

    .find_your_favourite_new_main {
        margin-top: 0px;
    }
}
@media only screen and (min-width: 769px) and (max-width: 1024px) 
{ 
    .find_your_favourite_new h3 {
        font-size: 20px;
    }
}
</style>