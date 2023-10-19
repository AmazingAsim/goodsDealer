

let url='mongodb+srv://AmazingAsim:AmazingAsim3000@amazingasim.tqrgz.mongodb.net/goodsDealer?retryWrites=true&w=majority';

let mongoose=require('mongoose');
let dbconnect=()=>{
    return mongoose.connect(url).then((res)=>{
        console.log("\n mongodb is connected")
    }).catch(err=>{console.log('error in config'+err)});
}
module.exports={dbconnect}