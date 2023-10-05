<template>
    <div>
        <div class="home-sidebar-left">
            <div class="logo">
                <NuxtLink to="/">
                    <img src="/img/logo/logo.png" alt="logo">
                </NuxtLink>
            </div>
            <div class="header-right-wrap">
                <div class="same-style header-search d-none d-lg-block">
                    <button class="search-active" @click="isOpenSearch = !isOpenSearch"><i class="pe-7s-search"></i></button>
                    <div class="search-content" :class="{ active:isOpenSearch }">
                        <form>
                            <input type="text" placeholder="Search" />
                            <button class="button-search"><i class="pe-7s-search"></i></button>
                        </form>
                    </div> 
                </div>
                <div class="same-style account-setting d-none d-lg-block">
                    <button class="account-setting-active" @click="isOpenAccountSettings = !isOpenAccountSettings"><i class="pe-7s-user-female"></i></button>
                    <div class="account-dropdown" :class="{ active:isOpenAccountSettings }">
                        <ul>
                            <li><NuxtLink to="/login-register">Login</NuxtLink></li>
                            <li><NuxtLink to="/login-register">Register</NuxtLink></li>
                            <li><NuxtLink to="/my-account">my account</NuxtLink></li>
                        </ul>
                    </div>
                </div>
                <div class="same-style header-compare">
                    <NuxtLink to="/compare"><i class="pe-7s-shuffle"></i></NuxtLink>
                    <span class="count-style">{{ compareItemCount }}</span>
                </div>
                <div class="same-style header-wishlist">
                    <NuxtLink to="/wishlist"><i class="pe-7s-like"></i></NuxtLink>
                    <span class="count-style">{{ wishlistItemCount }}</span>
                </div>
                <div class="same-style cart-wrap">
                    <button class="icon-cart" @click="openCart = !openCart">
                        <i class="pe-7s-shopbag"></i>
                        <span class="count-style">{{ cartItemCount }}</span>
                    </button>
                    <MiniCart :miniCart="{ visible:openCart }" @minicartClose="openCart = !openCart" />
                </div>
                <div class="same-style mobile-menu-toggler d-block d-lg-none">
                    <button class="mobile-aside-button" @click="navOpen = !navOpen">
                        <i class="pe-7s-menu"></i>
                    </button>
                </div>
            </div>
            <div class="sidebar-menu d-none d-lg-block">
                <nav>
                    <Navigation />
                </nav>
            </div>
            <div class="sidebar-copyright d-none d-lg-block">
                <p>©2022 <a href="#" target="_blank">Flone</a>.All Rights Reserved.</p>
            </div>
        </div>
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @toggleAsideMenu="navOpen = !navOpen" />
    </div>
</template>

<script>
    export default {
        components: {
            Navigation: () => import("@/components/Navigation"),
            MiniCart: () => import("@/components/MiniCart"),
        },

        computed: {
            cartItemCount() {
                return this.$store.getters.cartItemCount
            },
            wishlistItemCount() {
                return this.$store.getters.wishlistItemCount
            },
            compareItemCount() {
                return this.$store.getters.compareItemCount
            }
        },

        data() {
            return {
                isOpenSearch: false,
                isOpenAccountSettings: false,
                openCart: false,
                navOpen: false
            }
        },
    };
</script>