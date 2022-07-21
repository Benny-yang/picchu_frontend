Vm.component('main_content', {
  template: '#index-content',
  props: ['is_login', 'user'],
  emits: {
    ajax_fn: ({
      url,
      type,
      data
    }) => {
      if (url && type && data) {
        return true
      } else {
        console.warn('參數不正確')
        return false
      }
    },
    ajax_error: ({
      errorCode
    }) => {
      if (url && type && data) {
        return true
      } else {
        console.warn('參數不正確')
        return false
      }
    },
  },
  setup(props, {
    $emit
  }) {},
  data() {
    return {
      posts: {},
      swiper_photo: null,
    }
  },
  created() {},
  mounted() {
    _this = this
    _this.ajax_getPost('url', 'type')
  },
  methods: {
    //* API相關 ******************************/
    ajax_getPost(url, type) { //取得作品牆
      this.atWaiting = true
      var data = {} //蛤?!

      if (ConfigSetting.isLocalHost()) {
        _this.posts = {
          "total": 0,
          "posts": [
              {
              "uid": "string",
              "postId": "string",
              "description": "string",
              "photoUrls": [
                "string"
              ],
              "tags": [
                "string"
              ],
              "hotPoints": 0,
              "partners": [{
                "uid": "string",
                "customId": "string",
                "role": "string"
              }],
              "isLiked": true,
              "updatedTime": 0
            }
          ]
        }

        this.atWaiting = false
        return false
      }

      axios({
        method: type,
        url: url,
        data: data
      });
    },
    //* other ******************************/
    photoPopUpShow() { //照片popup
      $('body').addClass('noScroll')
      $(_this.$refs.photoPup).stop(true).fadeIn(450)
      if (!_this.swiper_photo) {
        _this.init_swiper()
      } else {
        _this.swiper_photo.virtual.update()
      }
      // console.log(_this.$refs)
    },
    close_photoPopUp(e) { //關照片popup
      // console.log(e.currentTarget)
      $(e.currentTarget).parents('.popUp').stop(true).fadeOut(250)
      $('body').removeClass('noScroll')
    },
    init_swiper() {
      _this.swiper_photo = new Swiper(".photoSlider", {
        loop: true,
        navigation: {
          nextEl: '.swp_R',
          prevEl: '.swp_L',
        },
      });
    },
    tabChange(e, tab) {
      if ($(e.currentTarget).hasClass('active')) return false
      $('.profile_tab').removeClass('active')
      $(e.currentTarget).addClass('active')
      $('.tabTA').stop(true).hide()
      $('.' + tab).stop(true).fadeIn(350)
    },
    ctrlShow(e, TF) {
      $('.ctrlList').stop(true).fadeOut(150)
      // console.log($(e.currentTarget))
      if (TF) {
        $(e.currentTarget).next('.ctrlList').stop(true).fadeIn(200)
      } else {
        $('.ctrlList').stop(true).fadeOut(150)
      }
    },
    likeListShow(TF) {
      $('.likeBox .scrolls').scrollTop(0)
      if (TF) {
        $('.likeBox').addClass('show')
      } else {
        $('.likeBox').removeClass('show')
      }
    },
  },
})

// console.log(app)