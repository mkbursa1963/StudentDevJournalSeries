const jwt = require("jsonwebtoken"); 

// JWT üretmek için kullanılır

const bcrypt = require("bcrypt");

// Şifreleri güvenli şekilde hashlemek için bcrypt

const users = []; // Database bağlanıtısı açmadığım için ilerleyen seriye kadar geçici oluşturuyoruz.

const registerService = async (userData) => {

  // Client'tan gelen kullanıcı bilgileri
  // role opsiyoneldir, gönderilmezse default olarak "student" atanır

  const { email, password, role } = userData;

  // Aynı email ile kayıtlı kullanıcı var mı kontrolü

  const exists = users.find(u => u.email === email);
  if (exists) throw new Error("Email zaten kayitli");

  // 🔐 Şifreyi hashle

  const hashedPassword = await bcrypt.hash(password, 10);

  // Yeni kullanıcı objesi oluştur
  const newUser = {
    id: users.length + 1, 
    email,
    password: hashedPassword, 
    role: role || "student"
  };

  // Kullanıcıyı geçici listeye ekle
  users.push(newUser);

  // Client’a güvenli response dön
  // Şifre ASLA geri gönderilmez
  return {
    id: newUser.id,
    email: newUser.email,
    role: newUser.role
  };
};

const loginService = async (userData) => {

  // Client'tan gelen login bilgileri
  const { email, password } = userData;

  // Email'e göre kullanıcıyı bul
  const user = users.find(u => u.email === email);

  // Kullanıcı yoksa hata fırlat
  if (!user) throw new Error("Email veya şifre hatalı");

  // 🔐 Girilen şifre ile kayıtlı hash karşılaştırılır
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Email veya şifre hatalı");

  // JWT oluştur
  const token = jwt.sign(
    {
      id: user.id,       // Kullanıcı ID
      email: user.email, // Email bilgisi
      role: user.role    // 🔐 Authorization için rol bilgisi
    },
    process.env.JWT_SECRET || "secretkey", // Gizli anahtar
    { expiresIn: "1h" }                    // Token süresi(ekstra güvenlik amaçlı)
  );

  // Client’a sadece token döndürülür
  return token;
};

// Servisleri dışa aktar
module.exports = { registerService, loginService };
