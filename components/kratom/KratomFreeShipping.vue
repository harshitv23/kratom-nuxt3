<template>
	<div class="section_kratom_free_shipping pt-0 pb-60 pt-sm-0 pb-sm-0 mb-60">
		<div class="container kratomfreeshipping pt-sm-0 pr-sm-25 pb-sm-40 pl-sm-25 mb-md-40">
			<div class="row">
				<div class="col-lg-4 col-md-6 mb-20 mb-md-30" v-for="(box,index) in kratom_header_data.free_shipping_boxes" :key="index">
					<div class="text-center freeship_item item-mob bg-gray pt-sm-30 pr-sm-20 pb-sm-30 pl-sm-20" :class="box.free_shipping_boxes_title == 'TRUSTED REVIEWS'?'freeship_item_trusted_reviews':''">
						<NuxtImg width="150" height="150" format="webp"   :src="`${box.free_shiping_boxes_image}`" alt="free-shipping" loading="lazy"  />
						<div class="txt-mob pl-sm-20">
							<span class="mt-30 mt-sm-0" v-html="box.free_shipping_boxes_title"></span>
							<p class="" v-html="box.free_shipping_boxes_text"></p>
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
				"free_shipping_boxes": [
					{
					"free_shiping_boxes_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1675076546/trust_icon_1/trust_icon_1.png?_i=AA",
					"free_shipping_boxes_title": "LAB TESTED",
					"free_shipping_boxes_text": "Third Party Certified for Purity & Potency"
					},
					{
					"free_shiping_boxes_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1675076548/trust_icon_2/trust_icon_2.png?_i=AA",
					"free_shipping_boxes_title": "AKA GMP CERTIFIED",
					"free_shipping_boxes_text": "Approved by the Americal Kratom Association Good Manufacturing Process"
					},
					{
					"free_shiping_boxes_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1675076544/trust_icon_3/trust_icon_3.png?_i=AA",
					"free_shipping_boxes_title": "PHONE SUPPORT",
					"free_shipping_boxes_text": "Call Us At 888-510-2038"
					},
					{
					"free_shiping_boxes_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1675076542/trust_icon_4/trust_icon_4.png?_i=AA",
					"free_shipping_boxes_title": "MONEY BACK GUARANTEE!",
					"free_shipping_boxes_text": "100% Satisfaction Or Your Money Back"
					},
					{
					"free_shiping_boxes_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1675076540/banner_logo_1/banner_logo_1.png?_i=AA",
					"free_shipping_boxes_title": "TRUSTED REVIEWS",
					"free_shipping_boxes_text": "Over 6,000 Verified Reviews"
					},
					{
					"free_shiping_boxes_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1675076538/trust_icon_6/trust_icon_6.png?_i=AA",
					"free_shipping_boxes_title": "FREE SHIPPING",
					"free_shipping_boxes_text": "On All Orders $50 or More!"
					}
				]
			}
		};
	},
	computed: {

	},
	methods: {
		fatch() {
			axios.get(
				useRuntimeConfig().public.api_url + '/wp-json/acf/v3/header?data_type=section_2').then((result) => {
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
.bg-yellow {
	background-color: #FAB333;
}

.bg-gray {
	background-color: #F6F6F4;
}

/* .kratomfreeshipping  { background-image: url('@/assets/img/kratom/bg.png');  }	*/
.kratomfreeshipping .freeship_item img {
	max-width: 140px;
}

.freeship_item {
	padding: 5px 20px 25px;
	border-radius: 20px;
	height: 100%;
}

.freeship_item span {
	font-size: 22px;
	font-family: 'Bree Serif';
	color:#000;
}

.freeship_item p {
	max-width: 300px;
	margin: 10px auto 0px;
	font-size: 15px;
	line-height: 20px;
}

.container.kratomfreeshipping {
	max-width: 1100px !important;
}
.freeship_item_trusted_reviews img {
    padding: 15px;
}
@media only screen and (max-width:767px){
	.freeship_item_trusted_reviews img {
    	padding: 5px;
	}	
}
</style>