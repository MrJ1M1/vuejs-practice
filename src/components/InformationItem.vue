<template>
    <div class="comment_item">
        <div>
            <div><b>FirstName: </b> {{comment.firstname}} </div>
            <div><b>SurName: </b> {{comment.surname}} </div>
            <div><b>EmailAddress: </b> {{comment.email}} </div>
            <div><b>PhoneNumber: </b> {{comment.phone}} </div>
            <div><b>Content: </b> {{comment.content}} </div>
        </div>
        <div>
            <my-button class="btn btn-danger">Delete</my-button>
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