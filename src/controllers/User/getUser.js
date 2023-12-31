import user from '../../models/userModel.js'

const getUser = async (req, res) => {
    try{
        const [rows, fields] = await user.get(req.body.id)
        if(rows.length === 0) {
            res.status(404).json({message: `User id: ${req.body.id} Not Found!`})
        } else {
            delete rows[0].pass
            res.json(rows[0])
        }

    }catch(err){
        console.log(err)
        res.status(500).json({message: 'Server Error'})
    }
    
    res.json(users)
}

export default getUser