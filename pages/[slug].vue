<script setup>
const loading = ref(true);
const listloading = ref(false);
const route = useRoute();
const slug = ref(route.params.slug);
const product = ref("");
const content_type = ref("");
const kratom_products = ref("");
const category_id = ref("");
//const pagetitle = defineProps(['pagetitle']);
const pagetitle = ref("");
const currentDetailId = ref("");
const kratom_post = ref("");
const layout = ref("threeColumn");
const above_the_fold_texts = ref("");
const description = ref("");
const kratom_page_data = ref("");
const metadata = ref([]);
const permalink = ref(null);
const yoast_head_json = ref("");
const empty_message = ref("Coming Soon!");
const yotpo_reviews_count = ref([]);
const yotpo_reviews = ref([]);
const checking_current_page = ref(false);
const showall = ref(false);

import head_json from "../data/seo_data.json";
//import { useAsyncData } from '@nuxt/composition-api';
import axios from 'axios';
import KratomDetail from "~/components/kratom/product-detail/KratomDetail.vue";
import KratomDetailNew from "~/components/kratom/product-detail/KratomDetailNew.vue";
import KratomEffects from "~/components/kratom/product-detail/KratomEffects.vue";
//import CustomRelatedProducts from "~/components/kratom/CustomRelatedProducts.vue";
import CustomRelatedProducts from "~/components/kratom/product-detail/CustomRelatedProducts.vue";
import KratomProductDetailQualityImage from "~/components/kratom/product-detail/KratomProductDetailQualityImage.vue";
import KratomReviewsProduct from "~/components/kratom/product-detail/KratomReviewsProduct.vue";
import TitleBar from "~/components/kratom/product-category/TitleBar.vue";
import KratomCategoryTopSection from "~/components/kratom/product-category/KratomCategoryTopSection.vue";
import CategoryList from "~/components/kratom/product-category/CategoryList.vue";
import Categoryreviews from "~/components/kratom/new-home/Categoryreviews.vue";
import KratomResponsiblySourced from "~/components/kratom/product-category/KratomResponsiblySourced.vue";
import postDetail from "~/components/post/postDetail.vue";
import blogCTA from "~/components/kratom/blog/blogCTA.vue";
import PageDetail from "~/components/kratom/page/pageDetail.vue";
import KratomFreeShipping from "~/components/kratom/KratomFreeShipping.vue";
import $ from "jquery";


yoast_head_json.value = head_json[slug.value];

content_type.value = yoast_head_json.value.type;

/* const { data: yoast_head_json } = await useAsyncData('yoast_head_json', async () => {
    console.log('----')
    console.log('----')
    console.log('----')
    console.log('----')
    console.log('----')
    console.log('111');
  if (head_json[slug]) {
    return head_json[slug];
  } else {
    const response = await axios.get(
        useRuntimeConfig().public.api_url + '/wp-json/kratom/v3/get_head',
      {
        params: {
          slug: slug,
        },
      }
    );
    return response.data;
  }
}); */

function replaceSizeImg(img, replacewith = 'h_400,w_400') {
  if (img.indexOf('f_auto,q_auto') > -1) {
    img = img.replace("f_auto,q_auto", replacewith);
  }
  return img;
}


function yotporeviews(data) {
    const product_ids = [];
    $.each(data, function(i, item) {
        product_ids.push(data[i].id);
    });
    
    axios.get(
        useRuntimeConfig().public.api_url + '/wp-json/yotpo/reviews/',
        {
            params: {
                product_id: product_ids,
                per_page: 2
            }
        }
    ).then((result) => {
        yotpo_reviews_count.value = result.data;
    }, (error) => {
        console.log(error);
    });
    axios.get(
        useRuntimeConfig().public.api_url + '/wp-json/yotpo/reviews/',
        {
            params: {
                product_id: product_ids,
                per_page: 2,
                page_type: "category"
            }
        }
    ).then((result) => {
        yotpo_reviews.value = result.data;        
    }, (error) => {
        console.log(error);
    });
}

//import { Buffer } from "Buffer";
import { Buffer } from "buffer";

const load_yotpo = () => {
    const script = document.createElement('script')
        script.src = 'https://staticw2.yotpo.com/qISoyNDMzxbhZewW638yicv9a0Q2QtUPU5p1Xr57/widget.js'
        script.async = true;        
        script.onload = function() {
            yotpo.refreshWidgets()
        }
        document.head.appendChild(script) 
}


