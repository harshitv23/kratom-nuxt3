<template>
    <div class="shop-page-wrapper page-kratom-categories content_type_page">        
        <!-- <KratomTheHeader />        -->
        <!-- <LiveChatWidget
            license="11403208"
            :visibility="chat_visibility"
        /> -->
        <TitleBar :title="title" />  
        <div class="container pt-50">
                <div class="row flex-row-reverse">                    
                    <div class="col-lg-9 pb-60">
                        <div class="page_featured_img mb-30" v-if="page_content['_embedded']">
                            <img :src="page_content['_embedded']['wp:featuredmedia'][0]['source_url']" :alt="page_content['_embedded']['wp:featuredmedia'][0].alt_text"/>
                        </div>
                        <div v-html="page_content.content.rendered" v-if="page_content.content"></div>
                        <Cf7_379/>
                    </div>
                    <div class="col-lg-3">
                        <ShopSidebar class="mb-40 mt-50"/>
                    </div>
                </div>
            </div>      
        
        <!-- <KratomTheFooter/> -->
    </div>
</template>

<script>
import axios from "axios";
import TitleBar from '../components/kratom/product-category/TitleBar.vue';
import CategoryList from '../components/kratom/product-category/CategoryList.vue';
import productCategoryPage from "../components/kratom/page/productCategoryPage.vue";
import Cf7_379 from "../components/kratom/forms/cf7_379_support.vue";
//import { LiveChatWidget } from '@livechat/widget-vue/v2'


