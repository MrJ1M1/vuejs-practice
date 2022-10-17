<template>
    <div class="container">
      <div>
        <my-modal v-model:show="modalVisible">
          <infomation-form @addComment="createInformation" />
        </my-modal>
        <div class="d-flex justify-content-between">
          <my-input v-model="searchQuery" class="w-75 form-control" placeholder="Search..."/>
          <my-select v-model="selectedSort" :options="selectOptions"/>
          <my-button @click="showModal" class="btn btn-outline-primary text-decoration-none">Add</my-button>
        </div>
        <information-list :comments="sortedAndSearch" @remove = "removeComment" v-if="!isLoading"/>
        <div class="spinner-grow text-primary col-md-3 offset-md-6" role="status" v-else>
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div class="page_wrapper text-center">
        <div class="btn btn-primary mx-1 mb-1 mt-1"  :class="{'current_page'  : page === pageNum }" @click="changePage" v-for="pageNum in allPage" :key="pageNum.id">
          {{pageNum}}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import InfomationForm from '@/components/InfomationForm.vue';
  import InformationList from '@/components/InformationList.vue';
  import axios from 'axios';
  import MySelect from '@/components/UI/MySelect.vue';
  import MyInput from '@/components/UI/MyInput.vue';
  export default {
    components: { InformationList, InfomationForm, MySelect, MyInput },
    data() {
      return {
        comments:[],
        modalVisible: false,
        isLoading: false,   
        searchQuery: "",
        page: 1,
        limit: 50,
        allPage: 0,
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
      changePage(){
        this.page = this.page + 1;
        this.fetchComments();
      },
      async fetchComments(){
        try{
          this.isLoading = true;
          const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
            params:{
              _limit: this.limit,
              _page: this.page
            }
          });
          this.allPage = Math.ceil(response.headers['x-total-count'] / this.limit);
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
      },
      sortedAndSearch(){
        return this.filteredComments.filter(comment => {
          return  comment.name.toLowerCase().includes(this.searchQuery.toLocaleLowerCase()) || 
                  comment.email.toLocaleLowerCase().includes(this.searchQuery.toLocaleLowerCase());
        });
      }
    }
  }
  </script>
  
  <style>
    .select{
      margin-bottom: 75px;
    }
    .current_page{
      background-color: #fff;
      color: #000;
    }
  </style>