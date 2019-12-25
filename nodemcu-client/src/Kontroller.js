//Kontrolleri iceren sayfa
//Ledler ve fan bu sayfa uzerinden kontrol edilmektedir.

import React, { Component } from "react";
import "./Sayfalar.css";
import firebase from "../../firebase.js";

const kontrolData = firebase.database();

export class Kontroller extends Component {
  //Sayfanin durumunu belirleyen state
  //sayfanin dugme durumlarini icermektedir
  state = {
    led: {
      stateMessage: "Kapalı",
      background: "btn-danger"
    },
    fan: {
      stateMessage: "Kapalı",
      background: "btn-danger"
    }
  };

  //Sayfanin goruntulenmesi
  render() {
    return (
      <div className="border container w-100">
        <h1 className="display-3 mt-5 mb-5">Cihaz Kontrolleri</h1>
        <div className="border container">
          <div className="border row justify-content-center mb-5">
            <button
              onClick={() => this.toggleKontrolDeger("led")}
              className="col-sm btn btn-lg btn-success"
            >
              Ledler
            </button>
            <span className="col-sm font-weight-bold">Led Durumu:</span>
            <button
              className={"col-sm btn btn-lg " + this.state.led.background}
            >
              {this.state.led.stateMessage}
            </button>
          </div>
          <div className="border row justify-content-center">
            <button
              onClick={() => this.toggleKontrolDeger("fan")}
              className="col-sm btn btn-lg btn-success"
            >
              Fan
            </button>
            <span className="col font-weight-bold">Fan Durumu:</span>
            <button
              className={"col-sm btn btn-lg " + this.state.fan.background}
            >
              {this.state.fan.stateMessage}
            </button>
          </div>
        </div>
      </div>
    );
  }

  //Site uzerinden cihazlarin kapatilip acilmasini saglayan fonksiyon
  //ref().set() yoluyla database uzerindeki degerleri degistirirken
  //setControls fonksiyonuyla site uzerindeki state leri degistirmektedir.
  toggleKontrolDeger = kontrolUyesi => {
    if (this.state[kontrolUyesi].stateMessage === "Kapalı") {
      kontrolUyesi === "led"
        ? kontrolData.ref("lamba").set(1)
        : kontrolData.ref("klima").set(1);
      this.setControls(kontrolUyesi, 1);
    } else {
      kontrolUyesi === "led"
        ? kontrolData.ref("lamba").set(0)
        : kontrolData.ref("klima").set(0);
      this.setControls(kontrolUyesi, 0);
    }
  };

  //Kontrol degerlerine gore state degerlerini degistiren fonksiyon
  //Site uzerindeki dugmelere ve siteye giris yapildigindaki duruma gore stateleri duzenler
  setControls = (controlItem, setValue) => {
    if (setValue === 1) {
      this.setState({
        [controlItem]: {
          stateMessage: "Açık",
          background: "btn-success"
        }
      });
    } else {
      this.setState({
        [controlItem]: {
          stateMessage: "Kapalı",
          background: "btn-danger"
        }
      });
    }
  };

  //Sayfa yenilenmesi veya ilk defa girislerde sayfanin durumunun veritabanina gore ayarlanmasi gerekir
  // Ya da veritabanindaki anlik degisimlere gore sayfanin degismesi gerekir
  //Bu fonksiyon bu durumlara gore sayfayi duzenler
  componentDidMount() {
    let ledRef = kontrolData.ref("lamba");
    let fanRef = kontrolData.ref("klima");

    ledRef.on("value", snapshot => {
      this.setControls("led", snapshot.val());
    });
    fanRef.on("value", snapshot => {
      this.setControls("fan", snapshot.val());
    });
  }
}

export default Kontroller;
