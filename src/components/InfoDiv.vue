<template>
  <div :style="{ 'background-color': color }">
    <font-awesome-icon
        class="icon"
        icon="fa-solid fa-circle-info"
      />
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'InfoDiv',
  props: {
    title: String,
    color: String,
  },
};
</script>

<style scoped>
div {
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  font-size: 1.2em;
  font-weight: 700;
  height: 48px;
  margin: 15px 0;
  border-radius: 5px;
}

svg {
  margin-left: 15px;
  margin-right: 20px;
}
</style>
