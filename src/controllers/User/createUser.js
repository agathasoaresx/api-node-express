import user from "../../models/userModel.js" 

const createUser = async (req, res) => {
   try{
        const res = await user.create(req.body)
        console.log(result)
        const [result] = res

        if(result.affectedRows === 1){
            res.status(201).json({message: 'User created',
            user:
                {
                    id: result.insertId,
                    ...user
                 }
            })
        }
    

   }catch(err){
         console.log(err)
         res.status(500).json({message: "Internal server error"})
   }
    
}

export default createUser