<!-- <script type="text/javascript">
          (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,
              e.src="//staticw2.yotpo.com/qISoyNDMzxbhZewW638yicv9a0Q2QtUPU5p1Xr57/widget.js";var t=document.getElementsByTagName("script")[0];
              t.parentNode.insertBefore(e,t)})();
          </script> -->
          <template>
            <div class="shop-page-wrapper">
                <!-- <KratomTheHeader />         -->
                <TitleBar :title="title"/> 
                <div class="container pb-40 ourreviews_page">
                    <img src="/img/kratom/our-reviews/2023_012_Web-Reviews-7k.webp" style="width:100%;" class="mb-30">
                    <!-- <testimonials-widget class="d-none"/> -->
                    <!-- <div id='yotpo-testimonials-custom-tab'></div> -->
                    
                  <div id='yotpo-testimonials-custom-tab'></div>            
                            
                  <!-- <div id='yotpo-testimonials-custom-tab'></div>
                    <div class="yotpo yotpo-reviews-carousel"  data-background-color="transparent"  data-mode="top_rated"  data-type="product"  data-count="9"  data-show-bottomline="1"  data-autoplay-enabled="1"  data-autoplay-speed="3000"  data-show-navigation="1">&nbsp;</div> -->
                </div>        
                <!-- <KratomTheFooter /> -->
            </div>
        </template>
        <!-- <script type="text/javascript">
                  (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,
                      e.src="//staticw2.yotpo.com/qISoyNDMzxbhZewW638yicv9a0Q2QtUPU5p1Xr57/widget.js";var t=document.getElementsByTagName("script")[0];
                      t.parentNode.insertBefore(e,t)})();
                  </script> -->
        <script>
        import TitleBar from '../components/kratom/product-category/TitleBar.vue';
        export default {
            components: {                        
                TitleBar,        
            },
        
            data() {
                return {
                    kratom_products: '',
                    category_id: '',
                    title: 'Our Reviews',            
                    loading: true
                }
            },
        
            computed: {
                /* products() {
                    return this.$store.getters.getProducts
                },
        
                getItems() {
                    let start = (this.currentPage - 1) * this.perPage;
                    let end = this.currentPage * this.perPage;
                    return this.filterItems.slice(start, end);
                },
                getPaginateCount() {
                    return Math.ceil(this.filterItems.length / this.perPage);
                }, */
            },
        
            mounted() {
                //this.updateProductData()
                omnisend.push(["track", "$pageViewed"]);
            },   
            methods: {
                           
            },
        
            watch: {                
            },
            created() {        
            },
            head() {
                    return {
                        htmlAttrs: { lang: 'en-US' },
                        title: "Our Reviews",
                        meta: [
                    
                    {
                            hid: 'description',
                            name: 'description',
                            content: 'Discover what our customers have to say about Kratom Spot\'s quality products, excellent customer service, and fast shipping. See what your friends think now!'
                        }],
                    link: [
                    {
                        href: 'https://kratomspot.com/our-reviews',
                        rel: 'canonical'
                    },
                    
                ],
                    }
                },
            /* head() {
                return {
                    title: "Our Reviews"
                }
            }, */
        };
        </script>
        
        
        <style>
        #yotpo-testimonials-custom-tab * {
            font-family: "Roboto" !important;
        }
        #yotpo-testimonials-custom-tab .yotpo-review.yotpo-regular-box {
            border: unset;
            margin-bottom: 20px;
            padding: 25px;
            margin-left: 0;
            margin-right: 0;
            box-shadow: rgb(0 0 0 / 8%) 0px 1px 12px;
        }
        .yotpo .primary-color-btn, .yotpo input[type="button"].primary-color-btn {
            margin-top: 20px;
            height: 45px;
            font-size: 15px;
            background-color: #35492D;
        }
        .yotpo .yotpo-regular-box {
            margin: 0 0px;
        }
        .yotpo input, .yotpo .y-input,
        .yotpo .text-box, .yotpo .yotpo-text-box {    
            height: auto;    
            border: 2px solid #eceff8;
            padding: 14px 15px;
        }
        .ourreviews_page li.yotpo-nav-tab[data-type="site"] {
            display: none;
        }
        .ourreviews_page .yotpo-nav-wrapper span {
            font-size: 20px;
        }
        .ourreviews_page .yotpo .yotpo-nav ul .yotpo-nav-tab.yotpo-active .yotpo-nav-wrapper{
            border-bottom: unset;
        }
        .ourreviews_page input.yotpo-default-button.primary-color-btn.pull-right.write-review-button {
            display: none !important;
        }
        .ourreviews_page #yotpo-testimonials-custom-tab .yotpo-modal-bottom-line {
            padding-bottom: 25px;
        }
        /* .ourreviews_page .yotpo-display-wrapper span.yotpo-icon.yotpo-icon-star.rating-star.pull-left,
        .ourreviews_page .yotpo-display-wrapper span.yotpo-icon.yotpo-icon-half-star.rating-star.pull-left {
            font-size: 25px;
        } */
        /* .ourreviews_page .yotpo .text-m {
            font-size: 18px;
        } */
        /* .ourreviews_page .yotpo-bottomline.pull-left {
            float: unset;
            text-align: center;
        } */
        /* .ourreviews_page .yotpo-bottomline.pull-left span.sr-only {
            display: inline-block;
            font-size: 20px;
            clip: unset !important;
            position: unset;
            width: 157px;
            height: 29px;
            line-height: 30px;
            color: #000;
        } */
        /* .ourreviews_page .yotpo .text-m {
            line-height: 27px;
        } */
        </style>
        