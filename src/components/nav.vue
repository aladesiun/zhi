<template>
<nav class="bg-white border-gray-200 border px-2 lg:px-5 sm:px-4 py-1 w-full h-[66px] fixed top-0">
    <div class="container flex justify-between items-center my-[-2px] mx-auto max-w-[1290px]">
        <svg class="w-6 h-6 xlg:hidden block togg-sidebar" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
        </svg>

        <div class="flex justify-center lg:justify-start items-center">
            <a href="#" class="flex items-center mr-10">
                <img alt="IMG" src="../assets/Images/zhi-img.jpg" class="h-[58px]" />
            </a>
            <div class="hidden justify-between items-center md:flex md:w-auto md:order-1" id="mobile-menu-4">
                <div class="relative">
                    <i class="fa-solid fa-magnifying-glass absolute left-[16px] top-[12px] text-search"></i>
                    <input
                        type="text"
                        placeholder="Search"
                        id="base-input"
                        class="bg-searchinputcolor pl-12  border-0 text-gray-900 rounded block xl:w-[690px] md:w-[400px] h-[40px] p-1.5 dark:placeholder-gray-400 placeholder:text-base"
                    />
                </div>
            </div>
        </div>

        <i class="fa-regular fa-bell" data-modal-toggle="defaultModalbell"></i>

        <div id="defaultModalbell" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden  fixed xl:-right-[20%] left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
            <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
                <div class="relative bg-white xl:-right-[70%] xl:w-[400px] lg:-top-[170px] z-[40] rounded-lg shadow dark:bg-gray-700">
                    <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                            Notification
                        </h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    <div class="nav capitalize nav-pills flex items-center pl-7 border-b border-light   " id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
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

                    <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                        <button
                            data-modal-toggle="defaultModalbell"
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            I accept
                        </button>
                        <button
                            data-modal-toggle="defaultModalbell"
                            type="button"
                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                            Decline
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="hidden md:order-2 lg:flex">
            <router-link
                to="/login"
                class="w-[97px] h-[37px] flex justify-center items-center hover:text-btnHover hover:border-btnBorder text-darkTxt border bg-white ease-in-out duration-300 focus:ring-4 font-semibold rounded text-base mx-1 text-center mr-3 md:mr-0"
            >
                Log in
            </router-link>
            <router-link
                to="/signup"
                class="text-white w-[97px] h-[37px] flex justify-center items-center center bg-btn hover:bg-btnHover hover:bg-blue-800 font-semibold ease-in-out duration-300 rounded text-base ml-3 text-center mr-3 md:mr-0"
            >
                Sign up
            </router-link>
            <button
                data-collapse-toggle="mobile-menu-4"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-4"
                aria-expanded="false"
            >
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg>
                <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </button>
        </div>
    </div>
</nav>


</template>