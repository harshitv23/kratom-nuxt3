<template>
    <div class="shop-page-wrapper">
        <TitleBar title="Blog" />
        <div class="shop-area pt-70 pb-100">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-9">
                        <div class="row mt-sm-30">
                            <div class="col-lg-4 col-md-6 col-sm-12" v-for="blog in blogs">                                                                                                
                                <NuxtLink :to="`/${blog.slug}`" >{{ blog.title }}</NuxtLink>
                            </div>
                            
                        </div>
                    </div>



                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import TitleBar from '../../components/kratom/product-category/TitleBar.vue';
import { Buffer } from "buffer";

export default {
    async setup(){
        const encodedCredentials = Buffer.from(`${useRuntimeConfig().public.consumer_key}:${useRuntimeConfig().public.secret_key}`).toString('base64');
        let blogs = '';
        await axios.get(
            useRuntimeConfig().public.api_url + '/wp-json/all/v3/blogs',
            {
                
            }
        ).then((result) => {
            blogs = result.data.blogs;
        }, (error) => {
            console.log(error);
        });
        
        return {
            blogs
        }

    },
    components: {
        TitleBar
    },

    data() {
        return {
            //blogs: '',
            currentPage: 1,
            perPage: 18,
            totalCount: 0,
            loading: true,
            isVisible: false,
            //count : 1,

            // kratom_products_blog_pagination: ''
        }
    },
    computed: {

    },
    mounted() {
        window.addEventListener("scroll", () => {
            let scroll = window.scrollY;
            if (scroll >= 500) {
                this.isVisible = true;
            }
            else {
                this.isVisible = false;
            }
        });

    },
    /* async fetch() {
            await axios.get(
                this.$config.site_url + '/wp-json/all/v3/blogs',
                {
                    params: {

                    }
                }
            ).then((result) => {
                
                this.blogs = result.data.blogs;                
                
            }, (error) => {
                console.log(error);
            }).finally(() => {
                this.loading = false;

            });
        }, */
    methods: {
        scrollToTop() {

        },

        
    },
    created() {
        /* this.fetch(); */
    },
    head() {
            return {
                htmlAttrs: { lang: 'en-US' },
                title: "Blogs",
                meta: [{
                    hid: 'robots',
                    name: 'robots',
                    content: 'noindex,nofollow'
                }
            ]
            }
        },
    /* head() {
        return {
            title: "Blog"
        }
    }, */
};
</script>
