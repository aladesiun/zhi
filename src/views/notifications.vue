<template>
<div class="home bg-homebg h-[100vh]" data-modal-toggle="defaultModal">
      <div class="home-content xl:max-w-screen-xl mx-auto mt-0 mx-1 xl:ml-[450px] pt-[82px]" >
    <div  class=" overflow-y-auto overflow-x-hidden z-50 justify-center items-center h-modal md:h-full md:inset-0">
            <div class=" px-1 lg:px-4 w-full max-w-2xl h-full md:h-auto">
                <div class="bg-white xl:w-[100%]  z-[40] rounded shadow dark:bg-gray-700">
                    <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                        <h3 class=" font-semibold text-black lg:text-lg dark:text-white">
                            Notifications
                        </h3>
                       <div class="read-settings flex">
                            <div class="read mr-3"><i class="fa-solid fa-check-double text-inp"></i></div>
                        <router-link to="#"><i class="fa-solid fa-gear text-inp"></i></router-link>
                       </div>
                        <!-- <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button> -->
                    </div>

                    <div class="nav capitalize nav-pills flex items-center xl:pl-7 px-1  pt-2 border-b border-light   " id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                        <div>
                            <a
                            class="nav-link mb-[-1px] text-center w-max block mr-4 py-1 cursor-pointer  font-medium text-center text-inp active"
                            id="v-pills-inbox-tab"
                            data-toggle="pill"
                            data-tabs-target="#v-pills-inbox"
                            role="tab"
                            aria-controls="v-pills-inbox"
                            aria-selected="true"
                        >
                            Inbox
                        </a>
                        </div>
                        <div class="flex justify-start items-center relative mr-6">
                            <a
                                class="nav-link mb-[-1px] text-center w-max block pr-[16px] py-1 cursor-pointer  font-medium text-center text-inp"
                                id="v-pills-following-tab"
                                data-toggle="pill"
                                data-tabs-target="#v-pills-following"
                                role="tab"
                                aria-controls="v-pills-following"
                                aria-selected="false"
                            >
                                following
                            </a>
                        </div>
                        <div class="flex justify-start items-center relative mr-6">
                            <a
                                class="nav-link mb-[-1px] text-center w-max block pr-[21px] py-1 cursor-pointer  font-medium text-center text-inp"
                                id="v-pills-all-tab"
                                data-toggle="pill"
                                data-tabs-target="#v-pills-all"
                                role="tab"
                                aria-controls="v-pills-all"
                                aria-selected="false"
                            >
                                all
                            </a>
                        </div>
                        <div class="flex justify-start items-center relative mr-6">
                            <a
                                class="nav-link mb-[-1px] text-center w-max block pr-[21px] py-1 cursor-pointer  font-medium text-center text-inp"
                                id="v-pills-archived-tab"
                                data-toggle="pill"
                                data-tabs-target="#v-pills-archived"
                                role="tab"
                                aria-controls="v-pills-archived"
                                aria-selected="false"
                            >
                                archived
                            </a>
                        </div>
                    </div>
                    <div class="tab-content-wrapper">
            <div class="tab-content" id="myTabContent">

              <div class="tab-pane fade show" id="v-pills-inbox" role="tabpanel" aria-labelledby="v-pills-inbox-tab">
                <div class="w-full h-[160px] flex items-center justify-center">
                  <div class="">
                    <p class="text-center text-sm text-inp">No Notification</p>
                  </div>
                </div> 
              </div>

             <div class="tab-pane hidden fade" id="v-pills-following" role="tabpanel" aria-labelledby="v-pills-following-tab">
                <div class="w-full h-[160px] flex items-center justify-center">
                  <div class="">
                    <p class="text-center text-sm text-inp">No Notification</p>
                  </div>
                </div> 
              </div>
             <div class="tab-pane hidden fade" id="v-pills-all" role="tabpanel" aria-labelledby="v-pills-all-tab">
                <div class="w-full h-[160px] flex items-center justify-center">
                  <div class="">
                    <p class="text-center text-sm text-inp">No Notification</p>
                  </div>
                </div> 
              </div>
               <div class="tab-pane hidden fade" id="v-pills-archived" role="tabpanel" aria-labelledby="v-pills-archived-tab">
                <div class="w-full h-[160px] flex items-center justify-center">
                  <div class="">
                    <p class="text-center text-sm text-inp">No Notification</p>
                  </div>
                </div> 
              </div>
            </div>
          </div>

                   
                </div>
            </div>
        </div>
        </div>
        </div>
</template>