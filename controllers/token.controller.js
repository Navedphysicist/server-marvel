const jwt = require('jsonwebtoken');

require('dotenv/config')

const generateToken = (UserData)=>{
 
     const token = jwt.sign({id:UserData._id},process.env.JWT_SECRET_KEY,{expiresIn:"7d"})
     return token;


}

const verifyToken = (token)=>{

    const decode = jwt.verify(token,process.env.JWT_SECRET_KEY)
    return decode;
}

module.exports = {
    generateToken,
    verifyToken
}