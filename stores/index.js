import { defineStore } from "pinia";

export const useKratom_cartStore = defineStore ('kratom_cart', {
    state: () => ({
        kratom_cart: {}
    }),
    getters: {
        getCartKratom: state => {
            return state.kratom_cart
        },
    },
    actions: {
        addToCartItemKratom(item) {
            this.kratom_cart = item;
        },
    }
})