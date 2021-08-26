<template>
  <h1>Merchants</h1>
  <MerchantCard
    v-for="merchant in merchants"
    :key="merchant.id"
    :merchant="merchant"
  />
</template>

<script>
import { watchEffect } from "vue";
import MerchantCard from "@/components/MerchantCard.vue";
import MerchantService from "@/services/MerchantService.js";

export default {
  name: "MerchantList",
  components: {
    MerchantCard,
  },
  data() {
    return {
      merchants: null,
      totalMerchants: 0,
    };
  },
  created() {
    watchEffect(() => {
      this.merchant = null;
      MerchantService.getMerchants()
        .then((res) => {
          const { merchants, total } = res.data;
          this.merchants = merchants;
          this.totalMerchants = total;
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
};
</script>

<style>
</style>