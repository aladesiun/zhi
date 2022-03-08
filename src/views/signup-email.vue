<template>
   <div>
     <div class="lg:w-[500px] md:w-[500px] sm:w-full w-full h-[100vh] pt-[11px]  mx-auto ">
          <div>
                <div class="h-15 w-[138px] text-center h-[34px] mx-auto mb-5">
                    <img alt="IMG" src="../assets/Images/zhi-img.jpg" class="h-[30px]"/>
                </div>
                <div class="w-full text-center mb-4">
                    <p class="font-light text-[27px]">Join Zhivago</p>
                </div>
                  <div class="lg:w-[347px] md:w-[347px] sm:w-[347px] w-[90%] mx-auto mb-6">
                   <label for="firstname" class="cursor-pointer mb-4 font-semibold text-darkTxt">Full name</label>
                   <input type="email" id="firstname" class="h-[47px] w-full mt-[11px] ease-in-out duration-200 rounded-sm border-bord text-inp focus:text-black"/>
                </div>
                <div class="lg:w-[347px] md:w-[347px] sm:w-[347px] w-[90%] mx-auto mb-6">
                   <label for="email" class="cursor-pointer mb-4 font-semibold text-darkTxt">Email</label>
                   <input type="email" id="email" class="h-[47px] w-full mt-[11px] ease-in-out duration-200 rounded-sm border-bord text-inp focus:text-black"/>
                </div>
                <div class="lg:w-[347px] md:w-[347px] sm:w-[347px] w-[90%] mx-auto mb-5">
                   <label for="pwd" class="cursor-pointer mb-4 font-semibold text-darkTxt">Password</label>
                   <input type="password" id="pwd" class="h-[47px] w-full mt-[11px] ease-in-out duration-200 rounded-sm border-bord text-inp focus:text-black"/>
                </div>
                <div class="mb-7 flex justify-center items-center text-center">
                    <div class="flex justify-start items-center lg:w-[347px] md:w-[347px] sm:w-[347px] w-[80%]  mx-auto">
                      <input id="checkbox-all" type="checkbox" class=" mr-1 cursor-pointer w-4 h-4 text-blue-600 bg-white rounded-sm focus:rounded-sm border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2">
                      <p class="text-base">i accept the <router-link to="" class="text-btn font-semibold">terms of services </router-link> & <router-link to="" class="text-btn font-semibold"> privacy policy</router-link></p>
                    </div>  
                </div>
                <div class="">
                   <div class="border border-lite h-[74px] w-[300px] bg-liteGray mx-auto">
                      <div class="block">
                         <p class="txt-">verification challenge expired. Check the <br> checkbox again.</p>
                      </div>
                      <div>

                      </div>
                   </div>
                </div>
                <div class="flex flex-col w-full justify-center items-center mb-7">
                  <div class="mb-6 w-[90%] text-center">
                        <router-link to="" class=" lg:w-max  md:w-max sm:w-max  w-full flex justify-center items-center mx-auto">
                            <button class="h-[47px] lg:w-[87px] md:w-[87px] sm:w-[87px] w-full  bg-btn hover:bg-btnHover border border-btnBorder rounded text-white font-semibold ease-in-out duration-200">Sign up</button>
                        </router-link>
                    </div>            
                </div>
                <div class="text-center w-full mb-9">
                    <p class="text-btn text-darkTxt"><router-link to="/signup"><i class="fa-solid fa-left-long mr-2"></i>Back</router-link></p>
                </div>
                 <div class="text-center flex justify-center items-center mb-10">
                    <p class="text-[17px] text-light text-darkTxt">Have an account?<router-link to="/login" class="text-btn font-semibold ml-[3px]">Log in</router-link></p>
                </div>
           </div>
     </div>
  </div>
</template>

<script>
export default {
   name:'login-email' 
}
</script>

<style scoped>

</style>