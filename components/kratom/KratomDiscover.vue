<template>
	<div class="section_kratom_discover">
        <NuxtImg format="webp" width="500" height="300" loading="lazy" src="https://res.cloudinary.com/dv8z5nr6r/images/v1676551425/kratomdiscover-before2-1_21775944a1b/kratomdiscover-before2-1_21775944a1b.png?_i=AA" class="section_kratom_discover_before" alt="Kratom Discover Before"/>
	    <div class="container position-relative">
		    <div class="row discover-kratom" >
			    <div class="discover-kratom-image col-12 col-lg-6 pb-0 pt-170 pl-60 pl-sm-15 pr-sm-15" v-if="kratom_header_data.discover_kratom_section">
                    <NuxtImg format="webp" width="350" height="181" loading="lazy"  class="w-80" 
					    :src="`${kratom_header_data.discover_kratom_section[0].discover_kratom_image}`"
					    alt="kratomdiscover-1" />
			    </div>
			    <div class="col-12 col-lg-6 pb-60 pt-60 pr-60 pl-60 pt-sm-40 pr-sm-15 pl-sm-15 kratom_discover_right pt-md-55 pb-md-55">
				    <div class="align-items-center">
					    <h3 class="text-black mb-30 mb-sm-20" v-html="kratom_header_data.discover_kratom_section[0].discover_kratom_title" v-if="kratom_header_data.discover_kratom_section"></h3>
					    <span v-html="kratom_header_data.discover_kratom_section[0].discover_kratom_text" v-if="kratom_header_data.discover_kratom_section"></span>
                        <div class="slider-btn btn-hover btn_yellow mt-40 mb-sm-20"><NuxtLink to="/blog" class="homebanner_shop_btn">
                                    Kratom University Blogs
                        </NuxtLink></div>
				    </div>
                    
    			</div>
	        </div>

	    </div>
        <NuxtImg format="webp" width="415" height="536" loading="lazy" src="https://res.cloudinary.com/dv8z5nr6r/images/v1676551444/kratomdiscover-after2-1_2177606c8dd/kratomdiscover-after2-1_2177606c8dd.png?_i=AA" class="section_kratom_discover_after" alt="Kratom Discover After"/>
	</div>
</template>

<script>
    
import axios from "axios";

export default {

    data() {
        return {
            kratom_header_data: {
                "discover_kratom_section": [
                    {
                    "discover_kratom_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1675143789/kratom-discover-img/kratom-discover-img.png?_i=AA",
                    "discover_kratom_title": "Discover Kratom",
                    "discover_kratom_text": "<p>Kratom is the common name for powders derived from the Mitragyna Speciosa Korthals, a plant in the coffee family. The effects of Kratom vary based on the strain, and Maeng Da Kratom generally refers to the grower’s best variety. Kratom continues to rise in popularity as new people around the world buy kratom for the first time and discover the benefits that so many in Southeast Asia have enjoyed for centuries.</p>\n"
                    }
                ]
                }
        }
    },
    methods: {
        fetch() {
            axios.get(
                useRuntimeConfig().public.api_url + '/wp-json/acf/v3/header?data_type=section_7').then((result) => {
                    this.kratom_header_data = result.data;
                }, (error) => {
                    console.log(error);
                })
        }
    },
    created() {
        this.fetch()
    }
};
</script>

<style>
img.section_kratom_discover_before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: auto;
    height: 200px;    
    opacity: 1;
}
.section_kratom_discover_after {
    width: auto;
    height: 336px;
    position: absolute;
    right: 0;
    top: 0;
    opacity: 1;
}
.kratom_discover_right {
    background-color: #fce5b0b0;
    display: flex;
    align-items: center;
}
.section_kratom_discover {
    position: relative;
    z-index: 9;
	align-items: center;
    border-bottom: 1px solid #e9ecef;
}
.section_kratom_discover p{
	color:#787878;
}
.section_kratom_discover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 500px;
    height: 210px;
    /* background: url(https://res.cloudinary.com/dv8z5nr6r/images/v1676551425/kratomdiscover-before2-1_21775944a1b/kratomdiscover-before2-1_21775944a1b.png?_i=AA); */
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left bottom;
    opacity: 0;
}
.section_kratom_discover .container {
    max-width: 1240px;
}
.discover-kratom {
    position: relative;
    z-index: 9;
}

/* .section_kratom_discover::after {
    content: '';
    background-image: url(/img/kratom/kratomdiscover-after.png);
    width: 700px;
    height: 370px;
    position: absolute;
    right: 0;
    top: 0;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right top;
} */
.section_kratom_discover::after {
    content: '';
    /* background-image: url(https://res.cloudinary.com/dv8z5nr6r/images/v1676551444/kratomdiscover-after2-1_2177606c8dd/kratomdiscover-after2-1_2177606c8dd.png?_i=AA); */
    width: 480px;
    height: 336px;
    position: absolute;
    right: 0;
    top: 0;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right top;
    opacity: 0;
}
@media screen and (max-width:991px) {
    .discover-kratom .discover-kratom-image {
        padding: 40px 20px 40px 20px !important;
    }
    .section_kratom_discover_before,.section_kratom_discover_after{
        display:none;

    }
}
</style>