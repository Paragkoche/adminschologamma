"use client";
import DataContext from '@/context/data/DataContext'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'


import React from 'react'

export default function Authlogin() {
  const dd = useContext(DataContext)
  const router =useRouter();
  
    useEffect(() => {
      // const getUser =()=>{
        console.log("you are in authlogin")
        console.log(dd.auth)
        if(dd.auth.user===false){
           router.push('/join/login/')
           console.log("you push in home page")
            
        }
    // }
    // getUser();
    }, [])
    

  return (
    <div>
      
    </div>
  )
}
