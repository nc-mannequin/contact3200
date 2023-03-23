<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'
const auth = getAuth();
const router = useRouter()
const email = ref('')
const password = ref('')
const onLogInClick = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    router.push('contact_list')

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  });
}
</script>
<template>
    <div class="ui middle aligned center aligned grid">
        <div class="column">
            
            <h2 class="ui teal image header">
                <img src="../assets/logo.svg" class="image">
                <div class="content">
                    Log-in to your account
                </div>
            </h2>

            <form class="ui large form">
                
                <div class="ui stacked segment">
                    <div class="field">
                        <div class="ui left icon input">
                            <input type="text" name="email" placeholder="E-mail address" v-model="email">
                            <i class="user icon"></i>
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui left icon input">
                            <input type="password" name="password" placeholder="Password" v-model="password">
                            <i class="lock icon"></i>
                        </div>
                    </div>
                    <div class="ui fluid large teal submit button" @click='onLogInClick'>Login</div>
                </div>

                <div class="ui error message"></div>
            </form>

        </div>
    </div>
</template>
<style scoped>
body {
    background-color: #DADADA;
}

body>.grid {
    height: 100%;
}

.image {
    margin-top: -100px;
}

.column {
    max-width: 450px;
}</style>