<template>
    <div class="colored_title" :class="classes">
        <h2 v-if="subTitle">{{ title }} <span>{{ subTitle }}</span></h2>
        <h2 v-html="title" v-else></h2>
    </div>
</template>

<script>
    export default {
        props: ['title', 'subTitle', 'classes']
    };
</script>