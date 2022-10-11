<template>
    <div>
        <div class="w-100 mx-auto">
            <h1 class="text-warning">Add Infomation...</h1>
            <form @submit.prevent>
                <my-input v-model="comment.firstname"
                    class="form-control mb-3" 
                    type="text" 
                    placeholder="Enter Your Firstname..."
                />
                <my-input v-model="comment.surname"
                    class="form-control mb-3" 
                    type="text" 
                    placeholder="Enter Your Surname..."
                />
                <my-input v-model="comment.email"
                    class="form-control mb-3" 
                    type="email" 
                    placeholder="Enter Your Email Address..."
                />
                <my-input v-model="comment.phone"
                    class="form-control mb-3" 
                    type="number" 
                    placeholder="Enter Your Phone Number..."
                />
                <my-input v-model="comment.content"
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
                firstname: '',
                surname: '',
                email: '',
                phone: '',
                content: ''
            }
        }
    },
    methods:{
        createInformation(e){
            this.comment.id = Date.now();
            this.$emit('addComment', this.comment);
            this.comment = { 
                firstname: '',
                surname: '',
                email: '',
                phone: '',
                content: ''
            }
        }
    }
}
</script>

<style scoped>
    
</style>