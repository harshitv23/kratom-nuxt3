<template>
    <div class="page-details-page-wrapper" :class="`page-`+blog.id">
        <div class="Blog-details-inner pt-50 pb-100">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-9">
                        <div class="blog-details-wrapper ml-20">
                            <div class="blog-details-top mt-0">
                                <div class="blog-details-img" v-if="blog['_embedded']['wp:featuredmedia']">
                                    <img :src="blog['_embedded']['wp:featuredmedia'][0]['source_url']"
                                        :alt="blog.title">
                                </div>
                                <div class="blog-details-content">
                                    <div class="post_content" v-html="blog.content.rendered"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <ShopSidebar class="mt-50" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* import moment from "moment"; */
export default {
    props: ["blog"],
    data() {
        return {
            //blog : post,
            //slug: this.$route.params.slug
        }
    },

    mounted() {
        omnisend.push(["track", "$pageViewed"]);
        //this.blog = blog.find(blog => this.slugify(blog.title) === this.slug);
    },

    methods: {
        /* format_date(value) {
            if (value) {
                return moment(String(value)).format('MMMM D, YYYY')
            }
        } */
    },
};
</script>
<style>
.page-details-page-wrapper h3 b {
    font-weight: normal;
}
.page-176 .blog-details-wrapper p {
    color: #000;
}

/* KRATOM INFORMATION */
.page-848 h3 strong {
    font-weight: normal;
}

/* what is kratom */
.page-55939 h2 span {
    color: #000;
}
input[type="checkbox"] {
    height: auto;
    width: auto;
}
</style>