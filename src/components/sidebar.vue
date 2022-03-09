<template>
    <div>
         <div class="sidebar  bg-homebg z-40 hidden lg:block">
            <div class="w-auto lg:w-[430px] h-[700px]  pt-11 fixed md:left-[10px] lg:left-2 top-[65px] bottom-0 flex justify-end items-center bg-homebg">
              <div class="w-[287px] h-[700px]">
                <router-link to="">
                  <div class="mb-10 view text-inp hover:text-black ease-in-out duration-200">
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
                      <p class="text-inp text-[16px] font-light mb-3 mt-2"><router-link to=""><b class="text-sm">👋</b> Start here.</router-link></p>
                      <p class="text-inp text-[16px] font-light"><router-link to=""><b class="text-sm">😏</b>Introduce yourself</router-link></p>
                    </div>
                  </div>

                  <div class="mb-6">
                    <div class="flex justify-start items-center">
                      <div class=" d_p cursor-pointer w-[16px] h-[16px] rounded-md ease-in-out duration-300 hover:bg-dropDown flex justify-center items-center mr-2">
                        <i class="fa-solid i_c fa-caret-right text-inp  ease-in-out duration-300"></i>
                      </div>
                      <div>
                        <p><router-link to="" class="text-darkTxt text-lg font-semibold">VIP GROUPS</router-link></p>
                      </div>
                    </div>
                    <div class=" dp_body hidden w-[300px] h-auto flex flex-col">
                      <p class="text-inp text-[16px] font-light mb-3 mt-2"><router-link to=""><b class="text-sm">👋</b>Las Vegas Singles</router-link></p>
                      <p class="text-inp text-[16px] font-light  mb-3"><router-link to=""><b class="text-sm">😏</b>No mint Mark</router-link></p>
                      <p class="text-inp text-[16px] font-light  mb-3"><router-link to=""><b class="text-sm">😏</b>Zhivago Announcement E...</router-link></p>
                      <p class="text-inp text-[16px] font-light  mb-3"><router-link to=""><b class="text-sm">😏</b>Buffalo Nickel</router-link></p>
                      <p class="text-inp text-[16px] font-light  mb-3"><router-link to=""><b class="text-sm">😏</b>Legal Class Action</router-link></p>
                      <p class="text-inp text-[16px] font-light  mb-3"><router-link to=""><b class="text-sm">😘</b>Zhivago XXX</router-link></p>
                      <p class="text-inp text-[16px] font-light  mb-3"><router-link to=""><b class="text-sm">😘</b>Over 50 </router-link></p>
                      <p class="text-inp text-[16px] font-light  mb-3"><router-link to=""><b class="text-sm">😘</b>Same Sex Sex</router-link></p>
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
    </div>
</template>