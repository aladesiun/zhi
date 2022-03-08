<template>
   <div>
     <div class="w-[500px] h-[100vh] border-red-800 border mx-auto ">
          <div class="mt-[120px]">
                <div class="h-15 w-[149px] text-center h-[34px] mx-auto mb-7">
                    <img alt="IMG" src="../assets/Images/zhi-img.jpg" class="h-[30px]"/>
                </div>
                <div class="w-full text-center mb-6">
                    <p class="font-light text-3xl">Log in to your account</p>
                </div>
                <div class="flex flex-col w-full justify-center items-center mb-10">
                        <div class="mb-6">
                        <button class="h-12 w-[300px] bg-btn hover:bg-btnHover border border-btnBorder rounded text-white font-semibold ease-in-out duration-200">Sign in with an email</button>
                        </div>
                        <div class="mb-6">
                            <router-link to="">
                            <button class="h-12 w-[300px]  bg-white  text-darkTxt hover:text-btnHover  border  hover:border-btnBorder rounded text-white font-semibold ease-in-out duration-200">Continue with Twitter</button>
                            </router-link>
                        </div>
                        <div>
                            <router-link to="">
                            <button class="h-12 w-[300px] bg-white  text-darkTxt hover:text-btnHover  border hover:border-btnBorder rounded text-white font-semibold ease-in-out duration-200">Continue with Facebook</button>
                            </router-link>
                        </div>
                </div>
                <div class="text-center flex justify-center items-center mb-5">
                    <p>Don't have an account?<router-link to="" class="text-btn font-semibold ml-[3px]">Sign up</router-link></p>
                </div>
                <div class="text-center">
                    <p><router-link to=""  class="text-darkGray font-semibold text-base">Forgot your password?</router-link></p>
                </div>
           </div>
     </div>
  </div>
</template>

<script>
export default {
   name:'login' 
}
</script>

<style scoped>

</style>