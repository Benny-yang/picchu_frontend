class ConfigSetting {
  static isLocalHost() {
    return /(192.168|localhost)/.test(window.location.href)
  }
}

const apiUrl = ConfigSetting.isLocalHost() ? '/' : 'picchu/v1/' /*** 最後有斜線喔 **/

const apiFolder = {
  posts: { //貼文相關
    postWall: 'posts', //貼文牆???只需要頁碼跟sortBy...吧?!
    // 很怪，要sort，應該也是給login的user啊 @A@
    postDetial: ['post', 'detail'],//單一貼文
    postComments: ['post', 'comments'], //單一貼文's 留言
    postLikers: ['post', 'likers'], //單一貼文's 按讚的人
  },
}

//時間： long polling?? websocket
//lazyload??


var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');


var _this
const Vm = Vue.createApp({
  data(){
    return {
      loadingFinished: false,
      headListShow: false,
      noticeListShow: false,
      atWaiting: false,
      //*****************/
      user: {
        name: '',
        id: '',
      },
      seachListShow: false,
      searchValue: null,
      // fblog
      fbLogShow: false,
      is_login: false,
    }
  },
  beforeMount() {},
  mounted() {
    this.loadingFinished = true
  },
  methods: {
    //* 共用 - 登入/登出 ******************************/
    fbLogShowFn(TF){ //FB登入 popup
      this.fbLogShow = TF
    },
    fbLogIn(){ //FB登入
      if(ConfigSetting.isLocalHost){
        console.log('is_login')
        this.is_login=true
        this.fbLogShow=false
        return false
      }
    },
    logOut(){ //登出
      if(ConfigSetting.isLocalHost){
        console.log('is_logout')
        this.is_login=false
        $('.ctrlList').stop(true).fadeOut(150)
        window.location.reload()
        return false
      }
    },

    //* API相關 ******************************/
    fn_ajax({url, type, data}){ //ajax主程式
      this.atWaiting=true

      // demo假資料
      if(ConfigSetting.isLocalHost()){
        return false
      }

      // 正式站
      return new Promise((resolve, reject) => {
        $.ajax({
          headers: {
            'Authorization': 'Bearer '+_this.user.accesstoken
          },
          url: apiUrl + url,
          type: type,
          contentType: 'application/x-www-form-urlencoded',
          data: data
        }).done((res)=>{
          resolve(['success',res])
        }).fail((res)=>{
          resolve(['fail',res])
        }).always(()=>{
          this.atWaiting=false
        })
      })
    },
    error_ajax(errorCode){

    },
    //* 共用 - UI/UX ******************************/
    noticeTabChange(e, DOM){
      this.noticeListShow = true
      $('.ctlTab a').removeClass('active')
      $(e.currentTarget).addClass('active')
      $('.ctTB').stop(true).hide()
      $(DOM).fadeIn(150)
      $(DOM).scrollTop(0)
      $('.showNotice').focus()
    },
    groupCancelAlert(){ //跳取消通知
      this.noticeListShow = false
      $('body').addClass('noScroll')
      $('.cancelAlertEvent').stop(true).fadeIn(250)
    },
    groupInviteAlert(){ //跳邀請入團通知
      this.noticeListShow = false
      $('body').addClass('noScroll')
      $('.inviteAlertEvent').stop(true).fadeIn(250)
    },
    close_eventPopUp(e){ //關 事件 popup
      $('body').removeClass('noScroll')
      $(e.currentTarget).parents('.popUp').stop(true).fadeOut(250)
      // $('.lrBox').removeClass('toRight')
    },

    //* 搜尋列 ******************************/
    setValue(e){
      var value = $(e.currentTarget).data('value')
      this.searchValue = value
      this.seachListShow = false
    },
    blur_seachList(){
      if(!!this.searchValue && this.searchValue.trim().length > 0){
        this.seachListShow = false
      }else{
        this.seachListShow = true
      }
    },
    
    
  },
  watch: {
    loadingFinished(e){
      if(e){
        $('.loading').delay(150).stop(true).fadeOut(350)
      }else{
        $('.loading').stop(true).fadeIn(250)
      }
    },
    atWaiting(e){
      if(e){
        $('.waiting').stop(true).fadeIn(150)
      }else{
        $('.waiting').stop(true).fadeOut(250)
      }
    },
    headListShow(e){
      if(e){
        $('.ctrlList.userC').stop(true).fadeIn(200)
      }else{
        $('.ctrlList.userC').stop(true).fadeOut(150)
      }
    },
    noticeListShow(e){
      if(e){
        $('.ctrlList.noticeC').stop(true).fadeIn(150)
        $('.ctTB').scrollTop(0)
      }else{
        $('.ctrlList.noticeC').stop(true).fadeOut(450)
      }
    },
    // searchValue(newValue, oldValue){
    //   this.results = vm.datas.filter(function (item, index, array) {
    //     return item.toLowerCase().indexOf(vm.searchValue.toLowerCase()) > -1;
    //   });
    //   this.isOpen = this.results.length > 0;
    // }
  },
  computed: {},
})
// var app = Vm.mount('#wrapper')