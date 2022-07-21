Vm.component('main_content', {
  template: '#event-content',
  props: ['is_login', 'fbLogShow'],
  emits: ['update'],
  setup(props, {$emit}){

  },
  data(){
    return {
      swiper_eventPhoto: null,
      swiper_eventPhoto_thumb: null,
      // fbLogShowCH: this.fbLogShow,
      // isLogIn: this.is_login,
    }
  },
  mounted() {
    _this = this
    _this.init_swiper()
  },
  methods: {
    init_swiper(){
      _this.swiper_eventPhoto_thumb = new Swiper(".eventPhotoSlider_thumb", {
        // loop: true,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: '.swp_R',
          prevEl: '.swp_L',
        },
      });
      _this.swiper_eventPhoto = new Swiper(".eventPhotoSlider", {
        // loop: true,
        thumbs: {
          swiper: _this.swiper_eventPhoto_thumb,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    },
    fbLog(){
      _this.$emit('update', true);
    },
    photoPopUpShow(DOM){
      $('.'+DOM).stop(true).fadeIn(250)
      $('body').addClass('noScroll')
    },
    close_eventPopUp(e){ //關 事件 popup
      // console.log(e.currentTarget)
      $('body').removeClass('noScroll')
      $(e.currentTarget).parents('.popUp').stop(true).fadeOut(250)
      $('.lrBox').removeClass('toRight')
    },
    ctrlShow(e, TF){
      $('.ctrlList').stop(true).fadeOut(150)
      // console.log($(e.currentTarget))
      if(TF){
        $(e.currentTarget).next('.ctrlList').stop(true).fadeIn(200)
      }else{
        $('.ctrlList').stop(true).fadeOut(150)
      }
    },
    // m版
    eventPopToRight(e){
      $(e.currentTarget).parents('.lrBox').addClass('toRight')
    },
    eventPopToleft(e){
      $(e.currentTarget).parents('.lrBox').removeClass('toRight')
    },
  },
})

// console.log(app)