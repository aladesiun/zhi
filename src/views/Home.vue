<template>
  <div class="home bg-homebg h-[100vh]">
    <Navheader/>
    <side-bar/>
    <div>
      <div class="home-content xl:max-w-screen-xl mx-auto mt-0 ml-[456px]" >
        <div class="grid grid-cols-3 mx-auto">
          <div class="feed-content sb col-span-2 w-full h-[100vh] overflow-y-scroll overscroll-none pt-[82px]">
            <div class="content-head flex space-between ">
              <p class="text-2xl text-semibold">Home</p>
              <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="text-black 
              text-center inline-flex items-center ml-auto" type="button">Latest<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
              <div id="dropdownDivider" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-1" aria-labelledby="dropdownDividerButton">
              <li>
              <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
              <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
              </li>
              <li>
              <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
              </li>
              </ul>
              <div class="py-1">
              <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
              </div>
              </div>

            </div>
            <div class="feed bg-white h-auto">
              <div class="px-7 py-8">
                <div class="feed-head flex space-between align-center mb-4">
                  <router-link to="">
                    <div class="pro-img rounded-[50%] h-10 w-10 cursor-pointer bg-black mr-2"><img alt="IMG" src="../views/../assets/Images/zhi-ing.jpg" class="rounded-[50%]"></div>
                  </router-link>
                  <div class="name-details">
                    <div class="flex space-between">
                      <p class="capitalize text-[14px] font-semibold ">gabrielle Brunson</p>
                     <div>
                        <span class="feed-tag whitespace-nowrap bg-btn text-white font-bold text-[14px] px-2 rounded uppercase mx-1">ADMIN</span>
                      <span class="feed-tag whitespace-nowrap bg-btn text-white font-bold text-[14px] px-2 rounded uppercase mx-1 mr-2">🤗hi i'm new here</span>
                     </div>
                      <span class="feed-date text-[13px] font-lighter text-inp"><router-link to=""> 25 days ago</router-link></span>
                    </div>
                    <p class="feed-address text-[12px] font-lighter text-inp">Posted in Las vegas singles</p>
                  </div>
                  <p class="ml-auto px-2 text-inp hover:text-black">share</p>
                </div>
                <div class="mb-4">
                  <p class="text-2xl font-semibold text-darkTxt">TGIF!!!!!!!!</p>
                </div>
                <div class="w-[400px] mb-10 h-auto">
                  <p class="mb-5">😍</p>
                  <div class="w-full h-[344px] cursor-zoom-in">
                    <img alt="IMG" src="../views/../assets/Images/kzi.gif" class="h-full w-full rounded"/>
                  </div>
                </div>
                <div class="flex justify-start items-center">
                  <div class="rounded-[50%] h-7 w-7 cursor-pointer bg-black mr-2" >
                    <img  alt="IMG" src="../views/../assets/Images/zhi-ing.jpg" class="rounded-[50%]">
                  </div>
                  <p class="text-inp">Liked by Klajdi</p>
                </div>
              </div>

              <div class="w-full border-line h-[60px] border border-red-800">
              </div>
            </div>
            
          </div>
          <div class="notif ml-5 hidden lg:block">
            <div>
               <div class="mb-10 ml-4 active text-inp text-center hover:text-black ease-in-out duration-200">
                    <span class="block text-center">New post</span>
                  </div>
              <div class="bg-white">
                <p class="text-sm font-bold">Get started</p>
                <div class="list"></div>
              </div>
            </div>
          </div>
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
