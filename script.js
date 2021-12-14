let formID = document.querySelector("#desiData"); // desiData id li formu formID değişkenine atadım
formID.addEventListener('submit', formSubmit); // burada forma bir submit event atayıp submit olduğunda çalıştırması gereken fonksiyon ismini tanımladım.

function formSubmit(event) { // fonksiyonumu oluşturdum. Parametre olarak event parametresi verdim.
    event.preventDefault() // event parametresine atadığım preventDefault() methodu ile default işlemi engeledim
    // Bu kısımda default işlemimiz gönder butonuna basılınca link uzantısının yanına formdan gelen değerleri ekliyordu onu engelledim.
    let kg = document.getElementById("k"); // kg girilen input id sini seçip değişkene atadım
    let uzunluk = document.getElementById("u"); // uzunluk girilen input id sini seçip değişkene atadım
    let genislik = document.getElementById("g"); // genişlik girilen input id sini seçip değişkene atadım
    let derinlik = document.getElementById("d"); // derinlik girilen input id sini seçip değişkene atadım
    let agi = Math.floor(kg.value); //input içine girilen verileri .value yöntemi ile başka bir değişkene atadım. 
    let uzu = Math.floor(uzunluk.value);//input verileri bize string ifade döndürdüğü için aldığımız veriyi aynı zamanda Math.floor methodu ile number a dönüştürdüm.
    let gen = Math.floor(genislik.value);
    let der = Math.floor(derinlik.value);
    const desiDegeri = (((uzu * gen * der) / 2) * agi) / 3000; // bu kısım desi değeri hesaplama formülü. İnput içerisine girilen değerleri burada işleme soktum.
    let desi = { // desi değerlerine karşılık gelen fiyatları objeler(object) halinde bir değişkene atadım.
        sifir: 9.75,
        bir: 15.10,
        iki: 17.25,
        uc: 18.50,
        dort: 19,
        bes: 22.75,
        alti: 25,
        yedi: 26.35,
        sekiz: 29.45,
        dokuz: 31.50,
        on: 34
    };
    const iletisim = "<a href='#'>İletişime</a>";
    let deger = ""; // değer değişkenini boş bir veri atadım if yapısına girip uygun değer buraya sonraki satırlarda yazdırılacak.
    let yuvarla = Math.floor(desiDegeri); // formülden çıkan veriyi bu kısımda yuvarla değişkenine atayarak Math.floor ile yuvarladım.
    if (yuvarla < 1) { // if yapısı ile her bir desi değerinde hangi fiyatın "deger" değişkenine atanacağını belirledim.
        deger = desi.sifir;
    } else if (yuvarla < 2) {
        deger = desi.bir;
    } else if (yuvarla < 3) {
        deger = desi.iki;
    } else if (yuvarla < 4) {
        deger = desi.uc;
    } else if (yuvarla < 5) {
        deger = desi.dort;
    } else if (yuvarla < 6) {
        deger = desi.bes;
    } else if (yuvarla < 7) {
        deger = desi.alti;
    } else if (yuvarla < 8) {
        deger = desi.yedi;
    } else if (yuvarla < 9) {
        deger = desi.sekiz;
    } else if (yuvarla < 10) {
        deger = desi.dokuz;
    } else if (yuvarla < 11) {
        deger = desi.on;
    } else {
        deger = `Bu büyüklükteki desiyi taşıyamamaktayız lütfen bizimle ${iletisim} geçin`;
    }


    // bilgilerin dökümana yazdırıldığı kısım.
    // innerHTML methodu kullandım.
    let _agirlik = document.getElementById("agirlik");
    let _uzunluk = document.getElementById("uzunluk");
    let _genislik = document.getElementById("genislik");
    let _derinlik = document.getElementById("derinlik");
    let _desi = document.getElementById("desi");
    let _fiyat = document.getElementById("fiyat");

    
    _agirlik.innerHTML = agi + " Kg";
    _uzunluk.innerHTML = uzu + " Cm";
    _genislik.innerHTML = gen + " Cm";
    _derinlik.innerHTML = der + " Cm";
    _desi.innerHTML = yuvarla + " Desi";
    _fiyat.innerHTML = deger + " TL";

}