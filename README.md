# WebSitesi
İTP Proje
Ad-Soyad:Açelya Bayık
Okul no:201502046
Bölüm-Sınıf:Bilgisayar Müh.-2.sınıf


ÖNEMLİ NOT:
 Proje verildiğinden bu yana düzenli olarak versiyonlarımı github kullanarak yüklüyordum. 
Ancak 11.versiyonu Github Desktop üzerinden atmayı denedim ancak yanlışlıkla eski 
versiyonlardımdan bir çoğu ve bununla birlikte Readme dosyam silindi.Silinen versiyonlarımı 
geri getiremedim.

PROJE AÇIKLAMASI:
  Projemi, İnternet tabanlı programlama dersi işlendikçe eş zamanlı olarak geliştirmeye gayret ettim.
Bundan dolayı ilk olarak p,img,hr,br,h,li... gibi temel etiketleri kullanarak tek bir itp.html dosyasında, başlıklar altında özet bilgi paragrafını, 1 adet kendi fotoğrafımı, okullarımın listesini vb. kısımlar ekleyerek projemin temelini oluşturdum. Aynı zamanda arkaplana da fotoğraf koydum, fotoğrafın tekrarını önlemek vb. amaçlarla da belirli kodlar kullandım.(arkaplan resmi kodları mystyle.css dosyasında body içinde açıklamlı şekilde bulunuyor)

  Daha sonra Border'ları öğrendikten sonra ilk olarak her sayfanın en üstünde bulunan Açelya Bayık başlığını border içine aldım ve içini de renklendirdim.

  Ardından w3 schools'dan yararlanarak ve yatay isimli id verdiğim gezinme çubuğunu projeme ekledim. İlk olarak gezinme çubuğunda yazılı olan galeri,eğitim,üyelik.. lere a etiketi içine href ile h2 başlıklarına, her başlığa vermiş olduğum id leri kullanarak gitmesini sağladım. Böylece gezinme çubuğunda eğitime bastığımda eğitim başlığına gidiyordu ve eğitim bilgilerine ulaşılmış oluyordu, diğer başlıklar da aynı şekilde... Ancak ilerleyen zamanlarda projemi dosyalara ayırıp her kısmın farklı bir dosyaya aldığım için, başlıkların id leri yerine dosya adlarını adres olarak gösterdim.

   Projede tek bir sayfadayken oluşan kalabalık görüntüden hoşlanmadığım için çeşitli dosyalar oluşturdum. Gezinme çubuğu ile de kullanıcının dosyalar arasında gezinmesini sağladım. Ancak bu geçişlerin görsel olarak anlaşılmaması yani hep aynı sayfadaymış görüntüsü vermek için her oluşturduğum dosyada Açelya Bayık ana başlığının, arka plan resminin ve gezinme çubuğunun kodlarının olmasına önem verdim.

  Projenin görsel açıdan daha hoş durması için class ı kutu olan div oluşturdum ve her sayfada yazılanları mor renkli kutu içerisine aldım. Ancak iletişim kısmında 2 tane kutuyu yan yana koymak istediğim için o sayfaya özel kutu class lı div ler yerine genişliği daha az olan ve margin right özelliği olmayan class ı ikutu  olan div ler kullandım. Ve bu 2 kutunun da yan yana gelebilmesi için ikutu ları da alıp id si yanyana olan bir div içine yazdım ve css ile yanyana kutusuna flexbox kodları kullanarak ikutu larını yan yana getirmiş oldum. 

  itp.html dosyası, sitemin açılış ekranı olduğu ve içerik bakımından yoksun olması gerektiğinden görselliği arttırmak amacıyla Hoşgeldiniz yazısını hareketlendirmek istedim. İnternet üzerinden bulduğum hoşuma giden bir kodu projeme entegre ettim. Entegre ederken, bir js kütüphanesi eklemem gerekti ve sayfamda başka içerikler de bulunduğu için eklediğim hoşgeldiniz yazısının renk, boyut.. gibi özelliklerinin yanı sıra sayfa üzerindeki konumu belirleyen kodlar üzerinde bir takım değişikler yapmam gerekti.
  Hoşgeldiniz yazısı 00000000000 şeklinde başlayıp random harfler atandıktan sonra oluşuyordu ve her harfin belli bir blok yeri vardı ve bu da i harflerinin diğer harflerden garip bir şekilde uzak olmasına neden oluyordu ve yazının görselliğini biraz bozuyordu. Bu sorunu, content classının içinde bulunan span lara verilen display:inline-block; olan özelliğini display:contents; olarak değiştirerek çözdüm.




