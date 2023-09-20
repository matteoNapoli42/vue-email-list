const{createApp} = Vue
createApp({
    data() {
      return {
        emailList : [],
        endLoading : false,
        canLoad : false,
      }
    },
    mounted(){
        let arr=[];
        for(let i=0; i<10;i++)
            axios.get(" https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response=>{
                console.log(response.data.response);
                this.emailList.push(response.data.response);
                this.canLoad=true;
        })
    }
}).mount('#app')