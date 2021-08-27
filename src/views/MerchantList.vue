<template>
  <h1>Merchants</h1>
  <div class="merchants">
    <div>
      <input
        class="search"
        type="text"
        placeholder="Search..."
        v-model="search"
      />
    </div>
    <div class="pagination" v-if="merchants.length > 0">
      <router-link
        :to="{ name: 'MerchantList', query: { page: page - 1 } }"
        rel="prev"
        id="page-prev"
        tag="button"
        class="button"
      >
        Previous
      </router-link>
      <div>{{ page }}/{{ Math.ceil(totalMerchants / 10) }}</div>
      <router-link
        :to="{ name: 'MerchantList', query: { page: page + 1 } }"
        rel="next"
        id="page-next"
        tag="button"
        class="button"
      >
        Next
      </router-link>
    </div>
    <div v-else>No results for your search</div>

    <MerchantCard
      v-for="merchant in merchants"
      :key="merchant.id"
      :merchant="merchant"
    />
  </div>
</template>

<script>
import { watchEffect } from "vue";
import MerchantCard from "@/components/MerchantCard.vue";
import MerchantService from "@/services/MerchantService.js";

export default {
  name: "MerchantList",
  props: ["page"],
  components: {
    MerchantCard,
  },
  data() {
    return {
      merchants: null,
      totalMerchants: 0,
      loadingPage: false,
      search: "",
    };
  },
  created() {
    watchEffect(() => {
      // TODO check for null merchants
      this.merchant = null;
      this.loadingPage = true;
      MerchantService.getMerchants(this.page, this.search)
        .then((res) => {
          const { merchants, total } = res.data;
          this.merchants = merchants;
          this.totalMerchants = total;
          this.loadingPage = false;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalMerchants / 2);
      return this.page < totalPages;
    },
  },
  watch: {
    search: function () {
      //TODO debounce search
      this.$router.push({
        name: "MerchantList",
      });
    },
  },
};
</script>

<style scoped>
.merchants {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
}

.search {
  border-radius: 24px;
  min-width: 365px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
  outline: none;
  cursor: pointer;
  height: 48px;
  border: 0 solid gray;
  padding: 0 15px;
  margin-bottom: 15px;
  font-family: inherit;
  font-weight: bold;
}
.pagination {
  display: flex;
  width: 385px;
  margin-bottom: 15px;
  align-items: center;
  justify-content: space-between;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  width: 395px;
  display: flex;
  justify-content: center;
}
</style>
