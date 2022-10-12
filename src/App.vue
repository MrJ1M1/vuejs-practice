<template>
  <navbar class="container" :showModal="showModal"/>
  <div>
    <my-modal v-model:show="modalVisible">
      <infomation-form @addComment="createInformation" />
    </my-modal>
    <information-list :comments="comments" @remove = "removeComment" v-if="!isLoading"/>
    <div class="spinner-grow text-primary col-md-3 offset-md-6" role="status" v-else>
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
import InfomationForm from './components/InfomationForm.vue';
import InformationList from './components/InformationList.vue';
import Navbar from './components/Navbar.vue';
import axios from 'axios';
export default {
  components: { InformationList, InfomationForm, Navbar },
  data() {
    return {
      comments:[],
      modalVisible: false,
      isLoading: false,
    }
  },
  methods: {
    createInformation(comment){
      this.comments.push(comment);
      this.modalVisible = false;
    },
    removeComment(comment){
      this.comments = this.comments.filter(c => c.id != comment.id);
    },
    showModal(){
      this.modalVisible = true;
    },
    async fetchComments(){
      try{
        this.isLoading = true;
          const response = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10');
          this.comments = response.data;
      }
      catch(e){
        alert('Something went wrong');
      }finally{
        this.isLoading = false;
      }
    }
  },
  mounted() {
    this.fetchComments();
  },
}
</script>

<style>
  
</style>