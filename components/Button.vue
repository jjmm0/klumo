<template>
  <div class="tw-text-center tw-w-12 tw-my-2">
    <div class="icon">
      <slot></slot>
    </div>
    <div class="iconText">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props:{
    text:{
      default: ""
    },
  }
}
</script>

<style scoped>
.icon{
  width: 1.5rem;
  height: 1.5rem;
  margin: auto;

}
.iconText{
  font-size: small;
}
</style>