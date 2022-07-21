// Vm.component('main_content')
Vm.component('main_content', {
  components: {
    Datepicker: VueDatePicker,
  },
  template: '#start-content',
  props: ['is_login', 'fbLogShow'],
  emits: ['update'],
  data(){
    return {
      swiper_photo: null,
      selectedDate: null,
      date: null,
      time: null,
      tag_style: ['ttt', 'zzz'],
    }
  },
  mounted() {
    _this = this
    // var input = document.getElementById('actTime');
    // var picker = new Picker(input, {
    //   format: 'YYYY/MM/DD HH:mm',
    // });
  },
  methods: {
    fbLog(){
      _this.$emit('update', true); 
    },
  },
})

// console.log(app)