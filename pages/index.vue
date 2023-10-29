<template>
  <div class="main tw-w-full tw-h-full">
    <header id="header" class="">
      <div @click="handleSidebar()" class="mobileMenuButton">
        <Button text="" class="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/></svg></Button>
      </div>
      <div class="logo">
        <KlumoLogo class="tw-my-4 tw-ml-4 tw-h-8"></KlumoLogo>
      </div>
      <div class="buttons ">
        <Button text="Search" @click.native="handleSearchbar()" id="searchButton" class="button hide"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"/></svg></Button>
        <div class="tooltip">
          <Button text="Wishlist" class="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"/></svg></Button>
          <div class="tooltipBox">Sample window 1, easily configurable</div>
        </div>
        <div class="tooltip">
          <Button text="Account" class="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"/></svg></Button>
          <div class="tooltipBox">Sample window 2</div>
        </div>
        <div class="tooltip">
          <Button text="Cart" class="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"/></svg></Button>
          <div class="tooltipBox">Sample window 3</div>
        </div>
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
          <Button text="" class="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"/></svg></Button> 
        </div>
      </div>
      <ul>
        <li class="navItem">Poster
          <div class="category">
            <ul>
              <li>Poster1</li>
              <li>Poster2</li>
              <li>Poster3</li>
            </ul>
          </div>
        </li>
        <li class="navItem">Canvas
          <div class="category">
            <ul>
              <li>Canvas1</li>
              <li>Canvas2</li>
              <li>Canvas3</li>
            </ul>
          </div>
        </li>
        <li class="navItem">Digital Download
          <div class="category">
            <ul>
              <li>Digital Download1</li>
              <li>Digital Download2</li>
              <li>Digital Download3</li>
            </ul>
          </div>
        </li>
        <li class="navItem">Gift Cart
          <div class="category">
            <ul>
              <li>Gift Cart1</li>
              <li>Gift Cart2</li>
              <li>Gift Cart3</li>
            </ul>
          </div>
        </li>
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
        document.getElementById("searchbarContainer").classList.add("hide")
        document.getElementById("searchButton").classList.remove("hide")
      }
      else if (!window.scrollY){
        document.getElementById("nav").classList.remove("sticky")
        document.getElementById("navBG").classList.remove("sticky")
        document.getElementById("header").classList.remove("sticky")
        document.getElementById("searchbarContainer").classList.remove("hide")
        document.getElementById("searchButton").classList.add("hide")
      }
    } 
    

  },
  methods:{
    handleSearchbar(){
      document.getElementById("searchbarContainer").classList.remove("hide")
      document.getElementById("searchbar").classList.remove("hide")
      document.getElementById("searchButton").classList.add("hide")
      document.getElementById("navBG").classList.remove("sticky")
      document.getElementById("nav").classList.remove("sticky")

    },
    handleSidebar(){
      this.openSidebar = !this.openSidebar
      if(this.openSidebar){
        document.getElementById("nav").classList.toggle("mobile")
      } else {
        document.getElementById("nav").classList.remove("mobile")
      }
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