import {todo} from './data.js';

const {createApp} = Vue;

createApp({
    data(){
        return {
            todo: todo
        }
    },
    methods:{
        toggleDone(i){
            this.todo[i].done = !this.todo[i].done
        }
    },
    mounted(){
        console.log(this.todo);
    }

}).mount('#app');