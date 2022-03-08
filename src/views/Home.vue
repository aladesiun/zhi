<template>
  <div class="home bg-homebg h-[66px]">
    <Navheader/>
    <div class="home-content">
      hello
    </div>
  </div>  
</template>

<script>
import Navheader from "../components/nav.vue";
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Navheader
}
}
</script>
