<template>
	<div class="kratomsportdifference mt-sm-50 mb-sm-50 mb-60">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-md-12 col-sm-12 ms-auto mt-md-20" v-if="kratom_header_data.the_kratom_spot_difference_section">
					<!-- <img class="w-100" :src="`${kratom_header_data.the_kratom_spot_difference_section[0].the_kratom_spot_difference_image}`" alt="kratomspot-1" /> -->
					<!-- <img  :src="`${kratom_header_data.the_kratom_spot_difference_section[0].the_kratom_spot_difference_image}`" alt="kratomspot-1" loading="lazy"  /> -->
					<picture>            
            <source media="(max-width:767px)" :srcset="replaceSizeImg(kratom_header_data.the_kratom_spot_difference_section[0].the_kratom_spot_difference_image,'f_auto,w_400')">
			<NuxtImg width="811" height="387" format="webp" :src="`${kratom_header_data.the_kratom_spot_difference_section[0].the_kratom_spot_difference_image}`" alt="kratomspot-1" loading="lazy"  />
        </picture>
					<!-- <NuxtImg width="811" height="387" format="webp" :src="`${kratom_header_data.the_kratom_spot_difference_section[0].the_kratom_spot_difference_image}`" alt="kratomspot-1" loading="lazy"  /> -->
				</div>
				<div class="col-lg-6 col-md-12 col-sm-12 ms-auto mt-md-20">
					<div class="colored_title mt-sm-30 mb-sm-20 mb-40 text-lg-start text-md-center"
						v-if="kratom_header_data.the_kratom_spot_difference_section">
						<h2
							v-html="kratom_header_data.the_kratom_spot_difference_section[0].the_kratom_spot_difference_title">
						</h2>
					</div>
					<div class="double_border_left pl-sm-25"
						v-html="kratom_header_data.the_kratom_spot_difference_section[0].the_kratom_spot_difference_text"
						v-if="kratom_header_data.the_kratom_spot_difference_section">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import axios from "axios";
export default {
	data() {
		return {
			kratom_header_data: {
				"the_kratom_spot_difference_section": [
					{
					"the_kratom_spot_difference_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1675144290/kratomdif/kratomdif.png?_i=AA",
					"the_kratom_spot_difference_title": "The Kratom Spot <span>Difference</span>",
					"the_kratom_spot_difference_text": "<p>We are committed to delivering the purest all-natural Kratom products with the highest quality standards in the industry.</p>\n<p>You can see it from the carefully selected harvests rigorously tested to be free from additives, and the transparent labeling so you know exactly what you&#8217;re getting. Enjoy peace of mind whether you prefer quality Kratom capsules, or in a cup of savory Maeng Da Kratom tea.</p>\n<p>If you&#8217;re not pleased with your purchase for any reason, simply return it within 30 days and we&#8217;ll give you a refund, no questions asked.</p>\n"
					}
				]
			}
		};
	},
	computed: {

	},
	methods: {
		replaceSizeImg(img, replacewith = 'h_400,w_400'){
            if(img.indexOf('f_auto,q_auto') > -1){
                img = img.replace("f_auto,q_auto", replacewith);
            }
            return img;
        },
		fatch() {
			axios.get(
				this.$config.api_url + '/wp-json/acf/v3/header?data_type=section_1').then((result) => {
					this.kratom_header_data = result.data;
				}, (error) => {
					console.log(error);
				})
		},
	},
	created() {
		this.fatch();
	},
};
</script>

<style>

</style>
