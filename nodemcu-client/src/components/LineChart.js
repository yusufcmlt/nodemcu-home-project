import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import firebase from "../firebase.js";

const grafikData = firebase.database();

export class LineChart extends Component {
  state = {
    chartData: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      datasets: [
        {
          label: "",
          data: [],
          backgroundColor: ""
        }
      ]
    }
  };

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

  getLast10Item = grafikDataItemi => {
    let grafikDataRef = grafikData.ref(grafikDataItemi);
    let nameObj = {
      gaz: ["Gaz", "#b3ffb3"],
      sicaklik: ["Sıcaklık", "#ee835c"],
      nem: ["Nem", "#808782"]
    };

    grafikDataRef.on("value", snapshot => {
      let last10Keys = Object.keys(snapshot.val().deger).slice(-10);
      let last10Item = [];
      last10Keys.map(item => last10Item.push(snapshot.val().deger[item]));

      this.setState({
        chartData: {
          datasets: [
            {
              label: nameObj[grafikDataItemi][0],
              data: [...last10Item],
              backgroundColor: [nameObj[grafikDataItemi][1]]
            }
          ]
        }
      });
    });
  };

  componentDidMount() {
    this.getLast10Item(this.props.name);
  }
}

export default LineChart;
