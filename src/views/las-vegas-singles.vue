<template>
  <div class="home bg-homebg h-[100vh]">
    <Navheader/>
    <side-bar/>
    <div>
      <div class="home-content xl:max-w-screen-xl mx-auto mt-0 ml-2 lg:ml-[444px] pt-[82px] flex" >
        <div class="w-full h-[88vh] w-[64%] overflow-y-scroll sb">
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
                    <a class="nav-link mb-[-1px]  text-center w-max block pr-[16px] active py-1 cursor-pointer text-lg font-base text-center text-inp" id="v-pills-post-tab" data-toggle="pill" data-tabs-target="#v-pills-post" role="tab" aria-controls="v-pills-post" aria-selected="true">Posts</a>
                    <div class="w-[16px] h-[18px] rounded absolute right-[-2px] ease-in-out duration-300 bg-gray-100 text-sm flex justify-center items-center ml-1">0</div>
                  </div>

                  <div class="flex justify-start items-center relative mr-6">
                    <a class="nav-link  mb-[-1px] text-center w-max block pr-[21px] py-1  cursor-pointer text-lg font-base text-center text-inp" id="v-pills-members-tab" data-toggle="pill" data-tabs-target="#v-pills-members" role="tab" aria-controls="v-pills-members" aria-selected="false">Members</a>
                    <div class="w-[16px] h-[18px] rounded absolute right-[2px] ease-in-out duration-300  bg-gray-100 text-sm flex justify-center items-center ml-1">9</div>
                  </div>
                </div>
                <!---------DROpDOWN--->
                <div>   
                  <button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" class="text-latest font-light  text-base px-4 py-2.5 text-center inline-flex items-center" type="button">Latest <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                  <div id="dropdownInformation" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                    <div class="py-3 px-4 text-gray-900 dark:text-white">
                      <span class="block text-sm">Bonnie Green</span>
                      <span class="block text-sm font-base truncat">name@flowbite.com</span>
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
                    <div class="w-full h-auto bg-white rounded mt-5">
                      <router-link to="">
                        <div class="w-full border-red-800 border h-[263px]">
                          <img alt="IMG" src="../views/../assets/Images/purple.png" class="ht"/>
                        </div>
                      </router-link>
                      <div class="flex justify-between items-center mt-5 mb-6 mx-6">
                        <div>
                          <p class="text-2xl"> Hello Singles, who's here ?</p>
                        </div>
                        <div class="flex">
                          <p class="mr-5 text-inp"><router-link to="">Share</router-link></p>
                          <p class="mr-5 text-inp"><router-link to=""><i class="fa-solid fa-ellipsis"></i></router-link></p>
                          <p class="w-[25px] h-[25px] rounded-full bg-btnBorder text-white flex justify-center items-center"><i class="fa-solid fa-thumbtack text-sm rotate-45"></i></p>
                        </div>
                      </div>
                      <div class="feed-head flex justify-start items-center mb-10 mx-6">
                        <router-link to="">
                          <div class="pro-img rounded-[50%] h-10 w-10 cursor-pointer bg-black mr-2"><img alt="IMG" src="../views/../assets/Images/zhi-ing.jpg" class="rounded-[50%]"></div>
                        </router-link>
                        <div class="name-details">
                          <div class="flex space-between">
                            <p class="capitalize text-lg font-semibold ">gabrielle Brunson</p>
                          <div>
                              <span class="feed-tag whitespace-nowrap bg-btn text-white font-bold text-[14px] px-2 rounded uppercase mx-1">ADMIN</span>
                            <span class="feed-tag whitespace-nowrap bg-btn text-white font-bold text-[14px] px-2 rounded uppercase mx-1 mr-2">🤗hi i'm new here</span>
                          </div>
                            <span class="feed-date text-[13px] font-lighter text-inp"><router-link to=""> a month ago</router-link></span>
                          </div>
                        </div>
                      </div>
                      <div class="flex justify-start items-center mx-6 mb-4">
                        <div class="rounded-[50%] h-6 w-6 cursor-pointer bg-black mr-2" >
                          <img  alt="IMG" src="../views/../assets/Images/zhi-ing.jpg" class="rounded-[50%]">
                        </div>
                        <p class="text-inp text-sm">Liked by Klajdi</p>
                    </div>
                      <div class="w-full border-t h-[60px] pt-3 border-b border-homebg">
                         <div class=" flex justify-between px-8 items-center">
                           <div class="lk-comment flex text-sm text-inp">
                              <div class="like flex mr-5 items-center ">
                                <i class="fa-regular fa-thumbs-up mr-2"></i>
                    
                                 <span>like</span>
                             </div>
                              <div class="comment flex items-center">
                               <i class="fa-regular fa-message mr-2"></i>
                               <span>comment</span>
                             </div>
                           </div>
                           <div class="num-comm">
                             <span class="text-sm text-inp">0 Comment</span>
                           </div>
                         </div>   
                    </div>
                   </div>
              
                 </div>
                 <div class="tab-pane hidden fade" id="v-pills-members" role="tabpanel" aria-labelledby="v-pills-members-tab">
                    <div class="w-full  h-[60px] mb-[11px] flex justify-start items-center"> 
                      <!-----------drop1------->       
                      <div class="relative">             
                        <button id="dropdownButton" class="text-black d-btn bg-white mr-3 hover:text-btnHover  hover:border-btnBorder border ease-in-out duration-200  border-bord h-[37px] font-semibold rounded-sm text-base px-3 py-1 text-center inline-flex items-center" type="button">Bio <i class="fa-solid fa-angle-down text-arrDown ml-4"></i></button>
                        <div class="hidden z-10 b-body absolute left-0 top-[45px]">
                          <div class="p-4 w-[350px] shadow-lg border border-lightB bg-white rounded h-[170px] ease-in-out duration-500" aria-labelledby="dropdownButton">
                          <div>
                            <form>
                              <label id="bio" class="text-lg font-semibold text-blk">Bio</label>
                              <input type="text" id="bio" class="w-full border rounded-sm border-lightB mt-3 mb-4 h-30 ease-in-out duration-200"/>
                              <button class=" h-[39px] text-white text-basee w-full rounded-sm bg-btn border-btnBorder hover:bg-btnHover ease-in-out duration-200 flex justify-center items-center">Apply</button>
                            </form>
                          </div>
                          </div>
                        </div>
                      </div>
                      <!-----------drop2-------> 
                      <div class="relative">             
                        <button id="dropdownButton" class="text-black d--btn bg-white mr-3 hover:text-btnHover  hover:border-btnBorder border ease-in-out duration-200  border-bord h-[37px] font-semibold rounded-sm text-base px-3 py-1 text-center inline-flex items-center" type="button">Headline<i class="fa-solid fa-angle-down text-arrDown ml-4"></i></button>
                        <div class="hidden z-10 b--body absolute left-0 top-[45px]">
                          <div class="p-4 w-[350px] shadow-lg border border-lightB bg-white rounded h-[170px] ease-in-out duration-500" aria-labelledby="dropdownButton">
                          <div>
                            <form>
                              <label id="bio" class="text-lg font-semibold text-blk">Headline</label>
                              <input type="text" id="bio" class="w-full border rounded-sm border-lightB mt-3 mb-4 h-30 ease-in-out duration-200"/>
                              <button class=" h-[39px] text-white text-basee w-full rounded-sm bg-btn border-btnBorder hover:bg-btnHover ease-in-out duration-200 flex justify-center items-center">Apply</button>
                            </form>
                          </div>
                          </div>
                        </div>
                      </div>
                      <!-----------drop3-------> 
                      <div class="relative">             
                        <button id="dropdownButton" class="text-black d_btn bg-white mr-3 hover:text-btnHover  hover:border-btnBorder border ease-in-out duration-200  border-bord h-[37px] font-semibold rounded-sm text-base px-3 py-1 text-center inline-flex items-center" type="button">Location<i class="fa-solid fa-angle-down text-arrDown ml-4"></i></button>
                        <div class="hidden z-10 b_body absolute left-0 top-[45px]">
                          <div class="p-4 w-[350px] shadow-lg border border-lightB bg-white rounded h-[170px] ease-in-out duration-500" aria-labelledby="dropdownButton">
                          <div>
                            <form>
                              <label id="bio" class="text-lg font-semibold text-blk">Location</label>
                              <input type="text" id="bio" class="w-full border rounded-sm border-lightB mt-3 mb-4 h-30 ease-in-out duration-200"/>
                              <button class=" h-[39px] text-white text-basee w-full rounded-sm bg-btn border-btnBorder hover:bg-btnHover ease-in-out duration-200 flex justify-center items-center">Apply</button>
                            </form>
                          </div>
                          </div>
                        </div>
                      </div>
                      <!-----------drop4-------> 
                      <div class="relative">             
                        <button id="dropdownButton" class="text-black d__btn bg-white mr-3 hover:text-btnHover  hover:border-btnBorder border ease-in-out duration-200  border-bord h-[37px] font-semibold rounded-sm text-base px-3 py-1 text-center inline-flex items-center" type="button">Role<i class="fa-solid fa-angle-down text-arrDown ml-4"></i></button>
                        <div class="hidden z-10 b__body absolute left-0 top-[45px]">
                          <div class="p-4 w-[350px] shadow-lg border border-lightB bg-white rounded h-auto ease-in-out duration-500" aria-labelledby="dropdownButton">
                          <div>
                            <form>
                              <p id="bio" class="text-lg font-semibold text-blk">Role</p>
                              
                              <fieldset>
                               <legend class="sr-only">Countries</legend>
                               <div class="flex items-center mb-4">
                                  <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4  border-gray-300 focus:ring-2 focus:ring-blue-300 " aria-labelledby="country-option-1" aria-describedby="country-option-1" checked="">
                                  <label for="country-option-1" class="block ml-2 text-base font-semibold  text-darkTxt">
                                    Admin
                                  </label>
                                </div>
                                <div class="flex items-center mb-4">
                                  <input id="country-option-2" type="radio" name="countries" value="Germany" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 " aria-labelledby="country-option-2" aria-describedby="country-option-2">
                                  <label for="country-option-2" class="block ml-2 text-base font-semibold  text-darkTxt">
                                    Member
                                  </label>
                                </div>
                                <div class="flex items-center mb-4">
                                 <input id="country-option-3" type="radio" name="countries" value="Spain" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-3" aria-describedby="country-option-3">
                                 <label for="country-option-3" class="block ml-2 text-base font-semibold   text-darkTxt">
                                   Moderator
                                 </label>
                                </div>
                                
                               
                              </fieldset>
                              <button class=" h-[39px] text-white text-basee w-full rounded-sm bg-btn border-btnBorder hover:bg-btnHover ease-in-out duration-200 flex justify-center items-center">Apply</button>
                            </form>
                          </div>
                          </div>
                        </div>
                      </div>
                      <!-----------drop5-------> 
                     <div class="relative">             
                        <button id="dropdownButton" class="text-black d___btn bg-white mr-3 hover:text-btnHover  hover:border-btnBorder border ease-in-out duration-200  border-bord h-[37px] font-semibold rounded-sm text-base px-3 py-1 text-center inline-flex items-center" type="button">Tags<i class="fa-solid fa-angle-down text-arrDown ml-4"></i></button>
                        <div class="hidden z-10 b___body absolute left-0 top-[45px]">
                          <div class="p-4 w-[350px] shadow-lg border border-lightB bg-white rounded h-auto ease-in-out duration-500" aria-labelledby="dropdownButton">
                          <div>
                            <form>
                              <label id="bio" class="text-lg font-semibold text-blk">Tags</label>
                              <input type="text" id="bio" class="w-full border rounded-sm border-lightB mt-3 mb-4 h-[37px] ease-in-out  duration-200" placeholder="Search"/>
                              <div class="flex items-center mb-4">
                                <input id="checkbox-1" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2" checked>
                                <label for="checkbox-1" class="ml-3 text-sm font-semibold text-darkTxt text-base">🤗 Hi I'm new here</label>
                              </div>
                               <div class="flex items-center mb-4">
                                <input id="checkbox-1" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2" checked>
                                <label for="checkbox-1" class="ml-3 text-sm font-semibold  text-darkTxt text-base">🏆 Admin of the week</label>
                              </div>
                              <button class=" h-[39px] text-white text-basee w-full rounded-sm bg-btn border-btnBorder hover:bg-btnHover ease-in-out duration-200 flex justify-center items-center">Apply</button>
                            </form>
                          </div>
                          </div>
                        </div>
                      </div>
                      <!-----------drop6-------> 
                        <div class="relative">             
                        <button id="dropdownButton" class="text-black d____btn bg-white mr-3 hover:text-btnHover  hover:border-btnBorder border ease-in-out duration-200  border-bord h-[37px] font-semibold rounded-sm text-base px-3 py-1 text-center inline-flex items-center" type="button">Status<i class="fa-solid fa-angle-down text-arrDown ml-4"></i></button>
                        <div class="hidden z-10 b____body absolute left-0 top-[45px]">
                          <div class="p-4 w-[350px] shadow-lg border border-lightB bg-white rounded h-auto ease-in-out duration-500" aria-labelledby="dropdownButton">
                          <div>
                            <form>
                              <p id="bio" class="text-lg font-semibold text-blk">Status</p>
                              
                              <fieldset>
                               <div class="flex items-center mb-4">
                                  <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4  border-gray-300 focus:ring-2 focus:ring-blue-300 " aria-labelledby="country-option-1" aria-describedby="country-option-1" checked="">
                                  <label for="country-option-1" class="block ml-2 text-base font-semibold  text-darkTxt">
                                    Online
                                  </label>
                                </div>
                                <div class="flex items-center mb-4">
                                  <input id="country-option-2" type="radio" name="countries" value="Germany" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 " aria-labelledby="country-option-2" aria-describedby="country-option-2">
                                  <label for="country-option-2" class="block ml-2 text-base font-semibold  text-darkTxt">
                                    Offline
                                  </label>
                                </div>
                              </fieldset>
                              <button class=" h-[39px] text-white text-basee w-full rounded-sm bg-btn border-btnBorder hover:bg-btnHover ease-in-out duration-200 flex justify-center items-center">Apply</button>
                            </form>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mb-5 bg-white rounded-md py-5 px-6 flex justify-start items-center">
                      <div class="w-[118px] h-[120px] rounded-md bg-memb flex justify-center items-center mr-6">
                        <p class="text-white text-4xl">AT</p>
                      </div>
                      <div class="">
                        <p class="text-2xl mb-[46px]">Aladesiun Temitope</p>
                        <div>
                          <button class="w-[93px] h-[36px]  rounded-sm bg-btn hover:bg-btnHover text-white">Message</button>
                        </div>
                      </div>
                    </div>
                     <div class="w-full  mb-5 bg-white rounded-md py-5 px-6 flex justify-start items-center">
                      <div class="w-[118px] h-[120px] rounded-md bg-memb flex justify-center items-center mr-6">
                        <p class="text-white text-4xl">AT</p>
                      </div>
                      <div class="">
                        <p class="text-2xl mb-[46px]">Aladesiun Temitope</p>
                        <div>
                          <button class="w-[93px] h-[36px]  rounded-sm bg-btn hover:bg-btnHover text-white">Message</button>
                        </div>
                      </div>
                    </div>
                    <div class="w-full  mb-5 bg-white rounded-md py-5 px-6">
                      <div class="flex justify-start items-center">
                          <div class="w-[118px] h-[120px] rounded-md bg-memb flex justify-center items-center mr-6">
                            <p class="text-white text-4xl">AT</p>
                          </div>
                          <div class="">
                            <p class="text-2xl mb-[46px]">Aladesiun Temitope</p>
                            <div>
                              <button class="w-[93px] h-[36px]  rounded-sm bg-btn hover:bg-btnHover text-white">Message</button>
                            </div>
                          </div>
                      </div>
                      <div class="flex mt-4">
                        <div class="w-[112px] h-[23px]  text-right mr-7">
                          <p>BIO</p>
                        </div>
                        <div>
                          <p class="text-base">Hey everyone! I'm here to help you with anything on Zhivago</p>
                        </div>
                      </div>
                       <div class="flex mt-4 mb-4">
                        <div class="w-[112px] h-[23px]  text-right mr-7">
                          <p>TAGS</p>
                        </div>
                        <div>
                          
                        </div>
                      </div>
                    </div>
                     <div class="w-full h-[159px] mb-5 bg-white rounded-md py-5 px-6 flex justify-start items-center">
                      <div class="w-[118px] h-[120px] rounded-md bg-memb flex justify-center items-center mr-6">
                        <p class="text-white text-4xl">AT</p>
                      </div>
                      <div class="">
                        <p class="text-2xl mb-[46px]">Aladesiun Temitope</p>
                        <div>
                          <button class="w-[93px] h-[36px]  rounded-sm bg-btn hover:bg-btnHover text-white">Message</button>
                        </div>
                      </div>
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
