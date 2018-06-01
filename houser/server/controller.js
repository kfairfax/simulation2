module.exports={
    read: (req, res)=>{
        const dbInstance=req.app.get('db');
        dbInstance.get_houses()
        .then(houses=>res.status(200).send(houses))
    },
    create: (req, res)=>{
        const{propertyname, address, city, state, zip}=req.body;
        const dbInstance=req.app.get('db');
        dbInstance.create_house([propertyname, address, city, state, zip])
        .then(house=>res.status(200).send('All good!'))
    },
    delete: (req, res)=>{
        const{params}=req;
        const dbInstance=req.app.get('db');
        dbInstance.delete_house([params.id])
        .then(house=>res.status(200).send('All good!'))

    }
   
}