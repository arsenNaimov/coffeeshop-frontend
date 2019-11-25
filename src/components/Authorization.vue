<template>
    <div>
        <form class="login" @submit.prevent="login">
            <h1>Sign in</h1>
            <label>Login:</label>
            <input required type="text" v-model="username" placeholder="insert login"/>
            <label>Password:</label>
            <input required type="text" v-model="password" placeholder="insert password"/>
            <br/>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>

    export default {
        name: "Authorization",
        data: function(){
            return{
                username: 'Vasya',
                password: 'Pupkin'
            }
        },
        methods: {
            login: function () {
            }
        }
    }

</script>

<style scoped>

</style>