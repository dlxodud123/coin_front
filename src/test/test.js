import React, { useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const Test = () => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        'https://demo-live-data.highcharts.com/aapl-ohlcv.json'
      ).then(response => response.json());

      const ohlc = [];
      const volume = [];
      data[0][4] = 500;
    //   console.log(data);
      console.log(data[0][4]);

      data.forEach(item => {
        const date = new Date(item[0]);
        console.log(date);
        // console.log(data);
        ohlc.push([
          date.getTime(),
          item[1], // open
          item[2], // high
          item[3], // low
          item[4]  // close
        ]);
        volume.push([
          date.getTime(),
          item[5]  // volume
        // x: date.getTime(),
        // y: item[5],  // volume
        // color: item[4] >= item[1] ? 'red' : 'blue'
        ]);
      });

      const options = {
        chart: {
          width: 1200,
          height: 600,
        },
        rangeSelector: {
          selected: 4
        },
        title: {
          text: 'Bitcoin Candlestick Chart'
        },
        yAxis: [{
          labels: {
            align: 'right',
            x: -3
          },
          title: {
            text: 'OHLC'
          },
          height: '60%',
          lineWidth: 2,
          resize: {
            enabled: true
          }
        }, {
          labels: {
            align: 'right',
            x: -3
          },
          title: {
            text: 'Volume'
          },
          top: '65%',
          height: '35%',
          offset: 0,
          lineWidth: 2
        }],
        tooltip: {
          split: true
        },
        plotOptions: {
          candlestick: {
            color: 'blue', // 기본 봉 색상 (상승, 하락 모두 적용)
            upColor: 'red', // 상승할 때 봉 색상
            upLineColor: 'red', // 상승할 때 봉의 테두리 색상
            downColor: 'blue', // 하락할 때 봉 색상
            downLineColor: 'blue', // 하락할 때 봉의 테두리 색상
            lineColor: 'blue',
            dataGrouping: {
              units: [['week', [1]], ['month', [1, 2, 3, 4, 6]]]
            }
          },
          column: {
            colorByPoint: true, // 각 데이터 포인트에 따라 색상을 지정

            dataGrouping: {
              units: [['week', [1]], ['month', [1, 2, 3, 4, 6]]]
            }
          }
        },
        series: [{
          type: 'candlestick',
          name: 'AAPL',
          data: ohlc,
        }, {
          type: 'column',
          name: 'Volume',
          data: volume,
          yAxis: 1,
        }]
      };

      // Render the chart
      Highcharts.stockChart('stock-chart-container', options);
    };

    fetchData();
  }, []);

  return (
    <div id="stock-chart-container" style={{ height: '600px', width: '1200px' }}>
      {/* HighchartsReact 컴포넌트를 사용하지 않습니다 */}
    </div>
  );
};

export default Test;
