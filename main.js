const{createApp} = Vue
createApp({
    data() {
      return {
        emailList : [],
      }
    },
    mounted(){
        let arr=[];
        let i = 0;
        while(i<10)
        {
            i++;
            arr.push(axios.get(' https://flynn.boolean.careers/exercises/api/random/mail'))
        }
        Promise.all(arr).then(response=>{
            console.log(response);
            /*for(let i=0;i<response.length-1;i++)
                this.emailList.push(response[i].data.response);*/
            response.forEach(mail =>{
                this.emailList.push(mail.data.response)
            })
            console.log(this.emailList);
        })
    },
    }
  ).mount('#app')