const  {connect,db}  = require('./configs/db')
const app = require('./index')
const PORT = process.env.PORT  || 7000

app.listen(PORT,()=>{
try{ 
connect()
console.log('Database Connected',db)}
 catch(err){
 console.log({err:err.message})
}
 console.log('listeninig on PORT',PORT)
})