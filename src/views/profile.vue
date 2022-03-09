<template>
  <div class="home bg-homebg h-[100vh]">
    <!-- <Navheader/>
    <side-bar/> -->
    <div>
      <div class="home-content xl:max-w-screen-xl mx-auto mt-0 ml-2 lg:ml-[456px] pt-[82px]" >
        <div class="bg-white w-[85%] rounded-md shadow-shd border border-brdr h-auto pt-6">
          <div class="flex justify-start items-center pl-6 mb-4">
            <div class="rounded-[50%] h-24 w-24 cursor-pointer mr-3 relative">
              <div class="w-3 h-3 rounded-full bg-grn border-2 border-white absolute right-[8px] top-[5px]"></div>
              <img alt="IMG" src="../views/../assets/Images/zhi-ing.jpg" class="rounded-[50%]"/>
            </div>
            <div>
              <p class="text-xl">Joseph Kender</p>
            </div>
            
          </div> 
           <div class="border-b border-lightB">
            <ul class="flex flex-wrap -mb-px pl-7">
              <li class="mr-5">
                <router-link to="" class="inline-block py-2  text-lg font-medium text-center text-inp rounded-t-lg  active-tab  ">About</router-link>
              </li>
              <li class="mr-5"> 
                 <router-link to="" class="inline-block py-2 flex justify-center items-center  text-lg font-medium text-center text-inp rounded-t-lg border-b-2 border-transparent">
                    Posts
                   <div class="w-[16px] h-[18px] rounded-md ease-in-out duration-300 bg-gray-100 text-sm flex justify-center items-center ml-1">0</div>
                </router-link>
              </li>
              <li class="mr-5">
                <router-link to="" class="inline-block py-2 flex justify-center items-center   text-lg font-medium text-center text-inp rounded-t-lg border-b-2 border-transparent">
                  Comments
                  <div class="w-[16px] h-[18px] rounded-md ease-in-out duration-300 bg-gray-100 text-sm flex justify-center items-center ml-1">0</div>
                </router-link>
              </li>
              <li class="mr-5">
                <router-link to="" class="inline-block py-2 flex justify-center items-center   text-lg font-medium text-center text-inp rounded-t-lg border-b-2 border-transparent">
                  Spaces
                  <div class="w-[16px] h-[18px] rounded-md ease-in-out duration-300 bg-gray-100 text-sm flex justify-center items-center ml-1">2</div>
                </router-link>
              </li>
            </ul>
          </div>
          <!--------ABOUT------->
          <div class="w-full h-[160px] hidden">
            <div class="mt-4">
              <p class="pl-7"><i class="fa-solid fa-calendar text-search mr-3"></i>Member since March 08, 2022</p>
            </div>
          </div>
          <!---------POSTS-------->
          <div class="w-full hidden">
            <div class="mt-20 mb-10 text-center">
              <p class="pl-7  text-black font-semibold text-xl">There  are no posts yet</p>
              <p class="text-[0.875rem] text-gray-600"> Posts by this member will show up here.</p>
            </div>
          </div>
          <!--------------COMMENTS---->
          <div class="w-full hidden">
            <div class="mt-20 mb-10 text-center">
              <p class="pl-7  text-black font-semibold text-xl">There  are no comments yet</p>
              <p class="text-[0.875rem] text-gray-600"> Comments by this member will show up here.</p>
            </div>
          </div>
          <!----------------SPACES------->
          <div class="w-full h-[360px] pt-5">
             <div class="w-full py-4 pl-7 h-[80px] hover:bg-searchinputcolor  flex justify-start items-top">
                <div class="mr-3">😍</div>
                <div>
                  <p class="font-semibold text-base">Introduce yourself</p>
                  <p class="text-sm">11 members</p>
                </div>
             </div>
              <div class="w-full py-4 pl-7 h-[80px] hover:bg-searchinputcolor  flex justify-start items-top">
                <div class="mr-3">😍</div>
                <div>
                  <p class="font-semibold text-base">Start here</p>
                  <p class="text-sm">13 members</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
// import Navheader from "../components/nav.vue";
// import sideBar from "../components/sidebar.vue"
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    // Navheader,
    // sideBar
}
}
</script>
