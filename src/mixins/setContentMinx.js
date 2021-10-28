import _ from "lodash"

export default {
    created() {
        this.debounceResizeFn = _.debounce(this.setContentSize, 300);
    },
    mounted() {
        this.setContentSize();
        window.addEventListener('resize', this.debounceResizeFn)
    },
    destroyed() {
        window.removeEventListener('resize', this.debounceResizeFn)
    },
    methods: {
        setContentSize() {
            let bodyWidth = document.body.clientWidth
            let bodyHeight = document.body.clientHeight
            // const {content:refContent}=this.$refs;
            // if(refContent){
            this.$store.commit("setContent", {
                contentWidth: bodyWidth,
                contentHeight: bodyHeight,
            })
            // }
        }
    },
    watch: {
        $route() {
            this.setContentSize()
        }
    }

}