<template>
    <div class="section_kratom_news">
        <div class="product-area pt-75 pb-65">
            <div class="container">
                <KratomTitle title="Kratom" subTitle="News" class="text-center mb-60" />
                <div class="row">
                    <div class="col-lg-6 col-md-12 mb-30">
                        <div class="post_first" v-if="blogs[0] != undefined">
                            <img format="webp" width="1000" height="667" loading="lazy" sizes="sm:400px md:400px lg:800px"
                                :src="blogs[0]['_embedded']['wp:featuredmedia'][0]['source_url']" class="mr-10 featured_img"
                                :alt="blogs[0].title.rendered" />
                            <div class="news_date">
                                <img format="webp" width="30" height="30" loading="lazy"
                                    :src="`${this.$config.site_url}/img/kratom/icons/calendar-icon.png`" alt="icon" /> <span
                                    v-html="blogs[0].display_date" v-if="blogs[0].display_date"></span>
                            </div>
                            <div class="first_blog_content">
                                <h2 class="mb-20"><NuxtLink v-html="blogs[0].title.rendered"
                                        :to="`/${blogs[0].slug}`"></NuxtLink></h2>
                                <p class="post_desc" v-html="blogs[0].excerpt.rendered.replace('&nbsp;', '')"></p>
                                <!-- <NuxtLink :to="`/${blogs[0].slug}`"  class="post_read_more">READ MORE <i class="fa fa-angle-double-right" aria-hidden="true"></i></NuxtLink> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 mb-30">
                        <div class="post_single mb-30" v-if="blogs[1] != undefined">
                            <div class="row">
                                <div class="col-md-4">
                                    <img format="webp" width="1000" height="667" loading="lazy" sizes="sm:400px md:223px lg:223px"
                                        :src="replaceSizeImg(blogs[1]['_embedded']['wp:featuredmedia'][0]['source_url'])"
                                        class="mr-10 featured_img" :alt="blogs[1].title.rendered" />
                                </div>
                                <div class="col-md-8">
                                    <div class="news_date">
                                        <img format="webp" width="30" height="30" loading="lazy"
                                            :src="`${this.$config.site_url}/img/kratom/icons/calendar-icon.png`"
                                            alt="icon" /> <span v-html="blogs[1].display_date"
                                            v-if="blogs[1].display_date"></span>
                                    </div>
                                    <h2><NuxtLink v-html="blogs[1].title.rendered" :to="`/${blogs[1].slug}`"></NuxtLink></h2>
                                    <!-- <NuxtLink :to="`/${blogs[1].slug}`" class="post_read_more">READ MORE <i class="fa fa-angle-double-right" aria-hidden="true"></i></NuxtLink>                                     -->
                                </div>
                            </div>
                        </div>
                        <div class="post_single mb-30" v-if="blogs[2] != undefined">
                            <div class="row">
                                <div class="col-md-4">
                                    <img format="webp" width="1000" height="667" loading="lazy" sizes="sm:400px md:223px lg:223px"
                                        :src="replaceSizeImg(blogs[2]['_embedded']['wp:featuredmedia'][0]['source_url'])"
                                        class="mr-10 featured_img" :alt="blogs[2].title.rendered" />
                                </div>
                                <div class="col-md-8">
                                    <div class="news_date">
                                        <img format="webp" width="30" height="30" loading="lazy"
                                            :src="`${this.$config.site_url}/img/kratom/icons/calendar-icon.png`"
                                            alt="icon" /> <span v-html="blogs[2].display_date"
                                            v-if="blogs[2].display_date"></span>
                                    </div>
                                    <h2><NuxtLink v-html="blogs[2].title.rendered" :to="`/${blogs[2].slug}`"></NuxtLink></h2>
                                    <!-- <NuxtLink :to="`/${blogs[2].slug}`" class="post_read_more">READ MORE <i class="fa fa-angle-double-right" aria-hidden="true"></i></NuxtLink> -->
                                </div>
                            </div>
                        </div>
                        <div class="post_single" v-if="blogs[3] != undefined">
                            <div class="row">
                                <div class="col-md-4">
                                    <img format="webp" width="1000" height="667" loading="lazy" sizes="sm:400px md:223px lg:223px"
                                        :src="replaceSizeImg(blogs[3]['_embedded']['wp:featuredmedia'][0]['source_url'])"
                                        class="mr-10 featured_img" :alt="blogs[3].title.rendered" />
                                </div>
                                <div class="col-md-8">
                                    <div class="news_date">
                                        <img format="webp" width="30" height="30" loading="lazy"
                                            :src="`${this.$config.site_url}/img/kratom/icons/calendar-icon.png`"
                                            alt="icon" /> <span v-html="blogs[3].display_date"
                                            v-if="blogs[3].display_date"></span>
                                    </div>
                                    <h2><NuxtLink v-html="blogs[3].title.rendered" :to="`/${blogs[3].slug}`"></NuxtLink></h2>
                                    <!-- <NuxtLink :to="`/${blogs[3].slug}`" class="post_read_more">READ MORE <i class="fa fa-angle-double-right" aria-hidden="true"></i></NuxtLink> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from "axios";
