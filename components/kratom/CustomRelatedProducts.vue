<template>
    <div class="custom_related_products_section product-area pb-10">
        <div class="container">
            <SectionTitleWithSubTitle title="YOU MAY ALSO LIKE" classes="section-title mb-55" />
            <div class="product-carousel product-carousel-nav-center position-relative">
                <swiper :options="swiperOption" :pagination="true">
                    <swiper-slide v-for="(product, index) in kratom_products" :key="index">
                        <ProductGridItem :yotpoonce="index" :product="product"  :layout="layout"/>
                    </swiper-slide>
                </swiper>
                <!-- Swiper Navigation Start -->
                <div class="product-carousel-nav swiper-button-prev">
                    <i class="pe-7s-angle-left"></i>
                </div>
                <div class="product-carousel-nav swiper-button-next">
                    <i class="pe-7s-angle-right"></i>
                </div>
                <!-- Swiper Navigation End -->
            </div>
        </div>
        
        <div class="container pt-40" id="reviews">
            <SectionTitleWithSubTitle title="REVIEWS" classes="section-title mb-55" />
        <div class="row">
            <div class="col-lg-12 mb-30">
                                <div class="ratting-form-wrapper">
                                    <h3>Add a Review</h3>
                                    <div class="ratting-form">
                                        <form>
                                            <div class="star-box">
                                                <span>Your rating:</span>
                                                <div class="ratting-star">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="rating-form-style mb-10">
                                                        <input placeholder="Name" type="text">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="rating-form-style mb-10">
                                                        <input placeholder="Email" type="email">
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="rating-form-style form-submit">
                                                        <textarea name="Your Review" placeholder="Message"></textarea>
                                                        <input type="submit" value="Submit">
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="review-wrapper">
                                    <div class="single-review">
                                        <div class="review-img">
                                            <img src="/img/testimonial/1.jpg" alt="">
                                        </div>
                                        <div class="review-content">
                                            <div class="review-top-wrap">
                                                <div class="review-left">
                                                    <div class="review-name">
                                                        <h4>White Lewis</h4>
                                                    </div>
                                                    <div class="review-rating">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <div class="review-left">
                                                    <a href="#">Reply</a>
                                                </div>
                                            </div>
                                            <div class="review-bottom">
                                                <p>Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-review child-review">
                                        <div class="review-img">
                                            <img src="/img/testimonial/2.jpg" alt="">
                                        </div>
                                        <div class="review-content">
                                            <div class="review-top-wrap">
                                                <div class="review-left">
                                                    <div class="review-name">
                                                        <h4>White Lewis</h4>
                                                    </div>
                                                    <div class="review-rating">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <div class="review-left">
                                                    <a href="#">Reply</a>
                                                </div>
                                            </div>
                                            <div class="review-bottom">
                                                <p>Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Sus pen disse viverra ed viverra. Mauris ullarper euismod vehicula. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div class="row mt-90 pt-50 service_bottom">
                            <div class="col-sm-4 text-center mb-40">
                                <img src="/img/icon-img/support-3.png" class="mb-20"/>
                                <h5>MONEY BACK GUARANTEE!</h5>
                                <p>100% Satisfaction Or Your Money Back</p>
                            </div>
                            <div class="col-sm-4 text-center mb-40">
                                <img src="/img/icon-img/headphone-4.png" class="mb-20"/>
                                <h5>PHONE SUPPORT</h5>
                                <p>888-510-2038</p>
                            </div>
                            <div class="col-sm-4 text-center mb-40">
                                <img src="/img/icon-img/support-1.png" class="mb-20"/>
                                <h5>FREE SHIPPING</h5>
                                <p>On All Orders $100 Or More!</p>
                            </div>
                        </div>
    </div>
</template>

<script>    
    import axios from "axios";    
    export default {
        props: ['product_related'],
        components: {
        },

        data() {
            return {
                swiperOption: {
                    loop: false,
                    speed: 750,
                    spaceBetween: 30,
                    slidesPerView: 4,
                    autoplay: {
                        delay: 6000
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        480: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 3
                        },
                        992: {
                            slidesPerView: 4
                        }
                    }
                },
                kratom_products: '',
                layout: 'twoColumn'
            }
        },

        computed: {
            products() {
                return this.$store.getters.getNewProducts.filter(item => item.category.includes("book"))
            },
        },
        methods : {
            fetch() {
                const Buffer = require('buffer').Buffer;
            const encodedCredentials = Buffer.from(`${this.$config.consumer_key}:${this.$config.secret_key}`).toString('base64');
                var include_products = '';                
                if(this.product_related != undefined){
                    this.product_related.map(function(value, key) {            
                        include_products = include_products + value + ',';
                    });            
                }                
                axios.get( 
                    this.$config.api_url+'/wp-json/wc/v3/products',
                    {
                        params: {
                            per_page: 16,
                            order:'asc',
                            include:include_products,
                            status: 'publish',
                            /* consumer_key:this.$config.consumer_key,
                            consumer_secret:this.$config.secret_key, */
                        },
                        headers: {
                            authorization: 'Basic ' + encodedCredentials
                        }
                    }
                ).then((result) => {            
                    this.kratom_products = result.data;
                },(error) => {
                    console.log(error);
                });
         
            }
        },created () {
            this.fetch()
        }
    };
</script>