Vue.component('task-list', {
  template: `
    <div>
      <task v-for="task in tasks">{{ task.task }}</task>
    </div>`,

  data () {
    return {
      tasks: [
        { task: 'Go to the store', complate: true },
        { task: 'Go to the email', complate: false },
        { task: 'Go to the farm', complate: true },
        { task: 'Go to work', complate: false }
      ]
    };
  }
});

Vue.component('task', {
  template: '<li><slot></slot></li>'
});

new Vue({
  el: '#root'
});
