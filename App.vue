<template>
  <div id="app">
    <meta charset="utf-8">
        <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <a class="navbar-brand" href="http://cell.by">Navbar</a>
      <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"></button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/link/">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/about/">About</a>
          </li>

          <!-- <b-dropdown text="Button external link">
            <b-dropdown-item href="http://webgrid.ru" target="_blank" >Webgrid.ru</b-dropdown-item>
            <b-dropdown-item href="http://mimo.by" target="_blank" >Mimo.by</b-dropdown-item>
          </b-dropdown> -->
<li>
          <b-dropdown id="dropdown-left" text="Drop down" variant="primary" >
            <b-dropdown-item href="http://webgrid.ru" target="_blank" >Webgrid.ru</b-dropdown-item>
            <b-dropdown-item href="http://mimo.by" target="_blank" >Mimo.by</b-dropdown-item>
            <hr>
              <b-dropdown-item href="https://bootstrap-vue.js.org/docs/"  target="_blank">Сайт bootstrap-vue</b-dropdown-item>
              <b-dropdown-item href="https://cli.vuejs.org/ru/guide/"  target="_blank">Сайт Vue CLI</b-dropdown-item>
              <b-dropdown-item href="https://ru.vuejs.org/v2/guide/"  target="_blank">Сайт Vue.js</b-dropdown-item>
              <b-dropdown-item href="https://vuex.vuejs.org/ru/"  target="_blank">Что такое Vuex</b-dropdown-item>
              <b-dropdown-item href="https://router.vuejs.org/ru/"  target="_blank">Vue Router — библиотека маршрутизации</b-dropdown-item>
              <b-dropdown-item href="https://ru.nuxtjs.org"  target="_blank">Nuxt.js - Не стоит изучать. В Vue 3.0 это будет из коробки</b-dropdown-item>
              <b-dropdown-item href="https://babeljs.io/docs/en/learn"  target="_blank">Babel Learn ES2015</b-dropdown-item>
            </b-dropdown>
</li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>


    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>