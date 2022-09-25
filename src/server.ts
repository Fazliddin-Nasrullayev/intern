 import*as express from "express";
 import router from "./routs/routes"
 const PORT = process.env.PORT || 1251

 
 const app:express.Application = express();

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)

app.listen(PORT, function(){
console.log(`http://localhost:${PORT}`)
});
