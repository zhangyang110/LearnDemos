<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'App',
    }
</script>
<style lang="less">
    @import ~"@/common/style/global.less";
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: @primary-color;
        height: 100%;
    }
</style>
