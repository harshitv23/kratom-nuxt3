<template>
    <div class="section_reviews text-center pt-60 container">
        <!-- <instagram-widget class="d-none"/> -->
        <!-- <div class="yotpo yotpo-main-widget" :data-product-id="product_id" data-lang="en" data-yotpo-element-id="1"></div> -->
        <div class="yotpo yotpo-main-widget" :data-product-id="product_id"></div>
    </div>
</template>

<script> 
    export default {
        props: ["product_id","product"],
    };
</script>
<style>

</style>