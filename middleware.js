// import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

// const headerInstance =  headers()?.get("auth-token")
import { getUser } from './utils/getUser'
import { verifyJWT } from './utils/Auth'

// import {User} from '@/models/user';

export  const middleware =async (req)=>{


    const  regax = new RegExp("/api/*")
//   const ww =  getUser()
//   console.log(ww)
console.log(req)
// console.log()
    if(regax.test(req.url)){

    console.log("middleware call ")
    // console.log("your call by harish from "+req.method)
    // // console.log(req)
    // console.log(req)

    if((req.method =="POST" || req.method =="PUT"||req.method =="DELETE" )&& ! req.nextUrl.href.endsWith("/api/user/login") && ! req.nextUrl.href.endsWith("/api/upload")){
        const authTOken =req.headers.get('auth-token')
        // let user ;
        // const funct = async()=>{
        //  user =  await getUser(authTOken)
        //  console.log(user)

        // }
        // funct();

        console.log("Ima here now")
        console.log("this is my authtoken " +authTOken)
        if(!authTOken || authTOken ===null || authTOken =="" || authTOken.trim().length ===0){
            return new Response(JSON.stringify({msg:"Invalid Authentication Token" , type:'error',ok:false}))

        }
        const host = req.nextUrl.origin
        const user1 =await  verifyJWT(authTOken ,host)

       if(! user1.ok ){
        return new Response(JSON.stringify({msg:user1.msg, type:'error',ok:false}))
       }
       

       



    }


}
return NextResponse.next()

}

// export const config = {
//     matcher:'api/:path*'
// }