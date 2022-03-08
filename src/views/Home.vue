<template>
  <div class="home bg-homebg h-[100vh]">
    <Navheader/>
    <div>
      <div class="home-content xl:max-w-screen-xl mx-auto mt-3" >
        <div class="grid grid-cols-4 mx-auto">
          <div class="sidebar">
            <div class="w-[430px] h-[700px] pt-11 border border-red-800 fixed left-0 top-[65px] flex justify-end items-center ">
              <div class="w-[287px] h-[700px]">
                <router-link to="">
                  <div class="mb-10 active text-inp hover:text-black ease-in-out duration-200">
                    <i class="fa-solid fa-house mr-2"></i>Home
                  </div>
                </router-link>
                <div class="pl-2">
                  <div class="mb-6">
                    <div class="flex justify-start items-center">
                      <div class="dp cursor-pointer w-[16px] h-[16px] rounded-md ease-in-out duration-300 hover:bg-dropDown flex justify-center items-center mr-2">
                        <i class="fa-solid ic fa-caret-right text-inp ease-in-out duration-300"></i>
                      </div>
                      <div>
                        <p><router-link to="" class="text-darkTxt text-lg font-semibold">Members Central</router-link></p>
                      </div>
                    </div>
                    <div class="dp-body hidden w-[300px] h-[86px]  flex flex-col">
                      <p class="text-inp text-lg font-light mb-3 mt-2"><router-link to=""><b class="text-sm">👋</b> Start here.</router-link></p>
                      <p class="text-inp text-lg font-light"><router-link to=""><b class="text-sm">😏</b>Introduce yourself</router-link></p>
                    </div>
                  </div>

                  <div class="mb-8">
                    <div class="flex justify-start items-center">
                      <div class=" d_p cursor-pointer w-[16px] h-[16px] rounded-md ease-in-out duration-300 hover:bg-dropDown flex justify-center items-center mr-2">
                        <i class="fa-solid i_c fa-caret-right text-inp  ease-in-out duration-300"></i>
                      </div>
                      <div>
                        <p><router-link to="" class="text-darkTxt text-lg font-semibold">VIP GROUPS</router-link></p>
                      </div>
                    </div>
                    <div class=" dp_body hidden w-[300px] h-auto flex flex-col">
                      <p class="text-inp text-lg font-light mb-3 mt-2"><router-link to=""><b class="text-sm">👋</b>Las Vegas Singles</router-link></p>
                      <p class="text-inp text-lg font-light  mb-3"><router-link to=""><b class="text-sm">😏</b>No mint Mark</router-link></p>
                      <p class="text-inp text-lg font-light  mb-3"><router-link to=""><b class="text-sm">😏</b>Zhivago Announcement E...</router-link></p>
                      <p class="text-inp text-lg font-light  mb-3"><router-link to=""><b class="text-sm">😏</b>Buffalo Nickel</router-link></p>
                      <p class="text-inp text-lg font-light  mb-3"><router-link to=""><b class="text-sm">😏</b>Legal Class Action</router-link></p>
                      <p class="text-inp text-lg font-light  mb-3"><router-link to=""><b class="text-sm">😘</b>Zhivago XXX</router-link></p>
                      <p class="text-inp text-lg font-light  mb-3"><router-link to=""><b class="text-sm">😘</b>Over 50 </router-link></p>
                      <p class="text-inp text-lg font-light  mb-3"><router-link to=""><b class="text-sm">😘</b>Same Sex Sex</router-link></p>
                    </div>
                  </div>
                    
                  <div>
                    <div class="flex justify-start items-center">
                          <div class=" d__p cursor-pointer w-[16px] h-[16px] rounded-md ease-in-out duration-300 hover:bg-dropDown flex justify-center items-center mr-2">
                            <i class="fa-solid i__c fa-caret-right  ease-in-out duration-300 text-inp"></i>
                          </div>
                          <div>
                            <p><router-link to="" class="text-darkTxt text-lg font-semibold">Admins</router-link></p>
                          </div>
                    </div>
                    <div class="dp__body hidden w-[300px] h-auto  flex flex-col">
                          <p class="text-inp text-lg font-light mb-3 mt-2"><router-link to=""><b class="text-sm">😎</b>Zhivago Admins</router-link></p>
                          
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
