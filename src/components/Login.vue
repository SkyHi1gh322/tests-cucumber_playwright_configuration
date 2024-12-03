<script setup lang="ts">
import {useRouter} from "vue-router";
const router = useRouter();
const onLogIn = () => {
  router.push('/protected');
}

</script>

<template>
  <div id="login-page">
    <div class="login-page_content">
      <input id="login" placeholder="Type login"/>
      <input id="password" placeholder="Type password"/>
      <button @click="onLogIn" id="loginButton">Log in</button>
    </div>
  </div>
</template>

<style scoped>
  #login-page{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 99vh;

  }

  .login-page_content{
    grid-row-gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  input{
    border-radius: 6px;
    color: green;
    padding: 8px;
    box-sizing: border-box;
  }

  button{
    border-radius: 6px;
    background: green;
    color: white;
    border: none;
    padding: 8px;
    box-sizing: border-box;
    cursor: pointer;
  }
</style>
