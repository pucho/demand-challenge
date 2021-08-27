<template>
  <div class="merchant-card">
    <div class="logoWrapper">
      <img
        class="logo"
        v-if="merchant.logo"
        :src="merchant.logo"
        alt="merchant logo"
      />
    </div>

    <div class="content">
      <div>{{ merchant.name }}</div>
      <a :href="merchant.directUrl" rel="noopener noreferrer" target="_blank">{{
        merchant.displayUrl
      }}</a>
    </div>

    <button @click="setFavorite">
      {{ $store.state.favorites.includes(merchant.id) ? "No Fav" : "Fav" }}
    </button>
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
  methods: {
    setFavorite() {
      console.log(this.merchant.id);
      this.$store.commit("SET_FAVORITES", this.merchant.id);
    },
  },
};
</script>

<style scoped>
.merchant-card {
  background-color: white;
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
  border: 1px solid #ddd;
  margin-bottom: 15px;
  padding: 10px;
  min-width: 400px;
  max-width: 600px;
  height: 120px;
  display: flex;
  border-radius: 5px;
}
.logoWrapper {
  display: flex;
}
.content {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
}
.logo {
  object-fit: contain;
  width: 90px;
}
</style>