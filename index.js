let express=require('express');
let app=express();
let port=process.env.PORT || 8080;
let router=require('./router/user_route')
let product_route=require('./router/product_route')
let db=require('./config/config');
let cors= require('cors');
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin:"*",
    methods:['POST','PUT','PATCH','DELETE']
}))
db.dbconnect()
app.use(express.static('./views'));
app.use('/api',router);
app.use('/products',product_route);

app.listen(port,()=>{
    console.log('server is running on port '+port);
})


