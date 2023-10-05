<template>
    <!-- <div class="blog-wrap-single mb-25" v-if="templatetype == 'one'">
        <div class="blog-img">
            <NuxtLink :to="`/${blog.slug}`">
                <img :src="blog['_embedded']['wp:featuredmedia'][0]['source_url']" :alt="blog.title">
            </NuxtLink>            
        </div>
        <div class="blog-content-wrap">
            <div class="blog-content text-center">
                <h4>
                    <NuxtLink :to="`/${blog.slug}`" v-html="blog.title.rendered"></NuxtLink>
                </h4>
                <span>By <NuxtLink to="">{{ blog['_embedded']['author'][0]['name'] }}</NuxtLink></span>
            </div>
        </div>
    </div> -->
    <div class="blog-wrap-2 blog-wrap-single-2 mb-30">
        <div class="blog-img-2">
                <img :src="blog['_embedded']['wp:featuredmedia'][0]['source_url']" :alt="blog.title">
        </div>
        <div class="blog-content-2">
            <div class="blog-meta-2">
                <ul>
                    <li v-if="blog.display_date">{{ blog.display_date }}</li>
                    <!-- <li>
                        <a href="#"><i class="fa fa-comments-o"></i> {{ blog.comment }} </a>
                    </li> -->
                </ul>
            </div>
            <h4>
                <NuxtLink :to="`/${blog.slug}`" v-html="blog.title.rendered"></NuxtLink>
            </h4>
            <p v-html="blog.excerpt.rendered.replace('&nbsp;', '')"></p>
            <div class="blog-share-comment">
                <div class="slider-btn btn-hover btn_yellow text-center mt-0">
                        <NuxtLink :to="`/${blog.slug}`" class="homebanner_shop_btn">Read More</NuxtLink>
                    </div>
                <!-- <div class="blog-btn-2">
                    
                </div> -->
                <!-- <div class="blog-share">
                    <span>share:</span>
                    <div class="share-social">
                        <ul>
                            <li>
                                <a class="facebook" href="#" target="_blank"><i class="fa fa-facebook"></i></a>
                            </li>
                            <li>
                                <a class="twitter" href="#" target="_blank"><i class="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a class="instagram" href="#" target="_blank"><i class="fa fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
/* import moment from "moment"; */
/* import moment from 'moment/locale/es' */
export default {
    props: ["blog"],
    data() {
        return {
            templatetype : 'one'
        }
    }, 
    methods: { 
        /* format_date(value){
            if (value) {
                return moment(String(value)).format('MMMM D, YYYY')
            }
        } */
    }
}

</script>