# StudentDevJournal – JWT Modülü

Bu repository, bir bilgisayar mühendisi tarafından hazırlanan eğitim serisinin ilk modülüdür.  
Proje, JWT (JSON Web Token) tabanlı kimlik doğrulamanın temel çalışma mantığını ve katmanlı backend mimarisini örnek bir yapı üzerinden göstermeyi amaçlar.

Bu modülde; token üretimi, token doğrulama ve protected route kavramları ele alınmaktadır.  
Veritabanı entegrasyonu, kullanıcı yönetimi ve ileri seviye güvenlik senaryoları bu modülün kapsamı dışındadır ve serinin ilerleyen bölümlerinde ele alınacaktır.

---

## Projeyi Yerel Ortamda Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları sırasıyla uygulayın.

### 1. Ortam Değişkenleri

Proje yapılandırmaları ortam değişkenleri üzerinden yönetilmektedir.  
`.env.example` dosyasını kullanarak bir `.env` dosyası oluşturun:

```bash
cp .env.example .env
