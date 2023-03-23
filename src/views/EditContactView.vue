<script setup>
import { useEditFormStore } from '@/stores/editForm'
const edit_form = useEditFormStore()
const editForm_data = edit_form.contact_data



    

</script>

<template>
    <div class="ui start aligned grid">
        <div class="column">
            <h2 class="ui teal image header">
                <img src="../assets/logo.svg" class="image ui small">
                <div class="content">
                    <span>Contact <span class="ui green label">Edit</span></span>
                </div>
            </h2>

            <div class="ui divider"></div>

            <form class="ui form" @submit="edit_form.sumbitChange($event)">

                <div class="field">
                    <label>ID</label>
                    <input type="text" name="ID" placeholder="ID" :value=editForm_data._id :disabled="true">
                </div>

                <div class="field">
                    <label>First Name</label>
                    <input type="text" name="firstname" placeholder="First Name" :value=editForm_data.firstname>
                </div>

                <div class="field">
                    <label>Last Name</label>
                    <input type="text" name="lastname" placeholder="Last Name" :value=editForm_data.lastname>
                </div>

                <div class="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" :value=editForm_data.email>
                </div>

                <div class="field">
                    <label>Mobile</label>
                    <input type="text" name="mobile" placeholder="Mobile NO." :value=editForm_data.mobile>
                </div>

                <div class="field">
                    <label>Facebook</label>
                    <input type="text" name="facebook" placeholder="Facebook" :value=editForm_data.facebook>
                </div>

                <div class="field">
                    <label>Image Url</label>
                    <input type="text" name="imageurl" placeholder="Image Url" :value=editForm_data.imageUrl>
                </div>

                <button class="ui primary button" type="submit">Submit</button>
                <RouterLink to="/contact_list" class="ui button">Cancel</RouterLink>

            </form>
        </div>
    </div>
</template>

<style scoped>
form{
    width: 60vw;
}
</style>