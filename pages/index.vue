<template>
  <div class="main tw-w-full tw-h-full">
    <header id="header" class="">
      <div @click="handleSidebar()" class="mobileMenuButton">
        <Button  class="button">Mobile</Button>
      </div>
      <div class="logo">
        <KlumoLogo class="tw-my-4 tw-ml-4 tw-h-8"></KlumoLogo>
      </div>
      <div class="buttons ">
        <Button @click.native="handleSearchbar()" id="searchButton" class="button hide">Search</Button>
        <Button class="button">Wishlist</Button>
        <Button class="button">Account</Button>
        <Button class="button">Cart</Button>
      </div>
      <div id="searchbarContainer">
        <input id="searchbar">
      </div>
    </header>
    <div id="navBG"></div>
    <nav id="nav">
      <div  class="mobileonly tw-flex tw-align-middle tw-justify-between">
        <KlumoLogo class="tw-my-4 tw-ml-4 tw-h-8 tw-inline-block"></KlumoLogo>
        <div @click="handleSidebar()" class="tw-flex tw-items-center">
          <Button class="button"></Button> 
        </div>
      </div>
      <ul>
        <li class="navItem">Poster</li>
        <li class="navItem">Canvas</li>
        <li class="navItem">Digital Download</li>
        <li class="navItem">Gift Card</li>
      </ul>
    </nav>
    <main>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet risus feugiat in ante. Tellus mauris a diam maecenas sed enim ut sem. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Sed enim ut sem viverra aliquet eget sit amet tellus. In pellentesque massa placerat duis ultricies lacus. Cras pulvinar mattis nunc sed blandit. Lectus nulla at volutpat diam ut venenatis. Facilisis sed odio morbi quis commodo odio aenean. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Semper viverra nam libero justo laoreet sit amet. Sit amet massa vitae tortor. Placerat in egestas erat imperdiet. Cursus metus aliquam eleifend mi in nulla posuere. Convallis a cras semper auctor neque vitae. Egestas diam in arcu cursus euismod quis.
    </main>
  </div>
</template>

<script>

export default{
  data(){
    return{
      openSidebar: false,
      categories: ["artworks", "brands", "metal posters"]
    }
  },
  mounted(){
    document.getElementById("searchbar").placeholder = "Search for "
    this.write()
    window.onscroll = function (e) {  
      console.log(123)
      if(window.scrollY >64 && !document.getElementById("searchbar").classList.contains("hide")){
        document.getElementById("nav").classList.add("sticky")
        document.getElementById("navBG").classList.add("sticky")
        document.getElementById("header").classList.add("sticky")
        // document.getElementById("searchbar").classList.add("hide")
        document.getElementById("searchbarContainer").classList.add("hide")
        document.getElementById("searchButton").classList.remove("hide")
      }
      else if (!window.scrollY){
        document.getElementById("nav").classList.remove("sticky")
        document.getElementById("navBG").classList.remove("sticky")
        document.getElementById("header").classList.remove("sticky")
        // document.getElementById("searchbar").classList.remove("hide")
        document.getElementById("searchbarContainer").classList.remove("hide")
        document.getElementById("searchButton").classList.add("hide")
      }
    } 
    

  },
  methods:{
    handleSearchbar(){
      console.log(1)
      document.getElementById("searchbarContainer").classList.remove("hide")
      document.getElementById("searchbar").classList.remove("hide")
      document.getElementById("navBG").classList.remove("sticky")

    },
    handleSidebar(){
      this.openSidebar = !this.openSidebar
      if(this.openSidebar){
        document.getElementById("nav").classList.toggle("mobile")
      } else {
        document.getElementById("nav").classList.remove("mobile")
      }
      console.log(1)
    },
    async write(){
      const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
      for(let j = 0; j < this.categories.length; j++){
        //write
        for (let i = 0; i < this.categories[j].length; i++) {
          await sleep(100)
          document.getElementById("searchbar").placeholder += this.categories[j][i]
        }
        await sleep(1000)
        //delete
        for (let i = 0; i < this.categories[j].length; i++) {
          await sleep(100)
          document.getElementById("searchbar").placeholder = document.getElementById("searchbar").placeholder.slice(0, -1)
        }
        //restart
        if(j == this.categories.length -1){
          j = -1
        }
      }
    },
  }
}
</script>

<style scoped>
@import url("~/assets/styles/index.css");
</style>