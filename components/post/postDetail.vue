<template>
    <div class="post-details-page-wrapper">
        <div class="Blog-details-inner pt-60 pb-100">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-9">
                        <div class="blog-details-wrapper ml-20">
                            <div class="blog-details-top">
                                <div class="blog-details-img">
                                    <picture>                                        
                                        <source media="(max-width:767px)" :srcset="replaceSizeImg(blog['_embedded']['wp:featuredmedia'][0]['source_url'],'f_auto,w_400')">
                                        <img preload :src="blog['_embedded']['wp:featuredmedia'][0]['source_url']" alt="Kratom Spot Banner"  width="1022" height="682" class="banner_bg"/>
                                    </picture>
                                </div>
                                <div class="blog-details-content">
                                    <div class="post_content" v-html="blog.content.rendered"></div>
                                </div>
                            </div>
                            <div class="tag-share">
                                <div class="dec-tag">
                                    <ul>
                                        <li><a href="#">lifestyle ,</a></li>
                                        <li><a href="#">interior ,</a></li>
                                        <li><a href="#">outdoor</a></li>
                                    </ul>
                                </div>
                                <div class="blog-share">
                                    <span>share:</span>
                                    <div class="share-social">
                                        <ul>
                                            <li>
                                                <a class="facebook" href="#">
                                                    <i class="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="twitter" href="#">
                                                    <i class="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="instagram" href="#">
                                                    <i class="fa fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="Blog-Categories">Posted in
                                <div v-for="category in blog['_embedded']['wp:term'][0]">
                                    {{ category.name }} <span>,</span>

                                </div>
                            </div>
                            <div class="next-previous-post">
                                <a href="#"> <i class="fa fa-angle-left"></i> prev post</a>
                                <a href="#">next post <i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <ShopSidebar />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
import pop_products from "../data/product_popup.json";
export default {
    props: ["blog"],
    data() {
        return {
            //blog : post,
            //slug: useRoute().params.slug            
            pop_products: ref(pop_products)
        }
    },    
    methods: {
        replaceSizeImg(img, replacewith = 'h_400,w_400'){
            if(img.indexOf('f_auto,q_auto') > -1){
                img = img.replace("f_auto,q_auto", replacewith);
            }
            return img;
        },
    },
    mounted() {
        omnisend.push(["track", "$pageViewed"]);        
        var products_pop = this.pop_products;
        $(".post_content a").on("mouseover", function () {
            if($(this).find('.link_product_popup').length == 1){
                $(this).find('.link_product_popup').show();
            }else{
                var url = $(this).attr('href');                        
            let slug = url => new URL(url).pathname.match(/[^\/]+/g)            
            var product_slug = slug(url)[slug(url).length - 1];
            if(products_pop[product_slug]){
                var product = products_pop[product_slug];                
                var image = product.image;
                if(image.indexOf('f_auto,q_auto') > -1){
                    image = image.replace("f_auto,q_auto", "f_auto,w_180");
                }
                $(this).addClass('link_with_popup');
                if(product.type == 'product'){
                    var popup_html = '<div class="link_product_popup"><img src="'+image+'"/><h4>'+product.title+'</h4><a href="/'+product.slug+'">Shop Now</a></div>';
                }else if(product.type == 'product-category'){
                    var popup_html = '<div class="link_product_popup '+product.type+'"><img src="'+image+'"/><h4>'+product.title+'</h4><a href="/'+product.slug+'">Shop All</a></div>';
                }
                $(this).append(popup_html);
            }

            }
            
        });
        $(".post_content a").on("mouseout", function () {
            $(this).find('.link_product_popup').hide();
        });                
    },
    created(){
        
    },
};
</script>
<style>
a.link_with_popup {
    position: relative;
}
.link_product_popup {
    position: absolute;
    width: 180px;
    height: auto;
    display: inline-block;
    bottom: 100%;
    background: #fff;
    text-align: center;
    border: 1px solid #f5f5f5;
    left: 50%;
    margin-left: -90px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    z-index: 999;
}
body .post_content .link_product_popup a {
    background: #35492D;
    color: #fff !important;
    text-decoration: unset;
    padding: 5px 10px;
    width: 100%;
    display: inline-block;
}
.link_product_popup.product-category img {
    padding: 20px;
}
</style>