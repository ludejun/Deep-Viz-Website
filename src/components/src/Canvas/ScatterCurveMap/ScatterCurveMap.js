import React from 'react';
import PropTypes from 'prop-types';
import WorldMapJson from './WorldMap.json';

export default class ScatterCurveMap extends React.Component {
  constructor(props) {
    super(props);
    // [-85.05112877980659，85.05112877980659]。这个是墨卡托的维度范围
    // 把大地坐标转化为web墨卡托坐标
    this.lonlatTomercator = function (lonlats) {
      const lonlat = lonlats;
      const mercator = [];
      const x = lonlat[0] * 20037508.34 / 180;
      if (Math.abs(lonlat[1]) > 85.05112877980659) {
        lonlat[1] = 85.05112877980659 * Math.abs(lonlat[1]) / lonlat[1];
      }
      let y = Math.log(Math.tan((90 + lonlat[1]) * Math.PI / 360)) / (Math.PI / 180);
      y = y * 20037508.34 / 180;
      mercator[0] = x;
      mercator[1] = y;
      return mercator;
    };
    // 求两点之间的距离
    this.distancePoint = function (point1, point2) {
      const dx = point1[0] - point2[0];
      const dy = point1[1] - point2[1];
      return Math.sqrt(dx * dx + dy * dy);
    };
    // canvas随机id
    this.id = `${Math.random()}-canvas`;
    // canvas
    this.canvas = null;
    // canvas绘图上下文
    this.context = null;
    // 离屏canvas
    this.offCanvas = document.createElement('canvas');
    // 离屏canvas的context
    this.offContext = this.offCanvas.getContext('2d');
    // canvas画布对角线值
    this.maxScreenDis = 0;
    // 世界地图中左上角的墨卡托坐标
    this.sourceTomer = this.lonlatTomercator([-180, 85.05112877980659]);
    // 大地坐标对角线值
    this.maxGeoDis = this.distancePoint(this.sourceTomer,
      this.lonlatTomercator([180, -85.05112877980659]));
    // 大地坐标与屏幕坐标距离的比例值
    this.ratio = 0;
    // 世界地理区域对象数组容器
    this.areaArray = [];
    // 中国内部墨卡托坐标数组容器
    this.chinaPoints = [];
    // 中国内部屏幕坐标数组
    this.screenPoints = [];
    // canvas相对于窗口位置信息
    this.Rect = null;
    // 鼠标上次划过的地理区域
    this.lastArea = null;
    // 鼠标上次划过的连线
    this.lastLine = null;
    // 绘图环境缩放比例
    this.scaleRatio = 3;
    // 最小经度
    this.minLng = 0;
    // 最大纬度
    this.maxLat = 0;
    // 距离经纬度原点的最大值
    this.maxLength = 0;
    // 打的圆点数组
    this.circles = [];
    // from点
    this.circle = null;
    // 迁徙线数组
    this.lines = [];
    // 默认的配色
    this.color = [
      '#FDB933',
      '#D64F44',
      '#00A6AC',
      '#1D953F',
      '#E0861A',
      '#45B97C',
      '#F3715C',
      '#F26522',
      '#7FB80E',
      '#63C5FA',
      '#DDF8FF',
      '#FFF3DD',
      '#D45156',
    ];
    // 圆点对象
    this.CirclePoint = function (x, y, radius, color, context, offCanvas) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.context = context;
      this.offCanvas = offCanvas;
      this.tempRadius = this.radius;
      this.centerCirclePath = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      this.centerCirclePath.setAttribute('cx', this.x);
      this.centerCirclePath.setAttribute('cy', this.y);
      this.centerCirclePath.setAttribute('r', this.radius);
      this.centerCirclePath.setAttribute('fill', this.color);
    };
    this.CirclePoint.prototype.createAreaPath = function () {
      this.context.beginPath();
      this.context.rect(this.x - 2 * this.radius - this.context.lineWidth,
        this.y - 2 * this.radius - this.context.lineWidth,
        this.radius * 4 + this.context.lineWidth,
        this.radius * 4 + this.context.lineWidth);
    };
    this.CirclePoint.prototype.createCenterCirclePath = function () {
      this.context.beginPath();
      this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    };
    this.CirclePoint.prototype.createCenterCircleClipPath = function () {
      this.context.beginPath();
      this.context.arc(this.x, this.y, this.radius + 2, 0, Math.PI * 2);
    };
    this.CirclePoint.prototype.strokePath = function () {
      this.context.save();
      this.context.strokeStyle = this.color;
      this.context.stroke();
      this.context.restore();
    };
    this.CirclePoint.prototype.strokeCirclePath = function () {
      this.context.save();
      this.context.strokeStyle = this.color;
      this.context.stroke();
      this.context.restore();
      this.context.restore();
    };
    this.CirclePoint.prototype.fillPath = function () {
      this.context.save();
      this.context.fillStyle = this.color;
      this.context.fill();
      this.context.restore();
    };
    this.CirclePoint.prototype.createFlashCirclePath = function (radius) {
      this.context.beginPath();
      this.context.save();
      this.context.globalAlpha = (3 * this.radius - radius) / (this.radius * 2);
      this.context.arc(this.x, this.y, radius, 0, Math.PI * 2);
    };
    this.CirclePoint.prototype.drawAnimate = function () {
      this.context.beginPath();
      this.context.clearRect(
        this.x - 8 / 3 * this.radius - this.context.lineWidth,
        this.y - 8 / 3 * this.radius - this.context.lineWidth,
        this.radius * 16 / 3 + this.context.lineWidth * 2,
        this.radius * 16 / 3 + this.context.lineWidth * 2);
      this.context.drawImage(
        this.offCanvas,
        this.x - 8 / 3 * this.radius - this.context.lineWidth,
        this.y - 8 / 3 * this.radius - this.context.lineWidth,
        this.radius * 16 / 3 + this.context.lineWidth * 2,
        this.radius * 16 / 3 + this.context.lineWidth * 2,
        this.x - 8 / 3 * this.radius - this.context.lineWidth,
        this.y - 8 / 3 * this.radius - this.context.lineWidth,
        this.radius * 16 / 3 + this.context.lineWidth * 2,
        this.radius * 16 / 3 + this.context.lineWidth * 2);
      this.createCenterCirclePath();
      this.fillPath();
      this.createFlashCirclePath(this.tempRadius + this.radius / 3);
      this.strokeCirclePath();
      this.createFlashCirclePath(this.tempRadius + this.radius * 2 / 3);
      this.strokeCirclePath();
      this.createFlashCirclePath(this.tempRadius);
      this.strokeCirclePath();
    };
    this.CirclePoint.prototype.animate = function () {
      if (this.tempRadius >= this.radius * 2) {
        this.tempRadius = this.radius;
      } else {
        this.tempRadius += 0.2;
        this.drawAnimate();
      }
      window.requestAnimationFrame(this.animate.bind(this));
    };
    this.CirclePoint.prototype.start = function () {
      window.requestAnimationFrame(this.animate.bind(this));
    };
    // 运动的线对象
    this.LineStroke = function (
      from, to, context, color, width, offCanvas, CirclePoint, travelCircle) {
      this.from = from;
      this.to = to;
      this.context = context;
      this.color = color;
      this.width = width;
      this.offCanvas = offCanvas;
      this.path = window.document.createElementNS('http://www.w3.org/2000/svg', 'path');
      this.pathLength = 0;
      this.interLength = 0;
      this.step = 0;
      this.CirclePoint = CirclePoint;
      this.circle = new this.CirclePoint(this.from[0], this.from[1], travelCircle ? 8 : 4,
        travelCircle ? this.color : 'rgba(255,255,255,0.8)', context, offCanvas);
      this.secondcircle = null;
    };
    this.LineStroke.prototype.getControlPoint = function () {
      const point1 = this.to[1] > this.from[1] ? this.to : this.from;
      const point2 = this.to[1] > this.from[1] ? this.from : this.to;
      const dy = point1[1] - point2[1];
      const dx = point1[0] - point2[0];
      const centerX = (point1[0] + point2[0]) / 2;
      const centerY = (point1[1] + point2[1]) / 2;
      const distance = Math.sqrt(dy * dy + dx * dx);
      const angle = Math.atan2(dy, dx);
      const rx = centerX - Math.sin(angle) * distance / 5;
      const ry = centerY - Math.cos(angle) * distance / 5;
      return [rx, ry];
    };
    this.LineStroke.prototype.createCurvePath = function () {
      this.context.beginPath();
      this.context.moveTo(this.from[0], this.from[1]);
      const oneControl = this.getControlPoint();
      this.context.quadraticCurveTo(oneControl[0], oneControl[1], this.to[0], this.to[1]);
    };
    this.LineStroke.prototype.strokeCurve = function () {
      this.context.save();
      this.context.strokeStyle = this.color;
      if (props.mapConfig &&
        props.mapConfig.travelType === 'circle') {
        this.context.strokeStyle = 'transparent';
      }
      this.context.lineWidth = this.width;
      this.context.stroke();
      this.context.restore();
    };
    this.LineStroke.prototype.createPath = function () {
      const controlP = this.getControlPoint();
      this.path.setAttributeNS(null,
        'd',
        `M${this.from[0]} ${this.from[1]} Q${controlP[0]} ${controlP[1]} ${this.to[0]} ${this.to[1]}`);
      this.pathLength = this.path.getTotalLength();
      this.interLength = this.pathLength / 100;
    };
    this.LineStroke.prototype.start = function () {
      this.createCurvePath();
      this.strokeCurve();
      this.createPath();
      window.requestAnimationFrame(this.animate.bind(this));
    };
    this.LineStroke.prototype.animate = function () {
      this.step >= this.pathLength && (this.step = 0);
      this.step += this.interLength;
      const x = parseInt(this.path.getPointAtLength(this.step).x, 10);
      const y = parseInt(this.path.getPointAtLength(this.step).y, 10);
      if (props.mapConfig &&
        props.mapConfig.travelType !== 'circle') {
        if (!this.secondcircle) {
          this.secondcircle = new this.CirclePoint(this.circle.x,
            this.circle.y, 3,
            'rgba(255,255,255,0.6)', this.context, this.offCanvas);
        }
        if (this.step === this.interLength && !this.thirdcircle) {
          this.thirdcircle = new this.CirclePoint(this.circle.x, this.circle.y, 2,
            'rgba(255,255,255,0.4)', this.context, this.offCanvas);
        }
        if (this.step === 2 * this.interLength && !this.fourthcircle) {
          this.fourthcircle = new this.CirclePoint(this.circle.x, this.circle.y, 1,
            'rgba(255,255,255,0.2)', this.context, this.offCanvas);
        }
      }

      // fourth尾巴
      if (this.fourthcircle) {
        this.context.save();
        this.fourthcircle.createCenterCirclePath();
        this.context.clip();
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.restore();

        this.context.save();
        this.fourthcircle.createCenterCircleClipPath();
        this.context.clip();
        this.context.drawImage(this.offCanvas, 0, 0);
        this.context.restore();
      }
      // third尾巴
      if (this.thirdcircle) {
        this.context.save();
        this.thirdcircle.createCenterCirclePath();
        this.context.clip();
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.restore();

        this.context.save();
        this.thirdcircle.createCenterCircleClipPath();
        this.context.clip();
        this.context.drawImage(this.offCanvas, 0, 0);
        this.context.restore();
      }
      // second尾巴
      if (this.secondcircle) {
        this.context.save();
        this.secondcircle.createCenterCirclePath();
        this.context.clip();
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.restore();

        this.context.save();
        this.secondcircle.createCenterCircleClipPath();
        this.context.clip();
        this.context.drawImage(this.offCanvas, 0, 0);
        this.context.restore();
      }
      // first尾巴
      this.context.save();
      this.circle.createCenterCirclePath();
      this.context.clip();
      this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
      this.context.restore();

      this.context.save();
      this.circle.createCenterCircleClipPath();
      this.context.clip();
      this.context.drawImage(this.offCanvas, 0, 0);
      this.context.restore();
      // 画线
      this.createCurvePath();
      this.strokeCurve();
      // 画第四节尾巴
      if (this.fourthcircle) {
        this.fourthcircle.x = this.thirdcircle.x;
        this.fourthcircle.y = this.thirdcircle.y;
        this.fourthcircle.createCenterCirclePath();
        this.fourthcircle.fillPath();
      }
      // 画第三节
      if (this.thirdcircle) {
        this.thirdcircle.x = this.secondcircle.x;
        this.thirdcircle.y = this.secondcircle.y;
        this.thirdcircle.createCenterCirclePath();
        this.thirdcircle.fillPath();
      }
      // 尾巴第二节
      if (this.secondcircle) {
        this.secondcircle.x = this.circle.x;
        this.secondcircle.y = this.circle.y;
        this.secondcircle.createCenterCirclePath();
        this.secondcircle.fillPath();
      }

      // 尾巴第一节
      this.circle.x = x;
      this.circle.y = y;
      this.circle.createCenterCirclePath();
      this.circle.fillPath();

      window.requestAnimationFrame(this.animate.bind(this));
    };
    // 坐标点对象
    this.Point = function (x, y) {
      this.x = x;
      this.y = y;
    };
    // 地图区域对象
    this.Area = function (points, context) {
      this.points = points;
      this.context = context;
    };
    this.Area.prototype.createMapPath = function () {
      if ('length' in this.points) {
        this.context.beginPath();
        this.points.forEach((it, index) => (
          index === 0 ? this.context.moveTo(it.x, it.y) : this.context.lineTo(it.x, it.y)
        ));
        this.context.closePath();
      }
    };
    this.Area.prototype.drawMap = function () {
      this.createMapPath();
      this.context.save();
      this.context.translate(0.5, 0.5);
      this.context.fillStyle = 'rgba(3,23,60,0.8)';
      this.context.strokeStyle = '#2268A0';
      if (props.mapConfig &&
        props.mapConfig.map &&
        props.mapConfig.map.areaBackgroundColor) {
        this.context.fillStyle = props.mapConfig.map.areaBackgroundColor;
      }
      if (props.mapConfig &&
        props.mapConfig.map &&
        props.mapConfig.map.areaLineColor) {
        this.context.strokeStyle = props.mapConfig.map.areaLineColor;
      }
      this.context.fill();
      this.context.stroke();
      this.context.restore();
    };
    this.Area.prototype.cleardrawMap = function () {
      this.createMapPath();
      this.context.save();
      this.context.clip();
      this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
      this.context.fillStyle = '#020B22';
      if (props.mapConfig &&
        props.mapConfig.map &&
        props.mapConfig.map.mapBackgroundColor) {
        this.context.fillStyle = props.mapConfig.map.mapBackgroundColor;
      }
      this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
      this.context.restore();
      this.context.save();
      this.context.translate(0.5, 0.5);
      this.context.fillStyle = 'rgba(3,23,60,0.8)';
      this.context.strokeStyle = '#2268A0';
      if (props.mapConfig &&
        props.mapConfig.map &&
        props.mapConfig.map.areaBackgroundColor) {
        this.context.fillStyle = props.mapConfig.map.areaBackgroundColor;
      }
      if (props.mapConfig &&
        props.mapConfig.map &&
        props.mapConfig.map.areaLineColor) {
        this.context.strokeStyle = props.mapConfig.map.areaLineColor;
      }
      this.context.fill();
      this.context.stroke();
      this.context.restore();
    };
    this.Area.prototype.drawPath = function () {
      this.context.fill();
      this.context.stroke();
    };
  }

  componentDidMount() {
    this.canvas = document.getElementById(this.id);
    this.context = this.canvas.getContext('2d');
    const styleDom = window.getComputedStyle(this.canvas.parentNode);
    const width = Math.floor(window.parseInt(styleDom.width));
    const height = Math.floor(window.parseInt(styleDom.height));
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.canvas.width = width * this.scaleRatio;
    this.canvas.height = height * this.scaleRatio;
    this.offCanvas.width = width * this.scaleRatio;
    this.offCanvas.height = height * this.scaleRatio;
    this.maxScreenDis = Math.sqrt(this.canvas.width * this.canvas.width +
      this.canvas.height * this.canvas.height);
    if (this.props.mapConfig && this.props.mapConfig.map && this.props.mapConfig.map.type === 'world') {
      this.currentSource = this.sourceTomer;
      this.ratio = this.maxScreenDis / this.maxGeoDis;
      WorldMapJson.features.forEach((it) => {
        if (it.geometry.type === 'Polygon') {
          const points = [];
          it.geometry.coordinates[0].forEach((item) => {
            const geo = this.lonlatTomercator(item);
            const x = this.distancePoint([this.sourceTomer[0], geo[1]], geo) * this.ratio;
            const y = this.distancePoint([geo[0], this.sourceTomer[1]], geo) * this.ratio;
            const point = new this.Point(x, y);
            points.push(point);
          });
          const area = new this.Area(points, this.context);
          this.areaArray.push(area);
        } else if (it.geometry.type === 'MultiPolygon') {
          it.geometry.coordinates.forEach((item) => {
            const points = [];
            item[0].forEach((tmp) => {
              const geo = this.lonlatTomercator(tmp);
              const x = this.distancePoint([this.sourceTomer[0], geo[1]], geo) * this.ratio;
              const y = this.distancePoint([geo[0], this.sourceTomer[1]], geo) * this.ratio;
              const point = new this.Point(x, y);
              points.push(point);
            });
            const area = new this.Area(points, this.context);
            this.areaArray.push(area);
          });
        }
      });
      this.context.fillStyle = this.props.mapConfig.map.mapBackgroundColor || '#020B22';
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.translate(0.5, 0.5);
      this.areaArray.forEach((it) => {
        it.drawMap();
      });
      this.renderCircle();
      this.offContext.drawImage(this.canvas, 0, 0);
    }
    if (this.props.mapConfig && this.props.mapConfig.map && this.props.mapConfig.map.type === 'china') {
      window.mapLoad = this.mapLoad.bind(this);
      if (typeof BMap === 'undefined') {
        this.loadScript();
      } else {
        this.mapLoad();
      }
    }
  }

  mapLoad = () => {
    const bdary = new BMap.Boundary();// eslint-disable-line
    bdary.get(this.props.mapConfig.map.name || '中国', (rs) => {
      let pointsArray = [];
      rs.boundaries.length > 0 && (pointsArray = rs.boundaries[0].split(';'));
      const points = pointsArray.map((it) => {
        const point = it.split(',');
        return this.lonlatTomercator([Number(point[0]), Number(point[1])]);
      });
      this.chinaPoints = points;
      this.renderMap();
      this.renderCircle();
      this.offContext.drawImage(this.canvas, 0, 0);
    });
  }
  loadScript = () => {
    const script = document.createElement('script');
    script.src =
      'http://api.map.baidu.com/api?v=2.0&ak=C4f54f1b740bc62107184968edbb64fb&callback=mapLoad';
    document.body.appendChild(script);
  }
  renderMap = () => {
    if (Array.isArray(this.chinaPoints) && this.chinaPoints.length > 0) {
      this.maxScreenDis = Math.min(this.canvas.width, this.canvas.height);
      this.minLng = this.chinaPoints[0][0];
      this.maxLat = this.chinaPoints[0][1];
      this.chinaPoints.forEach((it) => {
        this.minLng = Math.min(this.minLng, it[0]);
        this.maxLat = Math.max(this.maxLat, it[1]);
      });
      this.currentSource = [this.minLng, this.maxLat];
      this.chinaPoints.forEach((it) => {
        this.maxLength = Math.max(this.maxLength,
          this.distancePoint([this.minLng, this.maxLat], it));
      });
      this.ratio = this.maxScreenDis / this.maxLength;
      const screenPoints = [];
      this.chinaPoints.forEach((it) => {
        const y = this.distancePoint([it[0], this.maxLat], it) * this.ratio;
        const x = this.distancePoint([this.minLng, it[1]], it) * this.ratio;
        screenPoints.push([x, y]);
      });
      this.context.fillStyle = this.props.mapConfig.map.mapBackgroundColor || '#020B22';
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.translate(0.5, 0.5);
      this.context.beginPath();
      screenPoints.forEach((it, index) => (
        index === 0 ? this.context.moveTo(it[0], it[1]) : this.context.lineTo(it[0], it[1])
      ));
      this.context.closePath();
      this.context.fillStyle = 'rgba(3,23,60,0.8)';
      this.context.strokeStyle = '#2268A0';
      if (this.props.mapConfig &&
        this.props.mapConfig.map &&
        this.props.mapConfig.map.areaBackgroundColor) {
        this.context.fillStyle = this.props.mapConfig.map.areaBackgroundColor;
      }
      if (this.props.mapConfig &&
        this.props.mapConfig.map &&
        this.props.mapConfig.map.areaLineColor) {
        this.context.strokeStyle = this.props.mapConfig.map.areaLineColor;
      }
      this.context.stroke();
      this.context.fill();
    }
  }
  renderCircle = () => {
    if (this.props.mapConfig &&
      this.props.mapConfig.toPoints &&
      this.props.mapConfig.fromPoint &&
      Array.isArray(this.props.mapConfig.fromPoint) &&
      Array.isArray(this.props.mapConfig.toPoints)) {
      let travelType = false;
      let travelDirection = true;
      if (this.props.mapConfig &&
        this.props.mapConfig.travelDirection &&
        this.props.mapConfig.travelDirection === 'to-from') {
        travelDirection = false;
      }
      if (this.props.mapConfig &&
        this.props.mapConfig.travelType &&
        this.props.mapConfig.travelType === 'circle') {
        travelType = true;
      }
      const frompoint = [
        this.distancePoint([
          this.currentSource[0],
          this.lonlatTomercator(this.props.mapConfig.fromPoint)[1]],
          this.lonlatTomercator(this.props.mapConfig.fromPoint)) * this.ratio,
        this.distancePoint([this.lonlatTomercator(this.props.mapConfig.fromPoint)[0],
          this.currentSource[1]],
          this.lonlatTomercator(this.props.mapConfig.fromPoint)) * this.ratio,
      ];
      this.props.mapConfig.toPoints.forEach((it) => {
        const Tpoint = this.lonlatTomercator(it);
        const point = [
          this.distancePoint([this.currentSource[0], Tpoint[1]], Tpoint) * this.ratio,
          this.distancePoint([Tpoint[0], this.currentSource[1]], Tpoint) * this.ratio,
        ];
        const col = this.color[Math.floor(Math.random() * 13)];
        const circle = new this.CirclePoint(point[0],
          point[1],
          8,
          col,
          this.context,
          this.offCanvas);
        circle.start();
        this.circles.push(point);
        const line = new this.LineStroke(travelDirection ? frompoint : point,
          travelDirection ? point : frompoint,
          this.context,
          col,
          1,
          this.offCanvas,
          this.CirclePoint,
          travelType,
        );
        line.start();
        this.lines.push(line);
      });
      this.circle = new this.CirclePoint(frompoint[0],
        frompoint[1],
        8,
        this.color[Math.floor(Math.random() * 13)],
        this.context,
        this.offCanvas);
      this.circle.start();
    }
  }

  render() {
    return (<div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <canvas id={this.id}>对不起，您的浏览器不支持canvas</canvas>
    </div>);
  }
}
ScatterCurveMap.propTypes = {
  mapConfig: PropTypes.shape({
    map: PropTypes.object.isRequired,
  }).isRequired,
};
