<template>
   <div>
     <div class="lg:w-[500px] md:w-[500px] sm:w-full w-full h-[100vh] pt-[95px]  mx-auto ">
          <div>
                <div class="h-15 w-[138px] text-center h-[34px] mx-auto mb-5">
                    <img alt="IMG" src="../assets/Images/zhi-img.jpg" class="h-[30px]"/>
                </div>
                <div class="w-full text-center mb-5">
                    <p class="font-light text-[27px]">Join Zhivago</p>
                </div>
                <div class="lg:w-[354px] md:w-[354px] sm:w-[354px] w-[90%] mx-auto mb-6">
                   <label for="email" class="cursor-pointer mb-4 font-semibold text-darkTxt">Email</label>
                   <input type="email" id="email" class="h-[47px] w-full mt-[11px] ease-in-out duration-200 rounded-sm border-bord text-inp focus:text-black"/>
                </div>
                <div class="lg:w-[354px] md:w-[354px] sm:w-[354px] w-[90%] mx-auto mb-10">
                   <label for="pwd" class="cursor-pointer mb-4 font-semibold text-darkTxt">Password</label>
                   <input type="password" id="pwd" class="h-[47px] w-full mt-[11px] ease-in-out duration-200 rounded-sm border-bord text-inp focus:text-black"/>
                </div>
                <div class="flex flex-col w-full justify-center items-center mb-10">
                  <div class="mb-6 w-[90%] text-center">
                        <router-link to="" class=" lg:w-max  md:w-max sm:w-max  w-full flex justify-center items-center mx-auto">
                            <button class="h-[47px] lg:w-[87px] md:w-[87px] sm:w-[87px] w-full  bg-btn hover:bg-btnHover border border-btnBorder rounded text-white font-semibold ease-in-out duration-200">Log in</button>
                        </router-link>
                    </div>            
                </div>
                <div class="text-center flex justify-center items-center mb-6">
                    <p class="text-[17px] text-light text-darkTxt">Don't have an account?<router-link to="/signup" class="text-btn font-semibold ml-[3px]">Sign up</router-link></p>
                </div>
                <div class="text-center">
                    <p><router-link to="/forgot-pwd"  class="text-darkGray font-semibold text-base">Forgot your password?</router-link></p>
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