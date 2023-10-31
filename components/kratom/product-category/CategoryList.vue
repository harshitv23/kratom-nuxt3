<template>
    <div class="homebestseller pb-sm-0 mt-md-30" :class="layout">        
        <div class="product-area">            
            
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="new-product" role="tabpanel">                        
                        <div class="row" v-if="layout == 'list' && kratom_products.length > 0">
                            <div class="product_single_item col-md-12 mb-30" v-for="(product, index) in kratom_products" :key="index">
                                <ProductGridItem :yotpoonce="index" :product="product"  :layout="layout" :yotpo_reviews_count = "yotpo_reviews_count"/>
                            </div>
                        </div>
                        <div class="row" v-else-if="kratom_products.length > 0">
                            <div class="product_single_item col-xl-4 col-lg-6 col-md-4 col-6 mb-30" v-for="(product, index) in kratom_products" :key="index">
                                <ProductGridItem :yotpoonce="index" :product="product"  :layout="layout" :yotpo_reviews_count = "yotpo_reviews_count"/>
                            </div>
                        </div>                        
                        <div class="row" v-else>
                            <div class="col-12 mb-30 text-center pt-40">
                                {{ empty_message }}
                                <div class="slider-btn btn-hover btn_yellow text-center mt-20 mt-sm-20">
                                    <a href="/red-vein-kratom" class="homebanner_shop_btn">Shop All</a>
                                </div>
                            </div>
                        </div>                        
                    </div>           
                </div>
            
        </div>
    </div>
</template>



<script>      

    import KratomTitle from "../KratomTitle.vue";
    import $ from "jquery";        
    export default {
        components: {
        
        ProductGridItem: () => import("@/components/product/ProductGridItem"),
        
        KratomTitle
    },
    props: ['kratom_products','layout','empty_message', 'yotpo_reviews_count'],
    data() {
        return {
            slug: useRoute().params.slug,
            category_id : ''
        }
    },
    /* async fetch() {
        await axios.get( 
            useRuntimeConfig().public.api_url+'/wp-json/wc/v3/products',
                    {
                        params: {
                            per_page: 100,
                            order:'asc',
                            category:47,                            
                            consumer_key:useRuntimeConfig().public.consumer_key,
                            consumer_secret:useRuntimeConfig().public.secret_key,
                        }
                    }
                ).then((result) => {            
                    this.kratom_products = result.data;
                },(error) => {
                    console.log(error);
                });
            },*/
        methods: {
            /* async fetch() {
                console.log(this.slug);
                console.log(useRoute().params);
                await axios.get( 
                    useRuntimeConfig().public.api_url+'/wp-json/wc/v3/products/categories',
                    {
                        params: {
                            per_page: 1,                            
                            slug:this.slug,
                            consumer_key:useRuntimeConfig().public.consumer_key,
                            consumer_secret:useRuntimeConfig().public.secret_key,
                        }
                    }
                ).then((result) => {
                    console.log(result.data);
                    console.log(result.data[0].id);
                    this.category_id = result.data.id;
                },(error) => {
                    console.log(error);
                });

                if(this.category_id != ''){
                    await axios.get( 
                    useRuntimeConfig().public.api_url+'/wp-json/wc/v3/products',
                    {
                        params: {
                            per_page: 100,
                            order:'asc',
                            category:this.category_id,                            
                            consumer_key:useRuntimeConfig().public.consumer_key,
                            consumer_secret:useRuntimeConfig().public.secret_key,
                        }
                    }
                ).then((result) => {            
                    this.kratom_products = result.data;
                },(error) => {
                    console.log(error);
                }); 
                }               
            }*/
        },created () {
            /*this.fetch();*/
           
    
},
        mounted(){

           /*  const script = document.createElement('script')
        script.src = 'https://staticw2.yotpo.com/qISoyNDMzxbhZewW638yicv9a0Q2QtUPU5p1Xr57/widget.js'
        script.async = true;        
        script.onload = function() {
            yotpo.refreshWidgets()
        }
        document.head.appendChild(script)  */

            omnisend.push(["track", "$pageViewed"]);
            $('.sidebar-widget-search input[name="s"]').on('change keyup', function () { 
                var keyword = $(this).val().toLowerCase();      
                console.log(keyword);          
                $('.product-wrap .product-content h3 a').each(function(i, obj) {                    
                    var str1 = $(this).html().toLowerCase();
                    if(str1.indexOf(keyword) != -1){
                        $(this).closest('.product_single_item').removeClass('hidden');
                    }else{
                        $(this).closest('.product_single_item').addClass('hidden');
                    }
                });
                if(keyword == ''){
                    $('.product_single_item').removeClass('hidden');
                }
            })
        },
        computed: {
            newProducts() {                
                return this.$store.getters.getNewProducts.filter((item) => item.category.includes("cosmetics"))
            },
            bestProducts() {
                return this.$store.getters.getBestProducts.filter((item) => item.category.includes("cosmetics"))
            },
            saleProducts() {
                return this.$store.getters.getSaleProducts.filter((item) => item.category.includes("cosmetics"))
            },
        }
    };
</script>