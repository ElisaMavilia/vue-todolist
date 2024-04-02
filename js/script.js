import {todo} from './data.js';

const {createApp} = Vue;

createApp({
    data(){
        return {
            todo: todo
        }
    },
    methods:{
        toggleDone(id){
            const item = this.todo.find((el)=>{
            return el.id === id;
            })
            console.log(item);
            if(item){
                item.done = !item.done;
            }
        } 
    },
    mounted(){
        console.log(this.todo);
    }

}).mount('#app');