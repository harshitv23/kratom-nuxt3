<template>
    <div class="homebestseller">
        <div class="product-area pt-55 pb-60 pt-sm-35 pb-sm-40">            
            <div class="">
                <div class="bestseller_title">
                <KratomTitle title="Kratom Spot" subTitle="Best Sellers" class="txt-md-center-home"/>
                <ul class="nav product-tab-list-2 d-lg-flex d-md-flex d-sm-none justify-content-lg-end justify-content-md-center">
                    <li class="nav-item tab_red" role="presentation">
                        <button @click="tab_click($event)" category_id="168" class="nav-link active" data-bs-toggle="pill" data-bs-target="#new-product" role="tab"><i class="fa fa-leaf" aria-hidden="true"></i> Red</button>
                    </li>
                    <li class="nav-item tab_green" role="presentation">
                        <button @click="tab_click($event)" category_id="170" class="nav-link" data-bs-toggle="pill" data-bs-target="#green" role="tab"><i class="fa fa-leaf" aria-hidden="true"></i> Green</button>
                    </li>
                    <li class="nav-item tab_white" role="presentation">
                        <button @click="tab_click($event)" category_id="169" class="nav-link" data-bs-toggle="pill" data-bs-target="#white" role="tab"><i class="fa fa-leaf" aria-hidden="true"></i> White</button>
                    </li>
                    <li class="nav-item tab_extracts" role="presentation">
                        <button @click="tab_click($event)" category_id="37" class="nav-link" data-bs-toggle="pill" data-bs-target="#extracts" role="tab"><i class="fa fa-leaf" aria-hidden="true"></i> Extracts</button>
                    </li>
                    <li class="nav-item tab_capsules" role="presentation">
                        <button @click="tab_click($event)" category_id="47" class="nav-link" data-bs-toggle="pill" data-bs-target="#capsules" role="tab"><i class="fa fa-leaf" aria-hidden="true"></i> Capsules</button>
                    </li>
                    <li class="nav-item tab_drinks" role="presentation">
                        <button @click="tab_click($event)" category_id="2763" class="nav-link" data-bs-toggle="pill" data-bs-target="#drinks" role="tab"><i class="fa fa-leaf" aria-hidden="true"></i> Drinks</button>
                    </li>
                    <li class="nav-item tab_leaves" role="presentation">
                        <button @click="tab_click($event)" category_id="2764" class="nav-link" data-bs-toggle="pill" data-bs-target="#leaves" role="tab"><i class="fa fa-leaf" aria-hidden="true"></i> Kratom Leaves</button>
                    </li>
                </ul>

                <select name="category_id" @change="tab_click($event,'select')" class="form-select form-control category-dropdown mt-sm-30 mb-sm-30">
                    <option value="168"><i aria-hidden="true" class="fa fa-leaf"></i> Red</option>
                    <option value="170"><i aria-hidden="true" class="fa fa-leaf"></i> Green</option>
                    <option value="169"><i aria-hidden="true" class="fa fa-leaf"></i> White</option>
                    <option value="37"><i aria-hidden="true" class="fa fa-leaf"></i> Extracts</option>
                    <option value="47"><i aria-hidden="true" class="fa fa-leaf"></i> Capsules</option>
                    <option value="2763"><i aria-hidden="true" class="fa fa-leaf"></i> Drinks</option>
                    <option value="2764"><i aria-hidden="true" class="fa fa-leaf"></i> Kratom Leaves</option>
                </select>

                </div>
                <div class="tab-content mt-sm-30 mt-20">
                    <div class="tab-pane fade show active" id="new-product" role="tabpanel">
                        <div v-if="loading == true" class="pt-30 pb-30 text-center "><img width="120" height="120" :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/Spinner-1s-200px.gif`"></div>
                        <div class="rowx" :class="loading == true ? 'hidden' : ''">
                            <div class="product-carousel product-carousel-nav-center position-relative">
                                
<Carousel v-bind="settings" :breakpoints="breakpoints_new" ref="carousel">
                  <Slide v-for="(product, index) in kratom_products_red" :key="index">
                      <ProductGridItem :yotpoonce="index" :product="product"  :layout="layout"/>
                  </Slide>              
                  
                </Carousel>
								
								<!-- Swiper Navigation Start -->
								<div class="product-carousel-nav swiper-button-prev swiper-button-prev1" @click="carousel_prev">
									<i class="pe-7s-angle-left"></i>
								</div>
								<div class="product-carousel-nav swiper-button-next swiper-button-next1" @click="carousel_next">
									<i class="pe-7s-angle-right"></i>
								</div>
								<!-- Swiper Navigation End -->
							</div> 
                            <div class="slider-btn btn-hover btn_yellow text-center mt-20">
                                <NuxtLink :to="`/red-vein-kratom`" class="homebanner_shop_btn">
                                    Shop All
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="green" role="tabpanel">
                        <div v-if="loading == true" class="pt-30 pb-30 text-center "><img width="120" height="120" :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/Spinner-1s-200px.gif`"></div>
                        <div class="rowx" :class="loading == true ? 'hidden' : ''">
                            <div class="product-carousel product-carousel-nav-center position-relative">
								<Carousel v-bind="settings" :breakpoints="breakpoints_new" ref="carousel">
									<Slide class="slide" v-for="(product, index) in kratom_products_green" :key="index">
										<ProductGridItem :yotpoonce="index" :product="product"  :layout="layout"/>
                                    </Slide>
								</Carousel>
								<!-- Swiper Navigation Start -->
								<div class="product-carousel-nav swiper-button-prev swiper-button-prev2">
									<i class="pe-7s-angle-left"></i>
								</div>
								<div class="product-carousel-nav swiper-button-next swiper-button-next2">
									<i class="pe-7s-angle-right"></i>
								</div>
								<!-- Swiper Navigation End -->
							</div>
                            <div class="slider-btn btn-hover btn_yellow text-center mt-20">
                                <NuxtLink :to="`/green-vein-kratom`" class="homebanner_shop_btn">
                                    Shop All
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="white" role="tabpanel">
                        <div v-if="loading == true" class="pt-30 pb-30 text-center "><img width="120" height="120" :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/Spinner-1s-200px.gif`"></div>
                        <div class="rowx" :class="loading == true ? 'hidden' : ''">
                            <div class="product-carousel product-carousel-nav-center position-relative">
								<Carousel v-bind="settings" :breakpoints="breakpoints_new" ref="carousel">
									<Slide class="slide" v-for="(product, index) in kratom_products_white" :key="index">
										<ProductGridItem :yotpoonce="index" :product="product"  :layout="layout"/>
                                    </Slide>
								</Carousel>
								<!-- Swiper Navigation Start -->
								<div class="product-carousel-nav swiper-button-prev swiper-button-prev3">
									<i class="pe-7s-angle-left"></i>
								</div>
								<div class="product-carousel-nav swiper-button-next swiper-button-next3">
									<i class="pe-7s-angle-right"></i>
								</div>
								<!-- Swiper Navigation End -->
							</div>
                            <div class="slider-btn btn-hover btn_yellow text-center mt-20">
                                <NuxtLink :to="`/white-vein-kratom`" class="homebanner_shop_btn">
                                    Shop All
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="extracts" role="tabpanel">
                        <div v-if="loading == true" class="pt-30 pb-30 text-center "><img width="120" height="120" :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/Spinner-1s-200px.gif`"></div>
                        <div class="rowx" :class="loading == true ? 'hidden' : ''">
                            <div class="product-carousel product-carousel-nav-center position-relative">
								<Carousel v-bind="settings" :breakpoints="breakpoints_new" ref="carousel">
									<Slide class="slide" v-for="(product, index) in kratom_products_extracts" :key="index">
										<ProductGridItem :yotpoonce="index" :product="product"  :layout="layout"/>
                                    </Slide>
								</Carousel>
								<!-- Swiper Navigation Start -->
								<div class="product-carousel-nav swiper-button-prev swiper-button-prev4">
									<i class="pe-7s-angle-left"></i>
								</div>
								<div class="product-carousel-nav swiper-button-next swiper-button-next4">
									<i class="pe-7s-angle-right"></i>
								</div>
								<!-- Swiper Navigation End -->
							</div>
                            <div class="slider-btn btn-hover btn_yellow text-center mt-20">
                                <NuxtLink :to="`/buy-kratom-extract`" class="homebanner_shop_btn">
                                    Shop All
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="capsules" role="tabpanel">
                        <div v-if="loading == true" class="pt-30 pb-30 text-center "><img width="120" height="120" :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/Spinner-1s-200px.gif`"></div>
                        <div class="rowx" :class="loading == true ? 'hidden' : ''">
                            <div class="product-carousel product-carousel-nav-center position-relative">
								<Carousel v-bind="settings" :breakpoints="breakpoints_new" ref="carousel">
									<Slide class="slide" v-for="(product, index) in kratom_products_capsules" :key="index">
										<ProductGridItem :yotpoonce="index" :product="product"  :layout="layout"/>
                                    </Slide>
								</Carousel>
								<!-- Swiper Navigation Start -->
								<div class="product-carousel-nav swiper-button-prev swiper-button-prev5">
									<i class="pe-7s-angle-left"></i>
								</div>
								<div class="product-carousel-nav swiper-button-next swiper-button-next5">
									<i class="pe-7s-angle-right"></i>
								</div>
								<!-- Swiper Navigation End -->
							</div>
                            <div class="slider-btn btn-hover btn_yellow text-center mt-20">
                                <NuxtLink :to="`/kratom-capsules-for-sale`" class="homebanner_shop_btn">
                                    Shop All
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="drinks" role="tabpanel">
                        <div v-if="loading == true" class="pt-30 pb-30 text-center "><img width="120" height="120" :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/Spinner-1s-200px.gif`"></div>
                        <div class="rowx" :class="loading == true ? 'hidden' : ''">
                            <div class="product-carousel product-carousel-nav-center position-relative">
								<Carousel v-bind="settings" :breakpoints="breakpoints_new" ref="carousel">
									<Slide class="slide" v-for="(product, index) in kratom_products_drinks" :key="index">
										<ProductGridItem :yotpoonce="index" :product="product"  :layout="layout"/>
                                    </Slide>
								</Carousel>
								<!-- Swiper Navigation Start -->
								<div class="product-carousel-nav swiper-button-prev swiper-button-prev6">
									<i class="pe-7s-angle-left"></i>
								</div>
								<div class="product-carousel-nav swiper-button-next swiper-button-next6">
									<i class="pe-7s-angle-right"></i>
								</div>
								<!-- Swiper Navigation End -->
							</div>
                            <div class="slider-btn btn-hover btn_yellow text-center mt-20">
                                <NuxtLink :to="`/kratom-shots`" class="homebanner_shop_btn">
                                    Shop All
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="leaves" role="tabpanel">
                        <div v-if="loading == true" class="pt-30 pb-30 text-center "><img width="120" height="120" :src="`${useRuntimeConfig().public.site_url}/img/kratom/icons/Spinner-1s-200px.gif`"></div>
                        <div class="rowx" :class="loading == true ? 'hidden' : ''">
                            <div class="product-carousel product-carousel-nav-center position-relative">
								<Carousel v-bind="settings" :breakpoints="breakpoints_new" ref="carousel">
									<Slide class="slide" v-for="(product, index) in kratom_products_kratom_leaves" :key="index">
										<ProductGridItem :yotpoonce="index" :product="product"  :layout="layout"/>
                                    </Slide>
								</Carousel>
								<!-- Swiper Navigation Start -->
								<div class="product-carousel-nav swiper-button-prev swiper-button-prev7">
									<i class="pe-7s-angle-left"></i>
								</div>
								<div class="product-carousel-nav swiper-button-next swiper-button-next7">
									<i class="pe-7s-angle-right"></i>
								</div>
								<!-- Swiper Navigation End -->
							</div>
                            <div class="slider-btn btn-hover btn_yellow text-center mt-20">
                                <NuxtLink :to="`/kratom-leaves`" class="homebanner_shop_btn">
                                    Shop All
                                </NuxtLink>
                            </div>
                        </div>
                    </div>                    
                </div>                
            </div>
        </div>        
        
    </div>
