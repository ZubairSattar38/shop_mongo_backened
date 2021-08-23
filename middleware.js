let jwt = require('jsonwebtoken')
const config  = require('./config')


let checkToken = (req,res,next)=>{
    let token = req.headers['x-access-token'] || req.headers['authorization']
    if(token.startsWith('Bearer ')){
        // remove Bearer from String
        token = token.slice(7, token.length);
    }

    if(token){
        jwt.verify(token,config.secret,(err,decoded)=>{
            if(err){
                return res.json({
                    success: false,
                    message: 'Token Is Not Valid'
                });
            }else{
                req.decoded = decoded;
                next();
            }
        })
    }else{
        return res.json({
            success: false,
            message: 'Auth Token is Not Found'
        })
    }
};
module.exports = {
    checkToken: checkToken,
}


