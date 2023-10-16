import { verify } from "jsonwebtoken";
import { jwtVerify } from "jose";
export const getUser = async (token) => {
  const SECRET = process.env.SECRET;
  console.log("your secret is  " + SECRET);
  // const { payload, protectedHeader } =await jwtVerify(token , SECRET)
  // const dd =await  verify(token , SECRET)
  // console.log("Im in get user  "+dd)
  // return !data?"ok null":data
  return 1;
  // const token =await jwt.sign(userid ,SECRET)
};
