const { registerService, loginService} = require("../services/auth.service");
const register = (req,res) => {
try{
    const result = registerService(req.body);
    res.status(201).json({ message: "Kayıt Başarili" , data:result});
} catch(error) {
    res.status(400).json({error: error.message});
}
};

const login = (req,res) => {
try{
    const token = loginService(req.body);
    res.status(200).json({message: "Giriş Başarili", token});
} catch(error){
res.status(401).json({error : error.message});
}
};

module.exports = {register,login};

