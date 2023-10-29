<template>
  <div class="box">
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
.box{
  text-align: center;
  width: 3rem;
  margin: 0.5rem ;
}
.icon{
  width: 1.5rem;
  height: 1.5rem;
  margin: auto;

}
.iconText{
  font-size: small;
}
</style>