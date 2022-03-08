<template>
        <nav class="bg-white border-gray-200 border px-2 lg:px-5 sm:px-4 py-1 w-full h-[66px] fixed top-0">
    <div class="container flex  justify-between items-center my-[-2px] mx-auto max-w-[1290px]">
        <div class="flex justify-start items-center">
            <a href="#" class="flex items-center mr-10">
              <img alt="IMG" src="../assets/Images/zhi-img.jpg" class="h-[58px]"/>
            </a>  
            <div class="hidden justify-between items-center  md:flex md:w-auto md:order-1  " id="mobile-menu-4">
               <div class="relative">
                   <i class="fa-solid fa-magnifying-glass absolute left-[16px] top-[12px] text-search"></i>
                  <input type="text" placeholder="Search" id="base-input" class="bg-searchinputcolor pl-12 text-lg border-0 text-gray-900 rounded   block w-full h-[40px] p-1.5 dark:placeholder-gray-400 placeholder:text-base"> 
              </div>
            </div>
        </div>
        <div class="flex md:order-2">
                <router-link
                    to="/login"
                    class="w-[97px] h-[37px] flex  justify-center items-center hover:text-btnHover hover:border-btnBorder  text-darkTxt border bg-white ease-in-out duration-300 focus:ring-4  font-semibold rounded text-base   mx-1 text-center mr-3 md:mr-0 "
                >
                    Log in
                </router-link>
                <router-link
                    to="/signup"
                    class="text-white w-[97px] h-[37px] flex  justify-center items-center center bg-btn hover:bg-btnHover  hover:bg-blue-800  font-semibold ease-in-out duration-300  rounded text-base  ml-3 text-center mr-3 md:mr-0"
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