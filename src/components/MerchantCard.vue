<template>
  <div class="merchant-card">
    <span>{{ merchant.name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    merchant: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.merchant-card {
  border: 1px solid #393939;
  margin-bottom: 15px;
  padding: 10px;
  width: 200px;
}
</style>