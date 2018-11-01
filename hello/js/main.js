const app = new Vue({
  el: "#app",
  data: {
    newItem: "",
    todos: []
  },
  methods: {
    addItem: function(event) {
      if (this.newItem == "") return;
      const todo = {
        item: this.newItem,
        //taskの完了・未完了の真偽値を管理するためのis.Doneを追加
        isDone: false
      };

      this.todos.push(todo);
      this.newItem = "";
    },
    deleteItem: function(index) {
      //alert(index);
      this.todos.splice(index, 1);
    }
  }
});
