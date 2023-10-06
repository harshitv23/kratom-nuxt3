<template>
    <div class="sidebar-style" :class="classes">
        <div class="sidebar-widget sidebar-widget-search">
            <h4 class="pro-sidebar-title">Product Search</h4>
            <div class="pro-sidebar-search mt-25">
                <form class="sidebar-search-form" :action="`${useRuntimeConfig().public.site_url}/s`">
                    <input type="text" name="s" placeholder="Search..." :value="this.$route.query.s">
                    <button>
                        Search Product
                    </button>
                </form>
            </div>
        </div>

        <!-- category widget  -->
        <div class="sidebar-widget sidebar-widget-categories mt-30">
            <h4 class="pro-sidebar-title">Products</h4>
            <div class="sidebar_cagtegories">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <a class="accordion-button collapsed no-child" type="button">
                                All Kratom
                            </a>
                        </h2>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Buy Kratom
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo">
                            <div class="accordion-body">
                                <ul class="sidebar-widget-list">
                                    <li class="sidebar-widget-list-left">
                                        <NuxtLink :to="`/kratom-capsules-for-sale`" active-class="active">
                                            Kratom Capsules
                                        </NuxtLink>
                                    </li>
                                    <li class="sidebar-widget-list-left">
                                        <NuxtLink :to="`/kratom-powder`" active-class="active">
                                            Kratom Powders
                                        </NuxtLink>
                                    </li>
                                    <li class="sidebar-widget-list-left">
                                        <NuxtLink :to="`/buy-kratom-extract`" active-class="active">
                                            Kratom Extracts
                                        </NuxtLink>
                                    </li>
                                    <li class="sidebar-widget-list-left" active-class="active">
                                        <NuxtLink :to="`/kratom-shots`">
                                            Kratom Shots
                                        </NuxtLink>
                                    </li>
                                    <li class="sidebar-widget-list-left" active-class="active">
                                        <NuxtLink :to="`/bundleandsave`">
                                            Kratom Deals
                                        </NuxtLink>
                                    </li>
                                    <li class="sidebar-widget-list-left" active-class="active">
                                        <NuxtLink :to="`/kratom-leaves`">
                                            Kratom Leaves
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Kratom Strains
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree">
                            <div class="accordion-body">
                                <ul class="sidebar-widget-list">
                                    <li class="sidebar-widget-list-left">
                                        <NuxtLink :to="`/red-vein-kratom`" active-class="active">
                                            Red Veins
                                        </NuxtLink>
                                    </li>
                                    <li class="sidebar-widget-list-left">
                                        <NuxtLink :to="`/white-vein-kratom`" active-class="active">
                                            White Veins
                                        </NuxtLink>
                                    </li>
                                    <li class="sidebar-widget-list-left">
                                        <NuxtLink :to="`/green-vein-kratom`" active-class="active">
                                            Green Veins
                                        </NuxtLink>
                                    </li>
                                    <li class="sidebar-widget-list-left">
                                        <NuxtLink :to="`/bali-kratom-powders-capsules`" active-class="active">
                                            Bali kratom
                                        </NuxtLink>
                                    </li>
                                    <li class="sidebar-widget-list-left" active-class="active">
                                        <NuxtLink :to="`/indo-kratom`">
                                            Indo Kratom
                                        </NuxtLink>
                                    </li>
                                    <li class="sidebar-widget-list-left">
                                        <NuxtLink :to="`/maeng-da-kratom-powders-capsules`" active-class="active">
                                            Maeng Da Kratom
                                        </NuxtLink>
                                    </li>
                                    <li class="sidebar-widget-list-left">
                                        <NuxtLink :to="`/thai-kratom-buy-kratom-online`" active-class="active">
                                            Thai Kratom
                                        </NuxtLink>
                                    </li>
                                    <li class="sidebar-widget-list-left">
                                        <NuxtLink :to="`/malay-kratom`" active-class="active">
                                            Malay Kratom
                                        </NuxtLink>
                                    </li>
                                    <li class="sidebar-widget-list-left">
                                        <NuxtLink :to="`/sumatra-kratom`" active-class="active">
                                            Sumatra Kratom
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <NuxtLink :to="`/accessories-and-merchandise`" class="accordion-button collapsed no-child" type="button">                                
                                Accessories And Merchandise
                            </NuxtLink>
                        </h2>
                    </div>

                </div>

                <!--<ul class="sidebar-widget-list mt-20">                    
                    <li class="sidebar-widget-list-left" v-for="(category, index) in categoryList" :key="index">
                        <NuxtLink :to="`?category=${category}`">
                            <span class="check-mark"></span>
                            {{ category }}
                        </NuxtLink>
                    </li>
                </ul> -->
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ["classes"],
    computed: {
    },

    methods: {
    }
};
</script>

<style>
.sidebar-widget-categories h4.pro-sidebar-title {
    background: #333333;
    color: #fff;
    font-size: 26px;
    padding: 20px 25px 20px 25px;
}
.sidebar-widget-search {
    background: #4A6230;
    padding: 25px;
}
.sidebar-widget-search.sidebar-widget h4.pro-sidebar-title {
    color: #fff;
    font-size: 26px;
}
.sidebar-widget-search button {
    background: #FAB333;
    text-align: center;
    width: 100%;
    margin-top: 10px;
    font-size: 18px;
    text-transform: uppercase;
    padding: 10px 0;
    font-weight: 500;
}
.sidebar_cagtegories {
    background: #F3F5F2;
    padding: 25px;
}
body .sidebar-widget-categories .accordion-button {
    font-size: 15px;
    padding: 0;
    border: unset;
    background: unset;
    box-shadow: unset;
    padding: 8px 0 !important;
    text-transform: uppercase;
}
body .sidebar-widget-categories .accordion-item {
    background-color: transparent;
    border: unset;
    border-bottom: 1px solid #dee2e6;
}
body .sidebar-widget-categories .accordion-item:last-child {
    border-bottom: unset;
}
.no-child.accordion-button::after {
    opacity: 0 !important;
}
.sidebar-widget-categories .accordion-button:not(.collapsed) {
    color: #000;
}
.sidebar-widget-categories .accordion-button:not(.collapsed)::after {
    background-image: var(--bs-accordion-btn-icon);    
}
.sidebar-widget-categories .accordion-body {
    padding: 5px 0 10px 0;
}
.sidebar-widget-categories.sidebar-widget .sidebar-widget-list .sidebar-widget-list-left a {
    padding-left: 0px;
    font-size: 15px;
    font-weight: 400;
    justify-content: unset;
    width: auto;
    margin-left: 10px;
}
/* .sidebar-widget-categories.sidebar-widget .sidebar-widget-list .sidebar-widget-list-left a:before {
    content: '-';
    margin-right: 7px;
} */
.sidebar-widget-categories.sidebar-widget .sidebar-widget-list .sidebar-widget-list-left {
    margin-bottom: 5px;
}
</style>