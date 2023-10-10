<template>
    <div>
        <div class="yotpo yotpo-main-widget" data-product-id="229749" data-lang="en" data-yotpo-element-id="1">
            </div>
        <NewkratomBanners/>
        <Categorys/>
        <Featuredproducts/>
        <Newkratomspotdifferences/>
        <KratomKratompeopleagree/>
        
        <!-- <Reviews/> -->
        <FindYourFavourite/>
        <KratomNews/>
        
    </div>
</template>

<script>
import Categorys from '~/components/kratom/new-home/Categorys.vue';
import KratomTheFooter from '../components/kratom/KratomTheFooter.vue';
import NewkratomBanners from '../components/kratom/new-home/NewkratomBanners.vue';
import Featuredproducts from '~/components/kratom/new-home/Featuredproducts.vue';
import Newkratomspotdifferences from '~/components/kratom/new-home/Newkratomspotdifferences.vue';
import Reviews from '~/components/kratom/new-home/Reviews.vue';
import FindYourFavourite from '~/components/kratom/new-home/findYourFavourite.vue';
import KratomNews from '~/components/kratom/KratomNews.vue';
//const Categorys = () => import('@/components/kratom/new-home/categorys.vue');

export default {
    components:{ NewkratomBanners, Categorys, Featuredproducts, Newkratomspotdifferences, Reviews, FindYourFavourite, KratomNews }
}
</script>