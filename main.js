const{createApp} = Vue
createApp({
    data() {
      return {
        emailList : [],
      }
    },
    mounted(){
        let i = 0;
        while(i<10)
        {
            i++;
            axios.get(' https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response =>{
                    console.log(response.data.response);
                }
            )
        }
       
    },
    }
  ).mount('#app')