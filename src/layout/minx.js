import _ from "lodash"

export default {
    created() {
        this.debounceResizeFn=_.debounce(this.setContentSize,300);
    },
    mounted(){
        this.setContentSize();
        window.addEventListener('resize',this.debounceResizeFn)
    },
    destroyed(){
        window.removeEventListener('resize',this.debounceResizeFn)
    },
    methods:{
        setContentSize(){
            const {content:refContent}=this.$refs;
            if(refContent){
                this.$store.commit("setContent",{
                    contentWidth:refContent.offsetWidth,
                    contentHeight:refContent.offsetHeight,
                })
            }
        }
    },
    watch:{
        $route(){
            this.setContentSize()
        }
    }

}