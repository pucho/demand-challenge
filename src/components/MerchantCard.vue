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
    <div class="svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 20 20"
        data-v-10e36824=""
        v-bind:class="{ favorite: isFavorite }"
        @click="setFavorite"
      >
        <g fill="none">
          <path
            fill="currentColor"
            d="M10.064 16.201c.395 0 .715.281.715.627v2.545c0 .346-.32.627-.715.627-.394 0-.714-.28-.714-.627v-2.545c0-.346.32-.627.714-.627zm-.006-12.159l1.285 3.653 3.826.06-3.055 2.302 1.119 3.678-3.183-2.182-3.15 2.173 1.117-3.669L4.96 7.754l3.834-.059 1.264-3.653zm-7.52 7.165a.602.602 0 01.78.374.632.632 0 01-.362.804l-2.14.806a.59.59 0 01-.208.038.609.609 0 01-.571-.412.632.632 0 01.362-.803zm13.99.238a.602.602 0 01.78-.373l2.293.864a.633.633 0 01.362.803.609.609 0 01-.57.412.59.59 0 01-.21-.038l-2.292-.864a.632.632 0 01-.362-.804zM3.634 1.1a.594.594 0 01.775.072L6.46 3.287a.64.64 0 010 .887.596.596 0 01-.86 0L3.55 2.057a.64.64 0 010-.886zm12.099.14a.595.595 0 01.86 0 .64.64 0 010 .887l-1.986 2.048a.596.596 0 01-.86 0 .64.64 0 010-.887z"
          ></path>
          <path
            class="fill-gray-90 dark:fill-gray-90"
            fill="#222"
            d="M10.437.16c.253.19.481.54.684 1.048l.075.198.736 2.094h-1.324l-.58-1.651-.02-.047-1.785 5.16-5.425.084-.041.002 4.36 3.284-1.582 5.197 4.472-3.085 4.5 3.085-1.581-5.197 4.36-3.285-1.51-.024V5.772l1.519.025.194.008c.563.032.974.144 1.23.336.285.214.376.487.273.819-.093.299-.362.624-.806.974l-3.81 2.87 1.33 4.368.051.185c.144.542.166.963.067 1.262-.111.333-.34.499-.688.499-.314 0-.71-.154-1.19-.462l-.163-.108-3.773-2.587-3.75 2.587-.163.108c-.48.308-.88.462-1.201.462-.356 0-.59-.166-.7-.499-.1-.299-.072-.72.085-1.262l1.386-4.552-3.655-2.753-.166-.131c-.424-.345-.69-.666-.795-.961-.118-.332-.031-.605.261-.819.264-.192.678-.304 1.242-.336l.194-.008 4.58-.071 1.495-4.32.075-.198C9.101.699 9.33.35 9.583.16c.284-.213.57-.213.854 0z"
          ></path>
        </g>
      </svg>
    </div>
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
  computed: {
    isFavorite() {
      return this.$store.state.favorites.includes(this.merchant.id);
    },
  },
};
</script>

<style scoped>
.merchant-card {
  background-color: white;
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
  box-sizing: border-box;
  border: 1px solid #ddd;
  margin-bottom: 15px;
  padding: 10px 30px;
  width: 400px;
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
  flex: 1;
}
.logo {
  object-fit: contain;
  width: 90px;
}
.svg {
  align-self: center;
  flex: 1;
  cursor: pointer;
  text-align: right;
}
.favorite {
  stroke: #ffb400;
  color: white;
}
</style>