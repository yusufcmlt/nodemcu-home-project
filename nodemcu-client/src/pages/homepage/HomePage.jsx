import React from "react";
import "./HomePage-style.scss";
const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1 className="page-title">NODEMCU AKILLI EV PROTOTIPI</h1>

      <div className="homepage-text">
        <h2 className="first-h2">NodeMCU Nedir?</h2>
        <p className="firs-par">
          NodeMCU; kredi kartının yarısı boyutunda, ufak bir elektronik devre
          kartıdır. Açık kaynak kodlu bir kontrol ünitesidir, maliyeti oldukça
          düşüktür ve yeteneklidir. Geniş bir kullanım alanına sahip olan ünite;
          “IOT” nesnelerin interneti olarak adlandırdığımız alanda kullanılarak
          birçok sorunun çözülmesini sağlamayı amaçlar.
        </p>
        <h2 className="second-h2">Proje Hakkında</h2>
        <p className="second-par">
          Bu projede NodeMCU kullanılarak çeşitli cihazlar kontrol edilmeye
          çalışılmıştır. Çeşitli sensörlerden gelen bilgiler grafikler ile
          değerlendirilmiştir. İlgili bölümlere sol menüden ulaşabilirsiniz.
          Proje kodlarına ise yine menüdeki github butonundan ulaşabilirsiniz.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
