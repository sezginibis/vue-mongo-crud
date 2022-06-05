<script setup>
import { readUrl, createUrl } from '@/config/URIPath';
import PostCreateVue from './PostCreate.vue';
import { onBeforeMount, ref } from 'vue';

const posts = ref([]);
const post = ref([]);

onBeforeMount(async () => {
    try {
        await fetch(createUrl)
            .then(response => response.json())
            .then(json => posts.value = json);
    } catch (error) {
        console.log(error);
    }
});

async function postView(id) {
    try {
        await fetch(readUrl + id)
            .then(response => response.json())
            .then(json => post.value = json);
    } catch (error) {
        console.log(error);
    }
}

function boxOpen() {

}

</script>

<template>
    <table class="table table-hover table-responsive">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Operations</th>
            </tr>
        </thead>
        <tbody>
            <template v-if="posts.length > 0">
                <tr v-for="(i, index) in posts" :key="i._id">
                    <th scope="row text-start">{{ index + 1 }}</th>
                    <td class="text-start">
                        <!-- Button trigger modal -->
                        <a href="#" @click="postView(i._id)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            {{ i.title }}
                        </a>
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col align-self-start">
                                                    <h5 class="modal-title" id="exampleModalLabel">{{ post.title }}</h5>
                                                </div>
                                                <div class="col align-self-center">
                                                    &nbsp;
                                                </div>
                                                <div class="col align-self-end">
                                                    <span class="text-end text-muted"><small class="extra-small">{{
                                                            post._id
                                                    }}</small></span>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        {{ post.description }}
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="text-start">
                            {{ i.description }}
                    </td>
                    <td class="text-end">
                        <div class="btn-group">
                            <router-link :to="{ name: 'post-edit', params: { id: i._id } }"
                                class="btn btn-outline-success btn-sm">Edit</router-link>
                            <router-link :to="{ name: 'post', params: { id: i._id } }"
                                class="btn btn-outline-primary btn-sm">View</router-link>
                            <router-link :to="{ name: 'post-delete', params: { id: i._id } }" class="btn btn-outline-danger btn-sm">Del</router-link>
                        </div>
                    </td>
                </tr>
            </template>
            <tr v-else>
                <td colspan="4"><PostCreateVue /></td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
.extra-small {
    font-size: 0.5rem;

}



</style>
