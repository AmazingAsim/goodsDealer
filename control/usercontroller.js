let userrepo=require('../repo/userrepo');
const bcrypt = require('bcrypt');
exports.findAlluser=async (req,res)=>{
    let products= await userrepo.finduser()
    res.json(products)
};

  
exports.adduser=async (req,res)=>{
    let userobj=req.body;
    console.log(userobj);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userobj.password, salt);
    userobj.password = hashedPassword;
    try{
        let user=await userrepo.adduser(userobj);
        res.send({res:'added smoothly'})
     
    }
    catch(err){
        res.send(err);
        console.log(err)
    }
   
}
  
exports.login=async (req,res)=>{
    let userobj=req.body;
    console.log(userobj);
    try{
        let user=await userrepo.login(userobj);
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
          }
          const isPasswordValid = await bcrypt.compare(userobj.password, user.password);

          if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
          }
      
          res.json({ message: 'Login successful' });
     
    }
    catch(err){
        res.send(err);
        console.log(err)
    }
   
}


exports.deleteuser=async (req,res)=>{
    let pId=req.params.id;
    try{
        console.log('controller bola'+pId)
        let result=await userrepo.deleteuser(pId);
        if(result.acknowledged){
            res.send({message:true,...result})
        }

    }
    catch(err){
        console.log(err);
res.send(err);
    }
}

exports.updateuser=async (req,res)=>{
    let user=req.body;
    try{
        let result= await userrepo.updateuser(user);
        res.send(result)
    }
    catch(err){
        console.log(err)
      res.send(err);
    }
}
