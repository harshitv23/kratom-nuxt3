<template>
	<section>
	    <div class="titlebar_section pt-80 pb-140">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="text-center">
							<!--<h2>Best place to buy <span>buy kratom online</span></h2>-->
							<h1 v-html="title"></h1>
						</div>	
					</div>
				</div>
	  		</div>
		</div>
		<!-- <div class="after_banner1 d-sm-block" id="mob-afterbanner">
			<img :src="`${this.$config.site_url}/img/kratom/bannerbg-2.png`" alt="listpage-5" class="w-100"/>
		</div> -->
	  <div class="after_banner d-none d-md-block">
			<picture>
                <source media="(max-width:575px)" srcset="/img/kratom/noimage.webp">
                <img preload :src="`${this.$config.site_url}/img/kratom/bannerbg-2.png`" alt="Kratom Spot Banner"  width="1900" height="917" class="banner_bg"/>
            </picture>
			<!-- <img :src="`${this.$config.site_url}/img/kratom/bannerbg-2.png`" alt="listpage-5" class="w-100" width="1098" height="108"/> -->
		</div>
	</section>
  </template>

<script>
export default {        
    props: ["title"]
}
</script>
<style>
.titlebar_section { 
    background-image: url('/img/kratom/titlebar_bg.webp');  
    background-size: cover;
    background-position: center center;
}
body .titlebar_section h2,
body .titlebar_section h1 {
    color: #fff;
    font-size: 50px;
    font-family: "Bree Serif",serif;
    text-transform: uppercase;
    text-shadow: -3px 3px 5px rgb(0 0 0 / 80%);    
	margin-bottom: 0;
}
.titlebar_section .h2 span, .titlebar_section h2 span {    
    color: #fab333; 
}
#mob-afterbanner {
	display: none !important;
}

@media only screen and (max-width: 767px) { 
	.titlebar_section { 
    	background-image: url('/img/kratom/titlebar_bg_mob.webp');  
	}
	.titlebar_section h1,
	.titlebar_section h2 { 
		font-size: 24px !important;
	}
	.titlebar_section.pb-sm-70 {
        padding-bottom: 70px !important;
    }
	#mob-afterbanner {
		display: block !important;
	}
	.titlebar_section {
	    padding: 25px 0 25px;
	}	
}
</style>