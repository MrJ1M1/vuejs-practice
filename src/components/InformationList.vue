<template>
    <div>
        <h3 class="text-center text-info">Added Informations:</h3>
        <information-item 
            class="w-75 mx-auto comment_list" 
            :comment="comment" 
            v-for="comment in comments" 
            :key="comment.id"
        />
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
        border: 2px solid blueviolet;
        padding: 15px;
        margin: 15px;
    }
</style>