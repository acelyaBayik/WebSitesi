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

Proje Açıklaması:
Projemi, İnternet tabanlı programlama dersi işlendikçe eş zamanlı olarak geliştirmeye gayret ettim.
Bundan dolayı ilk olarak p,img,hr,br,h,li... gibi temel etiketleri kullanarak tek bir sayfada başlıklar altında, özet bilgi paragrafını, 1 adet fotoğraf,
okullarımın listesi vb. temel oluşturacak kısımları ekleyerek projemin temelini oluşturdum. Aynı zamanda arkaplana da fotoğraf koydum,fotoğrafın tekrarını önlemek vb. amaçlarla da belirli kodlar kullandım.(arkaplan resmi kodları mystyle.css dosyasında body içinde açıklamlı şekilde bulunuyor)

Daha sonra Border'ları öğrendikten sonra ilk olarak sayfanın en başında bulunan Açelya Bayık başlığını border içine aldım ve içini de renklendirdim.

Ardından w3 schools'dan yararlanarak ve yatay isimli id verdiğim gezinme çubuğunu projeme ekledim. İlk olarak gezinme çubuğunda yazılı olan galeri,eğitim,üyelik.. lere a etiketi içine href ile h2 başlıklarına gitmesini sağladım. Böylece gezinme çubuğunda eğitime bastığımda eğitim başlığına gidiyordu ve eğitim bilgilerine ulaşılmış oluyordu. Ancak ilerleyen zamanlarda projemi dosyalara ayırıp her özelliğin ayrı bir sayfada olmasını istediğim için artık başlıkları değil dosya adlarını adres olarak gösterdim.

Projede tek bir sayfadayken oluşan kalabalık görüntüden hoşlanmadığım için çeşitli dosyalar oluşturdum. Gezinme çubuğu ile de kullanıcının dosyalar arasında gezinmesini sağladım. Ancak bu geçişlerin görsel olarak anlaşılmaması yani hep aynı sayfadaymış görüntüsü vermek için her oluşturduğum dosyada Açelya Bayık ana başlığını,Arka plan resminin ve gezinme çubuğunun kodlarının olmasına önem verdim. 

Projenin görsel açıdan daha hoş durması için class ı kutu olan div oluşturdum ve her sayfada yazılanları mor renkli kutu içerisine aldım. Ancak iletişim kısmında 2 tane kutuyu yan yana oluşturmak istediğim ve burada kullanılacak kutu genişliklerinin farklı olması gerektiği için o sayfada kutu class lı div ler yerine sadece genişlik özelliğinin farklı olduğu class ı ikutu  olan div ler içine yerleştirdim. Ve bu 2 kutunun da yan yana gelebilmesi için bunları da id si yanyana olan bir div e aldım ve css ile yanyana kutusuna flexbox kodları kullanarak ikutu larını yan yana getirdim. 
