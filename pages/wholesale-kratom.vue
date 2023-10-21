<template>
    <div class="shop-page-wrapper page-wholesale-kratom content_type_page">
        <!-- <KratomTheHeader /> -->
        <TitleBar :title="title" />  
        <div class="container pt-50">
                <div class="row flex-row-reverse">                    
                    <div class="col-lg-9 pb-60">
                        <div class="page_featured_img mb-30" v-if="page_content['_embedded']">
                            <img :src="page_content['_embedded']['wp:featuredmedia'][0]['source_url']" :alt="page_content['_embedded']['wp:featuredmedia'][0].alt_text"/>
                        </div>
                        <div v-html="page_content.content.rendered" v-if="page_content.content"></div>
                        <Cf7_223_wholesale/>
                    </div>
                    <div class="col-lg-3">
                        <ShopSidebar class="mb-40 mt-50"/>
                    </div>
                </div>
            </div>      
        
        <!-- <KratomTheFooter /> -->
    </div>
</template>

<script>
import axios from "axios";
import TitleBar from '../components/kratom/product-category/TitleBar.vue';
import Cf7_223_wholesale from "../components/kratom/forms/cf7_223_wholesale.vue";



export default {
    setup(){
useHead({
                htmlAttrs: { lang: 'en-US' },
            title: 'Bulk Kratom: Buy Wholesale Kratom and Save Big | Kratom Spot',
            link : [{
                href: 'https://kratomspot.com/wholesale-kratom'
                       ,
                        rel:'canonical'},
                        ],
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Contact us today to find out how you can buy wholesale kratom and provide your customers with the best kratom at the most competitive prices.'
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
                    content: 'Kratom Spot Wholesale'
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: 'Contact us today to find out how you can buy wholesale kratom and provide your customers with the best kratom at the most competitive prices.'
                },
                {
                    hid: 'og:url',
                    name: 'og:url',
                    content: 'https://kratomspot.com/wholesale-kratom'
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
                    content: '2023-02-13T14:25:39+00:00'
                }, 
                {
                    hid: 'og:image',
                    name: 'og:image',
                    content: 'https://kratomspot.com/wp-content/uploads/2020/06/2020_012_Web-Wholesale.png'
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
        json: {"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://kratomspot.com/wholesale-kratom","url":"https://kratomspot.com/wholesale-kratom","name":"Bulk Kratom: Buy Wholesale Kratom and Save Big | Kratom Spot","isPartOf":{"@id":"https://kratomspot.com/#website"},"primaryImageOfPage":{"@id":"https://kratomspot.com/wholesale-kratom#primaryimage"},"image":{"@id":"https://kratomspot.com/wholesale-kratom#primaryimage"},"thumbnailUrl":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1600259307/2020_012_Web-Wholesale/2020_012_Web-Wholesale.png?_i=AA","datePublished":"2014-11-04T00:51:34+00:00","dateModified":"2023-02-13T14:25:39+00:00","description":"Contact us today to find out how you can buy wholesale kratom and provide your customers with the best kratom at the most competitive prices.","breadcrumb":{"@id":"https://kratomspot.com/wholesale-kratom#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://kratomspot.com/wholesale-kratom"]}]},{"@type":"ImageObject","inLanguage":"en-US","@id":"https://kratomspot.com/wholesale-kratom#primaryimage","url":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1600259307/2020_012_Web-Wholesale/2020_012_Web-Wholesale.png?_i=AA","contentUrl":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1600259307/2020_012_Web-Wholesale/2020_012_Web-Wholesale.png?_i=AA","width":900,"height":402,"caption":"Wholesale Kratom Online"},{"@type":"BreadcrumbList","@id":"https://kratomspot.com/wholesale-kratom#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://kratomspot.com/"},{"@type":"ListItem","position":2,"name":"Kratom Spot Wholesale"}]},{"@type":"WebSite","@id":"https://kratomspot.com/#website","url":"https://kratomspot.com/","name":"Buy Kratom Online","description":"All natural, premium Kratom","publisher":{"@id":"https://kratomspot.com/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://kratomspot.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https://kratomspot.com/#organization","name":"Kratom Spot","url":"https://kratomspot.com/","logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://kratomspot.com/#/schema/logo/image/","url":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1652852928/logo-1-new_1987509f70c/logo-1-new_1987509f70c.png?_i=AA","contentUrl":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1652852928/logo-1-new_1987509f70c/logo-1-new_1987509f70c.png?_i=AA","width":93,"height":93,"caption":"Kratom Spot"},"image":{"@id":"https://kratomspot.com/#/schema/logo/image/"},"sameAs":["https://www.facebook.com/KSPOTNaturalCo","https://twitter.com/kspot_naturals"]}]}
      }]
            })
    },
    components: {    
    TitleBar,        
    Cf7_223_wholesale
},

    data() {
        return {            
            title: 'Wholesale Kratom',     
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
            axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/wp/v2/pages/178?_embed',
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
            title: 'Bulk Kratom: Buy Wholesale Kratom and Save Big | Kratom Spot',
            link : [{
                href: 'https://kratomspot.com/wholesale-kratom'
                       ,
                        rel:'canonical'},
                        ],
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Contact us today to find out how you can buy wholesale kratom and provide your customers with the best kratom at the most competitive prices.'
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
                    content: 'Kratom Spot Wholesale'
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: 'Contact us today to find out how you can buy wholesale kratom and provide your customers with the best kratom at the most competitive prices.'
                },
                {
                    hid: 'og:url',
                    name: 'og:url',
                    content: 'https://kratomspot.com/wholesale-kratom'
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
                    content: '2023-02-13T14:25:39+00:00'
                }, 
                {
                    hid: 'og:image',
                    name: 'og:image',
                    content: 'https://kratomspot.com/wp-content/uploads/2020/06/2020_012_Web-Wholesale.png'
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
        json: {"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://kratomspot.com/wholesale-kratom","url":"https://kratomspot.com/wholesale-kratom","name":"Bulk Kratom: Buy Wholesale Kratom and Save Big | Kratom Spot","isPartOf":{"@id":"https://kratomspot.com/#website"},"primaryImageOfPage":{"@id":"https://kratomspot.com/wholesale-kratom#primaryimage"},"image":{"@id":"https://kratomspot.com/wholesale-kratom#primaryimage"},"thumbnailUrl":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1600259307/2020_012_Web-Wholesale/2020_012_Web-Wholesale.png?_i=AA","datePublished":"2014-11-04T00:51:34+00:00","dateModified":"2023-02-13T14:25:39+00:00","description":"Contact us today to find out how you can buy wholesale kratom and provide your customers with the best kratom at the most competitive prices.","breadcrumb":{"@id":"https://kratomspot.com/wholesale-kratom#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://kratomspot.com/wholesale-kratom"]}]},{"@type":"ImageObject","inLanguage":"en-US","@id":"https://kratomspot.com/wholesale-kratom#primaryimage","url":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1600259307/2020_012_Web-Wholesale/2020_012_Web-Wholesale.png?_i=AA","contentUrl":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1600259307/2020_012_Web-Wholesale/2020_012_Web-Wholesale.png?_i=AA","width":900,"height":402,"caption":"Wholesale Kratom Online"},{"@type":"BreadcrumbList","@id":"https://kratomspot.com/wholesale-kratom#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://kratomspot.com/"},{"@type":"ListItem","position":2,"name":"Kratom Spot Wholesale"}]},{"@type":"WebSite","@id":"https://kratomspot.com/#website","url":"https://kratomspot.com/","name":"Buy Kratom Online","description":"All natural, premium Kratom","publisher":{"@id":"https://kratomspot.com/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://kratomspot.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https://kratomspot.com/#organization","name":"Kratom Spot","url":"https://kratomspot.com/","logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://kratomspot.com/#/schema/logo/image/","url":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1652852928/logo-1-new_1987509f70c/logo-1-new_1987509f70c.png?_i=AA","contentUrl":"https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1652852928/logo-1-new_1987509f70c/logo-1-new_1987509f70c.png?_i=AA","width":93,"height":93,"caption":"Kratom Spot"},"image":{"@id":"https://kratomspot.com/#/schema/logo/image/"},"sameAs":["https://www.facebook.com/KSPOTNaturalCo","https://twitter.com/kspot_naturals"]}]}
      }]
            }
        }, */
    /* head() {
        return {
            title: "Wholesale Kratom"
        }
    }, */
};
</script>