<script setup>
import { RouterLink } from 'vue-router'

</script>
<template>
    <div class="ui fixed inverted menu">
    <div class="ui container">
      <a href="/" class="header item">
        <img class="logo" src="../assets/logo.svg">
        Contacts List
      </a>
      <RouterLink to="/login" class="item float right"><i class="inverted large user icon"></i></RouterLink>
      
    </div>
  </div>
</template>