const fetchData = async () => {
  //const Buffer = require('buffer').Buffer;  
  const encodedCredentials = Buffer.from(`${useRuntimeConfig().public.consumer_key}:${useRuntimeConfig().public.secret_key}`).toString('base64');    
  if (content_type.value == 'product') {
    const result = await axios.get(useRuntimeConfig().public.api_url + "/wp-json/wc/v3/products", {
      params: {
        per_page: 1,
        slug: slug.value,
        status: 'publish',
        is_single: 'yes',
      },
      headers: {
        authorization: 'Basic ' + encodedCredentials
      }
    });
    
    product.value = result.data[0];    
    loading.value = false
    load_yotpo();
  } else if (content_type.value == 'product-category') {
    if (category_id.value && category_id.value != '') {
      const result = await axios.get(
        useRuntimeConfig().public.api_url + '/wp-json/wc/v3/products',
        {
          params: {
            per_page: 100,
            orderby: 'popularity',
            status: 'publish',
            category: category_id.value,
            is_list: "yes"
          },
          headers: {
            authorization: 'Basic ' + encodedCredentials
          }
        }
      );

      kratom_products.value = result.data;
      yotporeviews(result.data);
      loading.value = false      
    }
  } else if (content_type.value == 'post') {
    if (currentDetailId.value && currentDetailId.value != '') {
      const result = await axios.get(
        useRuntimeConfig().public.api_url + '/wp-json/wp/v2/posts/' + currentDetailId.value + '/?_embed',
        {
          params: {
            per_page: 1
          }
        }
      );

      kratom_post.value = result.data;
      pagetitle.value = result.data.title.rendered;
      loading.value = false
    }
  } else if (content_type.value == 'page') {
    if (currentDetailId.value && currentDetailId.value != '') {
      const result = await axios.get(
        useRuntimeConfig().public.api_url + '/wp-json/wp/v2/pages/' + currentDetailId.value + '/?_embed',
        {
          params: {
            per_page: 1
          }
        }
      );

      kratom_post.value = result.data;
      pagetitle.value = result.data.title.rendered
      loading.value = false
    }
  } else if (content_type.value == 'none') {
    loading.value = false
  }
  
};
const fetch = async () => {
  const result = await axios.get(useRuntimeConfig().public.api_url + "/wp-json/current/v3/page", {
    params: {
      slug: slug.value
    }
  });
  kratom_page_data.value = result.data;
  content_type.value = result.data['type'];
  if (result.data['cat_id']) {
    category_id.value = result.data['cat_id'];
  }
  if (result.data['cat_title']) {
    pagetitle.value = result.data['cat_title'];
    if (result.data['type'] == 'product-category') {
      //this.$store.dispatch('updateFromCategory', result.data['cat_title'])
    }
  }
  if (result.data['id']) {
    currentDetailId.value = result.data['id'];
  }
  if (result.data['permalink']) {
    permalink.value = result.data['permalink'];
  }
  if (result.data['above_the_fold_texts']) {
    above_the_fold_texts.value = result.data['above_the_fold_texts'];
  }
  if (result.data['description']) {
    description.value = result.data['description'];
  }
  if (result.data['post_title']) {
    pagetitle.value = result.data['post_title'];
  }
  if (result.data['count'] == 0) {
    empty_message.value = result.data['empty_message'];
  }  
  //loading.value = false
  fetchData();
};

fetch();


const productProps = defineProps({
  product: Object,
  productId: Number,
  productPrice: String,
});


const product_loading = (() => {
  return loading.value ? 'product_loading' : '';
});

const schema_scripts = []
        //console.log(this.yoast_head_json);
        if (yoast_head_json.value && yoast_head_json.value.meta.schema) {
            schema_scripts.push({
                type: 'application/ld+json',
                json: yoast_head_json.value && yoast_head_json.value.meta.schema
                    ? yoast_head_json.value.meta.schema
                    : ''
            });
        }
        if (yoast_head_json.value && yoast_head_json.value.product_schema) {
            schema_scripts.push({
                type: 'application/ld+json',
                json: yoast_head_json.value && yoast_head_json.value.product_schema
                    ? yoast_head_json.value.product_schema
                    : ''
            });
        }
        if (yoast_head_json.value && yoast_head_json.value.review_schema) {
            schema_scripts.push({
                type: 'application/ld+json',
                json: yoast_head_json.value && yoast_head_json.value.review_schema
                    ? yoast_head_json.value.review_schema
                    : ''
            });
        }
        var robots = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
        if (yoast_head_json.value && yoast_head_json.value.meta.robots) {
            if(yoast_head_json.value.meta.robots.index == 'noindex' && yoast_head_json.value.meta.robots.follow == 'nofollow'){
                robots = 'noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
            }else if(yoast_head_json.value.meta.robots.index == 'noindex'){
                robots = 'noindex, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
            }else if(yoast_head_json.value.meta.robots.follow == 'nofollow'){
                robots = 'index, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
            }
        }

useHead({
            htmlAttrs: { lang: 'en-US' },
            title: yoast_head_json.value && yoast_head_json.value.meta.title ? yoast_head_json.value.meta.title : 'Kratom Spot',
            link: [{
                href: permalink.value ? permalink.value : yoast_head_json.value && yoast_head_json.value.meta.canonical
                    ? yoast_head_json.value.meta.canonical
                    : '',
                rel: 'canonical'
            },
            ],
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: yoast_head_json.value && yoast_head_json.value.meta.description
                        ? yoast_head_json.value.meta.description
                        : 'Kratom Spot'
                },
                {
                    hid: 'robots',
                    name: 'robots',
                    content: robots
                },
                {
                    hid: 'og:locale',
                    name: 'og:locale',
                    content: yoast_head_json.value && yoast_head_json.value.meta.og_locale
                        ? yoast_head_json.value.meta.og_locale
                        : 'en_US'
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: yoast_head_json.value && yoast_head_json.value.meta.og_type
                        ? yoast_head_json.value.meta.og_type
                        : 'page'
                },
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: yoast_head_json.value && yoast_head_json.value.meta.title ? yoast_head_json.value.meta.title : 'Kratom Spot'
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: yoast_head_json.value && yoast_head_json.value.meta.og_description
                        ? yoast_head_json.value.meta.og_description
                        : 'Kratom Spot'
                },
                {
                    hid: 'og:url',
                    name: 'og:url',
                    content: permalink.value ? permalink.value : yoast_head_json.value && yoast_head_json.value.meta.og_url
                        ? yoast_head_json.value.meta.og_url
                        : ''
                },
                {
                    hid: 'og:site_name',
                    name: 'og:site_name',
                    content: yoast_head_json.value && yoast_head_json.value.meta.og_site_name
                        ? yoast_head_json.value.meta.og_site_name
                        : 'Buy Kratom Online'
                },
                {
                    hid: 'article:publisher',
                    name: 'article:publisher',
                    content: yoast_head_json.value && yoast_head_json.value.meta.article_publisher
                        ? yoast_head_json.value.meta.article_publisher
                        : 'https://www.facebook.com/KSPOTNaturalCo'
                },
                {
                    hid: 'article:modified_time',
                    name: 'article:modified_time',
                    content: yoast_head_json.value && yoast_head_json.value.meta.article_modified_time
                        ? yoast_head_json.value.meta.article_modified_time
                        : ''
                },
                {
                    hid: 'og:image',
                    name: 'og:image',
                    content: yoast_head_json.value && yoast_head_json.value.meta && yoast_head_json.value.meta.og_image
                        ? yoast_head_json.value.meta.og_image[0].url
                        : ''
                },
                {
                    hid: 'og:image:width',
                    name: 'og:image:width',
                    content: yoast_head_json.value && yoast_head_json.value.meta && yoast_head_json.value.meta.og_image
                        ? yoast_head_json.value.meta.og_image[0].width
                        : ''
                },
                {
                    hid: 'og:image:height',
                    name: 'og:image:height',
                    content: yoast_head_json.value && yoast_head_json.value.meta && yoast_head_json.value.meta.og_image
                        ? yoast_head_json.value.meta.og_image[0].height
                        : ''
                },
                {
                    hid: 'og:image:type',
                    name: 'og:image:type',
                    content: yoast_head_json.value && yoast_head_json.value.meta && yoast_head_json.value.meta.og_image
                        ? yoast_head_json.value.meta.og_image[0].og_type
                        : ''
                },
                
            ],
            script: schema_scripts
        })

