module.exports={
    read: (req, res)=>{
        const dbInstance=req.app.get('db');
        dbInstance.get_houses()
        .then(houses=>res.status(200).send(houses))
    }
   
}