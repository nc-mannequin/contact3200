<template>
<div class="row m-5 p-5">
    <div class="col-2"></div>
    <div class="col-8">
        <form class="ui form">
                    <div class="ui stacked segment">
                        <br>
                        <h1 class="ui header centered grid">
                            <p><b>Log In</b></p>
                        </h1>
                        <br><br>
                        <div class="field">
                            <div>
                                <h3 class="ui header text-start">
                                    <p><b>User Account</b></p>
                                </h3>
                                <input type="text" id="username" placeholder="User Account" v-model="username" required>
                            </div>
                        </div>
                        <br>
                        <div class="field">
                            <div>
                                <h3 class="ui header text-start">
                                    <p><b>Password</b></p>
                                </h3>
                                <input type="password" id="password" placeholder="Password" v-model="password" required>
                            </div>
                        </div>
                        <br>
                        <div class="ui fluid big teal submit button" @click="login">Login</div>
                    </div>
        </form>
    </div> 
    <div class="col-2"></div>
</div>
</template>
  
<script>
import axios from 'axios';
export default {
    name: 'LogIn',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    mounted() {
        if (this.$cookies.isKey("authToken")) {
            this.$cookies.remove("authToken");
            window.location.reload()
        }
    },
    methods: {
        login() {
            axios.post('http://127.0.0.1:5001/login', {
                username: this.username,
                password: this.password
            }, { withCredentials: true })
                .then(res => {
                    if (res.data.status === 'ACCEPT') {
                        // User is authenticated
                        const authToken = 'WEBPROGRAMMING-EGCO427-ASSIGNMENT1';
                        this.$cookies.set("authToken",authToken);
                        this.$router.push('/');
                    } else {
                        // User is not authenticated, display error message
                        alert('Invalid username or password');
                    }
                })
                .catch(error => {
                    console.log(error);
                    alert('An error occurred while logging in');
                })
        }
    }
}
</script>

<style>
</style>
  