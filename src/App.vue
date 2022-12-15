<script setup>

</script>

<template>
    <div>
      <router-view  v-slot="{ Component }">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </div>
</template>

<style scoped>
</style>
