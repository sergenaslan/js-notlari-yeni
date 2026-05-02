
/*
Callback Nedir? (En basit tanım)

Callback = Bir fonksiyona, daha sonra çalıştırması için verilen başka bir fonksiyondur. o fonksiyon işini bitirdiğinde senin verdiğin fonksiyonu çalıştırır.

➡️ “Kardeşim bu işi yap, bitince şu fonksiyonu çalıştır.” demektir.

*/

/* EN BASİT ÖRNEK */
function cayDemle(text, callbackFunction){
    console.log(text);
    callbackFunction();
}

cayDemle('ÇAY DEMLENİYOR',function(){
    console.log('çay demlendi dağıtmaya başlayabilirsin')
})

/* 
📦 Callback Neden Var?

    Çünkü Node.js asenkron çalışır.

    Dosya okursun → hemen sonuç gelmez

    API isteği atarsın → hemen sonuç gelmez

    Database’e bağlanırsın → hemen sonuç gelmez

    Bu işlemler zaman aldığı için Node şunu der:

    “Ben burada beklemeyeyim, sen bana bir callback ver. İş bitince onu çalıştırayım.”

import fs from "fs";

fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) return console.log("Hata:", err);

  console.log("Dosya içeriği:", data);
}); 
 açıklaması test.txt dosyasını okuyayım okumam bittiğinde parametre olarak verdiğin ikinci fonksiyonu çalıştırayım 

 */
/* 
🎯 Callback'lerin olayı ne?

✔️ İş bitince callback çalıştır.
✔️ Kodun kilitlenmesini engelle
✔️ CPU beklerken diğer işler devam eder
✔️ Node.js event loop ile mükemmel uyumludur

 */



/* DİGER ORNEKLER ASSAGIDADIR */

function demle1(mesaj, callback) {
    console.log(mesaj);
    callback();
}

function soyler2(mesaj, callback) {
    console.log(mesaj);
    callback();
}

function dagit3(mesaj, callback) {
    console.log(mesaj);
    callback();
}

function bardakYika4(mesaj, callback) {
    console.log(mesaj);
    callback();
}


demle1("1) Çay demlendi", () => {
  soyler2("2) Çay söylendi", () => {
    dagit3("3) Çay dağıtıldı", () => {
      bardakYika4("4) Bardaklar yıkandı", () => {
        console.log("Tüm işlemler bitti. (Callback Hell)");
      });
    });
  });
});



function demle(mesaj, callback) {
  console.log(mesaj);
  callback();
}


demle("1) Çay demlendi", () => {

        function soyler(mesaj, callback) {
            console.log(mesaj);
            callback();
        }

        soyler("2) Çay söylendi", () => {
            
            function dagit(mesaj, callback) {
                console.log(mesaj);
                callback();
            }

            dagit("3) Çay dağıtıldı", () => {

                function bardakYika(mesaj, callback) {
                    console.log(mesaj);
                    callback();
                }

                bardakYika("4) Bardaklar yıkandı", () => {
                    console.log("Tüm işlemler bitti. (Callback Hell)");
                });

            });
        });

    }
);

