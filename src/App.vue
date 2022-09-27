<template>
  <div>
    <infomation-form @addComment="createInformation" />
    <information-list :comments="comments"/>
  </div>
</template>

<script>
import InfomationForm from './components/InfomationForm.vue';
import InformationList from './components/InformationList.vue';
export default {
  components: { InformationList, InfomationForm },
  data() {
    return {
      comments:[
        {id: 1, firstname: 'Jamshidbek', surname: 'Razzaqov', email: 'razzaqovjamshidbek1@gmail.com', phone: '+998 90 090 21 18', content: 'AnyThing'},
        {id: 2, firstname: 'Nodirbek', surname: 'Razzaqov', email: 'razzaqovnodirbek1@gmail.com', phone: '+998 91 425 78 69', content: 'AnyThing'},
        {id: 3, firstname: 'Humoyun', surname: 'Qosimov', email: 'humoyunqosimov547@gmail.com', phone: '+998 90 305 95 29', content: 'AnyThing'}
      ]
    }
  },
  methods: {
    createInformation(comment){
      this.comments.push(comment);
    }
  },
}
</script>

<style>
  
</style>