</script>
<template>
    <div class=""
        :class="`content_type_${content_type} ${content_type == 'product' ? 'product-details-page-wrapper' : ''}`">
        <!-- <div v-if="yoast_head_json && yoast_head_json.categories && yoast_head_json.categories.includes('accessories-and-merchandise')"></div> -->        
        <section class="py-5 product_detail_section product_detail_section_loading py-sm-0" v-if="yoast_head_json && yoast_head_json.categories && yoast_head_json.categories.includes('accessories-and-merchandise') && content_type && content_type == 'product' && loading == true">
            <div class="container pt-40">
                <div class="row my-6 pl-15 pr-15">
                    <div id="sm-order3"
                        class="col-lg-4 col-md-12 col-sm-12 mx-auto pl-0 pr-10 mt-10 pl-md-0 pr-md-0 mt-sm-25">
                        <!-- <div class="product_detail_categories_section bg-3 p-40 mb-40 pt-sm-20 pb-sm-20 pl-sm-20 pr-sm-20">                            
                            <p class="text-black"> <strong>SKU:</strong> <span>N/A</span></p>
                        </div> -->
                       <!--  <div class="mb-30 d-inline-block">
                                <div class="text-black green_vein_item mb-10"><NuxtImg format="webp" loading="lazy"  class="w-10" height="45" width="45" :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/green_vein_1.png`"
                                    alt="image_2.png" /> <span> Red
                                        Vein </span></div>
                                <div class="text-black green_vein_item mb-10"><NuxtImg format="webp" loading="lazy"  class="w-10" height="45" width="45" :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/green_vein_2.png`"
                                    alt="image_2.png" /> <span> 0.7g
                                        per Capsule </span></div>
                                <div class="text-black green_vein_item mb-10"><NuxtImg format="webp" loading="lazy"  class="w-10" height="45" width="45" :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/green_vein_3.png`"
                                    alt="image_2.png" /> <span> Size 00
                                    </span></div>
                            </div> -->
                        <ul class="product_detail_extra_list mb-40">
                        <li><img loading="lazy" class="w-5" height="25" width="25" :src="`/img/kratom/icons/ext_1.png`" alt="ext_1.png" />Tested for
                            contaminants, heavy metals, and adulterants</li>
                        <li><img loading="lazy"  class="w-5" height="25" width="25" :src="`/img/kratom/icons/ext_2.png`" alt="ext_2.png" />Premium grade kratom
                            leaf powder</li>
                        <li><img loading="lazy"  class="w-5" height="25" width="25" :src="`/img/kratom/icons/ext_3.png`" alt="ext_3.png" />100% all-natural
                            kratom</li>
                        <li><img loading="lazy"  class="w-5" height="25" width="25" :src="`/img/kratom/icons/ext_4.png`" alt="ext_4.png" />No additives or
                            fillers</li>
                        <li><img loading="lazy"  class="w-5" height="25" width="25" :src="`/img/kratom/icons/ext_5.png`" alt="ext_5.png" />Certified GMP (Good
                            Manufacturing Practice) Product</li>
                    </ul>
                    </div>
                    <div id="sm-order1" class="col-lg-4 col-md-12 col-sm-12 mx-auto product-mob-img pl-sm-0 pr-sm-0">
                        <div class="product-details-img">
                            <img format="webp" height="800" width="800" rel="preload" class="img-fluid" :src="replaceSizeImg(yoast_head_json.meta.og_image[0].url,'h_400,w_400')" :alt="yoast_head_json.meta.title"/>
                        </div>
                    </div>
                    <div id="sm-order2"
                        class="col-lg-4 col-md-12 col-sm-12 product-price-box mt-10 pt-sm-20 pr-sm-20 pb-sm-20 pl-sm-20 mt-sm-20 my-md-5">
                        <div class="mx-auto d-block">
                            <div class="colored_title">
                                <h1 v-html="yoast_head_json.meta.og_title"></h1>
                            </div>
                           <!--  <div class="text-black mb-30"><span class="kratom-product-price"><span
                                        class="woocommerce-Price-amount amount"><bdi><span
                                                class="woocommerce-Price-currencySymbol">$</span>7.99</bdi></span> – <span
                                        class="woocommerce-Price-amount amount"><bdi><span
                                                class="woocommerce-Price-currencySymbol">$</span>89.99</bdi></span></span>
                            </div>   -->                          
                            <div class="product_detail_addtocart_section"><input type="number" value="1" min="1"
                                    class="product_detail_qty"> <button type="button"
                                    class="btn product_detail_addtocart_btn text-white">ADD TO CART</button> <input
                                    type="hidden" id="selected_product_variation"> <input type="hidden"
                                    id="selected_product_id" value="1234"> <input type="hidden" id="selected_product_type"
                                    value="variable"></div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-5 product_detail_section product_detail_section_loading py-sm-0" v-else-if="yoast_head_json && content_type && content_type == 'product' && loading == true">
            <div class="container pt-40">
                <div class="row my-6 pl-15 pr-15">
                    <div id="sm-order3"
                        class="col-lg-4 col-md-12 col-sm-12 mx-auto pl-0 pr-10 mt-10 pl-md-0 pr-md-0 mt-sm-25">
                        <div class="product_detail_silde_row position-relative">
                        <ul class="product_detail_extra_list_n">
                            <li class="text-li text-li-1">
                                <span class="text-t">SAME DAY SHIPPING</span>
                                <span class="text-p">ON ALL ORDERS PLACED BEFORE 3PM PST</span>
                            </li>
                            <li class="text-li text-li-2">
                                <span class="text-t">100% SATISFACTION</span>
                                <span class="text-p">GUARANTEED OR YOUR MONEY BACK</span>
                            </li>
                            <li class="text-li text-li-3">
                                <span class="text-t">FREE PRIORITY SHIPPING</span>
                                <span class="text-p">ON ORDERS $100+</span>
                            </li>
                            <li class="text-li text-li-4">
                                <span class="text-t">GMP COMPLIANT</span>
                                <span class="text-p">PRODUCT AND FACILITY</span>
                            </li>
                            <li class="text-li text-li-5">
                                <span class="text-t">LAB TESTED</span>
                                <span class="text-p">QUALITY CONTROL</span>
                            </li>
                            <li class="text-li text-li-6">
                                <span class="text-t">EARN LOYALTY POINTS</span>
                                <span class="text-p">AND REDEEM FOR DEALS</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div id="sm-order1" class="col-lg-4 col-md-12 col-sm-12 mx-auto product-mob-img pl-sm-0 pr-sm-0">
                        <div class="product-details-img">
                            <img format="webp" height="800" width="800" rel="preload" class="img-fluid" :src="replaceSizeImg(yoast_head_json.meta.og_image[0].url,'h_400,w_400')" :alt="yoast_head_json.meta.title"/>
                        </div>
                    </div>
                    <div id="sm-order2"
                        class="col-lg-4 col-md-12 col-sm-12 product-price-box mt-10 pt-sm-20 pr-sm-20 pb-sm-20 pl-sm-20 mt-sm-20 my-md-5">
                        <div class="mx-auto d-block">
                            <div class="colored_title">
                                <h1 v-html="yoast_head_json.meta.og_title"></h1>
                            </div>
                           <!--  <div class="text-black mb-30"><span class="kratom-product-price"><span
                                        class="woocommerce-Price-amount amount"><bdi><span
                                                class="woocommerce-Price-currencySymbol">$</span>7.99</bdi></span> – <span
                                        class="woocommerce-Price-amount amount"><bdi><span
                                                class="woocommerce-Price-currencySymbol">$</span>89.99</bdi></span></span>
                            </div>   -->                          
                            <div class="product_detail_addtocart_section"><input type="number" value="1" min="1"
                                    class="product_detail_qty"> <button type="button"
                                    class="btn product_detail_addtocart_btn text-white">ADD TO CART</button> <input
                                    type="hidden" id="selected_product_variation"> <input type="hidden"
                                    id="selected_product_id" value="1234"> <input type="hidden" id="selected_product_type"
                                    value="variable"></div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div v-if="loading == true && yoast_head_json && content_type && content_type!='product-category' && content_type && content_type!='post'" class="pt-140 pb-140 text-center spin_loader 2">
            <img  width="120" height="120" :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/Spinner-1s-200px.gif`">
        </div>
        <div v-else-if="checking_current_page == true" class="pt-140 pb-140 text-center spin_loader 3"><img  width="120" height="120"
                :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/Spinner-1s-200px.gif`"></div>
        <!-- Product -->
        <div class="product_container" :class="product_loading" v-if="yoast_head_json && yoast_head_json.categories && yoast_head_json.categories.includes('accessories-and-merchandise') && content_type && content_type == 'product'">
            <KratomDetail2 :product="product" :product_id="product.id" :product_price="product.price_html" :product_laberesult="product.ACF.lab_results" :product_moreinfo="product.ACF.additional_information"
                :description="product.description"
                v-if="product.ACF && loading == false && content_type == 'product'" />
            <KratomDetail2 :product="product" :product_id="product.id" :product_price="product.price_html" 
                v-else-if="loading == false && content_type == 'product'" />
            <KratomDetailTabs v-if="product.ACF && loading == false && content_type == 'product'"
                :product_laberesult="product.ACF.lab_results" :product_moreinfo="product.ACF.additional_information"
                :description="product.description" />
            <KratomDetailTabs v-else-if="loading == false && content_type == 'product'"
                :description="product.description" />
            <CustomRelatedProducts :product_related="product.related_ids"
                v-if="loading == false && content_type == 'product' && product.related_ids != undefined" />
            <KratomProductDetailQualityImage v-if="showall && loading == false && content_type == 'product'" />
            <KratomReviewsProduct v-if="showall && loading == false && content_type == 'product'" :product="product"
                :product_id="product.id" class="mb-80" />
            <KratomFreeShipping v-if="showall && content_type == 'product' && loading == false" />
        </div>
        <div class="product_container KratomDetail1" :class="product_loading" v-else-if="yoast_head_json && content_type && content_type == 'product'">            
            <!-- <KratomDetail :product="product" :product_id="product.id" :product_price="product.price_html" :product_laberesult="product.ACF.lab_results" :product_moreinfo="product.ACF.additional_information"
                :description="product.description"
                v-if="product.ACF && loading == false && content_type == 'product'" />
            <KratomDetail :product="product" :product_id="product.id" :product_price="product.price_html" 
                v-else-if="loading == false && content_type == 'product'" /> -->
            <!-- <KratomDetail :product="product" name="adfasdf" v-bind:props="{ name : 'hhhhaaaarrrssshhhiiiitttt' }" v-if="loading == false && content_type == 'product'" />                         -->            
            <KratomDetailNew :product="product" :product_id="product.id" :price_html="product.price_html" :product_laberesult="product.ACF.lab_results" :product_moreinfo="product.ACF.additional_information"
                :description="product.description" v-if="loading == false && content_type == 'product'" />                        
            <!-- <KratomDetailTabs v-if="product.ACF && loading == false && content_type == 'product'"
                :product_laberesult="product.ACF.lab_results" :product_moreinfo="product.ACF.additional_information"
                :description="product.description" />
            <KratomDetailTabs v-else-if="loading == false && content_type == 'product'"
                :description="product.description" /> -->
            <KratomEffects v-if="loading == false && content_type == 'product'" :product="product"/>
            
            <CustomRelatedProducts :product_related="product.related_ids"
                v-if="loading == false && content_type == 'product' && product.related_ids != undefined"/>
            <KratomProductDetailQualityImage v-if="loading == false && content_type == 'product'" />
            <KratomReviewsProduct v-if="loading == false && content_type == 'product'" :product="product"
                :product_id="product.id" class="mb-80" />
            <KratomFreeShipping v-if="content_type == 'product' && loading == false" />
        </div>

        <!-- Product Category -->
        <div class="product_category_container" v-if="yoast_head_json && content_type && content_type == 'product-category'">
            <!-- <TitleBar :title="pagetitle" v-if="loading == false && content_type == 'product-category'" /> -->
            <TitleBar :title="pagetitle" v-if="yoast_head_json && content_type && content_type == 'product-category'" />
            <TitleBar :title="pagetitle" v-else-if="loading == false && content_type == 'product-category'" />
            <KratomCategoryTopSection v-if="yoast_head_json && content_type && content_type=='product-category'"
                :above_the_fold_texts="(above_the_fold_texts)?above_the_fold_texts:yoast_head_json.above_the_fold_texts" />
            
            <div class="shop-area pt-100 pb-100 pt-sm-0 pb-sm-0 mt-sm-20 mb-sm-20 mt-40 mb-40">
                <div class="container">
                    <div class="row flex-row-reverse">
                        <div class="col-lg-9" :class="loading ? 'category_loading' : ''" v-if="loading == true && yoast_head_json && content_type && content_type=='product-category'">
                            <div v-if="loading == true && yoast_head_json && content_type && (content_type=='product-category' || content_type=='post')" class="pt-140 pb-140 text-center spin_loader 4"><img  width="120" height="120"
                :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/Spinner-1s-200px.gif`"></div>                            
                        </div>
                        <div class="col-lg-9" v-if="loading == false && content_type == 'product-category'">
                            <div class="mb-20">
                                <div class="shop-top-bar mt-0 mt-md-30">
                                    <div class="select-showing-wrap">
                                        <div class="shop-select">
                                            <select @change="sortby($event)">
                                                <option value="popularity">Sort by Popularity</option>
                                                <option value="date">Sort by latest</option>
                                                <option value="price">Price - Low to High</option>
                                                <option value="price-desc">Price - High to Low</option>
                                            </select>
                                        </div>
                                        <a class="listpage_filter_button d-md-none" @click="scrollToFilter">Filters</a>
                                    </div>
                                    <div class="shop-tab">
                                        <button @click="layout = 'threeColumn'" :class="{ active: layout === 'threeColumn' }">
                                            <i class="fa fa-th"></i>
                                        </button>
                                        <button @click="layout = 'list'" :class="{ active: layout === 'list' }">
                                            <i class="fa fa-list-ul"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div v-if="listloading == true" class="pt-140 pb-140 text-center "><img  width="120" height="120"
                                    :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/Spinner-1s-200px.gif`"></div>
                            <CategoryList :kratom_products="kratom_products" :layout="layout" :empty_message="empty_message" :yotpo_reviews_count="yotpo_reviews_count"  v-else />
                        </div>
                        <div class="col-lg-3">
                            <ShopSidebar id="filter" />
                        </div>
                    </div>
                </div>
            </div>
            <Categoryreviews v-if="loading == false && content_type == 'product-category'" :yotpo_reviews="yotpo_reviews" />
            <KratomResponsiblySourced v-if="loading == false && content_type == 'product-category'"
            :description="description" />
        </div>

        <!-- Post -->
        <!-- <TitleBar :title="pagetitle" v-if="loading == false && content_type == 'post'" /> -->
        <TitleBar :title="pagetitle" v-if="yoast_head_json && content_type && content_type == 'post'" />
        <TitleBar :title="pagetitle" v-else-if="loading == false && content_type == 'post'" />
        <postDetail :blog='kratom_post' v-if="kratom_post && loading == false && content_type == 'post'" />
        <blogCTA v-if="showall && kratom_post && loading == false && content_type == 'post'"/>

        <!-- Page -->
        <TitleBar :title="pagetitle" v-if="loading == false && content_type == 'page'" />
        <PageDetail :blog='kratom_post' v-if="kratom_post && loading == false && content_type == 'page'" />

        <!-- 404 -->
        <error404 v-if="loading == false && content_type == 'none'" />
        
        <div v-if="loading == true && yoast_head_json && content_type && content_type=='post'" class="pt-140 pb-140 text-center spin_loader 1"><img  width="120" height="120"
                :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/Spinner-1s-200px.gif`"></div>

        <!-- <KratomTheFooter :yotpo_review = "yoast_head_json && content_type && content_type == 'product-category' ? 'no' : '' "/> -->
        
    </div>
