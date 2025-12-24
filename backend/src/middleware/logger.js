const logger = (req,res,next)=>{
  console.log(`Requsest: ${req.method} / "${req.url}"\n`)
  next()
}

export default logger