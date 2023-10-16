import User from "@/models/user";
import { connectToDB } from "@/utils/database";
export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    console.log("id pass in route is " + params.id);
    const check = await User.findById(params.id);
    // const check = await res.json()
    console.log(check);
    if (!check) {
      return new Response(
        JSON.stringify({ msg: "User not Found 12", type: "error", ok: false }),
      );
    }
    return new Response(
      JSON.stringify({ msg: "user are verified", type: "success", ok: true }),
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ msg: "User not Found", type: "error", ok: false }),
    );
  }
};
