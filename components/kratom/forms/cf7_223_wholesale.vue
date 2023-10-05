<template>
    <div class="cf7_379 mt-40">
        <form :action="`${this.$config.site_url}/wp-json/contact-form-7/v1/contact-forms/223/feedback`" method="post"
            class="wpcf7-form init" novalidate="novalidate" data-status="init"  @submit="checkForm">
            <span v-html="error_msg"></span>
            <div v-if="errors.length" class="cf7_errors" id="cf7_errors">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                </ul>
            </div>
            <div style="display: none;">
                <input type="hidden" name="_wpcf7" value="223">
                <input type="hidden" name="_wpcf7_version" value="5.6.4">
                <input type="hidden" name="_wpcf7_locale" value="en_US">
                <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f223-o1">
                <input type="hidden" name="_wpcf7_container_post" value="0">
                <input type="hidden" name="_wpcf7_posted_data_hash" value="">
            </div>
            <p>Your Name (required)<br>
                <span class="wpcf7-form-control-wrap" data-name="your-name"><input type="text" v-model="name" name="your-name" value=""
                        size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true"
                        aria-invalid="false"></span>
            </p>
            <p>Your Email (required)<br>
                <span class="wpcf7-form-control-wrap" data-name="your-email"><input type="email" v-model="email" name="your-email"
                        value="" size="40"
                        class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                        aria-required="true" aria-invalid="false"></span>
            </p>
            <p>Company Name (required)<br>
                <span class="wpcf7-form-control-wrap" data-name="text-969"><input type="text" v-model="company" name="text-969" value=""
                        size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true"
                        aria-invalid="false"></span>
            </p>
            <p>Phone Number (required)<br>
                <span class="wpcf7-form-control-wrap" data-name="tel-547"><input type="tel" v-model="phone" name="tel-547" value=""
                        size="40"
                        class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel"
                        aria-required="true" aria-invalid="false"></span>
            </p>
            <p>Address (required)<br>
                <span class="wpcf7-form-control-wrap" data-name="text-696"><input type="text" v-model="address" name="text-696" value=""
                        size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true"
                        aria-invalid="false"></span>
            </p>
            <p>Tax ID/EIN # (required) <br>
                <span class="wpcf7-form-control-wrap" data-name="text-289"><input type="text" v-model="tax" name="text-289" value=""
                        size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true"
                        aria-invalid="false"></span></p>
            <p>Message (required)<br><br>
                <span class="wpcf7-form-control-wrap" data-name="textarea-167"><textarea v-model="message" name="textarea-167" cols="40"
                        rows="10" class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                        aria-required="true" aria-invalid="false"></textarea></span>
            </p>            
            <div class="slider-btn btn-hover btn_yellow text-center mt-30"><button type="submit"
                    class="homebanner_shop_btn">
                    Submit
                </button></div>
            <div class="wpcf7-response-output" aria-hidden="true"></div>
        </form>


    </div>
</template>

<script>

import axios from "axios";
import $ from "jquery";
export default {
    data() {
        return {
            sent: null,
            errors: [],
            name: null,
            email: null,
            company: null,
            phone: null,
            address: null,
            tax: null,            
            message: null,
            error_msg: ''
        };
    },
    methods: {
        validEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        checkForm: function (e) {
            e.preventDefault();
            this.errors = [];
            if (!this.name) {
                this.errors.push("Name required.");
            }
            if (!this.email) {
                this.errors.push("Email required.");
            } else if (!this.validEmail(this.email)) {
                this.errors.push("Valid email required.");
            }
            if (!this.company) {
                this.errors.push("Company name required.");
            }
            if (!this.phone) {
                this.errors.push("Phone number required.");
            }
            if (!this.address) {
                this.errors.push("Address required.");
            }
            if (!this.tax) {
                this.errors.push("Message required.");
            }
            if (!this.message) {
                this.errors.push("Message required.");
            }
            

            if (!this.errors.length) {
                var bodyFormData = new FormData();
                bodyFormData.set("your-name", this.name);
                bodyFormData.set("your-email", this.email);
                bodyFormData.set("text-969", this.company);
                bodyFormData.set("tel-547", this.phone);
                bodyFormData.set("text-696", this.address);
                bodyFormData.set("text-289", this.tax);
                bodyFormData.set("textarea-167", this.message);
                axios({
                    method: "post",
                    url:
                    this.$config.site_url + "/wp-json/contact-form-7/v1/contact-forms/223/feedback",
                    data: bodyFormData,
                    config: { headers: { "Content-Type": "multipart/form-data" } }
                }).then(function (response) {
                    if (response.data.status == 'mail_sent') {
                        if (response.data.redirect) {
                            window.location.href = response.data.redirect[0].redirect_url;
                        }
                    } else {
                        this.error_msg = response.data.message;
                    }
                })
                    .catch(function (response) {
                        console.log(response);
                    });
            }else{                
                $('html, body').animate({
        scrollTop: $("#cf7_errors").offset().top
    }, 2000);
            }
        }
    }
};
</script>

<style lang="scss">
.form-wrapper {
    position: relative;

    .form-sent {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(255, 255, 255, 0.9);
    }
}

input,
textarea {
    background: #fff;
}
</style>