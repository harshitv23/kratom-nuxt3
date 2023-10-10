import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore('kratom_cart', () => {
    const items = ref(1) //state
    const Item = computed(() => items.value)  //getters
    function addItems() {
        items.value
    }
    return {items, Item, addItems}
})