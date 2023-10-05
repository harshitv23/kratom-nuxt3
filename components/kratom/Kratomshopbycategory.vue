<template>
	<section class="bg-color section_shop_by_category pt-sm-50 pb-sm-10 pt-110 pb-60">
		<!-- <NuxtImg format="webp" width="1600" height="1079" loading="lazy" src="https://res.cloudinary.com/dv8z5nr6r/images/v1676554792/shop_by_category_bg-1-1_21776311437/shop_by_category_bg-1-1_21776311437.jpg?_i=AA" class="section_bg_div" alt="Kratom Spot Category Background"/> -->
		<picture>            
            <source media="(max-width:767px)" srcset="https://kratomspot.com/wp-content/uploads/2023/03/f08567-1-1.webp">
			<NuxtImg format="webp" width="1600" height="1079" loading="lazy" src="https://res.cloudinary.com/dv8z5nr6r/images/v1676554792/shop_by_category_bg-1-1_21776311437/shop_by_category_bg-1-1_21776311437.jpg?_i=AA" class="section_bg_div" alt="Kratom Spot Category Background"/>            
        </picture>
		<div class="container text-center">
			<!-- <div class="row">
			<div class="col-12">
				<div class="text-center">					
					<KratomTitle title="Shop by Category" subTitle="" class="mb-sm-30 mb-70"/>
				</div>
			</div>
		</div> -->
			<div class="shop_category_row pt-120">
				<div class="shop_category_col"
					v-for="(category,index) in kratom_header_data.home_page_shop_by_category__section" :key="index">
					<NuxtLink :to="`/${category.kratom_slug}`"
						class="shop-category px-4 py-4 text-center p-3 mb-5 mb-sm-25">
						<NuxtImg width="120" height="120" format="webp"   :src="`${category.kratom_image}`" alt="icon-1" loading="lazy"  class="w-30 mb-20 mb-sm-10"  />
						<span class="text-wrap shop_category_title" v-html="category.kratom_text"></span>
					</NuxtLink>
				</div>
				<!-- <div class="shop_category_col">
				<NuxtLink :to="'/kratom-capsules-for-sale'"  class="shop-category px-4 py-4 text-center p-3 mb-5 mb-sm-25">
					<img class="w-30 mb-20 mb-sm-10" :src="`${this.$config.site_url}/img/kratom/kratom_capsules.jpg`" alt="icon-1" />
					
					<p class="text-wrap shop_category_title">KRATOM <strong>CAPSULES</strong></p>	
				</NuxtLink>	
			</div>
			<div class="shop_category_col">
				<NuxtLink :to="'/buy-kratom-extract'"  class="shop-category  px-4 py-4 text-center p-3 mb-5 mb-sm-25">
					<img class="w-30 mb-20 mb-sm-10" :src="`${this.$config.site_url}/img/kratom/kratom_extracts.jpg`" alt="icon-1" />
					
					<p class="text-wrap shop_category_title">KRATOM <strong>EXTRACTS</strong></p>	
				</NuxtLink>	
			</div>
			<div class="shop_category_col">
				<NuxtLink :to="'/kratom-shots'"  class="shop-category  px-4 py-4 text-center p-3 mb-5 mb-sm-25">
					<img class="w-30 mb-20 mb-sm-10" :src="`${this.$config.site_url}/img/kratom/kratom_shots.jpg`" alt="icon-1" />
					
					<p class="text-wrap shop_category_title">KRATOM <strong>SHOTS</strong></p>	
				</NuxtLink>	
			</div>
			<div class="shop_category_col">
				<NuxtLink :to="'/red-vein-kratom'"  class="shop-category  px-4 py-4 text-center p-3 mb-5 mb-sm-25">
					<img class="w-30 mb-20 mb-sm-10" :src="`${this.$config.site_url}/img/kratom/red_veins.jpg`" alt="icon-1" />
					
					<p class="text-wrap shop_category_title"><strong>RED </strong>VEINS</p>	
				</NuxtLink>	
			</div>
			
			<div class="shop_category_col">
				<NuxtLink :to="'/green-vein-kratom'"  class="shop-category  px-4 py-4 text-center p-3 mb-5 mb-sm-25">
					<img class="w-30 mb-20 mb-sm-10" :src="`${this.$config.site_url}/img/kratom/green_veins.jpg`" alt="icon-1" />
					
					<p class="text-wrap shop_category_title"><strong> GREEN </strong> VEINS</p>	
				</NuxtLink>	
			</div>
			<div class="shop_category_col">
				<NuxtLink :to="'/white-vein-kratom'"  class="shop-category  px-4 py-4 text-center p-3 mb-5 mb-sm-25">
					<img class="w-30 mb-20 mb-sm-10" :src="`${this.$config.site_url}/img/kratom/white_veins.jpg`" alt="icon-1" />
					
					<p class="text-wrap shop_category_title"><strong>WHITE </strong> VEINS</p>	
				</NuxtLink>	
			</div>
			<div class="shop_category_col">
				<NuxtLink :to="'/indo-kratom'"  class="shop-category  px-4 py-4 text-center p-3 mb-5 mb-sm-25">
					<img class="w-30 mb-20 mb-sm-10" :src="`${this.$config.site_url}/img/kratom/indo_kratom.jpg`" alt="icon-1" />
					
					<p class="text-wrap shop_category_title"><strong>INDO</strong> KRATOM</p>	
				</NuxtLink>	
			</div>
			<div class="shop_category_col">
				<NuxtLink :to="'/maeng-da-kratom-powders-capsules'"  class="shop-category  px-4 py-4 text-center p-3 mb-5 mb-sm-25">
					<img class="w-30 mb-20 mb-sm-10" :src="`${this.$config.site_url}/img/kratom/maega_da.jpg`" alt="icon-1" />
					
					<p class="text-wrap shop_category_title"><strong> MAENG DA </strong> KRATOM</p>	
				</NuxtLink>	
			</div> -->
			<div class="shop_category_col">
				<NuxtLink :to="'/shop'" class="shop-all text-center mb-5 mb-sm-25">
					<div class="shop-all-inner">
						<span class="text-white"><strong>SHOP ALL</strong></span>	
					</div>
				</NuxtLink>	
			</div> 
			</div>
		</div>
	</section>
