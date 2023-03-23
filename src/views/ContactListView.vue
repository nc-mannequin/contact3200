<script>
import axios from "axios";
import { useEditFormStore } from '@/stores/editForm'
export default{
    name:'ContactList',
    setup(){
        const edit_form = useEditFormStore()
        return {edit_form}
    },
    data(){
        return {
            contact_lists:[]
        }
    },
    methods:{
        queryContacts: function(){
            fetch('http://127.0.0.1:8081/contacts', {
                "method":"GET",
                "headers":{

                }
            })
            .then(async response =>{
                if(response.ok){
                    console.log(response)
                    const result = await response.json()
                    console.log(result)
                    return result
                    
                }
                else
                {
                    alert("Server returned " + response.status + " : " + response.statusText);
                }
            })
            .then(response => {
                this.contact_lists = response
                console.log(response)
                console.log(this.contact_lists)
            })
            .catch(err => {
                console.log(err)
            })
        },
        onAddContactClick: function(){
            window.location.assign('/new_contact')
        },
        onDeleteContactClick: function (contact) {
            console.log(contact._id)
            axios.delete('http://127.0.0.1:8081/contacts/' + contact._id)
                .then(function (response) {
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error)
                })

        },
        onEditContactClick: function(contact){
            this.edit_form.setter(contact)

        }

        
    },
    mounted(){
        this.queryContacts()
    },
}
</script>

<template>
    <section id="filter-bar" class="">
        <div class="ui container">
            <div class="ui left icon input filter">
                <input type="text" placeholder="Search users...">
                <i class="users icon"></i>
                <button class="ui button" @click="queryContacts">
                    Search
                </button>
                <button class="ui orange button" @click="onAddContactClick">+ Add</button>
                
            </div>
        </div>
    </section>

    <section id="filteredData" class="">
        <div class="ui four cards">
        <div class="card" v-for="contact in contact_lists" :key="contact.firstname">
            <div class="image">
                <img v-bind:src="contact.imageUrl">
            </div>
            <div class="content">
                <div class="header">{{contact.firstname}} {{ contact.lastname }}</div>
                <div class="description">
                    <p>Mobile: {{ contact.mobile }}</p>
                    <p>Email: {{ contact.email }} </p>
                    <p>Facebook: {{ contact.facebook }}</p>
                </div>
            </div>

            <div class="extra content">
                <RouterLink to="/edit_contact" class="ui blue compact icon button" @click="onEditContactClick(contact)">
                    <i class="edit icon"></i>
                </RouterLink>
                
                <button class="ui red compact icon button" @click="onDeleteContactClick(contact)">
                  <i class="erase icon"></i>
                </button>
            </div>

        </div>
        
    </div>

    </section>
</template>

<style scoped>
.filter{
    display: flex;
    align-items: stretch;
}
section{
    padding: 1rem;
    margin: 1rem;
    border: 1px gray solid;
    
}
.content{
    text-align: center;
}

</style>