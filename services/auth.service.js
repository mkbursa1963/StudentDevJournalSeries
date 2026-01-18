const jwt = require("jsonwebtoken");
const users = [];
const registerService = (userData) => {

    const { email, password } = userData;
    const exists = users.find(u => u.email === email);
  
    if (exists) throw new Error("Email zaten kayitli");

  const newUser = { id: users.length + 1, email, password };
  users.push(newUser);
  return { id: newUser.id, email: newUser.email };
};

const loginService = (userData) => {
  const { email, password } = userData;

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) throw new Error("Email veya şifre hatalı");

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET || "secretkey", 
    { expiresIn: "1h" }
  );
  return token;
};

module.exports = { registerService, loginService };
