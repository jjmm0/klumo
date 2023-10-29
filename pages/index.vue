<template>
  <div class="main">
    <header id="header">
      <div @click="handleSidebar()" class="mobileMenuButton">
        <Button text="" class="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/></svg></Button>
      </div>
      <div class="logoBox">
        <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="11 510 1478 478"><path class="cls-2" fill="#161616" stroke="#161616" stroke-linejoin="round" stroke-width="8.54px" d="M1417.4,808.68c-2.9-40.86-36.37-73.73-77.27-75.93-26.79-1.45-51.83,12.93-63.84,26.64-6.17,7-11.1,14.88-15.2,21-31.89,47.73-74.93,92.77-111.92,92.77-12.23,0-21.71-11.59-21.81-21.62V807.08c0-40.69-31.87-72.54-72.54-72.54a72.39,72.39,0,0,0-51.57,21.05,11.79,11.79,0,0,1-16.63-.06A71.81,71.81,0,0,0,963.18,740a73.15,73.15,0,0,0-27.79-5.42h-.06a63.37,63.37,0,0,0-32.08,8.18A10.21,10.21,0,0,1,888,733.86H862.39v50.78c-31.57,46.24-73.26,88.82-109.23,88.82-8,0-21.75-11.94-21.75-30.2V732H705.8v92.73c0,14.71-11.81,46.94-46.92,46.94-35.46,0-46.94-31.61-46.94-46V732H583.46c-14,69.57-72.32,141-108.88,141.16-27.73.13-56.42-21.11-56.42-56.41V600.3H392.54V702.44a153.84,153.84,0,0,1-25.44,84.74c-26.68,40.43-65.62,86.35-100.73,86.35-57.65,0-99.42-62.77-116.31-83.31a3.07,3.07,0,0,1,.64-4.47c28.59-19.76,77.12-52.25,77.12-52.25l-14.11-21.39-74,48.82.6-160.7H114.68v297H140.3V816.15c31.21,33.89,65.66,83,126.07,83,33.19,0,68.84-25.19,105.92-74.84,2.84-3.82,5.59-7.62,8.21-11.38,3.72-5.29,10.68-7.81,12,3.83,3,25.5,10.44,46.19,25.9,60.28a84.3,84.3,0,0,0,56.14,21.75c33.19,0,58.36-22.48,95.43-72.13.84-1.13,1.67-2.26,2.5-3.42,5.53-7.81,11.33-8,13.81,1.33v.17c0,30.12,22.52,72.55,72.56,72.55,17.61,0,31.89-5.48,43-13.89a12.61,12.61,0,0,1,1.16-.8c5.48-3.41,12.61-2.06,17.2,2.48a47.3,47.3,0,0,0,33,14c31.57,0,61.88-20.9,87.2-46.58,5.38-5.44,13.9-14.88,22-24.78v67.49H888v-86.9a41.88,41.88,0,0,1,10.55-27.77c5.51-6.15,10.37-11.25,16-14.81s12.12-5.57,20.77-5.57h0a46.51,46.51,0,0,1,46.88,46.92v88h25.61V808c0-25.76,20.39-47.45,46.15-47.85a46.4,46.4,0,0,1,47.71,46.92v44.44c.11,25.19,22.22,47.24,47.43,47.24,31.57,0,61.88-20.9,87.2-46.58a17.82,17.82,0,0,1,28.18,3.44,82,82,0,0,0,152.85-46.94Zm-81.81,62.37a56.39,56.39,0,0,1-52-78.28.07.07,0,0,1,0,0,56.37,56.37,0,0,1,10-15.75.07.07,0,0,1,0,0,56.39,56.39,0,1,1,41.91,94.11Z" /></svg>
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
      <div  class="mobileonly ">
        <svg class="mobileLogo" xmlns="http://www.w3.org/2000/svg" viewBox="11 510 1478 478"><path class="cls-2" fill="#161616" stroke="#161616" stroke-linejoin="round" stroke-width="8.54px" d="M1417.4,808.68c-2.9-40.86-36.37-73.73-77.27-75.93-26.79-1.45-51.83,12.93-63.84,26.64-6.17,7-11.1,14.88-15.2,21-31.89,47.73-74.93,92.77-111.92,92.77-12.23,0-21.71-11.59-21.81-21.62V807.08c0-40.69-31.87-72.54-72.54-72.54a72.39,72.39,0,0,0-51.57,21.05,11.79,11.79,0,0,1-16.63-.06A71.81,71.81,0,0,0,963.18,740a73.15,73.15,0,0,0-27.79-5.42h-.06a63.37,63.37,0,0,0-32.08,8.18A10.21,10.21,0,0,1,888,733.86H862.39v50.78c-31.57,46.24-73.26,88.82-109.23,88.82-8,0-21.75-11.94-21.75-30.2V732H705.8v92.73c0,14.71-11.81,46.94-46.92,46.94-35.46,0-46.94-31.61-46.94-46V732H583.46c-14,69.57-72.32,141-108.88,141.16-27.73.13-56.42-21.11-56.42-56.41V600.3H392.54V702.44a153.84,153.84,0,0,1-25.44,84.74c-26.68,40.43-65.62,86.35-100.73,86.35-57.65,0-99.42-62.77-116.31-83.31a3.07,3.07,0,0,1,.64-4.47c28.59-19.76,77.12-52.25,77.12-52.25l-14.11-21.39-74,48.82.6-160.7H114.68v297H140.3V816.15c31.21,33.89,65.66,83,126.07,83,33.19,0,68.84-25.19,105.92-74.84,2.84-3.82,5.59-7.62,8.21-11.38,3.72-5.29,10.68-7.81,12,3.83,3,25.5,10.44,46.19,25.9,60.28a84.3,84.3,0,0,0,56.14,21.75c33.19,0,58.36-22.48,95.43-72.13.84-1.13,1.67-2.26,2.5-3.42,5.53-7.81,11.33-8,13.81,1.33v.17c0,30.12,22.52,72.55,72.56,72.55,17.61,0,31.89-5.48,43-13.89a12.61,12.61,0,0,1,1.16-.8c5.48-3.41,12.61-2.06,17.2,2.48a47.3,47.3,0,0,0,33,14c31.57,0,61.88-20.9,87.2-46.58,5.38-5.44,13.9-14.88,22-24.78v67.49H888v-86.9a41.88,41.88,0,0,1,10.55-27.77c5.51-6.15,10.37-11.25,16-14.81s12.12-5.57,20.77-5.57h0a46.51,46.51,0,0,1,46.88,46.92v88h25.61V808c0-25.76,20.39-47.45,46.15-47.85a46.4,46.4,0,0,1,47.71,46.92v44.44c.11,25.19,22.22,47.24,47.43,47.24,31.57,0,61.88-20.9,87.2-46.58a17.82,17.82,0,0,1,28.18,3.44,82,82,0,0,0,152.85-46.94Zm-81.81,62.37a56.39,56.39,0,0,1-52-78.28.07.07,0,0,1,0,0,56.37,56.37,0,0,1,10-15.75.07.07,0,0,1,0,0,56.39,56.39,0,1,1,41.91,94.11Z" /></svg>
        <div @click="handleSidebar()" class="sidebarClose">
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