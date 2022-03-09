<template>
<nav class="bg-white border-gray-200 border px-2 lg:px-5 sm:px-4 py-1 w-full h-[66px] fixed top-0">
    <div class="container flex justify-between items-center my-[-2px] mx-auto max-w-[1290px]">
        <svg class="w-6 h-6 lg:hidden block togg-sidebar" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
        </svg>

        <div class="flex justify-center lg:justify-start items-center">
            <a href="#" class="flex items-center mr-10">
                <img alt="IMG" src="../assets/Images/zhi-img.jpg" class="h-[58px]" />
            </a>
            <div class="hidden justify-between items-center md:flex md:w-auto md:order-1" id="mobile-menu-4">
                <div class="relative">
                    <i class="fa-solid fa-magnifying-glass absolute left-[16px] top-[12px] text-search"></i>
                    <input type="text" placeholder="Search" id="base-input" class="bg-searchinputcolor pl-12 text-lg border-0 text-gray-900 rounded block xl:w-[690px] md:w-[400px] h-[40px] p-1.5 dark:placeholder-gray-400 placeholder:text-base" />
                </div>
            </div>
        </div>
        <div class="profile block lg:hidden">
                   <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" 
                   class="text-white rounded-[50%]  font-medium bg-[#6641d8] text-sm w-7 h-7 text-center  flex  justify-center items-center" type="button">AT </button>
        <div id="dropdownDivider" class="hidden z-10 w-60 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <ul class="py-1" aria-labelledby="dropdownDividerButton">
            <div class="flex items-center bg-homebg px-2 py-2 -mt-2 w-full">
                <li class="text-white rounded-[50%] mr-2 font-medium bg-[#6641d8] text-sm w-7 h-7 text-center  flex  justify-center items-center">AT</li>
                <span class="capitalize text-lg font-normal">Aladesiun temitope</span>
            </div>
            <li ></li>
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