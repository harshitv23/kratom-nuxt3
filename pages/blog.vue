<template>
    <div class="shop-page-wrapper">
        <!-- <KratomTheHeader /> -->
        <TitleBar title="Blog" />
        <div class="shop-area pt-70 pb-100">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-9">
                        <div class="row mt-sm-30">
                            <div v-if="loading == true" class="pt-140 pb-140 text-center ">
                                <img width="120" height="120"
                                    :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/Spinner-1s-200px.gif`">
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12" v-for="blog in blogs" v-else>                                
                                <blogItem :blog="blog" />
                            </div>
                        </div>
                        <div v-if="getPaginateCount > 1">
                            <pagination class="pro-pagination-style shop-pagination mt-30" @click="scrollToTop"
                                v-model="currentPage" :per-page="perPage" :records="totalCount"
                                @paginate="paginateClickCallback" :page-count="getPaginateCount" />
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <ShopSidebar classes="mr-30" />
                    </div>



                </div>
            </div>
        </div>
        <!-- <KratomTheFooter /> -->
    </div>
</template>
<script>
import axios from "axios";
//import blogItem from "../components/kratom/blog/blogItem.vue";
import blogItem from "~/components/kratom/blog/blogItem.vue";
import TitleBar from '~/components/kratom/product-category/TitleBar.vue';

export default {
    components: {
        TitleBar,
        blogItem
    },

    data() {
        return {
            blogs: '',
            currentPage: 1,
            perPage: 18,
            totalCount: 0,
            loading: true,
            isVisible: false
        }
    },
    computed: {
        getPaginateCount() {
            return Math.ceil(this.totalCount / this.perPage);
        },
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
        omnisend.push(["track", "$pageViewed"]);

    },
    /* async fetch() {
        await axios.get(
            'https://kslpdev.wpengine.com/wp-json/wp/v2/posts?_embed',
            {
                params: {
                    per_page: this.perPage,
                }
            }
        ).then((result) => {
            this.blogs = result.data;
                console.log(result.data);
                console.log('TOTALLLLLLLLLLLLLLLLL');
                console.log(this.totalCount);
        }, (error) => {
            console.log(error);
        }).finally(() => {
                this.loading = false;
                this.productCount();
            });
    }, */
    methods: {
        scrollToTop() {

        },
        productCount() {
            axios.get(
                useRuntimeConfig().public.site_url + '/wp-json/all/v3/blogs',

                {
                    params: {
                        count: 1
                    },

                }
            ).then((result) => {
                this.totalCount = result.data.total_blogs;
                /* console.log('TOTAL COUNTTTT');
                console.log(blogscount);
                console.log(result.data); */
            }, (error) => {
                console.log(error);
            }).finally(() => {
            });

            //count = 1

        },
        paginateClickCallback(page) {
            window.scroll({
                top: 0,
                behavior: "smooth",
            });
            this.loading = true;
            this.currentPage = Number(page);
            var params = {
                per_page: this.perPage,
                page: page,
                status: 'publish',
            };
            axios.get(
                useRuntimeConfig().public.site_url + '/wp-json/wp/v2/posts?_embed',

                {
                    params: params,

                }
            ).then((result) => {
                this.blogs = result.data;
                //console.log(result.data);
            }, (error) => {
                console.log(error);
            }).finally(() => {
                this.loading = false;
                this.productCount();

            });
        },

        fetch() {
            axios.get(
                useRuntimeConfig().public.site_url + '/wp-json/wp/v2/posts?_embed',
                {
                    params: {
                        per_page: this.perPage,
                        order: 'desc'
                    }
                }
            ).then((result) => {
                this.blogs = result.data;
                //console.log('BLOGSSSSSSS');
                
            }, (error) => {
                console.log(error);
            }).finally(() => {
                this.loading = false;
                this.productCount();
            });
        },
    },
    created() {
        this.fetch();
        this.productCount();
    },
    head() {
            return {
                htmlAttrs: { lang: 'en-US' },
            title: 'Kratom Spot News &amp; Information | Kratom Spot Blog',
            link : [{
                href: 'https://kratomspot.com/blog'
                       ,
                        rel:'canonical'},
                        ],
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Find the latest kratom news, information &amp; helpful guides about kratom on the Kratom Spot blog. Our goal is to educate as many people about its benefits.'
                },
                {
                    hid: 'robots',
                    name: 'robots',
                    content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
                },
                {
                    hid: 'og:locale',
                    name: 'og:locale',
                    content: 'en_US'
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: 'article'
                },
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: 'Blog'
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: 'Find the latest kratom news, information &amp; helpful guides about kratom on the Kratom Spot blog. Our goal is to educate as many people about its benefits.'
                },
                {
                    hid: 'og:url',
                    name: 'og:url',
                    content: 'https://kratomspot.com/blog'
                },
                {
                    hid: 'og:site_name',
                    name: 'og:site_name',
                    content: 'Buy Kratom Online'
                },
            ] ,
            script : [{
        type: 'application/ld+json',
        json: {"@context":"https://schema.org","@graph":[{"@type":["WebPage","CollectionPage"],"@id":"https://kratomspot.com/blog","url":"https://kratomspot.com/blog","name":"Kratom Spot News & Information | Kratom Spot Blog","isPartOf":{"@id":"https://kratomspot.com/#website"},"datePublished":"2013-11-20T21:47:55+00:00","dateModified":"2020-05-29T19:21:43+00:00","description":"Find the latest kratom news, information & helpful guides about kratom on the Kratom Spot blog. Our goal is to educate as many people about its benefits.","breadcrumb":{"@id":"https://kratomspot.com/blog#breadcrumb"},"inLanguage":"en-US"},{"@type":"BreadcrumbList","@id":"https://kratomspot.com/blog#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://kratomspot.com/"},{"@type":"ListItem","position":2,"name":"Blog"}]},{"@type":"WebSite","@id":"https://kratomspot.com/#website","url":"https://kratomspot.com/","name":"Buy Kratom Online","description":"All natural, premium Kratom","publisher":{"@id":"https://kratomspot.com/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://kratomspot.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https://kratomspot.com/#organization","name":"Kratom Spot","url":"https://kratomspot.com/","logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://kratomspot.com/#/schema/logo/image/","url":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1652852928/logo-1-new_1987509f70c/logo-1-new_1987509f70c.png?_i=AA","contentUrl":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1652852928/logo-1-new_1987509f70c/logo-1-new_1987509f70c.png?_i=AA","width":93,"height":93,"caption":"Kratom Spot"},"image":{"@id":"https://kratomspot.com/#/schema/logo/image/"},"sameAs":["https://www.facebook.com/KSPOTNaturalCo","https://twitter.com/kspot_naturals"]}]}
      }]
            }
        },
    /* head() {
        return {
            title: "Blog"
        }
    }, */
};
</script>