</template>



<script>    
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

    import axios from "axios";
//import KratomTitle from "../KratomTitle.vue";    
import $ from "jquery";
import { Buffer } from "buffer";

    export default {
        setup(){
            const carousel = ref(null);
            const carousel_next = () => {
                carousel.value.next();
            };
            const carousel_prev = () => {
                carousel.value.prev();
            };

            return {
                carousel,
                carousel_next,
                carousel_prev
            };            
        },
        components: {    
            ProductGridItem: () => import("@/components/product/ProductGridItem"),    
            KratomTitle: () => import("@/components/kratom/KratomTitle"),    
            Carousel, Slide, Pagination, Navigation
        },
        data() {
            return {
                settings: {
                    itemsToShow: 2,
                    snapAlign: 'start',
                },
                breakpoints_new: {
                  700: {
                    itemsToShow: 3,
                    snapAlign: 'start',
                  },
                  1024: {
                    itemsToShow: 4,
                    snapAlign: 'start',
                  },
                },
                kratom_products_red: '',
                kratom_products_green: '',
                kratom_products_white: '',
                kratom_products_extracts: '',
                kratom_products_capsules: '',
                kratom_products_drinks: '',
                kratom_products_kratom_leaves: '',
                layout: 'twoColumn',
                slider: null,
                loading : true
            }
        },
        methods: {  
            tab_click($event, clicktype = 'tab'){
                /* const Buffer = require('buffer').Buffer; */
                const encodedCredentials = Buffer.from(`${useRuntimeConfig().public.consumer_key}:${useRuntimeConfig().public.secret_key}`).toString('base64');
                if(clicktype == 'tab'){
                    var cat_id = $event.target.getAttribute('category_id');
                }else if(clicktype == 'select'){                    
                    var cat_id = $event.target.value;
                    var elem = $(".product-tab-list-2").find(`[category_id='${cat_id}']`)                    
                    elem.click()
                }
                if(
                    (cat_id == '168' && this.kratom_products_red == '') ||
                    (cat_id == '170' && this.kratom_products_green == '') ||
                    (cat_id == '169' && this.kratom_products_white == '') ||
                    (cat_id == '37' && this.kratom_products_extracts == '') ||
                    (cat_id == '47' && this.kratom_products_capsules == '') ||
                    (cat_id == '2763' && this.kratom_products_drinks == '') ||
                    (cat_id == '2764' && this.kratom_products_kratom_leaves == '')
                ){
                    this.loading = true;
                    axios.get( 
                        useRuntimeConfig().public.api_url+'/wp-json/wc/v3/products',
                        {
                            params: {
                                per_page: 8,
                                order:'asc',
                                category:cat_id,                            
                                status: 'publish',
                            },
                        headers: {
                            authorization: 'Basic ' + encodedCredentials
                        }
                        }
                    ).then((result) => {                        
                        if(cat_id == '168'){
                            this.kratom_products_red = result.data;
                        }                  
                        if(cat_id == '170'){      
                            this.kratom_products_green = result.data;
                        }
                        if(cat_id == '169'){
                            this.kratom_products_white = result.data;
                        }
                        if(cat_id == '37'){
                            this.kratom_products_extracts = result.data;
                        }
                        if(cat_id == '47'){
                            this.kratom_products_capsules = result.data;
                        }
                        if(cat_id == '2763'){
                            this.kratom_products_drinks = result.data;
                        }
                        if(cat_id == '2764'){
                            this.kratom_products_kratom_leaves = result.data;
                        }
                    },(error) => {
                        console.log(error);
                    }).finally(() => (this.loading = false)); 
                        
                }
                
                //console.log($event.target.getAttribute('category_id'));

            },
            fetch() {
                /* const Buffer = require('buffer').Buffer; */
                const encodedCredentials = Buffer.from(`${useRuntimeConfig().public.consumer_key}:${useRuntimeConfig().public.secret_key}`).toString('base64');
                axios.get( 
                    useRuntimeConfig().public.api_url+'/wp-json/wc/v3/products',
                    {
                        params: {
                            per_page: 8,
                            order:'asc',
                            category:168,   
                            status: 'publish'
                        },
                        headers: {
                            authorization: 'Basic ' + encodedCredentials
                        }
                    }
                ).then((result) => {            
                    this.kratom_products_red = result.data;
                },(error) => {
                    console.log(error);
                }).finally(() => (this.loading = false)); 
                /*await axios.get( 
                    useRuntimeConfig().public.api_url+'/wp-json/wc/v3/products',
                    {
                        params: {
                            per_page: 8,
                            order:'asc',
                            category:170,                            
                            consumer_key:useRuntimeConfig().public.consumer_key,
                            consumer_secret:useRuntimeConfig().public.secret_key,
                        }
                    }
                ).then((result) => {            
                    this.kratom_products_green = result.data;
                    
                },(error) => {
                    console.log(error);
                }); 
                await axios.get( 
                    useRuntimeConfig().public.api_url+'/wp-json/wc/v3/products',
                    {
                        params: {
                            per_page: 8,
                            order:'asc',
                            category:169,                            
                            consumer_key:useRuntimeConfig().public.consumer_key,
                            consumer_secret:useRuntimeConfig().public.secret_key,
                        }
                    }
                ).then((result) => {            
                    this.kratom_products_white = result.data;
                },(error) => {
                    console.log(error);
                }); 
                await axios.get( 
                    useRuntimeConfig().public.api_url+'/wp-json/wc/v3/products',
                    {
                        params: {
                            per_page: 8,
                            order:'asc',
                            category:37,                            
                            consumer_key:useRuntimeConfig().public.consumer_key,
                            consumer_secret:useRuntimeConfig().public.secret_key,
                        }
                    }
                ).then((result) => {            
                    this.kratom_products_extracts = result.data;
                },(error) => {
                    console.log(error);
                }); 
                await axios.get( 
                    useRuntimeConfig().public.api_url+'/wp-json/wc/v3/products',
                    {
                        params: {
                            per_page: 8,
                            order:'asc',
                            category:172,                            
                            consumer_key:useRuntimeConfig().public.consumer_key,
                            consumer_secret:useRuntimeConfig().public.secret_key,
                        }
                    }
                ).then((result) => {            
                    this.kratom_products_capsules = result.data;
                },(error) => {
                    console.log(error);
                });
                await axios.get( 
                    useRuntimeConfig().public.api_url+'/wp-json/wc/v3/products',
                    {
                        params: {
                            per_page: 8,
                            order:'asc',
                            category:2763,                            
                            consumer_key:useRuntimeConfig().public.consumer_key,
                            consumer_secret:useRuntimeConfig().public.secret_key,
                        }
                    }
                ).then((result) => {            
                    this.kratom_products_drinks = result.data;
                },(error) => {
                    console.log(error);
                }); 
                await axios.get( 
                    useRuntimeConfig().public.api_url+'/wp-json/wc/v3/products',
                    {
                        params: {
                            per_page: 8,
                            order:'asc',
                            category:2764,                            
                            consumer_key:useRuntimeConfig().public.consumer_key,
                            consumer_secret:useRuntimeConfig().public.secret_key,
                        }
                    }
                ).then((result) => {            
                    this.kratom_products_kratom_leaves = result.data;                    
                },(error) => {
                    console.log(error);
                }); */
                
                
                
            }

    },created () {
        this.fetch()
    }
};
</script>