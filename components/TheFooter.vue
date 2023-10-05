<template>
    <footer class="footer-area bg-gray pt-100 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-sm-4">
                    <div class="copyright mb-30">
                        <div class="footer-logo">
                            <NuxtLink to="/">
                                <img src="/img/logo/logo.png" alt="logo">
                            </NuxtLink>
                        </div>
                        <p>© 2023 <a href="#" target="_blank">Flone</a>.<br> All Rights Reserved</p>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-4">
                    <div class="footer-widget mb-30 ml-30">
                        <div class="footer-title">
                            <h3>ABOUT US</h3>
                        </div>
                        <div class="footer-list">
                            <ul>
                                <li><NuxtLink to="/about">About us</NuxtLink></li>
                                <li><NuxtLink to="/shop">Store location</NuxtLink></li>
                                <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                                <li><NuxtLink to="/contact">Orders tracking</NuxtLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-4">
                    <div class="footer-widget mb-30 ml-50">
                        <div class="footer-title">
                            <h3>USEFUL LINKS</h3>
                        </div>
                        <div class="footer-list">
                            <ul>
                                <li><NuxtLink to="/about">Returns</NuxtLink></li>
                                <li><NuxtLink to="/about">Support Policy</NuxtLink></li>
                                <li><NuxtLink to="/about">Size guide</NuxtLink></li>
                                <li><NuxtLink to="/about">FAQs</NuxtLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-6">
                    <div class="footer-widget mb-30 ml-75">
                        <div class="footer-title">
                            <h3>FOLLOW US</h3>
                        </div>
                        <div class="footer-list">
                            <ul>
                                <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                                <li><a href="https://twitter.com/" target="_blank">Twitter</a></li>
                                <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                                <li><a href="https://www.youtube.com/" target="_blank">Youtube</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="footer-widget mb-30 ml-70">
                        <div class="footer-title">
                            <h3>SUBSCRIBE</h3>
                        </div>
                        <div class="subscribe-style">
                            <p>Get E-mail updates about our latest shop and special offers.</p>
                            <div class="subscribe-form">
                                <form class="mc-form">
                                    <input class="email" type="email" required="" placeholder="Enter your email here.." name="email" >
                                    <button class="button" name="subscribe">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {

    };
</script>