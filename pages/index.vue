<template>
  <div class="group">
  <all-layouts
      icon="bell"
      isEmptyMessage="Sizda hali notification kelmagan"
      :isEmptyContent="true"
      :otherLang="languagesToSelect"
  ></all-layouts>

  <all-layouts
      icon="o'zbekcha"
      :otherLang="languagesToSelect"
      :isEmptyContent="false"
  ></all-layouts>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive} from "#imports";

const languagesToSelect = reactive([
  {otherLang: 'O\'zbekcha'},
  {otherLang: 'Русский'}
])

</script>

<style scoped>
.group{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>