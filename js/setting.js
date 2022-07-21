Vm.component('main_content', {
  template: '#setting-content',
  props: ['is_login'],
  emits: ['update'],
  data(){
    return {
      sidebarOpen: false
    }
  },
  mounted() {
    _this = this
  },
  methods: {
    accountLogOut(){
      _this.$emit('update', true);
    },
  },
  watch:{}
})

// console.log(app)