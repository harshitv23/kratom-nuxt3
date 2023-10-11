<template>
    <div class="buy_kratom_online pb-10">
        <div class="page_featured_img mb-30" v-if="page_content['_embedded']">
            <img :src="page_content['_embedded']['wp:featuredmedia'][0]['source_url']" :alt="page_content['_embedded']['wp:featuredmedia'][0].alt_text"/>
        </div>
        <div v-html="page_content.ACF.content[0].texts" v-if="page_content.ACF"/>
        <Kratombestseller_bko_page class="Kratombestseller_bko_page" />
        <div class="container">
        <div class="more_texts_div" v-html="page_content.ACF.content[0].more_texts" v-if="page_content.ACF"/>
        </div>        
    </div>
</template>

<script>

import Kratombestseller_bko_page from '@/components/kratom/page/Kratombestseller_bko_page';

    export default {
        props: ['page_content'],
        components: {            
            Kratombestseller_bko_page
        },

        data() {
            return {                
                
            }
        },

        computed: {
            
        },
        methods : {
            
        },created () {
            
        }
    };
</script>


<style>
.page-buy-kratom-online h2 {
    font-size: 30px;
    margin-bottom: 20px;
}
.more_texts_div li:before {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    content: "\f06c";
    margin-right: 10px;
    color: #4A6230;
}
.more_texts_div ul {
    margin: 20px 0 30px 0 !important;
}
.more_texts_div {
    padding-bottom: 50px;
}
.Kratombestseller_bko_page .bestseller_title .colored_title {
    display: none;
}
.Kratombestseller_bko_page .bestseller_title {    
    justify-content: center;    
}
</style>