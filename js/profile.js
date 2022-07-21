Vm.component('main_content', {
  template: '#profile-content',
  props: ['is_login'],
  data(){
    return {
      swiper_photo: null,
      isUser: false,
      inviteEvent: null,
      writingWord: false,
      photoWorks: ['ttt0', 'ttt1','ttt2','ttt3'],
      workDescribe: '',
    }
  },
  mounted() {
    _this = this
  },
  methods: {
    photoPopUpShow(){ //照片popup
      $('body').addClass('noScroll')
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
      $('body').removeClass('noScroll')
    },
    init_swiper(){
      _this.swiper_photo = new Swiper(".photoSlider", {
        loop: true,
        navigation: {
          nextEl: '.swp_R',
          prevEl: '.swp_L',
        },
      });
    },
    tabChange(e, tab){
      if($(e.currentTarget).hasClass('active')) return false
      $('.profile_tab').removeClass('active')
      $(e.currentTarget).addClass('active')
      $('.tabTA').stop(true).hide()
      $('.'+tab).stop(true).fadeIn(350)
      // switch (tab){
      //   case 'photos': 
      //   // $('.recordWalls').stop(true).hide()
      //   $('.photoWalls').stop(true).fadeIn(350)
      //     break;
      //   case 'records': 
      //   // $('.photoWalls').stop(true).hide()
      //   $('.recordWalls').stop(true).fadeIn(350)
      //     break;
      // }
      
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
    likeListShow(TF){
      $('.likeBox .scrolls').scrollTop(0)
      if(TF){
        $('.likeBox').addClass('show')
      }else{
        $('.likeBox').removeClass('show')
      }
    },
    popUpShow(DOM){ // 顯示 popup
      $('.'+DOM).stop(true).fadeIn(250)
      $('body').addClass('noScroll')
    },
    close_eventPopUp(e){ //關 事件 popup
      // console.log(e.currentTarget)
      $('body').removeClass('noScroll')
      $(e.currentTarget).parents('.popUp').stop(true).fadeOut(250)
    },
    clear_invite(e){// 清空 邀請狀態
      _this.inviteEvent = null
      _this.writingWord = false

      _this.close_eventPopUp(e);
    },
    clear_addWork(e){// 清空 新增作品狀態
      _this.photoWorks = []
      _this.writingWord = false
      _this.workDescribe = ''

      _this.close_eventPopUp(e);
    },
    removeWork(cid){//刪作品
      // _this.photoWorks
      _this.photoWorks.splice(cid, 1)
    },
  },
})

// console.log(app)