</template>

<script>

import axios from "axios";

export default {
	data() {
		return {
			kratom_header_data: {
				"home_page_shop_by_category__section": [
					{
						"kratom_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1656440833/2022_000_Powder-4oz-RedBali_2014122694b/2022_000_Powder-4oz-RedBali_2014122694b.png?_i=AA",
						"kratom_text": "Kratom <strong>POWDERS</strong>",
						"kratom_slug": "kratom-powder"
					},
					{
						"kratom_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1656451556/2022_000_Caps-50ct-WhiteIndo_20148496a8e/2022_000_Caps-50ct-WhiteIndo_20148496a8e.png?_i=AA",
						"kratom_text": "Kratom <strong>Capsules</strong>",
						"kratom_slug": "kratom-capsules-for-sale"
					},
					{
						"kratom_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1602039175/kratom-powder-Bentuangie-1oz-1/kratom-powder-Bentuangie-1oz-1.jpg?_i=AA",
						"kratom_text": "Kratom <strong>Extrects</strong>",
						"kratom_slug": "buy-kratom-extract"
					},
					{
						"kratom_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1602696968/Chocolate-Ultra/Chocolate-Ultra.png?_i=AA",
						"kratom_text": "Kratom <strong>Shots</strong>",
						"kratom_slug": "kratom-shots"
					},
					{
						"kratom_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1656445837/2022_000_Caps-50ct-RedThai_2014428c2e9/2022_000_Caps-50ct-RedThai_2014428c2e9.png?_i=AA",
						"kratom_text": "<strong>Red</strong> Veins",
						"kratom_slug": "red-vein-kratom"
					},
					{
						"kratom_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1656445793/2022_000_Caps-50ct-GreenMalay_201436d8eb0/2022_000_Caps-50ct-GreenMalay_201436d8eb0.png?_i=AA",
						"kratom_text": "<strong>Green</strong> Veins",
						"kratom_slug": "green-vein-kratom"
					},
					{
						"kratom_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1656451556/2022_000_Caps-50ct-WhiteIndo_20148496a8e/2022_000_Caps-50ct-WhiteIndo_20148496a8e.png?_i=AA",
						"kratom_text": "<strong>White</strong> Veins",
						"kratom_slug": "white-vein-kratom"
					},
					{
						"kratom_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1642018965/2022_000_DrinkMix-Box1_19140510c6e/2022_000_DrinkMix-Box1_19140510c6e.png?_i=AA",
						"kratom_text": "<strong>Indo</strong> Kratom",
						"kratom_slug": "indo-kratom"
					},
					{
						"kratom_image": "https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/v1654121643/MaengDaSamplePack_199643f34c3/MaengDaSamplePack_199643f34c3.png?_i=AA",
						"kratom_text": "<strong>Maeng Da</strong> Kratom",
						"kratom_slug": "maeng-da-kratom-powders-capsules"
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
				this.$config.api_url + '/wp-json/acf/v3/header?data_type=section_3').then((result) => {
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
.shop-all-inner {
	border: 2px solid white;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	border-radius: 100%;
}

.shop_category_row {
	display: inline-block;
	width: 100%;
}

.shop-category {
	background-color: #ffffff;
	width: 233px;
	max-width: calc(100% - 10px);
	height: 233px;
	padding-top: 15px !important;
	display: block;
	margin: auto;
	box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
	border-radius: 10px;
}

.shop-all {
	background-color: #FAB333;
	width: 233px;
	height: 233px;
	margin: auto;
	padding: 10px;
	box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
	border-radius: 50%;
	display: inline-block;
}

.section_shop_by_category {
	/* background: url(/img/kratom/shop_by_category_bg.jpg);
	background-position: center center;
	background-size: cover; */
	position: relative;
}
.section_shop_by_category .container {
	position: relative;
    z-index: 2;
}

.shop_category_title {
	display: flex;
	flex-direction: column;
	font-size: 24px;
	color: #333;
}

.shop_category_col {
	width: 20%;
	text-align: center;
	float: left;
}

.shop-all span {
	font-family: 'Bree serif';
	font-size: 28px;
	font-weight: 100;
}

.bg-color {
	background-color: #eeeeee;
}

.shop-category img {
	width: 120px;
}

@media only screen and (max-width:767px) {
	.shop-category {
		max-width: 100%;
	}
}

/* .discover-kratom::before { background-image: url('@/assets/img/kratom/kratomdiscover-before.png'); }
.discover-kratom::after { background-image: url('@/assets/img/kratom/kratomdiscover-after.png'); } */
</style>