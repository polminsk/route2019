<template>
    <div class="about">
        <!-- This is an about page -->
        <h1>About Создание страниц на Vue Router</h1>

        <b-container class="bv-example-row">
            <!-- <b-row>
              <b-col>1 of 2</b-col>
              <b-col>2 of 2</b-col>
            </b-row> -->


            <b-row>
                <b-col>1</b-col>
                <b-col>
                    2
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

        <b-row>
            <pre style="text-align: left">
              Ctrl Alt L How to auto format code in WebStorm?
              Ctrl Shift стрелка вверх или вниз - перенос строки кода
            </pre>

        </b-row>
        <b-row>
            <b-col>
            <div>
                <hr color="green" width="300">
                <pre>


https://libraries.io/npm/jquery/1.9.1
npm install jquery@1.9.1

https://cli.vuejs.org/
npm install -g @vue/cli

https://github.com/GitHubTochkaDev/vuejs-tutorials/tree/vue-router



 run `npm audit fix` to fix them, or `npm audit` for details
npm audit fix --force

npm fund

WebStorm: Cannot obtain ticket from
https://fls.jetbrains-agent.com
 due to connectivity problem: Remote host terminated the handshake

Кликните по нужной папке (или по корневой папке проекта)
И нажмите Ctrl + Shift + F -- чтобы открыть окно поиска

found 1 high severity vulnerability
 run `npm audit fix` to fix them, or `npm audit` for details


npm init vue-project

https://cli.vuejs.org/ru/guide/installation.html
vue create hello-world
 cd my-project
npm install
npm install jquery@1.9.1
npm install vue-router
npm install bootstrap-vue
npm run serve
vue upgrade


 To create a production build, run npm run build.

===========================================================
git push --set-upstream router2019 master
git config --global --unset-all gui.recentrepo
git config --global user.email "minsk@mail.ru"
git config --global user.name "minsk"


git fetch и git pull — забираем изменения из центрального репозитория
Для синхронизации текущей ветки с репозиторием используются команды git fetch и git pull.

git fetch — забрать изменения удаленной ветки из репозитория по умолчания, основной ветки; той, которая была использована при клонировании репозитория. Изменения обновят удаленную ветку (remote tracking branch), после чего надо будет провести слияние с локальной ветку командой git merge.

git fetch /home/username/project — забрать изменения из определенного репозитория.


Возможно также использовать синонимы для адресов, создаваемые командой git remote:

Сайты
https://techblog.sdstudio.top/edpresso/the-fatal-refusing-to-merge-unrelated-histories-git-error
https://www.educative.io/edpresso/the-fatal-refusing-to-merge-unrelated-histories-git-error

git pull route2019 master --allow-unrelated-histories      синхронизировать commit
git merge route2019 master --allow-unrelated-histories

git pull https://github.com/minsk/route2019.git


git config --list
git clone https://github.com/GitHubTochkaDev/vuejs-tutorials.git
git clone https://github.com/minsk/route2019.git
git status
git add .
git commit -am "my2020"

git remote add 'name' URL      route2019 https://github.com/minsk/route2019.git
git push 'name'
git push --set-upstream route2019 master               передать на сервер
git pull https://github.com/minsk/route2019.git     скачать с сервера

git push --set-upstream route2019 master
                </pre>
            </div>
            </b-col>
        </b-row>


    </div>
</template>