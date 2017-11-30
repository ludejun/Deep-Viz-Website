import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import * as routes from './routes';

// RouterConfig
export default ({ history }) => {
  return (
    <Router history={history}>
      <Route path="/" component={routes.App}>
        <IndexRoute component={routes.Home} />
        <Route path="front-page" components={routes.BeforeHome} />
        <Route path="main" components={routes.Main}>
          <IndexRoute component={routes.Introduction} />
          <Route path="introduction" title="关于Deep-Viz" component={routes.Introduction} />
          <Route path="quik-start" title="快速上手" component={routes.QuickStart} />
          <Route path="components" title="Components 组件">
            <Route path="basic" title="Basic/Echarts 基础图表组件">
              <Route path="line-chart" title="LineChart 折线图" component={routes.LineChart} />
              <Route
                path="line-bar-chart"
                title="LineBarChart 折线柱状图"
                component={routes.LineBarChart}
              />
              <Route
                path="bar-chart-basic"
                title="BarChartBasic 基础柱状图"
                component={routes.BarChartBasic}
              />
              <Route
                path="bar-horizontal"
                title="BarHorizontal 横向柱状图"
                component={routes.BarHorizontal}
              />
              <Route path="pie-chart" title="PieChart 多样饼图" component={routes.PieChart} />
              <Route path="city-color" title="ShadeMap 区域阴影地图" component={routes.ShadeMap} />
              <Route path="map-scatter" title="MapScatter 散点图地图" component={routes.MapScatter} />
              <Route
                path="shade-scatter"
                title="ShadeMapScatter 区域阴影散点图"
                component={routes.ShadeMapScatter}
              />
              <Route
                path="scatter-cartesian"
                title="ScatterCartesian 笛卡尔坐标系散点图"
                component={routes.ScatterCartesian}
              />
              <Route
                path="heatmap-cartesian"
                title="HeatmapCartesian 笛卡尔坐标系热力图"
                component={routes.heatmapCartesian}
              />
              <Route path="radar-chart" title="RadarChart 雷达图" component={routes.RadarChart} />
              <Route path="funnel-chart" title="FunnelChart 漏斗图" component={routes.FunnelChart} />
              <Route path="graph-chart" title="GraphChart 关系图" component={routes.GraphChart} />
              <Route path="scatter-net" title="ScatterNet 网格散点图" component={routes.ScatterNet} />
              <Route path="K-Line-chart" title="KLineChart K线图" component={routes.KLineChart} />
              {/* <Route path="map-basic" title="MapBasic 地图基础组件" component={routes.MapBasic} />*/}
            </Route>
            <Route path="map" title="Map 地图组件">
              <Route
                path="bdPoint"
                title="BaiduMapPoint 百度地图散点图"
                component={routes.BaiduMapPoint}
              />
              <Route
                path="bdPolygon"
                title="BaiduMapPolygon 百度地图辐射区域"
                component={routes.BaiduMapPolygon}
              />
              <Route
                path="bdPolygonWithPoint"
                title="BaiduMapPolygonWithPoint 百度地图辐射区域（同时展示Poi）"
                component={routes.BaiduMapPolygonWithPoint}
              />
              <Route
                path="bdHeatMap"
                title="BaiduMapHeatMap 百度地图热力图"
                component={routes.BaiduMapHeatMap}
              />
              <Route
                path="bdHeatMapWithPoint"
                title="BaiduMapHeatMapWithPoint 百度地图热力图（同时展示Poi）"
                component={routes.BaiduMapHeatMapWithPoint}
              />
              <Route
                path="bdCrossCurve"
                title="BaiduMapCrossCurve 百度地图迁徙流向图"
                component={routes.BaiduMapCrossCurve}
              />
              <Route
                path="AMapCluster"
                title="AMapCluster 高德地图点聚合"
                component={routes.AMapCluster}
              />
              <Route path="aMapIndoor" title="AMapIndoor 高德地图室内图" component={routes.AMapIndoor} />
              <Route
                path="aMapDistrictCluster"
                title="AMapDistrictCluster 高德地图行政聚合图"
                component={routes.AMapDistrictCluster}
              />
            </Route>
            <Route path="pictogram" title="Pictogram 象形图组件">
              <Route path="image-bar" title="ImageBar 柱状象形图" component={routes.ImageBar} />
              <Route
                path="image-percent"
                title="ImagePercent 百分比象形图"
                component={routes.ImagePercent}
              />
            </Route>
            <Route path="svg" title="SVG 组件">
              <Route path="pie-chart" title="PieChartSvg SVG饼图" component={routes.PieChartSvg} />
              <Route path="circlePan" title="CirclePan 环形图" component={routes.CirclePan} />
              <Route path="ball-move" title="BallMove 小球曲线运动" component={routes.BallMove} />
            </Route>
            <Route path="canvas" title="Canvas 组件">
              <Route path="Gauge" title="Gauge 仪表盘" component={routes.Gauge} />
              <Route path="pillar-list" title="PillarList 立体簇状柱形图" component={routes.PillarList} />
              <Route
                path="scatter-curve"
                title="ScatterCurveMap 多样迁徙地图"
                component={routes.ScatterCurve}
              />
              <Route
                path="CircleAnimate"
                title="CircleAnimate 气泡Canvas"
                component={routes.CircleAnimate}
              />
              <Route
                path="RainbowRain"
                title="RainbowRain 彩虹雨Canvas"
                component={routes.RainbowRain}
              />
              <Route path="scratch-off" title="ScrathcOff 刮奖卡" component={routes.ScratchOff} />
              {/* <Route path="LineCircle" title="LineCircle Canvas"
                     component={routes.LineCircle} />
              <Route path="Clock" title="Clock 时钟" component={routes.Clock} />
              <Route
                path="Abstract-canvas-visualization"
                title="AbstractCanvasVisualization"
                component={routes.AbstractCanvasVisualization}
              /> */}
            </Route>
            <Route path="webgl" title="WebGL/3D 组件">
              <Route path="bar-3d" title="BarChart3D 3D柱状图" component={routes.BarChart3D} />
              <Route path="three-model" title="ThreeModel 人物模型图" component={routes.ThreeModel} />
              <Route
                path="globe-chart"
                title="GlobePointLine 3D地球点线图"
                component={routes.GlobePointLine}
              />
            </Route>
          </Route>
        </Route>
      </Route>
    </Router>
  );
};
