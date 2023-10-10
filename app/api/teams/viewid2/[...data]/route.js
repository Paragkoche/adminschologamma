import { connectToDB } from "@/utils/database";
import Teams from "@/models/teams";

const filderByIdFunc =(ids , data)=>{ 
    const data12 = data.filter(item =>item.type ==ids)
return data12
}

export const GET = async(req,{params} )=>{
//  const ccc = params 
const query = params.data
const year = query[0]
const ids = query[1]

    try {
        await connectToDB() ;
        console.log("Database connected Sucesssfully")
    
    const check = await Teams.findOne({year:year})
    if(!check){
        return new Response(JSON.stringify({msg:"Team for "+year+" are not exist!" , ok:false}) , {status:200})
    }

    // for filter the data accroding to the id 
    const data2 = check.data
    const data = filderByIdFunc(ids , data2)
    return new Response(JSON.stringify({msg:"Data fetch successFully" ,data:data , ok:true}) , {status:200})
    
    } catch (error) {
    console.log(error)
    console.log(error)
        return new Response(JSON.stringify({ ok:false  , error:error,msg:"Failed to fetch the prompt for user"}))
    }
    
    }
    