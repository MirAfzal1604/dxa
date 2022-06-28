<template>

  <div class="box">
    <p @click="isActive = !isActive"> {{icon}} </p>
    <div v-if="isEmptyContent">
      <div class="model-box" v-show="isActive">
       <p>{{icon}}</p>
        <p>{{isEmptyMessage}}</p>
      </div>
    </div>

    <div v-else>
      <div class="model-box" v-show="isActive">
        <div v-for="otherLanguage in otherLang">
          {{otherLanguage.otherLang}}
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {ref} from "#imports";
import {SymbolKind} from "vscode-languageserver-types";
import Array = SymbolKind.Array;

const props = defineProps({
  icon: {
    type: String
  },
  isEmptyMessage: {
    type: String
  },
  isEmptyContent: {
    type: Boolean
  },
  currentlyLang: {
    type: String
  },
  otherLang: {
    type: String
  }
})

const isActive = ref(false)

</script>

<style scoped>
.box > p{
  background: #fff;
  color: #000;
  padding: 5px 10px;
}

.model-box{
  background: #fff;
  color: #000;
}

</style>