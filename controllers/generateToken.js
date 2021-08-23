const jwt = require("jsonwebtoken");
module.exports={
    generateAccessToken(user){
    //    return jwt.sign({id:user._id,username:user.userName,email:user.email,role:user.role}, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
    return jwt.sign({id:user._id,username:user.userName,email:user.email,role:user.role}, process.env.TOKEN_SECRET);

},

    authenticateJWT(req, res, next){
        const authHeader = req.headers.authorization;
        if (authHeader) {
            const token = authHeader.split(' ')[1];
            jwt.verify(token,process.env.TOKEN_SECRET, (err, user) => {
                if (err) {
                    return res.sendStatus(403);
                }
                req.user = user;
                next();
            });
        } else {
            res.sendStatus(401);
        }
    }
}