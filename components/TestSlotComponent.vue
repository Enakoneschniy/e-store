<template>
  <div class="container">
    test
    <hr>
    <slot name="header"/>
    <hr>
    <p>
      <slot/>
    </p>
    <hr>
    <slot name="footer"/>
    <hr>
  </div>
</template>

<script>
  export default {
    name: "TestSlotComponent"
  }
</script>

<style scoped>
hr {
  border-color: orangered;
}
</style>
