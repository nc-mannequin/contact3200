import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";

const backendBaseApi = 'http://127.0.0.1:8081/'

export const useEditFormStore = defineStore('editForm', () => {
  const contact_data = ref({
    _id: "",
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    facebook: '',
    imageUrl: ''    
  })
  // const doubleCount = computed(() => count.value * 2)
  function setter(contact) {
    this.contact_data = contact
  }
  function sumbitChange(evt){
    const editDetail = { 
      firstname:evt.target.elements.firstname.value,
      lastname:evt.target.elements.lastname.value,
      email:evt.target.elements.email.value,
      mobile:evt.target.elements.mobile.value,
      facebook:evt.target.elements.facebook.value,
      imageUrl:evt.target.elements.imageurl.value
    }
    axios.post(backendBaseApi +'contacts/' + this.contact_data._id, editDetail)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  

  return { contact_data, setter, sumbitChange }
})
