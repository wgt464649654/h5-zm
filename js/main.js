Vue.component('back-icon', {
  template: '<button class="left-arrows" onclick="historyBack()"></button>'
})

Vue.component('page-title', {
  props: ['title'],
  template: '<div class="page-title">{{ title }}</div>'
})


function historyBack() {
  history.go(-1);
}
