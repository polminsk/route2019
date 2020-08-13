<template>
  <div class="about">
    <!-- This is an about page -->
    <h1>Создание страниц на Vue Router</h1>

    <b-container class="bv-example-row">
      <!-- <b-row>
        <b-col>1 of 2</b-col>
        <b-col>2 of 2</b-col>
      </b-row> -->

      <b-row>
        <b-col>1</b-col>
        <b-col>
          <pre style="text-align: left">
      import Vue from 'vue'
      import App from './App.vue'
      import router from './router'

      import BootstrapVue from 'bootstrap-vue'
      import 'bootstrap/dist/css/bootstrap.css'
      import 'bootstrap-vue/dist/bootstrap-vue.css'
      Vue.use(BootstrapVue)


      Vue.config.productionTip = false

      new Vue({
        router,
        render: h => h(App)
      }).$mount('#app')
    </pre>
        </b-col>
        <b-col>3</b-col>
      </b-row>
    </b-container>

    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <pre>
            Get started with BootstrapVue, based on the world's most popular framework - Bootstrap V4, for building responsive, mobile-first sites using Vue.js.

            Vue.js v2.6 is required, v2.6.10 is recommended
            Bootstrap v4.3 is required, v4.3.1 is recommended
            PortalVue v2.1 is required, v2.1.4 is recommended
            jQuery is not required
          </pre>
        </b-col>
      </b-row>
    </b-container>



  </div>
</template>