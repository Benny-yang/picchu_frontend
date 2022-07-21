Vm.component('main_content', {
  template: '#phone-validate',
  props: ['is_login'],
  data(){
    return {
      keyingValidateCode: false,
      finishValidate: false,
      countEnd: false,
      /************************** */
      countingNumber: 180,
    }
  },
  mounted() {
    _this = this
  },
  methods: {
    ajax_getValidateCode(){//傳送驗證碼
      _this.keyingValidateCode = true
      _this.countEnd = false
    },
  },
})

// console.log(app)