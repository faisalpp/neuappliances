
const setTitleMiddleware = async (req,res,next) => {
    // console.log(res.locals)
  
    next();

}

module.exports = setTitleMiddleware;
  