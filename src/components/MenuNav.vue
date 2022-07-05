<template>
  <button
    :class="{ active: iconActive }"
  >
    {{ route.name }}
  </button>
</template>

<script>
import router from '@/router';

export default {
  name: 'MenuNav',
  props: {
    route: Object,
  },
  data() {
    return {
      iconActive: false,
    };
  },
  methods: {
    isIconActive() {
      if (router.currentRoute.value.name === this.route.name) {
        this.iconActive = true;
      }
    },
  },
  mounted() {
    this.isIconActive();
  },
};
</script>

<style scoped>

</style>
