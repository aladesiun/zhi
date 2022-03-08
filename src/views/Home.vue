<template>
  <div class="home bg-homebg h-100 ">
    <Navheader/>
    <div class="home-content xl:max-w-screen-xl mx-auto mt-3" >
      <div class="grid grid-cols-4 mx-auto">
        <div class="sidebar">
          sidebar
        </div>
        <div class="feed-content col-span-2 w-full">
          <div class="content-head flex space-between ">
            <p>Home</p>
            
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
          <div class="feed bg-white p-3">
            <div class="feed-head flex space-between align-center">
              <div class="pro-img rounded-[50%] h-8 w-8 bg-black mr-2"></div>
              <div class="name-details">
                <div class="flex space-between">
                  <p class="capitalize text-[14px] font-semibold ">gabrielle Brunson</p>
                  <span class="feed-tag bg-btn text-white font-bold text-[14px] px-2 rounded uppercase mx-1">ADMIN</span>
                  <span class="feed-tag bg-btn text-white font-bold text-[14px] px-2 rounded uppercase mx-1 mr-2">hi i'm new here</span>
                  <span class="feed-date text-[12px] font-lighter">24days</span>
                </div>
                <p class="feed-address text-[12px] font-lighter">Posted in les vegas singles</p>
              </div>
              <p class="ml-auto px-2">share</p>
            </div>
          </div>
        </div>
        <div class="notif">
          notif
        </div>
      </div>
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
