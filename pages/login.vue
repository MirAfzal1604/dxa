<template>
  <div>
    <div class="loginBox">
      <div :class="{'active': (activeBox === 'welcome')}">
        <h1>Davlat xizmatlari markazi</h1>
        <h2>Hush kelibsiz!</h2>

        <a href="#" @click.prevent="login" class="btn btn-purple fullSized">ID.EGOV.UZ orqali kirish</a>

        <div class="separatedTitle">
          <span>Yoki ERI orqali kiring</span>
        </div>

        <a href="#" @click.prevent="edsSign" class="btn btn-warning fullSized">Imzolash</a>
      </div>

      <div :class="{'active': (activeBox === 'login')}">
        <h2>ID.EGOV.UZ orqali kirish</h2>

        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>

        <a href="#" @click.prevent="cancelAction" class="btn btn-danger">Bekor qilish</a>
      </div>

      <div :class="{'active': (activeBox === 'eds')}">
        <h2>Imzolash</h2>

        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>

        <a href="#" @click.prevent="cancelAction" class="btn btn-danger">Bekor qilish</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "#imports";

definePageMeta({
  layout: false,
});

type BoxType = 'welcome' | 'login' | 'eds' | number

const activeBox = ref<BoxType>('welcome');

function login() {
  activeBox.value = 'login'
}

function edsSign() {
  activeBox.value = 'eds'
}

function cancelAction() {
  activeBox.value = 'welcome'
}
</script>

<style scoped>
.loginBox {
  width: 400px;
  background: #fff;
  text-align: center;
  margin: 100px auto 16px;
  padding: 32px 24px;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.loginBox > div {
  opacity: 0;
  height: 0;
  transition: all .3s ease;
  transition-delay: 0.25s;
}

.loginBox > div.active {
  opacity: 1;
  height: 100%;
}

.btn-purple {
  background: #4825c2;
  color: #fff;
}

.btn-purple:focus {
  box-shadow: 0 0 0 .25rem rgba(72, 37, 194, 0.2);
}

.fullSized {
  width: 100%;
}

h1 {
  color: #ffa100;
  font-weight: bold;
  font-size: 16px;
  margin: 0 0 8px;
  text-align: center;
}

h2 {
  font-size: 22px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.6);
  margin: 0 0 16px;
  text-align: center;
}

.separatedTitle {
  padding: 30px 0;
  position: relative;
}

.separatedTitle:before {
  content: "";
  position: absolute;
  height: 1px;
  width: 100%;
  background: #adadaf;
  left: 0;
  top: 50%;
}

.separatedTitle span {
  background: #fff;
  position: relative;
  z-index: 3;
  padding: 0 10px;
}
</style>