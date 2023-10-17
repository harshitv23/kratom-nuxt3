<template>
    <div class="shop-page-wrapper">
        <!-- <KratomTheHeader />         -->
        <KratomSearch/>
        <!-- <KratomTheFooter /> -->
    </div>
</template>

<script>
import axios from "axios";
import TitleBar from '../components/kratom/product-category/TitleBar.vue';
import CategoryList from '../components/kratom/product-category/CategoryList.vue';
import { Buffer } from "buffer";
export default {
    components: {
        
        ProductGridItem: () => import("@/components/product/ProductGridItem"),
        
        TitleBar,
        CategoryList
    },

    data() {
        return {
            layout: "threeColumn",
            filterItems: [],
            prevSelectedCategoryName: '',
            prevSelectedTagName: '',
            prevSelectedSizeName: '',
            prevSelectedColorName: '',
            currentPage: 1,
            perPage: 9,
            selectedPrice: 'default',
            slug: useRoute().params.slug,
            kratom_products: '',
            category_id: '',
            title: 'Buy Kratom Online',
            s: useRoute().query.s,
            loading: true
        }
    },

    computed: {
        products() {
            return this.$store.getters.getProducts
        },

        getItems() {
            let start = (this.currentPage - 1) * this.perPage;
            let end = this.currentPage * this.perPage;
            return this.filterItems.slice(start, end);
        },
        getPaginateCount() {
            return Math.ceil(this.filterItems.length / this.perPage);
        },
    },

    mounted() {
        this.updateProductData()
        omnisend.push(["track", "$pageViewed"]);
    },   
    methods: {
        sortby(event) {
            //const Buffer = require('buffer').Buffer;
            const encodedCredentials = Buffer.from(`${useRuntimeConfig().public.consumer_key}:${useRuntimeConfig().public.secret_key}`).toString('base64');
            this.loading = true;
            var sortby = event.target.value;

            if (sortby == 'price-desc') {
                var params = {
                    per_page: 100,
                    order: 'desc',
                    orderby: 'price',
                    status: 'publish',
                    search: useRoute().query.s,
                    /* consumer_key: useRuntimeConfig().public.consumer_key,
                    consumer_secret: useRuntimeConfig().public.secret_key, */
                }
            } else {
                var params = {
                    per_page: 100,
                    order: 'asc',
                    orderby: sortby,
                    status: 'publish',
                    search: useRoute().query.s,
                    /* consumer_key: useRuntimeConfig().public.consumer_key,
                    consumer_secret: useRuntimeConfig().public.secret_key, */
                }

            }

            axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/wc/v3/products',
                {
                    params: params,
                        headers: {
                            authorization: 'Basic ' + encodedCredentials
                        }
                }
            ).then((result) => {
                this.kratom_products = result.data;
            }, (error) => {
                console.log(error);
            }).finally(() => { this.loading = false });

        },              
    },

    watch: {                
    },
    created() {        
    },
    head() {
            return {
                htmlAttrs: { lang: 'en-US' },
                title: "Search Kratomspot",
                meta: [
            ],
            link: [
            
        ],
            }
        },
    /* head() {
        return {
            title: "Search Kratomspot"
        }
    }, */
};
</script>
