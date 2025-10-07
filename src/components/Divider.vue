<template>
  <div class="divider">
    <div class="line" id="l1"/>
    <div class="line" id="l2"/>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.divider {
  display: flex;
  width: 2px;
  height: 23px;
  align-items: flex-start;
}

.line{
  width: 1px;
  height: 22px;
}

#l1 {
  background-color: var(--window-content-base-grey-4);
}

#l2{
  background-color: white;
}
</style>