export default {
    setup(){

    useHead({
                htmlAttrs: { lang: 'en-US' },
            title: 'Kratom Spot Customer Support | Kratom FAQ | Contact Us',
            link : [{
                href: 'https://kratomspot.com/kratom-spot-customer-support'
                       ,
                        rel:'canonical'},
                        ],
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Contact our Kratom Spot customer support team with any questions or concerns. Our knowledgeable staff will do their best to resolve your concerns.'
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
                    content: 'Kratom Spot Customer Support'
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: 'Contact our Kratom Spot customer support team with any questions or concerns. Our knowledgeable staff will do their best to resolve your concerns.'
                },
                {
                    hid: 'og:url',
                    name: 'og:url',
                    content: 'https://kratomspot.com/kratom-spot-customer-support'
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
                    content: '2023-02-13T14:23:16+00:00'
                }, 
                {
                    hid: 'og:image',
                    name: 'og:image',
                    content: 'https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1600253944/2020_012_Web-Customer-Service-v2/2020_012_Web-Customer-Service-v2.png?_i=AA'
                },
                {
                    hid: 'og:image:width',
                    name: 'og:image:width',
                    content: '900'
                },
                {
                    hid: 'og:image:height',
                    name: 'og:image:height',
                    content: '402'
                },
                {
                    hid: 'og:image:type',
                    name: 'og:image:type',
                    content: 'image/png'
                },                                               
                
            
            ] ,
            script : [{
        type: 'application/ld+json',
        json: {"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://kratomspot.com/kratom-spot-customer-support","url":"https://kratomspot.com/kratom-spot-customer-support","name":"Kratom Spot Customer Support | Kratom FAQ | Contact Us","isPartOf":{"@id":"https://kratomspot.com/#website"},"primaryImageOfPage":{"@id":"https://kratomspot.com/kratom-spot-customer-support#primaryimage"},"image":{"@id":"https://kratomspot.com/kratom-spot-customer-support#primaryimage"},"thumbnailUrl":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1600253944/2020_012_Web-Customer-Service-v2/2020_012_Web-Customer-Service-v2.png?_i=AA","datePublished":"2014-11-04T07:52:11+00:00","dateModified":"2023-02-13T14:23:16+00:00","description":"Contact our Kratom Spot customer support team with any questions or concerns. Our knowledgeable staff will do their best to resolve your concerns.","breadcrumb":{"@id":"https://kratomspot.com/kratom-spot-customer-support#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://kratomspot.com/kratom-spot-customer-support"]}]},{"@type":"ImageObject","inLanguage":"en-US","@id":"https://kratomspot.com/kratom-spot-customer-support#primaryimage","url":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1600253944/2020_012_Web-Customer-Service-v2/2020_012_Web-Customer-Service-v2.png?_i=AA","contentUrl":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1600253944/2020_012_Web-Customer-Service-v2/2020_012_Web-Customer-Service-v2.png?_i=AA","width":900,"height":402,"caption":"Kratom Spot Customer Service"},{"@type":"BreadcrumbList","@id":"https://kratomspot.com/kratom-spot-customer-support#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://kratomspot.com/"},{"@type":"ListItem","position":2,"name":"Kratom Spot Customer Support"}]},{"@type":"WebSite","@id":"https://kratomspot.com/#website","url":"https://kratomspot.com/","name":"Buy Kratom Online","description":"All natural, premium Kratom","publisher":{"@id":"https://kratomspot.com/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://kratomspot.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https://kratomspot.com/#organization","name":"Kratom Spot","url":"https://kratomspot.com/","logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://kratomspot.com/#/schema/logo/image/","url":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1652852928/logo-1-new_1987509f70c/logo-1-new_1987509f70c.png?_i=AA","contentUrl":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1652852928/logo-1-new_1987509f70c/logo-1-new_1987509f70c.png?_i=AA","width":93,"height":93,"caption":"Kratom Spot"},"image":{"@id":"https://kratomspot.com/#/schema/logo/image/"},"sameAs":["https://www.facebook.com/KSPOTNaturalCo","https://twitter.com/kspot_naturals"]}]}
      }]
            })
    },
    components: {
    
    ProductGridItem: () => import("@/components/product/ProductGridItem"),
    
    TitleBar,
    CategoryList,
    productCategoryPage,
    Cf7_379,
    //LiveChatWidget
},

    data() {
        return {            
            title: 'Kratom spot customer support',     
            page_content:      [],
            chat_visibility: 'minimized'
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
                useRuntimeConfig().public.api_url + '/wp-json/wp/v2/pages/180?_embed',
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
        console.log(useRoute().query.livechat);
        if(useRoute().query.livechat == 'yes'){
            this.chat_visibility = 'maximized';
        }
    },
    /* head() {
            return {
                htmlAttrs: { lang: 'en-US' },
            title: 'Kratom Spot Customer Support | Kratom FAQ | Contact Us',
            link : [{
                href: 'https://kratomspot.com/kratom-spot-customer-support'
                       ,
                        rel:'canonical'},
                        ],
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Contact our Kratom Spot customer support team with any questions or concerns. Our knowledgeable staff will do their best to resolve your concerns.'
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
                    content: 'Kratom Spot Customer Support'
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: 'Contact our Kratom Spot customer support team with any questions or concerns. Our knowledgeable staff will do their best to resolve your concerns.'
                },
                {
                    hid: 'og:url',
                    name: 'og:url',
                    content: 'https://kratomspot.com/kratom-spot-customer-support'
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
                    content: '2023-02-13T14:23:16+00:00'
                }, 
                {
                    hid: 'og:image',
                    name: 'og:image',
                    content: 'https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1600253944/2020_012_Web-Customer-Service-v2/2020_012_Web-Customer-Service-v2.png?_i=AA'
                },
                {
                    hid: 'og:image:width',
                    name: 'og:image:width',
                    content: '900'
                },
                {
                    hid: 'og:image:height',
                    name: 'og:image:height',
                    content: '402'
                },
                {
                    hid: 'og:image:type',
                    name: 'og:image:type',
                    content: 'image/png'
                },                                               
                
            
            ] ,
            script : [{
        type: 'application/ld+json',
        json: {"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://kratomspot.com/kratom-spot-customer-support","url":"https://kratomspot.com/kratom-spot-customer-support","name":"Kratom Spot Customer Support | Kratom FAQ | Contact Us","isPartOf":{"@id":"https://kratomspot.com/#website"},"primaryImageOfPage":{"@id":"https://kratomspot.com/kratom-spot-customer-support#primaryimage"},"image":{"@id":"https://kratomspot.com/kratom-spot-customer-support#primaryimage"},"thumbnailUrl":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1600253944/2020_012_Web-Customer-Service-v2/2020_012_Web-Customer-Service-v2.png?_i=AA","datePublished":"2014-11-04T07:52:11+00:00","dateModified":"2023-02-13T14:23:16+00:00","description":"Contact our Kratom Spot customer support team with any questions or concerns. Our knowledgeable staff will do their best to resolve your concerns.","breadcrumb":{"@id":"https://kratomspot.com/kratom-spot-customer-support#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://kratomspot.com/kratom-spot-customer-support"]}]},{"@type":"ImageObject","inLanguage":"en-US","@id":"https://kratomspot.com/kratom-spot-customer-support#primaryimage","url":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1600253944/2020_012_Web-Customer-Service-v2/2020_012_Web-Customer-Service-v2.png?_i=AA","contentUrl":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1600253944/2020_012_Web-Customer-Service-v2/2020_012_Web-Customer-Service-v2.png?_i=AA","width":900,"height":402,"caption":"Kratom Spot Customer Service"},{"@type":"BreadcrumbList","@id":"https://kratomspot.com/kratom-spot-customer-support#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://kratomspot.com/"},{"@type":"ListItem","position":2,"name":"Kratom Spot Customer Support"}]},{"@type":"WebSite","@id":"https://kratomspot.com/#website","url":"https://kratomspot.com/","name":"Buy Kratom Online","description":"All natural, premium Kratom","publisher":{"@id":"https://kratomspot.com/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://kratomspot.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https://kratomspot.com/#organization","name":"Kratom Spot","url":"https://kratomspot.com/","logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://kratomspot.com/#/schema/logo/image/","url":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1652852928/logo-1-new_1987509f70c/logo-1-new_1987509f70c.png?_i=AA","contentUrl":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1652852928/logo-1-new_1987509f70c/logo-1-new_1987509f70c.png?_i=AA","width":93,"height":93,"caption":"Kratom Spot"},"image":{"@id":"https://kratomspot.com/#/schema/logo/image/"},"sameAs":["https://www.facebook.com/KSPOTNaturalCo","https://twitter.com/kspot_naturals"]}]}
      }]
            }
        }, */
    /* head() {
        return {
            title: "Kratom spot customer support"
        }
    }, */
};
</script>