const{createApp} = Vue
createApp({
    data() {
      return {
        emailList : [],
      }
    },
    mounted(){
        let i = 0;
        let arr=[];
        while(i<10)
        {
            
            i++;
            axios.get(' https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response =>{
                     this.emailList.push(response.data.response);
                }
            )
        }
    },
    }
  ).mount('#app')