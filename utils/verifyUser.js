export const verifyUser = async(id , host)=>{

    try {
        
        // const id = ""
        const res = await fetch(`${host}/api/user/${id}`)
const data =await res.json()
console.log(data)

return data.ok
    } catch (error) {
        console.log(error)
        return  false
    }
}