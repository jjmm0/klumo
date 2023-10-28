<template>
  <div class="tw-text-center tw-w-12 tw-my-2">
    <div class="icon">
      ?
    </div>
    <div class="iconText"><slot></slot></div>
  </div>
</template>

<style scoped>
.icon{
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid black;
  margin: auto;
  border-radius: 50%;
}
.iconText{
  font-size: small;
}
</style>