import React,{useState,useEffect} from "react";
import Link from "next/link";
//IMPORT ICONS
import {MdNotifications} from 'react-icons/md';
import {BsSearch} from "react-icons/bs";
import {CgMenuLeft,CgMenuRight} from "react-icons/cg";

//INTERNAL IMports
import Style from "./Navbar.module.css";
import {Discover,HelpCenter,Notification,Profile,Sidebar} from "./index";
import {Button} from "../componentindex";
import {images} from "../../img"; 


const Navbar = () => {
    //USE STATE
    const[Discover , setDiscover]= useState(false);
    const[help , setHelp]= useState(false);
    const[notification , setNotification]= useState(false);
    const[profile , setProfile]= useState(false)
    const[openSideMenu , setOpenSideMenu] = useState(false);

    const openMenu = (e)=>{
        const btnText = e.target.innerText;
        if(btnText == "Discover"){
            setDiscover(true);
            setHelp(false);
            setNotification(false);
            setProfile(false);
        }
        else if(btnText == "Help Center"){
            setDiscover(false);
            setHelp(true);
            setNotification(false);
            setProfile(false);
        }
        else {
            setDiscover(false);
            setHelp(false);
            setNotification(false);
            setProfile(false);
        }
    }

    const openNotification = ()=>{
        if(!notification){
            setNotification(true)
            setDiscover(false)
            setHelp(false)
            setProfile(false)
        }
        else{
            setNotification(false)
        }

    }
    const openProfile = () =>{

        if(!profile){
            setProfile(true)
            setHelp(false)
            setDiscover(false)
            setNotification(false)
        }
        else{
            setProfile(false)

        }
    }

    const openSidebar = ()=>{
        if(!openSideMenu){
            setOpenSideMenu(true)
        }
        else{
            setOpenSideMenu(false)
        }

    }

    return(
       <div className = {Style.navbar}>
        <div className= {Style.navbar_container}>
            <div className= {Style.navbar_container_left}>
                {/* <div className= {Style.logo}>
                    <Image 
                        src = {images.logo} 
                        alt ="NFT MARKETPLACE" 
                        width = {100}
                        height = {100}
                    />
                </div> */}
                <div className= {Style.navbar_container_left_box_input}>
                    <div className = {Style.navbar_container_left_box_input_box}>
                        <input type='text' placeholder='Search NFT'/>
                        <BsSearch onClick={()=>{}} className = {Style.search_con}></BsSearch>
                        
                    </div>
                </div>
            </div>

            
            <div className= {Style.navbar_container_right}>
                {/* DISCOVER MENU */}
                <div className= {Style.navbar_container_right_discover}>
                    
                    <p onClick={(e)=>openMenu(e) }>Discover</p>
                    {Discover && (
                        <div cLassName={Style.navbar_container_right_discover_box}>
                        Discover </div>
                    )}
                </div>
                {/* HELP CENTER */}
                <div cLassName={Style.navbar_container_right_help}>
                    <p onClick={(e)=> openMenu(e)}>HelpCenter</p>
                    {help && (
                        <div className={Style.navbar_container_right_help_box}>
                            <HelpCenter/>
                        </div>
                    )}
                </div>
                {/* NOTIFICATION */}
                <div className={Style.navbar_container_right_notify}>
                    <MdNotifications className={Style.notify} onClick={()=>openNotification()} />
                    {notification && <Notification/>}
                </div>
                {/* CREATE BUTTON SECTION */}
                <div className={Style.navbar_container_right_button}>
                    <Button btnText = "Create"/>
                </div>
                {/* USER PROFILE */}
                <div className={Style.navbar_container_right_profile_box}>
                    <div className={Style.navbar_container_right_profile}>
                        
                        <img
                        src= {images.logo}
                        alt ="Profile" 
                        width={40} 
                        height={40} 
                        onClick =  {()=> openProfile()}
                        className={Style.navbar_container_right_profile}
                        />
                        {profile && <Profile/>}
                    </div>
                </div>
                {/* MENU BUTTON */}
                <div className={Style.navbar_container_right_menuBtn}>
                    <CgMenuRight className={Style.menuIcon}
                    onClick= {() => openSidebar()}
                    />

                </div>

            </div>
        </div>

        {/* SIDEBAR */}
        { openSideMenu && (
            <div className= {Style.Sidebar}>
                <Sidebar setOpenSideMenu ={setOpenSideMenu}/>
            </div>

        )}
       </div>

    );
};

export default Navbar;
