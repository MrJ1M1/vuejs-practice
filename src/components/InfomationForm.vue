<template>
    <div>
        <div class="w-75 mx-auto">
            <h1 class="text-warning">Add Infomation...</h1>
            <form @submit.prevent>
                <input v-model="comment.firstname"
                    class="form-control mb-3" 
                    type="text" 
                    placeholder="Enter Your Firstname..."
                />
                <input v-model="comment.surname"
                    class="form-control mb-3" 
                    type="text" 
                    placeholder="Enter Your Surname..."
                />
                <input v-model="comment.email"
                    class="form-control mb-3" 
                    type="email" 
                    placeholder="Enter Your Email Address..."
                />
                <input v-model="comment.phone"
                    class="form-control mb-3" 
                    type="number" 
                    placeholder="Enter Your Phone Number..."
                />
                <input v-model="comment.content"
                    class="form-control mb-3" 
                    type="text" 
                    placeholder="Enter Your Content..."
                />
                <div class="d-flex flex-row-reverse">
                    <button @click="createInformation" class="btn btn-primary">Add Information</button>
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