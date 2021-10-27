<template>
    <div class="basiclayout">
        <div class="main" ref="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        name: "basicLayout",
    }
</script>
<style scoped lang="less">
    .basiclayout {
        height: 100%;
        width: 100%;
    }

    .header {
        width: 100%;
        height: 50px;
        vertical-align: middle;
        background: darkgray;

        img {
            vertical-align: middle;
            width: 80px;
            height: 100%;
        }

        .iconOtherstyle {
            font-size: 25px;
            color: #f5326a;
            vertical-align: middle;
        }
    }

    .main {
        height: 100%;
        width: 100%;
    }


</style>