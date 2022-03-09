<template>
  <div>
    <nav class="bg-white border-gray-200 border px-2 lg:px-5 sm:px-4 py-1 w-full h-[66px] fixed top-0">
        <div class="container flex justify-between items-center my-[-2px] mx-auto max-w-[1290px]">
            <svg class="w-6 h-6 lg:hidden block togg-sidebar" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>

            <div class="flex justify-center lg:justify-start items-center">
                <a href="#" class="flex items-center mr-10">
                    <!-- <img alt="IMG" src="../assets/Images/zhi-img.jpg" class="h-[58px]" /> -->
                </a>
                <div class="hidden justify-between items-center md:flex md:w-auto md:order-1" id="mobile-menu-4">
                    <div class="relative">
                        <i class="fa-solid fa-magnifying-glass absolute left-[16px] top-[12px] text-search"></i>
                        <input type="text" placeholder="Search" id="base-input" class="bg-searchinputcolor pl-12 text-lg border-0 text-gray-900 rounded block xl:w-[690px] md:w-[400px] h-[40px] p-1.5 dark:placeholder-gray-400 placeholder:text-base" />
                    </div>
                </div>
            </div>
            <div class="menu flex items-center space-x-8 w-[200px]">
                <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="text-black text-center inline-flex items-center " type="button">
                <i class="fa-regular fa-bell"></i>
                </button>
                <button id="msg-icon">
                    <i class="far fa-comments-alt"></i>
                </button>
                <button @click="openProfileMenu">
                    <!-- <img src="../assets/Images/dp.jpeg"> -->
                </button>
            </div>
        </div>
    </nav>
    <div class="profileMenu" ref="ProfileMenu">
        <div class="container">
            <div class="profile-details">
                <!-- <img src="../assets/Images/dp.jpeg"> -->
                <p class="username">Black Girl Wonder</p>
            </div>
            <ul>
                <li><a href="#">My Profile</a></li>
                <li><a href="#">Edit Profile</a></li>
                <li><a href="#">Notifications</a></li>
                <li><a href="#">Authentication</a></li>
            </ul>
            <div id="signOut">
                <a href="#">Sign Out</a>
            </div>
        </div>
    </div>
    <main>
        <div class="container">
            <div class="messages">
                    <div class="messages-header">
                        <div class="con">
                            <h4>Messages</h4>
                            <a href="#"><i class="fal fa-comment-alt-medical"></i></a>
                        </div>
                    </div>
            </div>
            <div class="message">
                <div class="message-sender">
                    <div class="con">
                        <p class="sender-name">
                            <a href="#">Aladesiun Temitope</a>
                        </p>
                        <p class="message-time">
                            Active 10 mins ago
                        </p>
                    </div>
                </div>
            </div>
            <div class="profile">
                <div class="container">
                    <div class="profile-pic">
                        <!-- <img src="../assets/Images/avatar.png" alt=""> -->
                    </div>
                    <p class="name">Aladesiun Temitope</p>
                    <a href="#">View Profile</a>
                </div>
            </div>
        </div>
    </main>
  </div>
</template>

<script>
export default {
 methods:{
     openProfileMenu(){
         this.$refs.ProfileMenu.classList.toggle('show')
     }
 }
}
</script>

<style lang="scss" scoped>
nav{
    .container{
        .menu{
            justify-self: flex-end;
            button{
                img{
                    width: 30%;
                    border-radius: 50%;
                }
            }
        }
    }
}

.profileMenu.show{
    display: block;
}

.profileMenu{
    display: none;
    position: absolute;
    top: 60px;
    right: 10%;
    width: 20%;
    background-color: #fff;
    z-index: 200;
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.75);
    .container{
        .profile-details{
            background-color: #F7F9FB;
            display: flex;
            align-items: center;
            gap: 20px;
            padding:15px 10px;
            border-bottom: 1px solid #EAEAEA;
            img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
            .username{
                font-weight: bold;
                font-size: 18px;
            }
        }
        ul{
            padding: 10px 0;
            li{
                list-style: none;
                padding: 5px 0;
                width: 90%;
                margin: 0 auto;
                a{
                    color: #8E9CAF;
                    font-size: 15px;
                }
            }
        }
        #signOut{
            width: 100%;
            border-top: 1px solid #EAEAEA;
            font-size: 15px;
            padding: 10px;
        }
    }
}
main{
    background-color: #F7F9FB;
    width: 100%;
    min-height: 100vh;
    padding-top: 100px;
    padding-bottom:10px;
    .container{
        width: 90%;
        margin: 0 auto;
        background-color:#fff;
        min-height: 75vh;
        display: flex;
        align-items: flex-start;
        .messages{
            min-height: 75vh;
            width: 25%;
            border-right: 1px solid #EAEAEA;
            .messages-header{
                height: 60px;
                width: 100%;
                border-bottom: 1px solid #EAEAEA;
                .con{
                    width: 90%;
                    height: 100%;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            }
        }
        .message{
            width:50%;
            .message-sender{
                height: 60px;
                width: 100%;
                border-bottom: 1px solid #EAEAEA;
                .con{
                    width: 90%;
                    margin: 0 auto;
                    .sender-name{
                        color: #3B3B3B;
                        font-size: 22px;
                        font-weight: 600;
                    }
                    .message-time{
                        color: #8E9CAF;
                        font-size: 15px;
                        font-weight: 600;
                    }
                }
            }
        }
        .profile{
            width: 25%;
            border-left: 1px solid #EAEAEA;
            .container{
                width:90%;
                margin: 0 auto;
                padding-top: 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
                img{
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                }
                .name{
                    text-align: center;
                    font-size: 30px;
                    font-weight: bold;
                    color: #3B3B3B;
                }
                a{
                    background-color: #E3E4E7;
                    color: #3B3B3B;
                    text-decoration: none;
                    font-weight: 600;
                    width: 100%;
                    text-align: center;
                    padding: 10px 0;
                }
            }
        }
    }
}
</style>