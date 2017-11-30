import React from 'react';
import Highlight from 'react-highlight';

export default function () {
  return (
    <div className="main-introduction">
      <h1>快速上手</h1>
      <p>本文会引导你快速使用Deep-Viz组件库。</p>
      <h3>1. 使用Deep-Viz-Start</h3>
      <Highlight className="Shell">
        {`$ git clone https://github.com/ludejun/Deep-Viz-Start.git
$ cd Deep-Viz-Start
$ npm install
$ npm start`}
      </Highlight>
      <h3>2. 直接npm安装使用</h3>
      <Highlight className="Shell">
        {'$ npm install deep-viz --save'}
      </Highlight>
      <p>安装完后，直接装载数据使用即可。👇为一个简单LineChart例子，
        <a href="https://ludejun.github.io/Deep-Viz-Website/#/main/components/basic/line-chart">详情点此</a></p>
      <Highlight className="Javascript">
        {`import { LineChart } from 'deep-viz';

ReactDOM.render(
<LineChart config={{
  x: { data: lineData.date },
  y: [{data: [lineData.y1, lineData.y2], legend: ['legend1', 'legend2'], name: 'yAxisName/unit'}],
}}/>, mountNode);`}
      </Highlight>
    </div>
  );
}
