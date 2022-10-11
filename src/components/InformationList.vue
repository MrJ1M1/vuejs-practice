<template>
    <div v-if="comments.length > 0">
        <h3 class="text-center text-info">Added Informations:</h3>
        <information-item 
            class="w-75 mx-auto comment_list" 
            :comment="comment" 
            v-for="comment in comments" 
            :key="comment.id"
            @remove="$emit('remove', comment)"
        />
    </div>
    <div v-else>
        <h2 class="text-center text-danger">We can not find any comment</h2>
    </div>
</template>

<script>
import InformationItem from './InformationItem.vue'
export default {
  components: { InformationItem },
    
    props:{
        comments:{
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
    .comment_list{
        border: 5px solid gray;
        padding: 10px;
        margin: 5px;
    }
</style>