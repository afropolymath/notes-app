<template>
  <div id="App">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#App {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 400px;
  height: 80%;
  margin: auto auto;
  border: solid 1px #EFEFEF;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
}

.app-header {
  border-bottom: solid 1px #EFEFEF;
  padding: 10px 20px;
  font-weight: 700;
}

.app-header .back-button {
  display: inline-block;
  margin-right: 10px;
}

.app-header a {
  margin-right: 10px;
}

.app-header a:last-child {
  margin-right: 0;
}

.u-flex-row {
  display: flex;
  flex-direction: row;
}

.u-absolute-flex-column {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
}

.u-scroller {
  flex-grow: 1;
  overflow-y: scroll;
  margin: 0;
  padding: 0;
}

.u-elastic {
  flex-grow: 1;
  border-radius: 0 !important;
}
</style>
