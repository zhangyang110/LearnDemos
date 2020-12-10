<template>
    <component :is="layout"></component>
</template>
<script>
    import basicLayout from "./basicLayout";
    export default {
        name: "layout",
        components: {
            basicLayout,
        },
        computed: {
            layout() {
                let firstPath = this.$route.matched.find(f => f.path);//第一层 route 匹配到的
                if (firstPath) {
                    return firstPath.meta.layout || "basicLayout"
                }
                return "basicLayout"
            }
        }

    }
</script>
<style scoped lang="less">
    @import ~"@/common/style/global.less";

    .layout {
        .childLay {
            font-size: 30px;
            color: @primary-color
        }
    }
</style>