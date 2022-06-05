<script setup>
import { updateUrl, readUrl, pathMain } from '@/config/URIPath';
import PostTitle from '@/components/posts/PostTitle.vue';
import { onBeforeMount, reactive, ref } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()

const post = reactive({
    _id: '',
    title: '',
    description: ''
});
const title = ref('This is an post edit page');

onBeforeMount(async () => {
    try {
        await fetch(readUrl + route.params.id)
            .then(response => response.json())
            .then(json => post._id = json._id);
        await fetch(readUrl + route.params.id)
            .then(response => response.json())
            .then(json => post.title = json.title);
        await fetch(readUrl + route.params.id)
            .then(response => response.json())
            .then(json => post.description = json.description);
    } catch (error) {
        console.log(error);
    }
});



async function editSave() {
    const data = {
        title: post.title,
        description: post.description
    };
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    await fetch(updateUrl + route.params.id, requestOptions)
        .then(response => {
            response.json()
            window.location.href = `${pathMain}posts`;
        })
        .then(json => post.value = json);
}


</script>

<template>
<div>
    <PostTitle :title="title" />
        <!-- <form @submit.prevent="editSave(post._id, event)"> DATA CHECK CONTROL AFTER -->
            <div class="form-floating mt-3 mb-3">
                <input type="text" class="form-control" id="title" placeholder="Post Title" v-model="post.title">
                <label for="title">Post Title</label>
            </div>
            <div class="form-floating">
                <textarea class="form-control" placeholder="Post Description" id="description" style="height: 100px"
                    v-model="post.description"></textarea>
                <label for="description">Post Description</label>
                <div class="container">
                    <div class="row">
                        <div class="d-grid gap-2 mt-4">
                            <button class="btn btn-success" type="button" @click="editSave()">Save the
                                edit</button>
                        </div>
                        <div class="d-grid gap-2 mt-4">
                            <router-link to="/posts" class="btn btn-warning">Cancel</router-link>
                        </div>
                    </div>
                </div>
            </div>
        <!-- </form> -->
    </div>
</template>
