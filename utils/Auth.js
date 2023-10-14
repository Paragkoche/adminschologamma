
import jsonwebtoken from 'jsonwebtoken'
import { verifyUser } from './verifyUser';
import jose from 'jose';
import { jwtVerify  }from 'jose';

const SECRET = process.env.SECRET

const secretKeyUint8 = Buffer.from(SECRET, 'base64');
// const secretKeyUint8 = encoder.encode(SECRET);
export const  signJWT =async(payload) =>{
const token = await jsonwebtoken.sign(payload , secretKeyUint8 , {algorithm:'HS256' ,expiresIn: '1d',})

return token
  }
  

 export const verifyJWT=async(token , host) => {


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




return {ok:true , msg:"Welcome to admin Pannel" }

} catch (error) {
      return  {ok:false ,msg:"invalid Auth token!" }
}


  }
  

