📘 StudentDevJournal

StudentDevJournal, bir bilgisayar mühendisinin backend geliştirme yolculuğunu adım adım belgelediği eğitim serisidir.
Bu repository, serinin ilk modülünü temsil eder.

🎯 Amaç

Modern backend uygulamalarında kullanılan aşağıdaki temel kavramları,
teoriden kopmadan ve kod yazarak öğretmeyi amaçlar:

JWT tabanlı kimlik doğrulama (Authentication)

Yetkilendirme (Authorization)

Güvenli şifre yönetimi (Password Security)

Proje, katmanlı mimari (layered architecture) prensiplerine uygun şekilde yapılandırılmıştır ve her gün kontrollü olarak geliştirilmektedir.

📅 Gün 1 – JWT Authentication Temelleri

Eğitim serisinin ilk gününde JWT’nin temel çalışma mantığı ele alınmıştır.

İşlenen Konular

JWT (JSON Web Token) nedir, nasıl çalışır

Access Token üretimi

Token doğrulama (verify)

Middleware mantığı

Protected route kavramı

Katmanlı backend mimarisi:

routes

controllers

services

middlewares

📌 Bu aşamada kullanıcı verileri in-memory olarak tutulmaktadır.
Odak noktası, JWT’nin temel mantığını net bir şekilde kavramaktır.

📅 Gün 2 – Authorization & Password Security

İkinci günde sistem, gerçek dünya senaryolarına bir adım daha yaklaştırılmıştır.

🔐 Authorization

Role-Based Access Control (RBAC)

student / admin rol yapısı

Yetkilendirme middleware’i

JWT payload içerisinde rol bilgisinin taşınması

🔒 Password Security

bcrypt ile şifre hashleme

Şifrelerin güvenli şekilde saklanması

Plaintext şifre kullanımının tamamen kaldırılması

🧠 Kavramsal Ayrımlar

Authentication vs Authorization farkı

Güvenli login akışı

Bu güncelleme ile birlikte proje, temel backend güvenlik standartlarına uygun hale getirilmiştir.

🚧 Kapsam Dışı Konular

Aşağıdaki konular bu modülün kapsamı dışındadır ve eğitim serisinin ilerleyen günlerinde ele alınacaktır:

Veritabanı entegrasyonu (MongoDB / PostgreSQL)

Refresh Token mekanizması

Logout & token iptali

Rate limiting & brute-force koruması

Authentication testleri (Jest)

Gelişmiş güvenlik senaryoları

▶️ Projeyi Yerel Ortamda Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin.

1️⃣ Ortam Değişkenleri

Proje yapılandırmaları ortam değişkenleri üzerinden yönetilmektedir.
.env.example dosyasını kullanarak bir .env dosyası oluşturun:

```bash
cp .env.example .env
```

Bu komut, örnek ortam değişkenleri dosyasını kopyalayarak
uygulamanın çalışması için gerekli .env dosyasını oluşturur.

🎯 Eğitim Serisinin Amacı

Bu repository bir hazır template değildir.

Bir geliştiricinin:

Backend dünyasında sağlam temellerle ilerlemesini

Güvenlik kavramlarını doğru yerde ve doğru şekilde öğrenmesini

“Kopyala–yapıştır” yerine neden–sonuç ilişkisi kurmasını

amaçlayan bir eğitim serisinin parçasıdır.

🔹 Her gün eklenen özellikler:

Bilinçli olarak sınırlı tutulur

Gerçek dünya senaryolarına dayanır

Bir sonraki adıma zemin hazırlar