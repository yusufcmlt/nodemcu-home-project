import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import firebase from "../firebase.js";

const grafikData = firebase.database();

export class LineChart extends Component {
  //Grafigin degerlerini bulunduran state.
  state = {
    chartData: {
      labels: [
        "Değer 1",
        "Değer 2",
        "Değer 3",
        "Değer 4",
        "Değer 5",
        "Değer 6",
        "Değer 7",
        "Değer 8",
        "Değer 9",
        "Değer 10"
      ],
      datasets: [
        {
          label: "",
          data: [],
          backgroundColor: []
        }
      ]
    }
  };
  //Degerleri belirlenen grafigin olusturulmasi
  render() {
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={{ maintainAspectRatio: true }}
        />
      </div>
    );
  }
  //Veri tabanindan son 10 veriyi ceken fonksiyon
  getLast10Item = grafikDataItemi => {
    //Parametre ile veritabanina ulasilmasi
    let grafikDataRef = grafikData.ref(grafikDataItemi);
    //Grafik ozelliklerini eslestirmek icin kullanilan degerler- her deger kendi renklerine ve labellarina sahip
    let nameObj = {
      gaz: ["Gaz", ["#b3ffb3"]],
      sicaklik: ["Sıcaklık", ["#ee835c"]],
      nem: ["Nem", ["#808782"]]
    };
    //Her yeni data girisinde veritabanindan son 10 verinin liste haline getirilip grafik uzerinde yazdirilmasi
    //Veritabanindaki key girisleri kullanilarak karsilik gelen veriler liste haline getiriliyor
    grafikDataRef.on("value", snapshot => {
      //Son 10 degere ait key degerleri veritabaninindan aliniyor.
      let last10Keys = Object.keys(snapshot.val().deger).slice(-10);
      let last10Item = [];
      //Key girislerine karsilik gelen veriler gecici bir listede tutuluyor
      last10Keys.map(item => last10Item.push(snapshot.val().deger[item]));
      //Listedeki veriler ve fonksiyona verilen parametre ile istenen grafigin olusturulmasi icin state in atanmasi
      this.setState({
        chartData: {
          datasets: [
            {
              label: nameObj[grafikDataItemi][0],
              data: [...last10Item],
              backgroundColor: [...[nameObj[grafikDataItemi][1]]]
            }
          ]
        }
      });
    });
  };

  //Componentin olusuturuldugu durumda calistirilacak fonksiyon
  componentDidMount() {
    this.getLast10Item(this.props.name);
  }
}

export default LineChart;
