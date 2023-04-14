<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
      <div class="ui fixed inverted menu">
        <div class="ui container">
            <div class="item">
              <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
            </div>
            <a class="item">
              <RouterLink to="/">Contacts</RouterLink>
            </a>
            <div class="right menu">
              <div class="ui item me-2">
                <RouterLink to="/login"><i class="inverted user icon"></i></RouterLink>
              </div>
            </div>
        </div>
      </div>
      <RouterView />

</template>

<style>

</style>
