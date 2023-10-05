<template>
    <section class="product_detail_tabs pt-100 position-relative mt-40 pt-md-60">
        <div class="product_detail_tabs_bg"></div>
        <div class="container product_detail_tabs_inner">
            <div class="description-review-topbar nav pt-sm-20 pb-sm-20">
                <a class="active pt-sm-20 pb-sm-20 pr-sm-45 pl-sm-45" data-bs-toggle="tab" href="#tab_description">
                    <span>Description</span>
                </a>
                <a data-bs-toggle="tab" href="#tab_more_info" v-if="product_moreinfo">
                    <span>More Info</span>
                </a>
                <a data-bs-toggle="tab" href="#tab_lab" v-if="product_laberesult">
                    <span>Lab Results</span>
                </a>
            </div>
            <div class="tab-content description-review-bottom">
                <div id="tab_description" class="tab-pane active" v-html="description"></div>
                <div id="tab_more_info" class="tab-pane" v-html="product_moreinfo"></div>
                <div id="tab_lab" class="tab-pane">
                    <div class="slider-btn btn-hover btn_yellow text-center mt-0">
                        <a :href="product_laberesult" class="homebanner_shop_btn" target="_blank"><i
                                class="fa fa-download mr-10" aria-hidden="true"></i> Download Lab Results</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    props: ['description', 'product_moreinfo', 'product_laberesult'],
};
</script>

<style>
.product_detail_tabs .description-review-topbar a {
    background: #FCB533;
    padding: 15px 45px 15px 45px;
}

.product_detail_tabs .description-review-topbar a span {
    color: #fff;
    margin: 0;
    text-transform: uppercase;
    font-size: 25px;
    font-family: "Bree Serif";
}

.product_detail_tabs .description-review-topbar a.active {
    border: unset !important;
    background: #fff;
    position: relative;
}

.product_detail_tabs .description-review-topbar a.active span {
    color: #000;
}

.product_detail_tabs .description-review-topbar {
    border-bottom: 0px solid #d7d7d7;
}

.product_detail_tabs_inner {
    position: relative;
    z-index: 9;
}

.product_detail_tabs_bg {
    background-image: url(/img/kratom/description_tabs_bg.webp);
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 440px;
    position: absolute;
    top: 0;
}

.product_detail_tabs .tab-pane {
    background-color: #fff;
    padding: 40px;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;
}

.product_detail_tabs {
    overflow: hidden;
    padding-bottom: 40px;
}

.product_detail_tabs .description-review-topbar a.active:before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -20px;
    width: 0;
    height: 0;
    border-top: solid 15px #fff;
    border-left: solid 20px transparent;
    border-right: solid 20px transparent;
}

@media only screen and (max-width:767px) {
    .product_detail_tabs_bg {
        background-image: url(/img/kratom/description_tabs_bg_mob.webp);
    }
}</style>