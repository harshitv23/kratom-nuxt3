<template>
    <div class="shop-page-wrapper page-buy-kratom-online content_type_page">
        <!-- <KratomTheHeader /> -->
        <TitleBar :title="title" />
        <div class="container pt-50">
            <div class="row flex-row-reverse">
                <div class="col-lg-9">
                    <BuyKratomOnline :page_content="page_content" />
                </div>
                <div class="col-lg-3">
                    <ShopSidebar class="pt-50" />
                </div>
            </div>
        </div>

        <!-- <KratomTheFooter /> -->
    </div>
</template>

<script>
import axios from "axios";
import TitleBar from '../components/kratom/product-category/TitleBar.vue';
import CategoryList from '../components/kratom/product-category/CategoryList.vue';
import BuyKratomOnline from "../components/kratom/page/buyKratomOnline.vue";
import { Buffer } from "buffer";

export default {
    components: {
        TitleBar,
        CategoryList,
        BuyKratomOnline
    },

    data() {
        return {
            title: 'Buy Kratom Online',
            page_content: []
        }
    },

    computed: {

    },

    mounted() {
        omnisend.push(["track", "$pageViewed"]);
    },

    methods: {
        fetch() {
            //const Buffer = require('buffer').Buffer;
            const encodedCredentials = Buffer.from(`${useRuntimeConfig().public.consumer_key}:${useRuntimeConfig().public.secret_key}`).toString('base64');
            axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/wp/v2/pages/174?_embed',
                {
                    params: {
                        per_page: 1
                    },
                    headers: {
                        authorization: 'Basic ' + encodedCredentials
                    }
                }
            ).then((result) => {
                this.page_content = result.data;
            }, (error) => {
                console.log(error);
            }).finally(() => { this.loading = false });
        },
    },

    watch: {

    },
    created() {
        this.fetch();
    },
    head() {
        return {
            htmlAttrs: { lang: 'en-US' },
            title: "Buy Kratom Online at Kratom Spot",
            meta: [
            
            {
                    hid: 'description',
                    name: 'description',
                    content: 'Get the best kratom products online from Kratom Spot. Our premium kratom powder and capsules are 100% natural, organic, and lab-tested. Shop now!'
                },],
            link: [
            {
                href: 'https://kratomspot.com/buy-kratom-online',
                rel: 'canonical'
            },
                
            ],
        }
    },
    /* head() {
        return {
            title: "Buy Kratom Online"
        }
    }, */
};
</script>