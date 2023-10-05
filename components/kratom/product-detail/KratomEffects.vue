<template>
    <section class="product_effects position-relative mt-40 pt-md-60">
        <div class="product_effects_bg pt-20">
        <div class="container product_effects_inner">
            <h2 class="product_effects_heading">KRATOM EFFECTS</h2>
            <ul class="product_effects_ul">
                <li class="product_effects_li"><img src="img/kratom/icons/effect_blog_img.png" alt="" width="18" height="18"/><span class="product_effects_span" v-html="(product.ACF.kratome_effects_text_1)?product.ACF.kratome_effects_text_1:'Calming'"></span></li>
                <li class="product_effects_li"><img src="img/kratom/icons/effect_blog_img.png" alt="" width="18" height="18"/><span class="product_effects_span" v-html="(product.ACF.kratome_effects_text_2)?product.ACF.kratome_effects_text_2:'Relief'"></span></li>
                <li class="product_effects_li"><img src="img/kratom/icons/effect_blog_img.png" alt="" width="18" height="18"/><span class="product_effects_span" v-html="(product.ACF.kratome_effects_text_3)?product.ACF.kratome_effects_text_3:'Soothing'"></span></li>
            </ul>
            <div class="product_effects_img">
                <img :src="replaceSizeImg(product.ACF.kratome_effects_image,'h_180,q_auto')" alt="kratom effects" v-if="product.ACF.kratome_effects_image" width="498" height="180">
                <img src="img/kratom/product_effect_img.png" alt="kratom effects" width="498" height="180" v-else>
            </div>
        </div>
    </div>
    </section>
</template>


<script>
export default {
    props: ['product'],
    methods: {
        replaceSizeImg(img, replacewith = 'h_400,w_400') {
            if (img.indexOf('f_auto,q_auto') > -1) {
                img = img.replace("f_auto,q_auto", replacewith);
            }
            return img;
        }
    }
    
};
</script>

<style>

.product_effects .product_effects_bg {
    background: #f2f5f1;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: auto;
    top: 0;
}

.product_effects .product_effects_inner {
    position: relative;
    z-index: 9;
}

.product_effects h2.product_effects_heading {
    text-align: center;
    font-size: 35px;
    letter-spacing: 5px;
    font-weight: 600;
}

.product_effects ul.product_effects_t {
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.product_effects span.product_effects_span {
    font-size: 25px;
    color: #59704b;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: "Bree Serif";
    line-height: 1;
}

.product_effects li.product_effects_li {
    padding: 0 50px 0 35px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.product_effects ul.product_effects_ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0 15px 0px;
}

.product_effects .product_effects_img {
    text-align: center;
}

.product_effects .product_effects_img img {
    max-width: 500px;
    margin-top: 15px;
}

.product_effects li.product_effects_li img {
    max-width: 18px;
    margin-right: 5px;
    margin-top: 4px;
}

@media only screen and (max-width:768px) {
    .product_effects {
        margin-top: 10px;
    }
    .product_effects h2.product_effects_heading {
        text-align: center;
        font-size: 25px;
        letter-spacing: 3px;
        font-weight: 600;
    }
    .product_effects ul.product_effects_ul {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0 10px 0px;
    }
    .product_effects li.product_effects_li {
        padding: 0 20px 0 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .product_effects li.product_effects_li img {
        max-width: 13px;
    }
    .product_effects span.product_effects_span {
        font-size: 15px;
        color: #59704b;
        font-weight: 600;
        letter-spacing: 1px;
        font-family: "Bree Serif";
    }
    .product_effects .product_effects_img {
        text-align: center;
    }
    .product_effects .product_effects_img img {
        max-width: 250px;
        margin-top: 5px;
        margin-left: 10%;
    }
}
</style>