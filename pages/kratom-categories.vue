<template>
    <div class="shop-page-wrapper page-kratom-categories content_type_page">
        <!-- <KratomTheHeader />        -->
        <TitleBar :title="title" />  
        <div class="container pt-50">
                <div class="row flex-row-reverse">
                    <div class="col-lg-9">
                        <productCategoryPage :page_content = "page_content" v-if="page_content"/>
                    </div>
                    <div class="col-lg-3">
                        <ShopSidebar class="mb-40"/>
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
import productCategoryPage from "../components/kratom/page/productCategoryPage.vue";


export default {
    setup(){
        useHead({
                htmlAttrs: { lang: 'en-US' },
            title: 'Types of Kratom | Kratom Varieties for Sale | Kratom Spot',
            link : [{
                href: 'https://kratomspot.com/kratom-categories'
                       ,
                        rel:'canonical'},
                        ],
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'If you&#039;re wondering where to buy Kratom online, look no further than Kratom Spot. Order our Kratom products today &amp; get free shipping on orders over $100!'
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
                    content: 'Discover Where to Buy Kratom Online'
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: 'If you&#039;re wondering where to buy Kratom online, look no further than Kratom Spot. Order our Kratom products today &amp; get free shipping on orders over $100!'
                },
                {
                    hid: 'og:url',
                    name: 'og:url',
                    content: 'https://kratomspot.com/kratom-categories'
                },
                {
                    hid: 'og:site_name',
                    name: 'og:site_name',
                    content: 'Buy Kratom Online'
                },
                {
                    hid: 'article:publisher',
                    name: 'article:publisher',
                    content: 'https://www.facebook.com/KSPOTNaturalCo'
                },
                {
                    hid: 'article:modified_time',
                    name: 'article:modified_time',
                    content: '2022-09-24T18:07:49+00:00'
                }, 
                                                             
                
            
            ] ,
            script : [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://kratomspot.com/kratom-categories","url":"https://kratomspot.com/kratom-categories","name":"Types of Kratom | Kratom Varieties for Sale | Kratom Spot","isPartOf":{"@id":"https://kratomspot.com/#website"},"datePublished":"2013-11-20T00:52:35+00:00","dateModified":"2022-09-24T18:07:49+00:00","description":"If you're wondering where to buy Kratom online, look no further than Kratom Spot. Order our Kratom products today & get free shipping on orders over $50!","breadcrumb":{"@id":"https://kratomspot.com/kratom-categories#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://kratomspot.com/kratom-categories"]}]},{"@type":"BreadcrumbList","@id":"https://kratomspot.com/kratom-categories#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://kratomspot.com/"},{"@type":"ListItem","position":2,"name":"Discover Where to Buy Kratom Online"}]},{"@type":"WebSite","@id":"https://kratomspot.com/#website","url":"https://kratomspot.com/","name":"Buy Kratom Online","description":"All natural, premium Kratom","publisher":{"@id":"https://kratomspot.com/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://kratomspot.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https://kratomspot.com/#organization","name":"Kratom Spot","url":"https://kratomspot.com/","logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://kratomspot.com/#/schema/logo/image/","url":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1652852928/logo-1-new_1987509f70c/logo-1-new_1987509f70c.png?_i=AA","contentUrl":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1652852928/logo-1-new_1987509f70c/logo-1-new_1987509f70c.png?_i=AA","width":93,"height":93,"caption":"Kratom Spot"},"image":{"@id":"https://kratomspot.com/#/schema/logo/image/"},"sameAs":["https://www.facebook.com/KSPOTNaturalCo","https://twitter.com/kspot_naturals"]}]}),
        //json: {"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://kratomspot.com/kratom-categories","url":"https://kratomspot.com/kratom-categories","name":"Types of Kratom | Kratom Varieties for Sale | Kratom Spot","isPartOf":{"@id":"https://kratomspot.com/#website"},"datePublished":"2013-11-20T00:52:35+00:00","dateModified":"2022-09-24T18:07:49+00:00","description":"If you're wondering where to buy Kratom online, look no further than Kratom Spot. Order our Kratom products today & get free shipping on orders over $50!","breadcrumb":{"@id":"https://kratomspot.com/kratom-categories#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://kratomspot.com/kratom-categories"]}]},{"@type":"BreadcrumbList","@id":"https://kratomspot.com/kratom-categories#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://kratomspot.com/"},{"@type":"ListItem","position":2,"name":"Discover Where to Buy Kratom Online"}]},{"@type":"WebSite","@id":"https://kratomspot.com/#website","url":"https://kratomspot.com/","name":"Buy Kratom Online","description":"All natural, premium Kratom","publisher":{"@id":"https://kratomspot.com/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://kratomspot.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https://kratomspot.com/#organization","name":"Kratom Spot","url":"https://kratomspot.com/","logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://kratomspot.com/#/schema/logo/image/","url":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1652852928/logo-1-new_1987509f70c/logo-1-new_1987509f70c.png?_i=AA","contentUrl":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1652852928/logo-1-new_1987509f70c/logo-1-new_1987509f70c.png?_i=AA","width":93,"height":93,"caption":"Kratom Spot"},"image":{"@id":"https://kratomspot.com/#/schema/logo/image/"},"sameAs":["https://www.facebook.com/KSPOTNaturalCo","https://twitter.com/kspot_naturals"]}]}
      }]
            })
    },
    components: {
    
    ProductGridItem: () => import("@/components/product/ProductGridItem"),
    
    TitleBar,
    CategoryList,
    productCategoryPage
},

    data() {
        return {            
            title: 'Kratom Categories',     
            page_content:      []              
        }
    },

    computed: {
        
    },

    mounted() {   
        omnisend.push(["track", "$pageViewed"]);     
    },
    
    methods: {        
        fetch() {            
            axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/wp/v2/pages/88?_embed',
                {
                    params: {
                        per_page: 1
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
    /* head() {
            return {
                htmlAttrs: { lang: 'en-US' },
            title: 'Types of Kratom | Kratom Varieties for Sale | Kratom Spot',
            link : [{
                href: 'https://kratomspot.com/kratom-categories'
                       ,
                        rel:'canonical'},
                        ],
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'If you&#039;re wondering where to buy Kratom online, look no further than Kratom Spot. Order our Kratom products today &amp; get free shipping on orders over $100!'
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
                    content: 'Discover Where to Buy Kratom Online'
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: 'If you&#039;re wondering where to buy Kratom online, look no further than Kratom Spot. Order our Kratom products today &amp; get free shipping on orders over $100!'
                },
                {
                    hid: 'og:url',
                    name: 'og:url',
                    content: 'https://kratomspot.com/kratom-categories'
                },
                {
                    hid: 'og:site_name',
                    name: 'og:site_name',
                    content: 'Buy Kratom Online'
                },
                {
                    hid: 'article:publisher',
                    name: 'article:publisher',
                    content: 'https://www.facebook.com/KSPOTNaturalCo'
                },
                {
                    hid: 'article:modified_time',
                    name: 'article:modified_time',
                    content: '2022-09-24T18:07:49+00:00'
                }, 
                                                             
                
            
            ] ,
            script : [{
        type: 'application/ld+json',
        json: {"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://kratomspot.com/kratom-categories","url":"https://kratomspot.com/kratom-categories","name":"Types of Kratom | Kratom Varieties for Sale | Kratom Spot","isPartOf":{"@id":"https://kratomspot.com/#website"},"datePublished":"2013-11-20T00:52:35+00:00","dateModified":"2022-09-24T18:07:49+00:00","description":"If you're wondering where to buy Kratom online, look no further than Kratom Spot. Order our Kratom products today & get free shipping on orders over $50!","breadcrumb":{"@id":"https://kratomspot.com/kratom-categories#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://kratomspot.com/kratom-categories"]}]},{"@type":"BreadcrumbList","@id":"https://kratomspot.com/kratom-categories#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://kratomspot.com/"},{"@type":"ListItem","position":2,"name":"Discover Where to Buy Kratom Online"}]},{"@type":"WebSite","@id":"https://kratomspot.com/#website","url":"https://kratomspot.com/","name":"Buy Kratom Online","description":"All natural, premium Kratom","publisher":{"@id":"https://kratomspot.com/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://kratomspot.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https://kratomspot.com/#organization","name":"Kratom Spot","url":"https://kratomspot.com/","logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://kratomspot.com/#/schema/logo/image/","url":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1652852928/logo-1-new_1987509f70c/logo-1-new_1987509f70c.png?_i=AA","contentUrl":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1652852928/logo-1-new_1987509f70c/logo-1-new_1987509f70c.png?_i=AA","width":93,"height":93,"caption":"Kratom Spot"},"image":{"@id":"https://kratomspot.com/#/schema/logo/image/"},"sameAs":["https://www.facebook.com/KSPOTNaturalCo","https://twitter.com/kspot_naturals"]}]}
      }]
            }
        }, */
    /* head() {
        return {
            title: "Kratom Categories"
        }
    }, */
};
</script>