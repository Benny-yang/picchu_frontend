class ConfigSetting{static isLocalHost(){return/(192.168|localhost)/.test(window.location.href)}}const apiUrl=ConfigSetting.isLocalHost()?"/":"picchu/v1/",apiFolder={posts:{postWall:"posts",postDetial:["post","detail"],postComments:["post","comments"],postLikers:["post","likers"]}};var _this,$body=window.opera?"CSS1Compat"==document.compatMode?$("html"):$("body"):$("html,body");const Vm=Vue.createApp({data:()=>({loadingFinished:!1,headListShow:!1,noticeListShow:!1,atWaiting:!1,user:{name:"",id:""},seachListShow:!1,searchValue:null,fbLogShow:!1,is_login:!1}),beforeMount(){},mounted(){this.loadingFinished=!0},methods:{fbLogShowFn(t){this.fbLogShow=t},fbLogIn(){if(ConfigSetting.isLocalHost)return console.log("is_login"),this.is_login=!0,this.fbLogShow=!1,!1},logOut(){if(ConfigSetting.isLocalHost)return console.log("is_logout"),this.is_login=!1,$(".ctrlList").stop(!0).fadeOut(150),window.location.reload(),!1},fn_ajax({url:t,type:o,data:s}){return this.atWaiting=!0,!ConfigSetting.isLocalHost()&&new Promise(((e,i)=>{$.ajax({headers:{Authorization:"Bearer "+_this.user.accesstoken},url:apiUrl+t,type:o,contentType:"application/x-www-form-urlencoded",data:s}).done((t=>{e(["success",t])})).fail((t=>{e(["fail",t])})).always((()=>{this.atWaiting=!1}))}))},error_ajax(t){},noticeTabChange(t,o){this.noticeListShow=!0,$(".ctlTab a").removeClass("active"),$(t.currentTarget).addClass("active"),$(".ctTB").stop(!0).hide(),$(o).fadeIn(150),$(o).scrollTop(0),$(".showNotice").focus()},groupCancelAlert(){this.noticeListShow=!1,$("body").addClass("noScroll"),$(".cancelAlertEvent").stop(!0).fadeIn(250)},groupInviteAlert(){this.noticeListShow=!1,$("body").addClass("noScroll"),$(".inviteAlertEvent").stop(!0).fadeIn(250)},close_eventPopUp(t){$("body").removeClass("noScroll"),$(t.currentTarget).parents(".popUp").stop(!0).fadeOut(250)},setValue(t){var o=$(t.currentTarget).data("value");this.searchValue=o,this.seachListShow=!1},blur_seachList(){this.searchValue&&this.searchValue.trim().length>0?this.seachListShow=!1:this.seachListShow=!0}},watch:{loadingFinished(t){t?$(".loading").delay(150).stop(!0).fadeOut(350):$(".loading").stop(!0).fadeIn(250)},atWaiting(t){t?$(".waiting").stop(!0).fadeIn(150):$(".waiting").stop(!0).fadeOut(250)},headListShow(t){t?$(".ctrlList.userC").stop(!0).fadeIn(200):$(".ctrlList.userC").stop(!0).fadeOut(150)},noticeListShow(t){t?($(".ctrlList.noticeC").stop(!0).fadeIn(150),$(".ctTB").scrollTop(0)):$(".ctrlList.noticeC").stop(!0).fadeOut(450)}},computed:{}});
//# sourceMappingURL=layout.js.map