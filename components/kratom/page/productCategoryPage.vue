<template>
    <div class="kratom_categories pb-10">
        <div v-html="page_content.ACF.content[0].texts" v-if="page_content.acf"/>
        <Kratombestseller_kc_page class="Kratombestseller_kc_page"/>
        <div class="">
            <div class="more_texts_div" v-html="page_content.ACF.content[0].more_texts" v-if="page_content.acf"/>
        </div>        
    </div>
</template>

<script>
import Kratombestseller_kc_page from './Kratombestseller_kc_page.vue';

   

    export default {
        props: ['page_content'],
        components: {
    Kratombestseller_kc_page
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
.Kratombestseller_kc_page .bestseller_title .colored_title {
    display: none;
}
.Kratombestseller_kc_page .bestseller_title {    
    justify-content: center;    
}
.kratom_categories h2 {
    margin-top: 20px;
    margin-bottom: 30px;
}
.homebestseller.Kratombestseller_kc_page {
    background: #fff !important;
}
.homebestseller.Kratombestseller_bko_page {
    background: #fff !important;
}
</style>