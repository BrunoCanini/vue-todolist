const { createApp } = Vue

createApp({
    data() {
      return {
        newTask : "",
        taskList : [
            { 
                text : "lavare la macchina", 
                done: false 
            },
            { 
                text :"tagliare l erba", 
                done: false },
            { 
                text :"montare mobile",
                done: false 
            }
        ]
      }
    },
    methods: {
        addTask(){
            if( this.newTask.length >= 3){
                let newTask = {
                    text : this.newTask,
                    done : false
                }
                this.taskList.push(newTask);
                this.newTask = ""; 
            }
        },
        removeTask(i){
            this.taskList.splice(i, 1);
        },
        changeTask(i){
            this.taskList[i].done= !this.taskList[i].done;
        },
        styleDone(i){
            let result;

            if( this.taskList[i].done === true){
                result = "strikeout"
            }else{
                result = ""
            }

            return result;
        }
      },
    mounted() {

      }
  }).mount('#app')