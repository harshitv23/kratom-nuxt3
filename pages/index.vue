<template>
    <div>        
        <NewkratomBanners/>
        <Categorys/>
        <Featuredproducts/>
        <Newkratomspotdifferences/>
        <KratomKratompeopleagree/>
        
        <Reviews/>
        <FindYourFavourite/>
        <KratomNews/>
        
    </div>
</template>

<script>
import Categorys from '~/components/kratom/new-home/Categorys.vue';
import NewkratomBanners from '../components/kratom/new-home/NewkratomBanners.vue';
import Featuredproducts from '~/components/kratom/new-home/Featuredproducts.vue';
import Newkratomspotdifferences from '~/components/kratom/new-home/Newkratomspotdifferences.vue';
import Reviews from '~/components/kratom/new-home/Reviews.vue';
import FindYourFavourite from '~/components/kratom/new-home/findYourFavourite.vue';
import KratomNews from '~/components/kratom/KratomNews.vue';
//const Categorys = () => import('@/components/kratom/new-home/categorys.vue');

export default {
    components:{ NewkratomBanners, Categorys, Featuredproducts, Newkratomspotdifferences, Reviews, FindYourFavourite, KratomNews },
    setup(){
useHead({
    htmlAttrs: { lang: 'en-US' },
    title: 'Buy Kratom Online: Capsules, Powder & Tea | Kratom Spot',
    link: [{ href: 'https://kratomspot.com', rel: 'canonical'},
    ],
    meta: [
        
        {
            hid: 'description',
            name: 'description',
            content: 'Shop kratom that is ethically sourced & independently tested for quality. Kratom Spot is your go-to source for kratom online. Free Shipping Over $50.'
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
            content: 'page'
        },
        {
            hid: 'og:title',
            name: 'og:title',
            content: 'Buy Kratom Online: Capsules, Powder & Tea | Kratom Spot'
        },
        {
            hid: 'og:description',
            name: 'og:description',
            content: 'Shop kratom that is ethically sourced & independently tested for quality. Kratom Spot is your go-to source for kratom online. Free Shipping Over $50.'
        },
        {
            hid: 'og:url',
            name: 'og:url',
            content: 'https://kratomspot.com'
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
            content: '2022-12-30T23:54:14+00:00'
        },
        
    ],
    script: [{
        type: 'application/ld+json',
        //json: { "@context": "https://schema.org", "@graph": [{ "@type": "WebPage", "@id": "https://kratomspot.com/", "url": "https://kratomspot.com/", "name": "Buy Kratom Online: Capsules, Powder, & Tea | Kratom Spot", "isPartOf": { "@id": "https://kratomspot.com/#website" }, "about": { "@id": "https://kratomspot.com/#organization" }, "datePublished": "2019-02-11T18:31:31+00:00", "dateModified": "2022-12-30T23:54:14+00:00", "description": "Shop kratom that is ethically sourced & independently tested for quality. Kratom Spot is your go-to source for kratom online. Free Shipping Over $50.", "breadcrumb": { "@id": "https://kratomspot.com/#breadcrumb" }, "inLanguage": "en-US", "potentialAction": [{ "@type": "ReadAction", "target": ["https://kratomspot.com/"] }] }, { "@type": "BreadcrumbList", "@id": "https://kratomspot.com/#breadcrumb", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home" }] }, { "@type": "WebSite", "@id": "https://kratomspot.com/#website", "url": "https://kratomspot.com/", "name": "Buy Kratom Online", "description": "All natural, premium Kratom", "publisher": { "@id": "https://kratomspot.com/#organization" }, "potentialAction": [{ "@type": "SearchAction", "target": { "@type": "EntryPoint", "urlTemplate": "https://kratomspot.com/?s={search_term_string}" }, "query-input": "required name=search_term_string" }], "inLanguage": "en-US" }, { "@type": "Organization", "@id": "https://kratomspot.com/#organization", "name": "Kratom Spot", "url": "https://kratomspot.com/", "logo": { "@type": "ImageObject", "inLanguage": "en-US", "@id": "https://kratomspot.com/#/schema/logo/image/", "url": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1652852928/logo-1-new_1987509f70c/logo-1-new_1987509f70c.png?_i=AA", "contentUrl": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1652852928/logo-1-new_1987509f70c/logo-1-new_1987509f70c.png?_i=AA", "width": 93, "height": 93, "caption": "Kratom Spot" }, "image": { "@id": "https://kratomspot.com/#/schema/logo/image/" }, "sameAs": ["https://www.facebook.com/KSPOTNaturalCo", "https://twitter.com/kspot_naturals"] }] }
        innerHTML: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "WebPage", "@id": "https://kratomspot.com/", "url": "https://kratomspot.com/", "name": "Buy Kratom Online: Capsules, Powder, & Tea | Kratom Spot", "isPartOf": { "@id": "https://kratomspot.com/#website" }, "about": { "@id": "https://kratomspot.com/#organization" }, "datePublished": "2019-02-11T18:31:31+00:00", "dateModified": "2022-12-30T23:54:14+00:00", "description": "Shop kratom that is ethically sourced & independently tested for quality. Kratom Spot is your go-to source for kratom online. Free Shipping Over $50.", "breadcrumb": { "@id": "https://kratomspot.com/#breadcrumb" }, "inLanguage": "en-US", "potentialAction": [{ "@type": "ReadAction", "target": ["https://kratomspot.com/"] }] }, { "@type": "BreadcrumbList", "@id": "https://kratomspot.com/#breadcrumb", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home" }] }, { "@type": "WebSite", "@id": "https://kratomspot.com/#website", "url": "https://kratomspot.com/", "name": "Buy Kratom Online", "description": "All natural, premium Kratom", "publisher": { "@id": "https://kratomspot.com/#organization" }, "potentialAction": [{ "@type": "SearchAction", "target": { "@type": "EntryPoint", "urlTemplate": "https://kratomspot.com/?s={search_term_string}" }, "query-input": "required name=search_term_string" }], "inLanguage": "en-US" }, { "@type": "Organization", "@id": "https://kratomspot.com/#organization", "name": "Kratom Spot", "url": "https://kratomspot.com/", "logo": { "@type": "ImageObject", "inLanguage": "en-US", "@id": "https://kratomspot.com/#/schema/logo/image/", "url": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1652852928/logo-1-new_1987509f70c/logo-1-new_1987509f70c.png?_i=AA", "contentUrl": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1652852928/logo-1-new_1987509f70c/logo-1-new_1987509f70c.png?_i=AA", "width": 93, "height": 93, "caption": "Kratom Spot" }, "image": { "@id": "https://kratomspot.com/#/schema/logo/image/" }, "sameAs": ["https://www.facebook.com/KSPOTNaturalCo", "https://twitter.com/kspot_naturals"] }] })
    }]
})
    }    
}
</script>