<template>
	<div class="section_find_your_fav pt-100 pb-80 pt-sm-75 pb-sm-75">
		<div class="container">
			<div class="row border-bottom dashed pb-30 pb-sm-20 mt-sm-0 mr-sm-0 mb-sm-0 ml-sm-0">
				<div class="col-lg-7 col-md-12 pt-sm-0 pr-sm-0 pb-sm-0 pl-sm-0">
					<div class="row pb-30 pb-sm-10">
						<div class="col-sm-12 col-md-2" v-if="kratom_header_data.find_your_favorite_strain_of_kratom_online_section">
							<NuxtImg width="79" height="71" format="webp" loading="lazy" class="w-60" :src="`${kratom_header_data.find_your_favorite_strain_of_kratom_online_section[0].find_your_favorite_strain_of_kratom_online_image}`" alt="icon-1" />
						</div>
						<div class="col-lg-10 col-md-10 col-sm-12">
							<h3 class="pt-sm-20"
								v-if="kratom_header_data.find_your_favorite_strain_of_kratom_online_section">{{
									kratom_header_data.find_your_favorite_strain_of_kratom_online_section[0].find_your_favorite_strain_of_kratom_online_title
								}}</h3>
						</div>
					</div>
					<div class="row border-bottom dashed pb-40 mt-sm-0 mr-sm-0 mb-sm-0 ml-sm-0">
						<div class="col-md-12 col-sm-12 pr-sm-0 pl-sm-0">
							<span v-html="kratom_header_data.find_your_favorite_strain_of_kratom_online_section[0].find_your_favorite_strain_of_kratom_online_text"
								v-if="kratom_header_data.find_your_favorite_strain_of_kratom_online_section"></span>
						</div>
					</div>
					<div class="row pb-30 pt-40 pt-sm-30 pb-sm-10">
						<div class="col-sm-12 col-md-2" v-if="kratom_header_data.purchase_kratom_securely_section">
							<NuxtImg width="80" height="72" format="webp"    loading="lazy"  class="w-60" :src="`${kratom_header_data.purchase_kratom_securely_section[0].purchase_kratom_securely_title_image}`" alt="icon-1" />
						</div>
						<div class="col-lg-10 col-md-10 col-sm-12 "
							v-if="kratom_header_data.purchase_kratom_securely_section">
							<h3 class="pt-sm-20"
								v-html="kratom_header_data.purchase_kratom_securely_section[0].purchase_kratom_securely_title">
							</h3>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 col-sm-12" v-if="kratom_header_data.purchase_kratom_securely_section">
							<span
								v-html="kratom_header_data.purchase_kratom_securely_section[0].purchase_kratom_securely_text">
							</span>
						</div>
					</div>

				</div>

				<div class="col-lg-5 col-md-12 col-sm-12 kratomfind-1" v-if="kratom_header_data.favorite_strain_image">
					<NuxtImg width="342" height="350" format="webp"    loading="lazy"  class="w-auto" :src="`${kratom_header_data.favorite_strain_image}`" alt="kratomfind-1" />
				</div>
			</div>
			<div class="row pt-10 pt-sm-30 mt-sm-0 mr-sm-0 mb-sm-0 ml-sm-0">
				<div class="col-lg-6 col-md-12 col-sm-12">
					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12 kratomfind-2" v-if="kratom_header_data.the_best_place_to_buy_kratom_online_section">
							<NuxtImg format="webp" width="556" height="305"   loading="lazy"  class="w-100" :src="`${kratom_header_data.the_best_place_to_buy_kratom_online_section[0].the_best_place_to_buy_kratom_online_image}`"
								alt="kratomfind-2" />
						</div>
						<!-- <div class="col-lg-6 col-md-6 col-sm-12 kratomfind-3">
							<img   loading="lazy"  class="w-100" :src="`${this.$config.site_url}/img/kratom/fav6.png`"
								alt="kratomfind-3" />
						</div> -->
					</div>
				</div>
				<div class="col-lg-6 col-md-12 col-sm-12 pt-sm-0 pr-sm-0 pb-sm-0 pl-sm-0">
					<div class="row pb-30 pb-sm-10 mt-md-20">
						<div class="col-sm-12 col-md-2" v-if="kratom_header_data.the_best_place_to_buy_kratom_online_section">
							<NuxtImg format="webp" width="68" height="68"   loading="lazy"  class="w-60" :src="`${kratom_header_data.the_best_place_to_buy_kratom_online_section[0].the_best_place_to_buy_kratom_online_title_image}`" alt="icon-3" />
						</div>
						<div class="col-sm-12 col-md-10"
							v-if="kratom_header_data.the_best_place_to_buy_kratom_online_section">
							<h3 class="pt-sm-20"
								v-html="kratom_header_data.the_best_place_to_buy_kratom_online_section[0].the_best_place_to_buy_kratom_online_title">
							</h3>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12" v-if="kratom_header_data.the_best_place_to_buy_kratom_online_section">
							<span
								v-html="kratom_header_data.the_best_place_to_buy_kratom_online_section[0].the_best_place_to_buy_kratom_online_text">
							</span>
						</div>
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
				"favorite_strain_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1675079782/fav4/fav4.png?_i=AA",
				"find_your_favorite_strain_of_kratom_online_section": [
					{
					"find_your_favorite_strain_of_kratom_online_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1675077756/fav1/fav1.png?_i=AA",
					"find_your_favorite_strain_of_kratom_online_title": "Find your favorite strain of Kratom online",
					"find_your_favorite_strain_of_kratom_online_text": "<p>At Kratom Spot, we stock what can only be called the world’s best kratom. We source all of our strains from the most experienced and sustainable fair-trade farms. We process and package our products in state-of-the-art, Certified GMP (Good Manufacturing Practices) compliant facilities. Every batch is independently tested for purity, potency, and quality, and our innovative fresh-seal packaging keeps your favorite strains fresher, longer.</p>\n"
					}
				],
				"purchase_kratom_securely_section": [
					{
					"purchase_kratom_securely_title_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1675077820/fav2/fav2.png?_i=AA",
					"purchase_kratom_securely_title": "Purchase Kratom Securely",
					"purchase_kratom_securely_text": "<p>Purchase kratom using safe and secure payment methods: Credit Card, E-Check through Authorize.Net, ACH or Cryptocurrency through Coinbase. Choose the option that&#8217;s right for you!</p>\n"
					}
				],
				"the_best_place_to_buy_kratom_online_section": [
					{
					"the_best_place_to_buy_kratom_online_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1675079223/fav5/fav5.png?_i=AA",
					"the_best_place_to_buy_kratom_online_title_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1675077874/fav3/fav3.png?_i=AA",
					"the_best_place_to_buy_kratom_online_title": "The best place to buy Kratom online",
					"the_best_place_to_buy_kratom_online_text": "<p>We take pride in our quality products and exceptional customer service. If you have any questions, send an email to our friendly and helpful team. Join millions around the world who have discovered the powers of one of nature’s greatest miracles when you source Kratom online a 100% satisfaction guarantee here at Kratom Spot.</p>\n"
					}
				]
			}
		}
	},
	methods: {
		fetch() {
			axios.get(
				this.$config.api_url + '/wp-json/acf/v3/header?data_type=section_5').then((result) => {
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
.section_find_your_fav p {
	color: #787878;
	line-height: 32px;
}

.section_find_your_fav .row {
	align-items: center;
}

.border-bottom.dashed {
	border-bottom-style: dashed !important;
}
</style>
