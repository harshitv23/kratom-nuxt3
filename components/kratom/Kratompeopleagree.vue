<template>
	<div class="kratom-people-agree position-relative">
	<img format="webp" width="1600" height="467" loading="lazy" src="https://res.cloudinary.com/dv8z5nr6r/images/v1676554803/people_agree_bg-2/people_agree_bg-2.jpg?_i=AA" class="section_bg_div" alt="Kratom Spot People Agree Background"/>
	  <div class="container position-relative">
		<div class="row">
			<div class="col-12 pt-80 pb-80 pt-sm-50 pb-sm-50">
				<div class="text-center" v-if ="kratom_header_data.home_people_agree_section">
					<h2 class="text-white pt-sm-0 pb-sm-0 pl-sm-20 pr-sm-20 mb-sm-20" v-html="kratom_header_data.home_people_agree_section[0].home_people_agree_title"></h2>						
					<h3 class="text-white pt-sm-0 pb-sm-0 pl-sm-20 pr-sm-20" v-html="kratom_header_data.home_people_agree_section[0].home_people_agree_text"></h3>	
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
			"home_people_agree_section": [
				{
				"home_people_agree_title": "People agree:",
				"home_people_agree_text": "KRATOM SPOT IS THE BEST SOURCE OF KRATOM <span>POWDER & CAPSULES</span> ONLINE"
				}
			]
		}
	};
},
computed: {

},
methods: {
	fatch() {
		const configs = useRuntimeConfig() //configs.public.
		axios.get(
			configs.public.api_url + '/wp-json/acf/v3/header?data_type=section').then((result) => {
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
.kratom-people-agree .container {
    z-index: 2;
}
.kratom-people-agree-highlight { color: #FAB333; }
.kratom-people-agree {
    /* background-image: url(/img/kratom/people_agree_bg.jpg);
    background-size: cover;
    background-repeat: no-repeat; */
	background-color: #2F482B;
}
.kratom-people-agree h2 {
    font-family: 'Bree Serif';
    font-size: 70px;
    margin-bottom: 40px;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #fff;
    color: transparent !important;
}
.kratom-people-agree h3 {
    font-family: 'Bree Serif';
    font-size: 55px;
    line-height: 1.2;
    max-width: 780px;
    margin: 0 auto 20px;
}
.kratom-people-agree h3 span {
    color: #fab333;
}
</style>