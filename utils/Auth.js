// import { JWT, JWK,JWS, JWKS } from 'jose';
// import jwt from 'jsonweb'
import jsonwebtoken from 'jsonwebtoken'
import { verifyUser } from './verifyUser';
// import { JWT } from "next-auth/jwt";
import jose from 'jose';
const { jwtVerify } = require('jose');
const { jwtSign } = require('jose');
// const { TextEncoder } = require('util');
// import User from '@/models/user';
// import  JWK from 'jose/dist/browser/jwk'
// const 
const SECRET = process.env.SECRET
// const encoder = new TextEncoder();

const secretKeyUint8 = Buffer.from(SECRET, 'base64');
// const secretKeyUint8 = encoder.encode(SECRET);
export const  signJWT =async(payload) =>{
const token = await jsonwebtoken.sign(payload , secretKeyUint8 , {algorithm:'HS256' ,expiresIn: '1d',})
// const token = await jwtSign(payload, SECRET, {
//   algorithm: 'HS256', 
//   expiresIn: '1h', // Set the token expiration time (e.g., 1 hour)
// });
return token
  }
  

 export const verifyJWT=async(token , host) => {

    // const data =  jsonwebtoken.verify(token ,SECRET)
    // console.log("token in auth page " +token)
    try {
      

    const { payload, protectedHeader } =await jwtVerify(token ,secretKeyUint8 ,{
      algorithm: 'HS256', 
      
    })
    
    console.log("thius is my vcerfy  "+ payload.id)

    const verification =await verifyUser(payload.id ,host)
console.log("the verify user is " +verification)
if(verification == false){
return {ok:false , msg:"Invalid User" }

}
// const check = await fetch(`/api/user/${payload.id}`)

// const res = await check.json()
// console.log("This is my auth page "+res.msg)


// if(res.ok == false){
//   return  {ok:false ,msg:"invalid Auth token!" }

// }

// console.log(check.msg)



return {ok:true , msg:"Welcome to admin Pannel" , data:payload.id}
//   console.log(dd)

} catch (error) {
      return  {ok:false ,msg:"invalid Auth token!" }
}
// console.log("your data is from the app")
// return dd?dd:null

  }
  

  // jwt: {
  //   encode: ({ secret, token }) => {
  //     const encodedToken = jsonwebtoken.sign(
  //       {
  //         ...token,
  //         iss: "grafbase",
  //         // exp: Math.floor(Date.now() / 1000) + 60 * 60,
  //       },
  //       secret
  //     );
      
  //     return encodedToken;
  //   },
  //   decode: async ({ secret, token }) => {
  //     const decodedToken = jsonwebtoken.verify(token!, secret);
  //     return decodedToken as JWT;
  //   },
  // },