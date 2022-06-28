<template>
  <li class="menuItem" :class="(activeItem === item.token) ? 'active' : ''">
    <nuxt-link :to="item.url" @click="selectItem(item)">
      <font-awesome-icon :icon="item.icon"/>

      <div class="textContent">
        <span>{{ item.label }}</span>
        <font-awesome-icon icon="fa-solid fa-chevron-left" class="subChevron" v-if="item.subMenus"/>
      </div>
    </nuxt-link>

    <ul v-if="item.subMenus != null">
      <menu-item v-for="menu in item.subMenus" :key="menu.label" :item="menu"></menu-item>
    </ul>
  </li>
</template>

<script setup lang="ts">
import {MenuModel} from "~/models/MenuModel"
import {ref} from "#imports"

const {item} = defineProps({
  item: MenuModel,
})

const activeItem = ref<string>("")

function selectItem(item: MenuModel) {
  if (activeItem.value === item.token) {
    activeItem.value = ""
  } else {
    activeItem.value = item.token
  }
}
</script>

<style scoped>
.menuItem {
  list-style: none;
  font-size: 14px;
}

.menuItem a {
  display: flex;
  column-gap: 16px;
  align-items: center;
  padding: 12px 15px;
  border-left: 2px solid transparent;
  color: #fff;
  text-decoration: none;
}

.menuItem a:hover {
  background: #1e282c;
}

.menuItem.active > a {
  background: #1e282c;
  border-color: #3c8dbc;
}

.menuItem a div {
  display: flex;
  width: 100%;
  align-items: center;
  column-gap: 5px;
}

.menuItem a div span {
  flex: 1;
  word-wrap: anywhere;
}

.menuItem p {
  margin: 0;
}

.menuItem > ul {
  font-size: 14px;
  position: relative;
  opacity: 0;
  max-height: 0;
  overflow-y: hidden;
  transition: all 0.4s ease;
}

.menuItem.active > ul {
  opacity: 1;
  max-height: 1000px;
}

.menuItem .subChevron {
  transition: all .3s ease;
}

.menuItem.active > a div .subChevron {
  transform: rotate(-90deg);
}

.menuItem > ul:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2c3b41;
  opacity: 0.4;
  z-index: 1;
}

.menuItem > ul a {
  padding-left: 25px;
  z-index: 3;
  position: relative;
}

.menuItem .textContent {
  transition: opacity 0.4s ease;
}
</style>