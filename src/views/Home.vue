<template>
  <div class="home bg-homebg h-[100vh]" data-modal-toggle="defaultModal">
    <div>
      <div class="home-content xl:max-w-screen-xl mx-auto mt-0 ml-2 xl:ml-[450px] pt-[82px]" >
        <div class="grid grid-cols-3 mx-auto">
          <div class="feed-content sb lg:col-span-2 col-span-3 w-full xl:w-[92%] h-[100vh] overflow-y-scroll overscroll-none ">
            <div class="content-head flex space-between ">
              <p class="text-2xl text-semibold">Home</p>
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
            <div class="feed bg-white h-auto mb-4 shadow">
              <div class="lg:px-7 lg:py-8 px-2 py-3">
                <div class="feed-head flex space-between align-center mb-4">
                  <router-link to="">
                    <div class="pro-img rounded-[50%] h-10 w-10 cursor-pointer bg-black mr-2"><img alt="IMG" src="../views/../assets/Images/zhi-ing.jpg" class="rounded-[50%]"></div>
                  </router-link>
                  <div class="name-details">
                    <div class="flex space-between">
                      <p class="capitalize text-[14px] font-semibold ">gabrielle Brunson</p>
                     <div>
                        <span class="feed-tag whitespace-nowrap bg-btn text-white font-bold text-[14px] px-2 rounded uppercase mx-1">ADMIN</span>
                      <span class="feed-tag whitespace-nowrap bg-btn text-white font-bold text-[14px] px-2 rounded uppercase mx-1 mr-2">🤗hi i'm new here</span>
                     </div>
                      <span class="feed-date text-[13px] font-lighter text-inp"><router-link to=""> 25 days ago</router-link></span>
                    </div>
                    <p class="feed-address text-[12px] font-lighter text-inp">Posted in Las vegas singles</p>
                  </div>
                  <p class="ml-auto px-2 text-inp hover:text-black">share</p>
                </div>
                <div class="mb-4">
                  <p class="text-2xl font-semibold text-darkTxt">TGIF!!!!!!!!</p>
                </div>
                <div class="w-[400px] mb-10 h-auto">
                  <p class="mb-5">😍</p>
                  <div class="w-full h-[344px] cursor-zoom-in">
                    <img alt="IMG" src="../views/../assets/Images/kzi.gif" class="h-full  w-[300px ] md:w-full rounded"/>
                  </div>
                </div>
                <div class="flex justify-start items-center">
                  <div class="rounded-[50%] h-6 w-6 cursor-pointer bg-black mr-2" >
                    <img  alt="IMG" src="../views/../assets/Images/zhi-ing.jpg" class="rounded-[50%]">
                  </div>
                  <p class="text-inp text-xs">Liked by Klajdi</p>
                </div>
              </div>

              <div class="w-full border-t h-[60px] pt-3 border-b border-homebg">
                <div class=" flex justify-between px-3 items-center">
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
            <div class="feed bg-white h-auto mb-4 shadow">
              <div class="px-7 py-8">
                <div class="feed-head flex space-between align-center mb-4">
                  <router-link to="">
                    <div class="pro-img rounded-[50%] h-10 w-10 cursor-pointer bg-black mr-2"><img alt="IMG" src="../views/../assets/Images/zhi-ing.jpg" class="rounded-[50%]"></div>
                  </router-link>
                  <div class="name-details">
                    <div class="flex space-between">
                      <p class="capitalize text-[14px] font-semibold ">gabrielle Brunson</p>
                     
                      <span class="feed-date text-[13px] font-lighter text-inp"><router-link to=""> 25 days ago</router-link></span>
                    </div>
                    <p class="feed-address text-[12px] font-lighter text-inp">Posted in Las vegas singles</p>
                  </div>
                  <p class="ml-auto px-2 text-inp hover:text-black">share</p>
                </div>
                <div class="mb-4">
                  <p class="text-2xl font-semibold text-darkTxt">TGIF!!!!!!!!</p>
                </div>
                <div class="w-[400px] mb-10 h-auto">
                  <p class="mb-5">😍</p>
                  <div class="w-full h-[344px] cursor-zoom-in">
                    <img alt="IMG" src="../views/../assets/Images/kzi.gif" class="h-full  w-[300px] md:w-full rounded"/>
                  </div>
                </div>
                <div class="flex justify-start items-center">
                  <div class="rounded-[50%] h-6 w-6 cursor-pointer bg-black mr-2" >
                    <img  alt="IMG" src="../views/../assets/Images/zhi-ing.jpg" class="rounded-[50%]">
                  </div>
                  <p class="text-inp text-xs">Liked by Klajdi</p>
                </div>
              </div>

              <div class="w-full border-t h-[60px] border-t pt-3 border-b border-homebg">
                <div class=" flex justify-between px-3 items-center">
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

          <div class="notif ml-5 hidden lg:block w-[70%] xl:-ml-5 ml-5">
            <div>
               <div class="text-white">
                    <button class="block mb-10 w-full  text-white py-3 bg-btn  hover:text-black ease-in-out duration-200">New post</button>
                  </div>

              <div class="bg-white px-4 py-4">
                <p class="text-sm font-bold">Get started</p>
                <div class="list ">
                  <ul>
                    <li class="my-2">
                      <a href="" class="text-lg text-inp">
                        <input id="remember" aria-describedby="remember" type="checkbox"  class="chkbox-green mr-2 w-4 h-4  bg-gray-50 rounded-[50%] border border-gray-300 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800" required>
                        <span>Fill out your profile</span>
                    </a>
                    </li>
                    <li class="mt-2">
                      <a href="" class="text-lg text-inp">
                        <input id="remember" aria-describedby="remember" type="checkbox"  class="chkbox-green mr-2 w-4 h-4  bg-gray-50 rounded-[50%] border border-gray-300 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800" required>
                        <span>Set a profile picture</span>
                    </a>
                    </li>
                    <li class="mt-2">
                      <a href="" class="text-lg text-inp">
                        <input id="remember" aria-describedby="remember" type="checkbox"  class="chkbox-green mr-2 w-4 h-4  bg-gray-50 rounded-[50%] border border-gray-300 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800" required>
                        <span>Join 3 spaces</span>
                    </a>
                    </li>
                    <li class="mt-2">
                      <a href="" class="text-lg text-inp">
                        <input id="remember" aria-describedby="remember" type="checkbox"  class="chkbox-green mr-2 w-4 h-4  bg-gray-50 rounded-[50%] border border-gray-300 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800" required>
                        <span>Add a comment</span>
                    </a>
                    </li>
                    <li class="mt-2">
                      <a href="" class="text-lg text-inp">
                        <input id="remember" aria-describedby="remember" type="checkbox"  class="chkbox-green mr-2 w-4 h-4  bg-gray-50 rounded-[50%] border border-gray-300 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800" required>
                        <span>Create a post</span>
                    </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
}

}
</script>
