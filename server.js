const express = require("express"); // Express framework'ünü dahil ediyoruz 
const morgan = require("morgan");   // HTTP request log'larını görmek için morgan ekliyoruz

const authRoutes = require("./routes/auth.routes");           // Auth route'ları ekliyoruz
const protectedRoutes = require("./routes/protected.routes"); // Token doğrulamalı protected route'lar ekliyoruz

const app = express(); // Express uygulamasını başlatıyoruz
const PORT = process.env.PORT || 3000; // Port ayarı (env varsa kullan, yoksa 3000)

app.use(express.json()); // Gelen JSON body'lerini parse eder
app.use(morgan("dev")); // Konsola request log'larını yazdırır

app.use("/api/auth", authRoutes); // /api/auth/register ve /api/auth/login route'ları

app.use("/api", protectedRoutes); // Örn: /api/dashboard

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalişiyor`);
});
