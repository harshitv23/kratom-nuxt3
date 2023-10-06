<template>
	<section class="pt-30 pt-sm-15">
		<div class="container">	
			<div class="above_the_fold_texts d-sm-block" v-html="above_the_fold_texts" style="display:none;"></div>
			<div class="above_the_fold_texts only_for_mobile">				
                <read-more more-str="Read more" :text="above_the_fold_texts" link="#" less-str="Read less" :max-chars="150"></read-more>
            </div>
		</div>
	  	<!-- <div class="container d-none">				
			<div class="row">			
				<div class="col-12 ms-auto">
					<div class="row pb-30">
						<KratomTitle title="Shop All of our" subTitle="Kratom Strains" class="mb-40 mb-sm-20"/>
						<p>At Kratom Spot, we stock what can only be called the worlds best kratom. We source all of our strains from the most experienced and sustainable fair-trade farms. We process and package our products in state-of-the-art, Certified GMP (Good Manufacturing Practices) compliant facilities.</p>
					</div>
				</div>
			</div>
			<div class="row">	
				<div class="col-lg-5 col-md-12 col-sm-12 ms-auto">
					<p>At Kratom Spot, we stock what can only be called the worlds best kratom. We source all of our strains from the most experienced and sustainable fair-trade farms. We process and package our products in state-of-the-art, Certified GMP (Good Manufacturing Practices) compliant facilities. Every batch is independently tested for purity, potency, and quality, and our innovative fresh-seal packaging keeps your favorite strains fresher, longer. </p>
					<p>At Kratom Spot, we stock what can only be called the worlds best kratom. We source all of our strains from the most experienced and sustainable fair-trade farms. </p>
				</div>
				<div class="col-lg-7 col-md-12 col-sm-12 ms-auto mt-sm-20 mt-md-30">
					<img :src="`${useRuntimeConfig().public.site_url}/img/kratom/category1.png`" alt="listpage-2" class="w-100"/>
				</div>
	  		</div>
	  	</div> -->
	</section>
</template>
<script>

export default {        
    props: ["above_the_fold_texts"]
}
</script>
<style>
.above_the_fold_texts h2,
.above_the_fold_texts h1 {
    margin-bottom: 25px;
    width: 100%;
}
a#readmore {
    color: #35492D;
    border-bottom: 2px solid #35492D;
}
@media only screen and (max-width:767px){
	.category_description span, .category_description p,
	.above_the_fold_texts span, .above_the_fold_texts p{
	    display: inline;
	}
	
}
</style>
