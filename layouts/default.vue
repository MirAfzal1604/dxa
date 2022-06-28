<template>
  <div class="appLayout">
    <div class="sideBar" :class="{'mini': isCompactMenu}">
      <div class="appBar">
        <nuxt-link class="full" to="/">DXM</nuxt-link>
      </div>

      <ul class="mainMenu">
        <menu-item v-for="menu in menus" :key="menu.label" :item="menu"></menu-item>
      </ul>
    </div>

    <div class="appSide">
      <div class="appBar">
        <a href="#" @click.prevent="isCompactMenu = !isCompactMenu">
          <font-awesome-icon icon="fa-solid fa-bars"></font-awesome-icon>
        </a>

        <a href="#">Yunusobod tumani davlat xizmatlari markazi</a>
      </div>

      <div class="area">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {MenuModel} from "~/models/MenuModel";
import {ref} from "#imports";

const isCompactMenu = ref(false)

const menus: MenuModel[] = [
  new MenuModel('fa-solid fa-house', "Bosh sahifa"),
  new MenuModel('fa-solid fa-list', "Ko'p foydalaniladigan xizmatlar"),
  new MenuModel('fa-solid fa-list', "Xizmatlar ro'yxati"),
  new MenuModel('fa-solid fa-pen-to-square', "Barcha arizalar"),
  new MenuModel('fa-solid fa-folder', "Mening qoralamalarim",),
  new MenuModel('fa-solid fa-list', 'Statistika', '#', [
    new MenuModel('fa-solid fa-chart-pie', "Statistika"),
    new MenuModel('fa-solid fa-chart-pie', "Oylik hisobot"),
    new MenuModel('fa-solid fa-chart-pie', "Operatorlarning unumdorlik statistikasi"),
    new MenuModel('fa-solid fa-chart-pie', "Muddati buzilgan arizalar batafsil", "#", [
      new MenuModel('fa-solid fa-chart-pie', "Statistika"),
      new MenuModel('fa-solid fa-chart-pie', "Oylik hisobot"),
      new MenuModel('fa-solid fa-chart-pie', "Operatorlarning unumdorlik statistikasi"),
      new MenuModel('fa-solid fa-chart-pie', "Muddati buzilgan arizalar batafsil"),
    ]),
  ]),
  new MenuModel('fa-solid fa-people-group', "Operatorlar ro'yxati"),
  new MenuModel('fa-solid fa-search', "To'lov holatini tekshirish"),
  new MenuModel('fa-solid fa-search', "Chegirma qo'llanganlik holatini tekshirish 50%"),
  new MenuModel('fa-solid fa-list', "Maxsus xabarlar"),
  new MenuModel('fa-solid fa-list', "Bolalar bog'chasi asboblari", '#',[
    new MenuModel('fa-solid fa-chart-pie', "Bolalar bog'chasidagi navbatlarni ko'ring"),
    new MenuModel('fa-solid fa-chart-pie', "Ilovadagi raqamni o'zgartirish")
  ]),
  new MenuModel('fa-solid fa-folder', "Arixalarni Excelga eksport qilish",),
  new MenuModel('fa-solid fa-list', "Qo'shimcha xizmatlar", '#', [
    new MenuModel('fa-solid fa-chart-pie', 'Umumiy'),
    new MenuModel('fa-solid fa-chart-pie', 'Operatorlar bo\'yicha')
  ]),
];
</script>

<style scoped>
.appSide {
  flex-direction: column;
}
</style>