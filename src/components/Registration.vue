<template>
    <div>
        <form class="registration" @submit.prevent="reg">
            <h1>Username</h1>
            <label>Username:</label>
            <input required type="text" v-model="username" placeholder="username"/>
            <label>FirstName:</label>
            <input required type="text" v-model="firstName" placeholder="firstName"/>
            <label>LastName:</label>
            <input required type="text" v-model="lastName" placeholder="lastName"/>
            <label>Email:</label>
            <input required type="text" v-model="email" placeholder="email"/>
            <label>Password:</label>
            <input required type="text" v-model="password" placeholder="password"/>
            <br/>
            <button type="submit">Registration user</button>
        </form>
    </div>
</template>

<script>

    export default {
        name: "Registration",
        data: function(){
            return{
                username: 'every' ,
                firstName: 'hunter',
                lastName: 'wants',
                email: 'to',
                password: 'know'
            }
        },
        methods:{
            reg: function () {

            }
        }
    }
</script>

<style scoped>

</style>