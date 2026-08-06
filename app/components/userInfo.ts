import { useState,useEffect } from "react";

export default function useUserInfo(){

    const [userDetails, setUserDetails]= useState({
        username:"",
        fullname:""
    })

    useEffect(()=>{
        const username = localStorage.getItem("username")
        const fullname = localStorage.getItem("fullname");
        
        setUserDetails((prev)=>({
            ...prev,
            username:username || "",
            fullname:fullname || ""
        }))
    },[])

    return userDetails

}
