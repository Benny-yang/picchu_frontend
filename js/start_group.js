Vm.component("main_content",{components:{Datepicker:VueDatePicker},template:"#start-content",props:["is_login","fbLogShow"],emits:["update"],data:()=>({swiper_photo:null,selectedDate:null,date:null,time:null,tag_style:["ttt","zzz"]}),mounted(){_this=this},methods:{fbLog(){_this.$emit("update",!0)}}});
//# sourceMappingURL=start_group.js.map