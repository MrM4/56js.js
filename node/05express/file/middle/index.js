

module.exports=(req,res,next)=>{
    res.name="提出比较长的中间件";
    next()
};