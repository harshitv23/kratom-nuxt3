<template>
    <div class="colored_title" :class="classes">
        <h2>{{ title }} <span>{{ subTitle }}</span></h2>
    </div>
</template>

<script>
    export default {
        props: ['title', 'subTitle', 'classes']
    };
</script>