export default function() {
  return {
    title: {
      text: ""
    },

    subtitle: {
      text: ""
    },

    yAxis: {
      title: {
        text: ""
      }
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle"
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2014
      }
    },

    series: [
      {
        name: "Coin",
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      }
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom"
            }
          }
        }
      ]
    }
  };
}
