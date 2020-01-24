<template>
  <div class="container">
    <div class='sidebar'>
      <div class="input-layout">
        <input-form />
      </div>
        <div class="todos-layout">
          <messages />
      </div>
    </div>
    <div class="left-container">


    </div>
    <div class="right-container">

    </div>
  </div>
</template>

<script>
import Messages from '~/components/Messages.vue'
import InputForm from '~/components/InputForm.vue'
import {db} from '~/plugins/firebase'
export default {

    components: {
      Messages,
      InputForm

    },
    data() {
      return {
        todos: []
      }
    },
    mounted () {
      db.collection('todos').get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.todos.push({id: doc.id, ...doc.data()})
          })
        })
    }
  }
</script>
<style scoped>
.container {
 height: 100%;
 width:100%;
 display: flex;
}
.left-container {
  width:40%;
}
.right-container {
  width:30%;
  border-left: 1px solid black;
}
.sidebar {
 width: 30%;
 background:rgb(206, 200, 200);
 height: 95vh;
 padding: 30px;
}

/* 以下を追加 */
.todos-layout {
 overflow: scroll;
 height: 90%;
}

.input-layout {
 height: 10%;
 padding: 0px 5px ;

}

</style>
