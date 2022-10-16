<template>
  <div class="container">
    <navbar :showModal="showModal"/>
    <div>
      <my-modal v-model:show="modalVisible">
        <infomation-form @addComment="createInformation" />
      </my-modal>
      <div class="select text-center">
        <my-select v-model="selectedSort" :options="selectOptions"/>
      </div>
      <information-list :comments="filteredComments" @remove = "removeComment" v-if="!isLoading"/>
      <div class="spinner-grow text-primary col-md-3 offset-md-6" role="status" v-else>
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import InfomationForm from './components/InfomationForm.vue';
import InformationList from './components/InformationList.vue';
import Navbar from './components/Navbar.vue';
import axios from 'axios';
import MySelect from './components/UI/MySelect.vue';
export default {
  components: { InformationList, InfomationForm, Navbar, MySelect },
  data() {
    return {
      comments:[],
      modalVisible: false,
      isLoading: false,   
      selectedSort: "",
      selectOptions: [
        {value: 'name', name: 'Filter by name'},
        {value: 'email', name: 'Filter by email'},
      ]   
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
  computed:{
    filteredComments(){
      return [...this.comments].sort( (a,b) => {
        if (this.selectedSort === 'name'){
          return a.name.localeCompare(b.name);
        }
        else if (this.selectedSort === 'email'){
          return a.email.localeCompare(b.email);
        }
      });
    }
  }
}
</script>

<style>
  .select{
    margin-bottom: 75px;
  }
</style>