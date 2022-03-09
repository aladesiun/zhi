<template>
  <div class="home bg-homebg h-[100vh]">
    <Navheader/>
    <side-bar/>
    <div>
      <div class="home-content xl:max-w-screen-xl mx-auto mt-0 ml-2 lg:ml-[456px] pt-[82px] flex" >
        <div class="w-full h-[88vh] w-[61%] overflow-y-scroll sb">
            <div class="bg-white w-full rounded-md  shadow-shd border border-brdr">
              <div class="flex justify-between items-center border-b border-lightB  py-5 px-5">
                <div>
                  <p class="text-xl font-semibold"><b>🙋‍♀️</b> Las Vegas Singles</p>
                </div>
                <div>
                  <button class="w-[114px] h-[38px] text-white bg-btn hover:bg-btnHover rounded border border-btnBorder">
                    Join space
                  </button>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <div  class="nav capitalize nav-pills flex items-center pl-7" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                  <div class="flex justify-start items-center relative mr-6">
                    <a class="nav-link mb-[-1px]  text-center w-max block pr-[16px] active py-1 cursor-pointer text-lg font-medium text-center text-inp" id="v-pills-post-tab" data-toggle="pill" data-tabs-target="#v-pills-post" role="tab" aria-controls="v-pills-post" aria-selected="true">Posts</a>
                    <div class="w-[16px] h-[18px] rounded absolute right-[-2px] ease-in-out duration-300 bg-gray-100 text-sm flex justify-center items-center ml-1">0</div>
                  </div>

                  <div class="flex justify-start items-center relative mr-6">
                    <a class="nav-link  mb-[-1px] text-center w-max block pr-[21px] py-1  cursor-pointer text-lg font-medium text-center text-inp" id="v-pills-members-tab" data-toggle="pill" data-tabs-target="#v-pills-members" role="tab" aria-controls="v-pills-members" aria-selected="false">Members</a>
                    <div class="w-[16px] h-[18px] rounded absolute right-[2px] ease-in-out duration-300  bg-gray-100 text-sm flex justify-center items-center ml-1">9</div>
                  </div>
                </div>
                <!---------DROpDOWN--->
                <div>   
                  <button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" class="text-latest font-light  text-base px-4 py-2.5 text-center inline-flex items-center" type="button">Latest <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                  <div id="dropdownInformation" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                    <div class="py-3 px-4 text-gray-900 dark:text-white">
                      <span class="block text-sm">Bonnie Green</span>
                      <span class="block text-sm font-medium truncat">name@flowbite.com</span>
                    </div>
                  <ul class="py-1 ease-in-out duration-300" aria-labelledby="dropdownInformationButton">
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
                      <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                  </div>
                  </div>
                </div>

              </div>
            </div>
            <div>
              <div class="tab-content-wrapper">
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show" id="v-pills-post" role="tabpanel" aria-labelledby="v-pills-post-tab">
                    <div class="w-full border border-red-800 h-[700px] mt-5">

                    </div>
                  </div>
                  <div class="tab-pane hidden fade" id="v-pills-members" role="tabpanel" aria-labelledby="v-pills-members-tab">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>Messages</p>
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
