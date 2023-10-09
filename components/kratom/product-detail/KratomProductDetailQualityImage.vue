<template>
    <picture>            
        <source media="(max-width:767px)" :srcset="`${useRuntimeConfig().public.site_url}/img/kratom/product_detail_three_mob_1.webp`">            
        <img format="webp" width="1600" height="480" loading="lazy"  class="mt-20 product_detail_quantity_img"
					    :src="`${useRuntimeConfig().public.site_url}/img/kratom/product_detail_three.webp`"
					    alt="kratomdiscover-1" />            
    </picture>
</template>

<style>
.product_detail_quantity_img {
    width: 100%;
}
</style>