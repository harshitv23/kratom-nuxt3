<template>
    <!-- <img :src="`${useRuntimeConfig().public.site_url}/img/kratom/product_detail_three.png`" class="mt-20 product_detail_quantity_img"/> -->
    <!-- <NuxtImg format="webp" width="1600" height="480" loading="lazy"  class="mt-20 product_detail_quantity_img"
					    :src="`${useRuntimeConfig().public.site_url}/img/kratom/product_detail_three.png`"
					    alt="kratomdiscover-1" /> -->

                        <picture>
            <!-- <source media="(max-width:575px)" :srcset="home_page_banner_background_image_mobile_400"> -->
            <source media="(max-width:767px)" :srcset="`${useRuntimeConfig().public.site_url}/img/kratom/product_detail_three_mob_1.webp`">            
            <NuxtImg format="webp" width="1600" height="480" loading="lazy"  class="mt-20 product_detail_quantity_img"
					    :src="`${useRuntimeConfig().public.site_url}/img/kratom/product_detail_three.webp`"
					    alt="kratomdiscover-1" />
            <!-- <NuxtImg preload :src="kratom_header_data.home_page_banner_background_image" alt="Kratom Spot Banner"  width="1900" height="917" class="banner_bg"/> -->
        </picture>
</template>

<style>
.product_detail_quantity_img {
    width: 100%;
}
</style>