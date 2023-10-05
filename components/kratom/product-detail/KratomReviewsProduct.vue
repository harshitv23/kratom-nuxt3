<template>
    <div class="section_reviews text-center pt-60 container">
        <instagram-widget class="d-none"/>
        <div class="yotpo yotpo-main-widget" :data-product-id="product_id" data-lang="en" data-yotpo-element-id="1">
            </div>
        <!-- <reviews-widget /> -->
        <!-- <star-rating :product="product" /> -->
        <!-- <reviews-widget v-if="product" :product="product"  /> -->
        
        <!-- <div class="yotpo yotpo-reviews-carousel" 
 data-background-color="transparent" 
 data-mode="top_rated" 
 data-type="per_product" 
 data-count="9" 
 data-show-bottomline="1" 
 data-autoplay-enabled="1" 
 data-autoplay-speed="3000" 
 data-show-navigation="1" 
 :data-product-id="product_id">&nbsp;</div>
        <img :src="`${this.$config.site_url}/img/kratom/reviews_demo.jpg`" class="d-none"/> -->
    </div>
</template>

<script>
    export default {
        props: ["product_id","product"],
    };
</script>
<style>

</style>