</template>
<style>
@media only screen and (max-width: 767px) {
    .shop-area.py-sm-00 {
        padding: 0;
    }
}
</style>
<!-- <script>
import axios from "axios";
import KratomDetail from "../components/kratom/product-detail/KratomDetail.vue";
import KratomDetailTabs from "../components/kratom/product-detail/KratomDetailTabs.vue";
import KratomEffects from "../components/kratom/product-detail/KratomEffects.vue";
import CustomRelatedProducts from "../components/kratom/product-detail/CustomRelatedProducts.vue";
import KratomProductDetailQualityImage from "../components/kratom/product-detail/KratomProductDetailQualityImage.vue";
import KratomFreeShipping from "../components/kratom/KratomFreeShipping.vue";

import TitleBar from '../components/kratom/product-category/TitleBar.vue';
import CategoryList from '../components/kratom/product-category/CategoryList.vue';
import KratomReviewsProduct from "../components/kratom/product-detail/KratomReviewsProduct.vue";
import PageDetail from "../components/kratom/page/pageDetail.vue";
import blogCTA from "../components/kratom/blog/blogCTA.vue";

import head_json from "../data/seo_data.json";
import Categoryreviews from "../components/kratom/new-home/Categoryreviews.vue";
import $ from 'jquery';

import { Buffer } from "buffer";


