<template>
  <div class="hello">
    <h1 id="Sleep" style="color:yellow">{{ msg }} {{timeStart}} </h1>
    <h1> {{timeNow}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted () {
        // Run the intervalFetchData function once to set the interval time for later refresh
        this.intervalFetchData();
    },
    methods: {
      intervalFetchData: function () {
            setInterval(() => {    
                this.timeNow=  "Дата " + new Date().toLocaleString()
                }, 1000);  }
    }
      ,
  data() {
    return {
      timeNow: "Дата " + new Date().toLocaleString(),
      timeStart: new Date().toLocaleString()
    }
  }
}
</script>