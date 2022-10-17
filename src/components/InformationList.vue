<template>
    <div v-if="comments.length > 0">
        <h3 class="text-center text-info">Added Informations:</h3>
        <TransitionGroup name="list">
            <information-item 
                class="w-75 mx-auto comment_list" 
                :comment="comment" 
                v-for="comment in comments" 
                :key="comment.id"
                @remove="$emit('remove', comment)"
            />
        </TransitionGroup>
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
    .list-enter-active,
    .list-leave-active {
        transition: all 0.5s ease;
    }
    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
    .list-move{
        transition: all 0.5s ease;
    }
</style>