export const baseControlTableCfg = () => {
  const Source = [{
    parameter: 'disableDragging',
    description: '非必需，定义是否允许地图拖拽。默认允许拖拽',
    type: 'Boolean',
    defaultValue: 'false',
  }, {
    parameter: 'disableMapRule',
    description: '非必需，定义禁止显示左下角比例尺。默认显示',
    type: 'Boolean',
    defaultValue: 'false',
  }, {
    parameter: 'mapStyle',
    description: '非必需，百度地图整体背景，默认midnight，可参考 http://developer.baidu.com/map/custom/list.htm',
    type: 'String',
    defaultValue: 'midnight',
  }, {
    parameter: 'navigationControl',
    description: '非必需，是否展示左上的缩放',
    type: 'Boolean',
    defaultValue: 'true',
  }, {
    parameter: 'showMapType',
    description: '非必需，是否展示右上的地图类型切换，默认展示',
    type: 'Boolean',
    defaultValue: 'true',
  }];
  const tableConfig = [
    { title: 'BaiduMap组件通用配置', subtitle: '', dataSource: Source },
  ];
  return tableConfig;
};
