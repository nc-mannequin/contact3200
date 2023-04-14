<template>
<div class="row mt-3">
</div>
<div class="row mt-5">
        <div class="ui left icon input search">
            <input class="ms-2" type="text" v-model="searchWords" placeholder="Search users...">
            <i class="users icon ms-4"></i>
            <button class="ui button ms-2" @click="queryContacts">Search</button>
            <RouterLink to="/newcontact"><button class="ui orange button m-1">+ Add</button></RouterLink>
        </div>
</div>
<div class="row mt-3">
</div>
<div class="row mt-5 ms-3 text-center">
    <div class="ui four cards">
        <div class="card" v-for="contact in contact_lists_filter" :key="contact._id">
            <div class="image">
                <img v-bind:src="contact.imageUrl">
            </div>
            <div class="content">
                <div class="header">{{contact.firstname}} {{ contact.lastname }}</div>
                <div class="description">
                    <span class="ui small grey text"><p>Mobile: {{ contact.mobile }}</p></span>
                    <span class="ui small grey text"><p>Email: {{ contact.email }} </p></span>
                    <span class="ui small grey text"><p>Facebook: {{ contact.facebook }}</p></span>
                </div>
            </div>

            <div class="extra content">
                <RouterLink :to="{ name: 'editcontact', params: { id: contact._id }}" class="ui blue compact icon button">
                    <i class="edit icon"></i>
                </RouterLink>
                
                <button class="ui red compact icon button" @click="onDeleteContactClick(contact)">
                  <i class="erase icon"></i>
                </button>
            </div>

        </div>   
</div>
</div>
</template>
  
<script>
import axios from 'axios';
export default {
    name: 'ContactList',
    data() {
        return {
            contact_lists:[],
            contact_lists_filter:[],
            searchWords: '',
        }
    },
    mounted(){
        axios.get('http://127.0.0.1:5001/contacts', {}, { withCredentials: true })
                .then(res => {
                    this.contact_lists = res.data
                    this.contact_lists_filter = this.contact_lists
                })
                .catch(error => {
                    console.log(error);
                })
    },
    methods: {
        queryContacts() {
            this.contact_lists_filter = this.contact_lists.filter((contact) => {
                return (
                    contact.firstname.toLowerCase().indexOf(this.searchWords.toLowerCase()) !== -1 ||
                    contact.lastname.toLowerCase().indexOf(this.searchWords.toLowerCase()) !== -1
                );
            });
        },
        onDeleteContactClick(contact) {
            axios.delete('http://127.0.0.1:5001/contacts/' + contact._id, {}, { withCredentials: true })
                .then(res => {
                    window.location.reload()
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
}
</script>

<style>

</style>
  