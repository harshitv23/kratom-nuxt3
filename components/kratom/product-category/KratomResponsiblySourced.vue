<template>
	<section class="category_section_2 pb-60 ">
		<div class="container">	
			<div class="category_description" v-html="description"></div>
			<!-- <div class="category_description only_for_mobile">
				<read-more more-str="Read more" :text="description" link="#" less-str="Read less" :max-chars="150"></read-more>
			</div> -->
		</div>
	  	<!-- <div class="container pb-60 pb-sm-50 pt-sm-40 d-none">		
			<div class="row align-items-center">			
				<div class="col-lg-6 col-md-12 col-sm-12 ms-auto pb-sm-20 mt-md-40">
					<img :src="`${this.$config.site_url}/img/kratom/category2.png`" alt="listpage-1" class="w-100"/>
				</div>
				<div class="col-lg-6 col-md-12 col-sm-12 ms-auto">
					<KratomTitle title="Responsibly Sourced" subTitle="Kratom, Always" class="mb-40 mb-sm-20"/>
					<div class="">
						<p>At Kratom Spot, we stock what can only be called the worlds best kratom. We source all of our strains from the most experienced and sustainable fair-trade farms. We process and package our products in state-of-the-art, Certified GMP (Good Manufacturing Practices) compliant facilities. Every batch is independently tested for purity, potency, and quality, and our innovative fresh-seal packaging keeps your favorite strains fresher, longer. </p>
						<ul class="mt-40">
							<li>100% free of addictive, fillers and chemicals</li>
							<li>Laboratory-tested independently to ensure quality & purity</li>
							<li>100% free of addictive, fillers and chemicals</li>
							<li>Laboratory-tested independently to ensure quality & purity</li>
						</ul>
					</div>			
				</div>
	  		</div>
	  	</div> -->
		  <!-- <div class="container d-none">
		
		<div class="row">
			<div class="col-lg-6 col-md-12 col-sm-12 ms-auto">
				<KratomTitle title="Discover The Kratom Spot" subTitle="Differences" class="mb-40 mb-sm-20"/>
				<div class="row pl-10 px-sm-0">
					<p>At Kratom Spot, we stock what can only be called the worlds best kratom. We source all of our strains from the most experienced and sustainable fair-trade farms. We process and package our products in state-of-the-art, Certified GMP (Good Manufacturing Practices) compliant facilities. Every batch is independently tested for purity, potency, and quality, and our innovative fresh-seal packaging keeps your favorite strains fresher, longer. </p>
					<p>At Kratom Spot, we stock what can only be called the worlds best kratom. We source all of our strains from the most experienced and sustainable fair-trade farms. We process and package our products in state-of-the-art, Certified GMP (Good Manufacturing Practices) compliant facilities. Every batch is independently tested for purity, potency, and quality, and our innovative fresh-seal packaging keeps your favorite strains fresher, longer. </p>
				</div>
			</div>
			<div class="col-lg-6 col-md-12 col-sm-12 ms-auto pt-sm-40 pb-sm-10 mt-md-40">
				<img :src="`${this.$config.site_url}/img/kratom/category2.png`" alt="kratomspot-1" class="w-100"/>
			</div>
			
	  </div>

	  </div> -->
	</section>
</template>


<script>
import $ from "jquery";
export default {        
    props: ["description"],
	data(){
		return {			
			harshit : 'xxx'
		}
	},
	methods: {
		
	},
	mounted(){
		
	},
	beforeCreate(){
		
	},
	created(){				
		$( document ).ready(function() {
			$('body').on('click', '.kratom_collapse h2,.kratom_collapse h3', function() {
				$(this).closest('.kratom_collapse').addClass('show');
			});
			$('body').on('click', '.kratom_collapse.show h2,.kratom_collapse.show h3', function() {
				$(this).closest('.kratom_collapse').removeClass('show');
			});
		});
	}
}
</script>
<style>
.kratom_collapse:before {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    content: '\f175';
    position: absolute;
    right: 10px;
    top: 20px;
    color: #000;
}
.kratom_collapse.show:before{
	content: '\f176';
}
.kratom_collapse + .kratom_collapse {
    border-top: unset;
}
.kratom_collapse {
    position: relative;
    border-top: 2px solid #cccccc;
    border-bottom: 2px solid #cccccc;
	display:inline-block;
	width:100%;
}

.category_description .kratom_collapse h2,
.category_description .kratom_collapse h3 {
    margin-top: 10px;
    margin-bottom: 15px;
	padding-right: 25px;
}
.kratom_collapse h2,
.kratom_collapse h3{
	cursor: pointer;
}
.kratom_collapse_content {
    display: none;
}
.kratom_collapse.show .kratom_collapse_content {
    display: block;
}
.kratom_collapse.show {
    padding-bottom: 15px;
}

.column {
    width: 50%;
    margin: 0 15px;
}
.rowse {
    display: flex;
    border: 1px solid #e3e3e3;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px 10px 10px 10px;
}
.category_section_2 .tabs input[type="checkbox"] {
    display: none;
}
.category_section_2 .tabs label.tab-label {
    font-family: 'Bree Serif';
    color: #333;
    font-size: 20px;
    margin-bottom: 10px;
}
.category_section_2 .tab {
    margin-bottom: 20px;
}
.rowse .column ul,
.column .pwa_productlist {
    margin-top: 5px !important;
}
.category_section_2 h3 {
    margin-top: 20px;
}
.column h3 {
    margin-top: 0;
}
.category_section_2 ul li {
    background: #F3F5F2;
    margin-bottom: 10px;
    padding: 15px 15px 15px 20px;
    font-size: 20px;
    color: #6a6a6a;
    border-left: 5px solid #4A6230;
}
.category_section_2 ul li:nth-child(2n) {
    border-left: 5px solid #dfb456;
}

/* .category_description */
.category_description h2,
.category_description h1 {
    margin-bottom: 25px;
	width: 100%;
	margin-top:30px;
}

.category_description ul {
    margin: 30px 0px 10px !important;
    width: 100%;
}
.category_description img {
    margin-bottom: 20px;
}
.rowse .column {
    background: unset !important;
}
@media only screen and (max-width: 990px) {
	.rowse {
    display: block;
    padding: 15px 19px;
}
.column {
    width: 100%;
    margin: 0 0px;
}
}
@media only screen and (max-width: 767px) {
	.px-sm-0 {
		padding: 0 !important;
	}
	.mb-sm-20 {
		margin-bottom: 20px;
	}
	.pb-sm-50 {
		padding-bottom: 50px !important;
	}
 }
 @media only screen and (min-width: 768px) {
	body .only_for_mobile{
		display:none !important;
	}

 }
</style>