<script>
export default{
    data(){
        return {

        }
    },
    methods:{
        onSubmitlick: function(evt){
            
            // Simple POST request with a JSON body using fetch
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    firstname:evt.target.elements.firstname.value,
                    lastname:evt.target.elements.lastname.value,
                    email:evt.target.elements.email.value,
                    mobile:evt.target.elements.mobile.value,
                    facebook:evt.target.elements.facebook.value,
                    imageUrl:evt.target.elements.imageurl.value
                })
            };
            fetch("http://127.0.0.1:8081/contacts/", requestOptions)
            .then(response => response.json())
            .then(data => (this.postId = data.id));
            

        }
    }
}
</script>

<template>
    <div class="ui start aligned grid">
        <div class="column">
            <h2 class="ui teal image header">
                <img src="../assets/logo.svg" class="image ui small">
                <div class="content">
                    <span>Contact <span class="ui green label">Add</span></span>
                </div>
            </h2>

            <div class="ui divider"></div>

            <form class="ui form" @submit="onSubmitlick">

                <div class="field">
                    <label>First Name</label>
                    <input type="text" name="firstname" placeholder="First Name">
                </div>

                <div class="field">
                    <label>Last Name</label>
                    <input type="text" name="lastname" placeholder="Last Name">
                </div>

                <div class="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email">
                </div>

                <div class="field">
                    <label>Mobile</label>
                    <input type="text" name="mobile" placeholder="Mobile NO.">
                </div>

                <div class="field">
                    <label>Facebook</label>
                    <input type="text" name="facebook" placeholder="Facebook">
                </div>

                <div class="field">
                    <label>Image Url</label>
                    <input type="text" name="imageurl" placeholder="Image Url">
                </div>

                <button class="ui primary button" type="submit">Submit</button>
                <RouterLink to="/contact_list" class="ui button">Cancel</RouterLink>

            </form>
        </div>
    </div>
</template>

<style scoped>
form {
    width: 60vw;
}
</style>