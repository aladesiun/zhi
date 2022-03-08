<template>
        <nav class="bg-white border-gray-200 border px-2 lg:px-36 sm:px-4 py-1 h-[66px]">
    <div class="container flex  justify-between items-center mx-auto">
        <div class="flex justify-start items-center">
            <a href="#" class="flex items-center mr-10">
              <img alt="IMG" src="../assets/Images/zhi-img.jpg" class="h-[58px]"/>
            </a>  
            <div class="hidden justify-between items-center  md:flex md:w-auto md:order-1  " id="mobile-menu-4">
               <div class="relative">
                  <input type="text" placeholder="Search" id="base-input" class="bg-searchinputcolor pl-10 text-lg border-0 text-gray-900 text-sm rounded   block w-[676px] h-[40px] p-1.5 dark:placeholder-gray-400 placeholder:text-base"> 
              </div>
            </div>
        </div>
        <div class="flex md:order-2">
                <router-link
                width: 94px;
    height: 39px;
                    to="/login"
                    class="w-[94px]  text-black border bg-white hover:bg-blue-800 focus:ring-4  font-medium rounded text-sm   mx-1 text-center mr-3 md:mr-0 "
                >
                    Log in
                </router-link>
                <router-link
                    to="/signup"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  font-medium rounded text-sm  ml-3 text-center mr-3 md:mr-0"
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