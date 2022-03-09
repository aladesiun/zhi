<template>
  <div class="home bg-homebg h-[100vh]">
    <Navheader/>
    <side-bar/>
    <div>
      <div class="home-content xl:max-w-screen-xl mx-auto mt-0 ml-2 lg:ml-[456px] pt-[82px] flex" >
        <div class="bg-white w-[85%] rounded-md  shadow-shd border border-brdr h-[100vh] pt-6 overflow-scroll">
           
        </div>
        <div>
         
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import Navheader from "../components/nav.vue";
import sideBar from "../components/sidebar.vue"
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Navheader,
    sideBar
}
}
</script>
