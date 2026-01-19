📘 StudentDevJournal 

Bu repository, bir bilgisayar mühendisi tarafından hazırlanan backend geliştirme eğitim serisinin ilk modülünü temsil eder.
Amaç, modern backend uygulamalarında kullanılan JWT tabanlı kimlik doğrulama, yetkilendirme ve güvenli şifre yönetimi kavramlarını adım adım öğretmektir.

Proje, katmanlı mimari prensiplerine uygun olarak yapılandırılmıştır ve eğitim boyunca kademeli olarak geliştirilmektedir.

📅 Gün 1 – JWT Authentication Temelleri

Eğitim serisinin ilk gününde aşağıdaki konular ele alınmıştır:

JWT (JSON Web Token) çalışma mantığı

Access Token üretimi

Token doğrulama (verify)

Middleware kullanımı

Protected route kavramı

Katmanlı backend mimarisi (routes, controllers, services, middlewares)

Bu aşamada kullanıcı verileri in-memory olarak tutulmakta olup, odak noktası JWT’nin temel mantığını kavramaktır.

📅 Gün 2 – Authorization & Password Security

İkinci günde, sistem gerçek dünya senaryolarına bir adım daha yaklaştırılmıştır.

Bu modülde ele alınan başlıca konular:

Role-Based Access Control (RBAC)

student / admin rol yapısı

Yetkilendirme middleware’i

JWT payload içerisinde rol bilgisinin taşınması

bcrypt ile şifre güvenliği

Şifrelerin hashlenerek saklanması

Plaintext şifre kullanımının kaldırılması

Authentication & Authorization ayrımı

Güvenli login akışı

Bu güncelleme ile birlikte sistem, temel güvenlik standartlarına uygun hale getirilmiştir.

🚧 Kapsam Dışı Konular

Aşağıdaki konular bu modülün kapsamı dışındadır ve eğitim serisinin ilerleyen bölümlerinde ele alınacaktır:

Veritabanı entegrasyonu (MongoDB / PostgreSQL)

Refresh Token mekanizması

Logout & token iptali

Rate limiting & brute-force koruması

Auth testleri (Jest)

Gelişmiş güvenlik senaryoları

▶️ Projeyi Yerel Ortamda Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları sırasıyla uygulayın.

1. Ortam Değişkenleri

Proje yapılandırmaları ortam değişkenleri üzerinden yönetilmektedir.
.env.example dosyasını kullanarak bir .env dosyası oluşturun:

cp .env.example .env

🎯 Eğitim Serisinin Amacı

Bu repository bir hazır template değil,
bir geliştiricinin backend dünyasında bilinçli ve sağlam temellerle ilerlemesini hedefleyen eğitim serisinin parçasıdır.

Her gün eklenen özellikler:

Bilinçli olarak sınırlı tutulur

Gerçek dünya senaryolarına dayanır

Bir sonraki adıma zemin hazırlar