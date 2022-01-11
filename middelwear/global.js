const d=new Date()

const day=d.getDay()

const heure=d.getHours()

const global=(req,res,next)=>{
   
    if ((day===0 || day===6) || (heure <9 || heure> 17))
    {
        return res.send("WE ARE CLOSED")
    }

next()
}
module.exports=global