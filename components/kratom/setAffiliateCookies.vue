<template>
    <div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            ref: this.$route.query.ref,
            visit: this.$route.query.visit,            
            campaign: this.$route.query.campaign,            
            refslug: this.$route.params.slug
        }
    },
    methods: {
        set_affiliate_cookies() {
            if (this.ref != undefined && this.ref != '') {
                this.$cookies.set("wp-ywpar_referral_token", this.ref, "7 Days")
                this.$cookies.set("affwp_ref", this.ref, "7 Days")
                if(this.refslug){
                    var slug = this.refslug;
                }else{
                    var slug = "";
                }

                //var basicToken = 'Basic ' + btoa(useRuntimeConfig().public.affiliate_public+':'+useRuntimeConfig().public.affiliate_token);
                let headersList = {
                 "Authorization": 'Basic ' + btoa(useRuntimeConfig().public.affiliate_public+':'+useRuntimeConfig().public.affiliate_token) 
                }
                
                let reqOptions = {
                  url: "https://kratomspot.com/wp-json/affwp/v1/visits/?url="+useRuntimeConfig().public.api_url+"/"+slug+"&affiliate_id="+this.ref,
                  method: "POST",
                  headers: headersList,
                }
                
                axios.request(reqOptions).then(response => {                                
                    /* this.visit = response.data.visit_id;            
                    this.campaign = response.data.campaign; */
                    this.$cookies.set("affwp_ref_visit_id", response.data.visit_id)
                    this.$cookies.set("affwp_campaign", response.data.campaign)
                });                
                /* axios.post(
                    useRuntimeConfig().public.api_url+'/wp-json/affwp/v1/visits/?url='+useRuntimeConfig().public.api_url+'/'+slug+'&affiliate_id='+this.ref,
                    {
                        params: {
                            
                        },
                        headers:{
                            'Authorization' : basicToken
                        }
                    }
                ).then((result) => {
                    console.log(result);
                }, (error) => {
                    console.log(error);
                }); */
            }
            if (this.visit != undefined && this.visit != '') {
                this.$cookies.set("affwp_ref_visit_id", this.visit)
            }
            if (this.campaign != undefined && this.campaign != '') {
                this.$cookies.set("affwp_campaign", this.campaign)
            }
        }
    },
    created() {
        this.set_affiliate_cookies();
    }
};
</script>