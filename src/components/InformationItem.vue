<template>
    <div class="comment_item">
        <div>
            <p><b>Name: </b> {{comment.name}} </p>
            <p><b>Content: </b> {{comment.body}} </p>
            <p><b>{{comment.email}}</b></p>
        </div>
        <div>
            <my-button class="btn btn-danger" @click="$emit('remove', commit)">Delete</my-button>
        </div>
    </div>
</template>


<script>
export default {

    props:{
        comment:{
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    .comment_item{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>