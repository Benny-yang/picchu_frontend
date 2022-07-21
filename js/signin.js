Vm.component('main_content', {
  template: '#signin-content',
  data(){
    return {
      swiper_photo: null,
    }
  },
  mounted() {
    _this = this
  },
  methods: {
    photoPopUpShow(){ //照片popup
      $(_this.$refs.photoPup).stop(true).fadeIn(450)
      if(!_this.swiper_photo){
        _this.init_swiper()
      }else{
        _this.swiper_photo.virtual.update()
      }
      // console.log(_this.$refs)
    },
    close_photoPopUp(e){ //關照片popup
      // console.log(e.currentTarget)
      $(e.currentTarget).parents('.popUp').stop(true).fadeOut(250)
    },
    init_swiper(){
      _this.swiper_photo = new Swiper(".photoSlider", {
        loop: true,
        navigation: {
          nextEl: '.swp_R',
          prevEl: '.swp_L',
        },
      });
    }
  },
})

// console.log(app)