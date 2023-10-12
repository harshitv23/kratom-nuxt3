<template>
    <Swiper :modules="modules" :pagination="{ clickable: true }">
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  </template>
  
  <script>
    import SwiperClass, { Pagination } from 'swiper'
    /* import { Swiper, SwiperSlide } from 'vue-awesome-swiper' */
  
    // import swiper module styles
    import 'swiper/css'
    import 'swiper/css/pagination'
    // more module style...
  
    export default {
      components: {
        Swiper,
        SwiperSlide
      },
      setup() {
        return {
          modules: [Pagination]
        }
      }
    }
  </script>