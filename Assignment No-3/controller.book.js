const book=require('./models').book;

//select * from users;
exports.findAllBook=(req,resp)=>{
    //db.collection.find({where},{restriction})
    //1. step1 call the model
    //2. call the findall method may or may not take restriction
    book.findAll()
        .then(data=>{
                resp.send(data)
            })
            .catch(err=>{
                resp.status(500).send({message:"500 server error"});    
            })};

//select * from users where firstName='John';
exports.findBybookname=(req,resp)=>{
    const bookname=req.params.bookname;
    book.findAll({where: { "bookname": "War and Peace" } })
        .then(data=>{
                console.log(data);
                resp.send(data);
            }).catch(err=>{
                resp.status(500).send({message:"500 server error"});    
            });
};
//select * from users where id=1;
exports.findByPK=(req,resp)=>{
    // express.json() express.urlencoded()->body.id
    const id = req.params.id;
   book.findByPk(id)
        .then(data=>{
                resp.send(data)
            })
            .catch(err=>{
                resp.status(500).send({message:"500 server error"});    
            });
};