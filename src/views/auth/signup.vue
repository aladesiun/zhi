<template>
    <div>
          <div class="lg:w-[500px] md:w-[500px] sm:w-full w-full h-[100vh] pt-[185px]  mx-auto ">
          <div>
                <div class="h-15 w-[138px] text-center h-[34px] mx-auto mb-5">
                    <img alt="IMG" src="../auth/../../assets/Images/zhi-img.jpg" class="h-[30px]"/>
                </div>
                <div class="w-full text-center mb-5">
                    <p class="font-light text-[27px]">Join Zhivago</p>
                </div>
                <div class="flex flex-col w-full justify-center items-center mb-16">
                        <div class="mb-6 w-[90%] text-center">
                            <router-link to="/signup-email" class=" lg:w-max  md:w-max sm:w-max  w-full flex justify-center items-center mx-auto">
                              <button class="h-[46px] lg:w-[300px] md:w-[300px] sm:w-[300px] w-full  bg-btn hover:bg-btnHover border border-btnBorder rounded text-white font-semibold ease-in-out duration-200">Sign in with an email</button>
                            </router-link>
                        </div>
                        <div class="mb-6 w-[90%] text-center">
                            <router-link to="" class="lg:w-max md:w-max sm:w-max w-full flex justify-center items-center mx-auto">
                               <button class="h-[46px] lg:w-[300px] md:w-[300px] sm:w-[300px] w-full bg-white text-darkTxt hover:text-btnHover  hover:border-btnBorder  border  rounded  font-semibold ease-in-out duration-200">Continue with Twitter</button>
                            </router-link>
                        </div>
                        <div class="w-[90%] text-center">
                            <router-link to="" class="lg:w-max  md:w-max sm:w-max w-full flex justify-center items-center mx-auto">
                              <button class="h-[46px] lg:w-[300px] md:w-[300px] sm:w-[300px] w-full bg-white text-darkTxt hover:text-btnHover  border hover:border-btnBorder rounded  font-semibold ease-in-out duration-200">Continue with Facebook</button>
                            </router-link>
                        </div>
                </div>
                <div class="text-center flex justify-center items-center mb-6">
                    <p class="text-[17px] text-light text-darkTxt">Have an account?<router-link to="/login" class="text-btn font-semibold ml-[3px]">Log in</router-link></p>
                </div>      
           </div>
      </div>
    </div>
</template>

<script>
export default {
   name:'signup'
}
</script>

<style>

</style>