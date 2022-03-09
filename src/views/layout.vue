<template>
      <div class="home bg-homebg h-[100vh]">
          <Navheader/>
          <Sidebar/>
          <router-view></router-view>
        </div>
</template>
<script>
import Navheader from "../components/nav.vue";
import Sidebar from "../components/sidebar.vue";
export default {
    setup() {
    },
    components: { Navheader, Sidebar }
}
</script>