export default {
    asyncData(context) {
        console.log('asfasdf');
        if(head_json[context.params.slug]){            
            let yoast_head_json = head_json[context.params.slug];            
            return { yoast_head_json };
        }else{
            return axios.get(
            useRuntimeConfig().public.api_url + '/wp-json/kratom/v3/get_head',
            {
                params: {
                    slug: context.params.slug

                }
            }
        ).then(response => {
            let yoast_head_json = response.data;            
            return { yoast_head_json };
        })
        }        
    },
    data() {
        return {
            loading: true,
            listloading: false,
            slug: useRoute().params.slug,
            product: "",
            content_type: '',
            kratom_products: '',
            category_id: '',
            pagetitle: this.pagetitle,
            currentDetailId: '',
            kratom_post: "",
            layout: "threeColumn",
            above_the_fold_texts: '',
            description: '',
            kratom_page_data: '',
            metadata: [],
            permalink: null,
            yoast_head_json: '',
            empty_message: 'Coming Soon!',
            yotpo_reviews_count : [],
            yotpo_reviews : [],
            checking_current_page : false,
            showall: false
        };
    },
    computed: {
        meta_data() {
            return this.metadata;
        }
    },
    /* async fetch(){
        //console.log(head_json[useRoute().params.slug]);
        if(head_json[useRoute().params.slug]){
            this.yoast_head_json = head_json[useRoute().params.slug];
        }else{
            this.checking_current_page = true;
            await axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/kratom/v3/get_head',
                {
                    params: {
                        slug: useRoute().params.slug

                    }
                }
            ).then(response => {
                this.yoast_head_json = response.data;
                //return { yoast_head_json };
            }).finally(() => { 
                this.checking_current_page = false; 
            });
        }
    }, */
    methods: {       
        handleScroll() {
            window.onscroll = () => {
                if(window.top.scrollY > 1){
                    this.showall = true;
                }
            };
        }, 
        replaceSizeImg(img, replacewith = 'h_400,w_400'){
            if(img.indexOf('f_auto,q_auto') > -1){
                img = img.replace("f_auto,q_auto", replacewith);
            }
            return img;
        },
        scrollToFilter() {
            document.getElementById('filter').scrollIntoView({
                behavior: 'smooth'
            });
        },
        sortby(event) {
            //const Buffer = require('buffer').Buffer;
            const encodedCredentials = Buffer.from(`${useRuntimeConfig().public.consumer_key}:${useRuntimeConfig().public.secret_key}`).toString('base64');

            this.listloading = true;
            var sortby = event.target.value;

            if (sortby == 'price-desc') {
                var params = {
                    per_page: 100,
                    order: 'desc',
                    orderby: 'price',
                    status: 'publish',
                    search: useRoute().query.s,
                    /* consumer_key: useRuntimeConfig().public.consumer_key,
                    consumer_secret: useRuntimeConfig().public.secret_key, */
                }
            } else {
                var params = {
                    per_page: 100,
                    order: 'asc',
                    orderby: sortby,
                    status: 'publish',
                    search: useRoute().query.s,
                    /* consumer_key: useRuntimeConfig().public.consumer_key,
                    consumer_secret: useRuntimeConfig().public.secret_key, */
                }

            }
            if (this.category_id != undefined && this.category_id != "") {
                params['category'] = this.category_id;
            }

            axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/wc/v3/products',
                {
                    params: params,
                    headers: {
                        authorization: 'Basic ' + encodedCredentials
                    }
                }
            ).then((result) => {
                this.kratom_products = result.data;
            }, (error) => {
                console.log(error);
            }).finally(() => { this.listloading = false; });

        },
        fetch() {
            axios.get(useRuntimeConfig().public.api_url + "/wp-json/current/v3/page", {
                params: {
                    slug: this.slug
                }
            }).then((result) => {
                this.kratom_page_data = result.data;
                content_type.value = result.data['type'];
                if (result.data['cat_id']) {
                    this.category_id = result.data['cat_id'];
                }
                if (result.data['cat_title']) {
                    this.pagetitle = result.data['cat_title'];
                    if (result.data['type'] == 'product-category') {
                        //this.$store.dispatch('updateFromCategory', result.data['cat_title'])

                    }
                }
                if (result.data['id']) {
                    this.currentDetailId = result.data['id'];
                }
                if (result.data['permalink']) {
                    this.permalink = result.data['permalink'];
                }
                if (result.data['above_the_fold_texts']) {
                    this.above_the_fold_texts = result.data['above_the_fold_texts'];
                }
                if (result.data['description']) {
                    this.description = result.data['description'];
                }
                if (result.data['post_title']) {
                    this.pagetitle = result.data['post_title'];
                }
                if (result.data['count'] == 0) {
                    this.empty_message = result.data['empty_message'];
                }
                /* axios.get(
                            useRuntimeConfig().public.api_url + '/wp-json/yoast/v1/get_head',
                            {
                                params: {
                                    url: this.permalink
                                },
                                headers: {
                                    //authorization: 'Basic ' + encodedCredentials
                                }
                            }
                        ).then((result) => {
                            console.log(result.data.json);
                            //this.yoast_head_json = result.data.json;
                        }, (error) => {
                            console.log(error);
                        }); */


                this.fetchdata();
            }, (error) => {
                console.log(error);
            });
        },
        fetchdata() {
            //const Buffer = require('buffer').Buffer;
            const encodedCredentials = Buffer.from(`${useRuntimeConfig().public.consumer_key}:${useRuntimeConfig().public.secret_key}`).toString('base64');
            if (content_type.value == 'product') {
                axios.get(useRuntimeConfig().public.api_url + "/wp-json/wc/v3/products", {
                    params: {
                        per_page: 1,
                        slug: this.slug,
                        status: 'publish',
                        is_single: 'yes',
                        /* consumer_key: useRuntimeConfig().public.consumer_key,
                        consumer_secret: useRuntimeConfig().public.secret_key, */
                    },
                    headers: {
                        authorization: 'Basic ' + encodedCredentials
                    }
                }).then((result) => {

                    this.product = result.data[0];
                    //this.yoast_head_json = result.data[0].yoast_head_json;


                }, (error) => {
                    console.log(error);
                }).finally(() => (this.loading = false));
            } else if (content_type.value == 'product-category') {

                if (this.category_id && this.category_id != '') {
                    axios.get(
                        useRuntimeConfig().public.api_url + '/wp-json/wc/v3/products',
                        {
                            params: {
                                per_page: 100,
                                orderby: 'popularity',
                                status: 'publish',
                                category: this.category_id,
                                is_list: "yes"
                                /* consumer_key: useRuntimeConfig().public.consumer_key,
                                consumer_secret: useRuntimeConfig().public.secret_key, */
                            },
                            headers: {
                                authorization: 'Basic ' + encodedCredentials
                            }
                        }
                    ).then((result) => {
                        this.kratom_products = result.data;
                        this.yotporeviews(result.data);
                        /* axios.get(
                            useRuntimeConfig().public.api_url + '/wp-json/yoast/v1/get_head',
                            {
                                params: {
                                    url: this.permalink
                                },
                                headers: {
                                    authorization: 'Basic ' + encodedCredentials
                                }
                            }
                        ).then((result) => {
                            console.log(result.data.json);
                            this.yoast_head_json = result.data.json;
                        }, (error) => {
                            console.log(error);
                        }).finally(() => (this.loading = false)); */

                        /* this.yoast_head_json = result.data[0].yoast_head_json; */
                    }, (error) => {
                        console.log(error);
                    }).finally(() => (this.loading = false));
                }
                if (this.category_id && this.category_id != '') {

                }
            } else if (content_type.value == 'post') {
                if (this.currentDetailId && this.currentDetailId != '') {
                    axios.get(
                        useRuntimeConfig().public.api_url + '/wp-json/wp/v2/posts/' + this.currentDetailId + '/?_embed',
                        {
                            params: {
                                per_page: 1
                            }
                        }
                    ).then((result) => {

                        this.kratom_post = result.data;
                        //this.yoast_head_json = result.data.yoast_head_json;

                        this.pagetitle = result.data.title.rendered;
                    }, (error) => {
                        console.log(error);
                    }).finally(() => (this.loading = false));
                }

            } else if (content_type.value == 'page') {
                if (this.currentDetailId && this.currentDetailId != '') {
                    axios.get(
                        useRuntimeConfig().public.api_url + '/wp-json/wp/v2/pages/' + this.currentDetailId + '/?_embed',
                        {
                            params: {
                                per_page: 1
                            }
                        }
                    ).then((result) => {
                        this.kratom_post = result.data;
                        //this.yoast_head_json = result.data.yoast_head_json;
                        this.pagetitle = result.data.title.rendered
                    }, (error) => {
                        console.log(error);
                    }).finally(() => (this.loading = false));
                }

            } else if (content_type.value == 'none') {
                this.loading = false
            }
        },

        yotporeviews(data) {
            const product_ids = [];
            $.each(data, function(i, item) {
                product_ids.push(data[i].id);
            });
            
            axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/yotpo/reviews/',
                {
                    params: {
                        product_id: product_ids,
                        per_page: 2
                    }
                }
            ).then((result) => {
                this.yotpo_reviews_count = result.data;
            }, (error) => {
                console.log(error);
            }).finally(() => (this.loading = false));

            axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/yotpo/reviews/',
                {
                    params: {
                        product_id: product_ids,
                        per_page: 2,
                        page_type: "category"
                    }
                }
            ).then((result) => {
                this.yotpo_reviews = result.data;
                /* console.log("yotpo_reviews");
                console.log(result.data); */
            }, (error) => {
                console.log(error);
            }).finally(() => (this.loading = false));
        }
    },
    mounted() {
        this.handleScroll();
        /* const script = document.createElement('script')
        script.src = 'https://staticw2.yotpo.com/qISoyNDMzxbhZewW638yicv9a0Q2QtUPU5p1Xr57/widget.js'
        document.head.appendChild(script) */
    },
    created() {
        if (this.slug == 'special') {
            this.$router.push('bundleandsave')
        }
        this.fetch();
    },
    head() {
        const schema_scripts = []
        //console.log(this.yoast_head_json);
        if (this.yoast_head_json && this.yoast_head_json.meta.schema) {
            schema_scripts.push({
                type: 'application/ld+json',
                json: this.yoast_head_json && this.yoast_head_json.meta.schema
                    ? this.yoast_head_json.meta.schema
                    : ''
            });
        }
        if (this.yoast_head_json && this.yoast_head_json.product_schema) {
            schema_scripts.push({
                type: 'application/ld+json',
                json: this.yoast_head_json && this.yoast_head_json.product_schema
                    ? this.yoast_head_json.product_schema
                    : ''
            });
        }
        if (this.yoast_head_json && this.yoast_head_json.review_schema) {
            schema_scripts.push({
                type: 'application/ld+json',
                json: this.yoast_head_json && this.yoast_head_json.review_schema
                    ? this.yoast_head_json.review_schema
                    : ''
            });
        }
        var robots = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
        if (this.yoast_head_json && this.yoast_head_json.meta.robots) {
            if(this.yoast_head_json.meta.robots.index == 'noindex' && this.yoast_head_json.meta.robots.follow == 'nofollow'){
                robots = 'noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
            }else if(this.yoast_head_json.meta.robots.index == 'noindex'){
                robots = 'noindex, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
            }else if(this.yoast_head_json.meta.robots.follow == 'nofollow'){
                robots = 'index, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
            }
        }
        return {
            htmlAttrs: { lang: 'en-US' },
            title: this.yoast_head_json && this.yoast_head_json.meta.title ? this.yoast_head_json.meta.title : 'Kratom Spot',
            link: [{
                href: this.permalink ? this.permalink : this.yoast_head_json && this.yoast_head_json.meta.canonical
                    ? this.yoast_head_json.meta.canonical
                    : '',
                rel: 'canonical'
            },
            ],
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.yoast_head_json && this.yoast_head_json.meta.description
                        ? this.yoast_head_json.meta.description
                        : 'Kratom Spot'
                },
                {
                    hid: 'robots',
                    name: 'robots',
                    content: robots
                },
                {
                    hid: 'og:locale',
                    name: 'og:locale',
                    content: this.yoast_head_json && this.yoast_head_json.meta.og_locale
                        ? this.yoast_head_json.meta.og_locale
                        : 'en_US'
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: this.yoast_head_json && this.yoast_head_json.meta.og_type
                        ? this.yoast_head_json.meta.og_type
                        : 'page'
                },
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.yoast_head_json && this.yoast_head_json.meta.title ? this.yoast_head_json.meta.title : 'Kratom Spot'
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: this.yoast_head_json && this.yoast_head_json.meta.og_description
                        ? this.yoast_head_json.meta.og_description
                        : 'Kratom Spot'
                },
                {
                    hid: 'og:url',
                    name: 'og:url',
                    content: this.permalink ? this.permalink : this.yoast_head_json && this.yoast_head_json.meta.og_url
                        ? this.yoast_head_json.meta.og_url
                        : ''
                },
                {
                    hid: 'og:site_name',
                    name: 'og:site_name',
                    content: this.yoast_head_json && this.yoast_head_json.meta.og_site_name
                        ? this.yoast_head_json.meta.og_site_name
                        : 'Buy Kratom Online'
                },
                {
                    hid: 'article:publisher',
                    name: 'article:publisher',
                    content: this.yoast_head_json && this.yoast_head_json.meta.article_publisher
                        ? this.yoast_head_json.meta.article_publisher
                        : 'https://www.facebook.com/KSPOTNaturalCo'
                },
                {
                    hid: 'article:modified_time',
                    name: 'article:modified_time',
                    content: this.yoast_head_json && this.yoast_head_json.meta.article_modified_time
                        ? this.yoast_head_json.meta.article_modified_time
                        : ''
                },
                {
                    hid: 'og:image',
                    name: 'og:image',
                    content: this.yoast_head_json && this.yoast_head_json.meta && this.yoast_head_json.meta.og_image
                        ? this.yoast_head_json.meta.og_image[0].url
                        : ''
                },
                {
                    hid: 'og:image:width',
                    name: 'og:image:width',
                    content: this.yoast_head_json && this.yoast_head_json.meta && this.yoast_head_json.meta.og_image
                        ? this.yoast_head_json.meta.og_image[0].width
                        : ''
                },
                {
                    hid: 'og:image:height',
                    name: 'og:image:height',
                    content: this.yoast_head_json && this.yoast_head_json.meta && this.yoast_head_json.meta.og_image
                        ? this.yoast_head_json.meta.og_image[0].height
                        : ''
                },
                {
                    hid: 'og:image:type',
                    name: 'og:image:type',
                    content: this.yoast_head_json && this.yoast_head_json.meta && this.yoast_head_json.meta.og_image
                        ? this.yoast_head_json.meta.og_image[0].og_type
                        : ''
                },
                
            ],
            script: schema_scripts
        }
    },
    /* head() {
        return {
            title: this.pagetitle,
            meta: [
                {name : 'descriptions' , content : this.metadesc},
            ]
        };
    }, */
    components: { KratomDetail, KratomDetailTabs, CustomRelatedProducts, KratomProductDetailQualityImage, KratomFreeShipping, TitleBar, CategoryList, KratomReviewsProduct, PageDetail, blogCTA, Categoryreviews }
};
</script> -->
<style>
.category_loading{
    min-height: 1500px;
}
</style>