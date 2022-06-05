<script setup>
import PostIndexVue from '@/components/posts/PostIndex.vue';
import PostTitleVue from '@/components/posts/PostTitle.vue';
import PostTitle from '@/components/posts/PostTitle.vue';
import { ref } from 'vue';

const title = ref('This is an post list page');
</script>

<template>
    <div>
        <PostTitleVue :title="title" />
        <PostIndexVue />
    </div>
</template>
