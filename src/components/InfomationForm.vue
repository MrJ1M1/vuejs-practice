<template>
    <div>
        <div class="w-100 mx-auto">
            <h1 class="text-warning">Add Infomation...</h1>
            <form @submit.prevent>
                <my-input v-model="comment.name"
                    class="form-control mb-3" 
                    type="text" 
                    placeholder="Enter Your Name..."
                />
                <my-input v-model="comment.email"
                    class="form-control mb-3" 
                    type="email" 
                    placeholder="Enter Your Email Address..."
                />
                <my-input v-model="comment.body"
                    class="form-control mb-3" 
                    type="text" 
                    placeholder="Enter Your Content..."
                />
                <div class="d-flex flex-row-reverse">
                    <my-button @click="createInformation" class="btn btn-primary">Add Information</my-button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            comment:{
                name: '',
                email: '',
                body: ''
            }
        }
    },
    methods:{
        createInformation(e){
            this.comment.id = Date.now();
            this.$emit('addComment', this.comment);
            this.comment = { 
                name: '',
                email: '',
                body: ''
            }
        }
    }
}
</script>

<style scoped>
    
</style>