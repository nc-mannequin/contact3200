<template>
    <div class="row mt-3">
      <div class="row m-5 p-5">
        <div class="ui start aligned grid">
          <div class="column">
            <h2 class="ui teal image header">
              <div class="content">
                <span class="ui large black text">Contact <span class="ui green label">Edit</span></span>
              </div>
            </h2>
  
            <div class="ui divider"></div>
  
            <form class="ui form" @submit.prevent="onSubmitClick">
  
              <div class="field required">
                <label>First Name</label>
                <div class="ui input">
                  <input type="text" name="firstname" v-model="firstname" placeholder="First Name" required>
                </div>
              </div>
  
              <div class="field required">
                <label>Last Name</label>
                <div class="ui input">
                  <input type="text" name="lastname" v-model="lastname" placeholder="Last Name" required>
                </div>
              </div>
  
              <div class="field required">
                <label>Mobile</label>
                <div class="ui input">
                  <input type="text" name="mobile" v-model="mobile" placeholder="Mobile NO." required>
                </div>
              </div>
  
              <div class="field">
                <label>Email</label>
                <input type="text" name="email" v-model="email" placeholder="Email">
              </div>
  
              <div class="field">
                <label>Facebook</label>
                <input type="text" name="facebook" v-model="facebook" placeholder="Facebook">
              </div>
  
              <div class="field">
                <label>Image Url</label>
                <input type="text" name="imageurl" v-model="imageUrl" placeholder="Image Url">
              </div>
  
              <button class="ui primary button" type="submit">Submit</button>
              <router-link to="/" class="ui button">Cancel</router-link>
  
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'EditContact',
    props: {
    id: {
      type: String,
      required: true
    }
    },
    data() {
      return {
        firstname: '',
        lastname: '',
        mobile: '',
        email: '',
        facebook: '',
        imageUrl: '',
      };
    },
    mounted() {
      $('.ui.form').form({
        fields: {
          firstname: 'empty',
          lastname: 'empty',
          mobile: 'empty',
        },
      });
      axios.get('http://127.0.0.1:5001/contacts/' + this.id, {}, { withCredentials: true })
                .then(res => {
                    console.log(res.data);
                    this.firstname = res.data.firstname
                    this.lastname = res.data.lastname
                    this.mobile = res.data.mobile
                    this.email = res.data.email
                    this.facebook = res.data.facebook
                    this.imageUrl = res.data.imageUrl
                })
                .catch(error => {
                    console.log(error);
                })
    },
    methods: {
      onSubmitClick() {
        const data = {
          firstname: this.firstname,
          lastname: this.lastname,
          mobile: this.mobile,
          email: this.email,
          facebook: this.facebook,
          imageUrl: this.imageUrl,
        };
        axios.post('http://127.0.0.1:5001/contacts/' + this.id, data, { withCredentials: true })
          .then(() => {
            this.$router.push('/');
          })
          .catch((error) => {
            console.error(error);
          });
      },
    },
  };
  </script>
  
  <style>
  </style>
  