/* import moment from "moment"; */
/* import moment from 'moment/locale/es' */
import KratomTitle from "./KratomTitle.vue";
export default {
    components: {
        KratomTitle
    },
    data() {
        return {
            blogs: [],
        }
    },
    methods: {
        replaceSizeImg(img, replacewith = 'h_150,w_195'){
            if(img.indexOf('f_auto,q_auto') > -1){
                img = img.replace("f_auto,q_auto", replacewith);
            }
            return img;
        },
        fetch() {
            const configs = useRuntimeConfig() //configs.public.
            axios.get(
                configs.public.site_url + '/wp-json/wp/v2/posts?_embed',
                {
                    params: {
                        per_page: 4,
                        order: 'desc'
                    }
                }
            ).then((result) => {
                /* console.log(result.data); */
                this.blogs = result.data;
            }, (error) => {
                console.log(error);
            });
        },
        /* format_date(value){
            if (value) {
                return moment(String(value)).format('MMMM D, YYYY')
            }
        } */
    }, created() {
        this.fetch()
    }
};
</script>
<style>
.section_kratom_news .post_first .news_date img {
    margin-right: 10px;
}

.section_kratom_news .post_first {
    position: relative;
    background: #000;
    height: 100%;
    max-height: 510px;
}

.section_kratom_news .post_first .featured_img {
    opacity: 0.5;
    height: 100%;
    object-fit: cover;
    width: 100%;
}

.section_kratom_news .post_first .news_date {
    position: absolute;
    top: 20px;
    right: 20px;
    color: #fff;
    font-size: 18px;
}

.section_kratom_news .post_first a.post_read_more {
    font-size: 18px;
    color: #ffc55b;
    font-weight: 500;
}

.section_kratom_news .post_first p.post_desc {
    color: #e1e1e1;
    padding-right: 30px;
}

.section_kratom_news .post_first p.post_desc p {
    color: #e1e1e1;
}

.section_kratom_news .post_first h2 {
    color: #fff;
    text-transform: uppercase;
}

.section_kratom_news .post_single .news_date {
    font-size: 14px;
    text-transform: uppercase;
    color: #787878;
}

.section_kratom_news .post_single .news_date img {
    filter: grayscale(100%);
    margin-right: 10px;
    max-width: 20px;
}

.section_kratom_news .post_single h2 {
    color: #FAB333;
    margin-top: 20px;
    font-size: 28px;
    text-transform: uppercase;
}

.section_kratom_news .post_single a.post_read_more {
    color: #35492d;
    font-weight: 600;
    margin-top: 15px;
    display: inline-block;
}

.section_kratom_news .post_single .featured_img {
    object-fit: cover;
    height: 100%;
    height: 150px;
}

.first_blog_content {
    position: absolute;
    width: 100%;
    display: inline-block;
    bottom: 0;
    padding: 30px;
}</style>