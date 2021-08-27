<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: #f7f7f7;
}

.button {
  background: linear-gradient(90deg, #635bff, #3f35f2);
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.2px;
  padding: 8px 16px;
  color: white;
  cursor: pointer;
  text-align: center;
  max-width: 100px;
  border: none;
  border-radius: 28px;
  font-family: inherit;
  font-weight: 500;
}
.button:hover {
  background: #1ed760;
}
</style>
