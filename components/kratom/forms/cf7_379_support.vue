<template>
    <div class="cf7_379 mt-40">
        <div class="form-sent" v-if="sent">Message Sent!</div>
        <form :action="`${useRuntimeConfig().public.site_url}/wp-json/contact-form-7/v1/contact-forms/358/feedback`" method="post"
            class="wpcf7-form init" novalidate="novalidate" data-status="init" @submit="checkForm">
            <span v-html="error_msg"></span>
            <div v-if="errors.length" class="cf7_errors" id="cf7_errors">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                </ul>
            </div>
            <div style="display: none;">
                <input type="hidden" name="_wpcf7" value="379">
                <input type="hidden" name="_wpcf7_version" value="5.6.4">
                <input type="hidden" name="_wpcf7_locale" value="en_US">
                <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f379-o1">
                <input type="hidden" name="_wpcf7_container_post" value="0">
                <input type="hidden" name="_wpcf7_posted_data_hash" value="">
                <input type="hidden" name="_wpcf7_recaptcha_response" value="">
            </div>
            <p>Your Name (required)<br>
                <span class="wpcf7-form-control-wrap" data-name="your-name">
                    <input type="text" v-bind:value="name" name="your-name" value="" size="40"
                        class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true"
                        aria-invalid="false">
                </span>
            </p>
            <p>Your Email (required)<br>
                <span class="wpcf7-form-control-wrap" data-name="your-email"><input v-bind:value="email" type="email"
                        name="your-email" value="" size="40"
                        class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                        aria-required="true" aria-invalid="false"></span>
            </p>
            <p>Subject<br>
                <span class="wpcf7-form-control-wrap" data-name="your-subject"><input v-bind:value="subject" type="text"
                        name="your-subject" value="" size="40" class="wpcf7-form-control wpcf7-text"
                        aria-invalid="false"></span>
            </p>
            <p>Your Message<br>
                <span class="wpcf7-form-control-wrap" data-name="your-message"><textarea v-bind:value="message"
                        name="your-message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea"
                        aria-invalid="false"></textarea></span>
            </p>
            <div class="slider-btn btn-hover btn_yellow text-center mt-30"><button type="submit"
                    class="homebanner_shop_btn">
                    Submit
                </button></div>
            <!-- <p><input type="submit" value="Send" class="wpcf7-form-control has-spinner wpcf7-submit"></p> -->
            <div class="wpcf7-response-output" aria-hidden="true"></div>
        </form>
    </div>
</template>

<script>

import axios from "axios";

export default {
    data() {
        return {
            sent: null,
            errors: [],
            name: null,
            email: null,
            subject: null,
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
            }else if (!this.validEmail(this.email)) {
                this.errors.push("Valid email required.");
            }

            if (!this.errors.length) {
                var bodyFormData = new FormData();
                bodyFormData.set("your-name", this.name);
                bodyFormData.set("your-email", this.email);
                bodyFormData.set("your-subject", this.subject);
                bodyFormData.set("your-message", this.message);

                axios({
                    method: "post",
                    url:
                    useRuntimeConfig().public.site_url+"/wp-json/contact-form-7/v1/contact-forms/379/feedback",
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
                document.getElementById("cf7_errors").scrollIntoView({
                    behavior: "smooth",
                });
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