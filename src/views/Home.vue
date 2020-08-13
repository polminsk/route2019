<template>
  <div class="home">

    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-btn @click="showChoices=!showChoices">Hide / Show</b-btn>
        </b-col>
      </b-row>
    </b-container>


    <div v-if="showChoices">
      <b-spinner class="m-5" label="Busy"></b-spinner>
      <img alt="Vue logo" src="../assets/logo.png">
      <b-spinner class="m-5" label="Busy"></b-spinner>
      <!-- Welcome to Your Vue.js App -->
      <HelloWorld msg="Добро пожаловать в Vue.js App" />
    </div>


    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div>
            <b-card title="Умножение" img-src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"
              img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
              <b-button href="#" variant="primary">Go somewhere</b-button>
              <b-card-text>
                Умножение двузначных чисел - тренажер для обучения вычислениям.
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div>
            <b-card title="Клавиатурный тренажер" img-src="http://fh3809h6.bget.ru/img/theory/2.jpg" img-alt="Image"
              img-top tag="article" style="max-width: 20rem;" class="mb-2">
              <b-button href="https://www.typingstudy.com/ru" target="_blank" variant="primary">Go typingstudy
              </b-button>
              <b-card-text>
                Some quick example print text on keyboard.
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div>
            <b-card title="Игра солитер"
              img-src="http://fast.startgamer.ru/i/images/998/origin/game_998_5892403ccb82d.jpg" img-alt="Image" img-top
              tag="article" style="max-width: 20rem;" class="mb-2">
              <b-button href="https://www.solitr.com/" target="_blank" variant="primary">Go soliter</b-button>
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div>
            <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
              tag="article" style="max-width: 20rem;" class="mb-2">
              <b-button href="#" variant="primary">Go somewhere</b-button>
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>
            </b-card>
          </div>
        </b-col>

        <b-col>
          <div>
            <b-card title="Клавиатурный тренажер" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image"
              img-top tag="article" style="max-width: 20rem;" class="mb-2">
              <b-button href="https://www.typingstudy.com/ru" target="_blank" variant="primary">Go typingstudy
              </b-button>
              <b-card-text>
                Some quick example print text on keyboard.
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div>
            <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
              tag="article" style="max-width: 20rem;" class="mb-2">
              <b-button href="#" variant="primary">Go somewhere</b-button>
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'home',
    components: {
      HelloWorld
    },
    data() {
      return {
        showChoices: true,
        timeNow: "Дата " + new Date().toLocaleString(),
        timeStart: new Date().toLocaleString()
      }
    }
  }
</script>