<template>
  <navbar class="container" :showModal="showModal"/>
  <div>
    <my-modal v-model:show="modalVisible">
      <infomation-form @addComment="createInformation" />
    </my-modal>
    <information-list :comments="comments" @remove = "removeComment" />
  </div>
</template>

<script>
import InfomationForm from './components/InfomationForm.vue';
import InformationList from './components/InformationList.vue';
import Navbar from './components/Navbar.vue';
export default {
  components: { InformationList, InfomationForm, Navbar },
  data() {
    return {
      comments:[
        {id: 1, firstname: 'Jamshidbek', surname: 'Razzaqov', email: 'razzaqovjamshidbek1@gmail.com', phone: '+998 90 090 21 18', content: 'AnyThing'},
        {id: 2, firstname: 'Nodirbek', surname: 'Razzaqov', email: 'razzaqovnodirbek1@gmail.com', phone: '+998 91 425 78 69', content: 'AnyThing'},
        {id: 3, firstname: 'Humoyun', surname: 'Qosimov', email: 'humoyunqosimov547@gmail.com', phone: '+998 90 305 95 29', content: 'AnyThing'}
      ],
      modalVisible: false
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
    }
  },
}
</script>

<style>
  
</style>