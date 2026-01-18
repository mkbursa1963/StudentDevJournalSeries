const { error } = require("console");
const jwt = require("jsonwebtoken");
const verifyToken = (req,res, next) => {
    const authHeaders = req.headers["authorization"];
    const token = authHeader && authHeader.split("")[1];
if(!token){
    return res.status(401).json({error: "Token bulunamadi"});
}
try{
    const decoded = jwt.verify(token,process.env.JWT_SECRET || "secretkey");
    req.user = decoded; 
    next(); 
}catch(error){
    return res.status(403).json({ error: "Token geçersiz" });
}
};
module.exports = { verifyToken };

