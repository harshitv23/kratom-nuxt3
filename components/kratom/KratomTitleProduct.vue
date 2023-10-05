<template>
    <div class="colored_title" :class="classes">
        <h1 v-if="subTitle">{{ title }} <span>{{ subTitle }}</span></h1>
        <h1 v-html="title" v-else></h1>
    </div>
</template>

<script>
    export default {
        props: ['title', 'subTitle', 'classes']
    };
</script>