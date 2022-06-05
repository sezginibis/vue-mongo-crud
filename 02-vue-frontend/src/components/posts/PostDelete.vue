<script setup>
import PostTitle from '@/components/posts/PostTitle.vue';
import { onBeforeMount, ref, computed } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()

const post = ref([]);

const title = ref('This is an post delete page');

const btn = ref('danger');

const deneme = computed(() => {
    if (route.params.id !== post.value._id) {
        return true
    }
})

onBeforeMount(async () => {
    try {
        await fetch('http://127.0.0.1:5000/post/' + route.params.id)
            .then(response => response.json())
            .then(json => post.value = json);
    } catch (error) {
        console.log(error);
    }
});

async function deletePost() {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    await fetch('http://127.0.0.1:5000/post-delete/' + route.params.id, requestOptions)
        .then(response => {
            response.json()
            window.location.href = '/posts';
        })
        .catch(error => console.log(error));
}

</script>
<template>
<div>
    <PostTitle :title="title" />
        <div class="card mt-3">
            <span class="text-start badge bg-light text-wrap text-muted extra-small">_id: {{ post._id }}</span>
            <div class="card-body">
                <span v-if="deneme">
                    <h3>No post found!</h3>
                </span>
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text">{{ post.description }}</p>
                <div class="container">
                    <div class="row">
                        <div class="d-grid gap-2 mt-4">
                            <button @mouseover="btn = 'success'" @mouseleave="btn = 'danger'"
                                :class='"btn btn-block btn-" + btn' @click="deletePost">
                                {{ btn == 'danger' ? 'Are you sure you want to delete this post?' : 'Yes. I want it deleted.' }}
                            </button>
                        </div>
                        <div class="d-grid gap-2 mt-4">
                            <router-link to="/posts" class="btn btn-warning">Cancel</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.extra-small {
    font-size: 0.6rem;
    font-style: italic;
}
</style>
