import React from 'react';
import { Link } from 'dva/router';
import { Card, Icon } from 'antd';
import Highlight from 'react-highlight';
import { ThreeModel } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class ThreeModelShow extends Basic {
  render() {
    const modelSource = [{
      parameter: 'width',
      description: '非必需，自定义模型容器canvas的宽度',
      type: 'Number/String',
      defaultValue: '300',
    }, {
      parameter: 'height',
      description: '非必需，自定义模型容器canvas的高度',
      type: 'Number/String',
      defaultValue: '300',
    }, {
      parameter: 'modelType',
      description: '非必需，选择内置的两款模型类型，可取male、female字符串',
      type: 'String',
      defaultValue: '\'male\'',
    }, {
      parameter: 'modelPath',
      description: '非必需，自定义模型文件路径，一般为obj文件，modelPath没有会取modelType，modelPath优先',
      type: 'String',
      defaultValue: 'null',
    }, {
      parameter: 'pointLightColor',
      description: '非必需，点光源颜色',
      type: 'String',
      defaultValue: 'rgb(0, 197, 205)',
    }, {
      parameter: 'pointLightPosition',
      description: '非必需，点光源位置，为length=3的数组，分别对应x、y、z位置',
      type: 'Array',
      defaultValue: '[50, 50, 60]',
    }, {
      parameter: 'ambientLightColor',
      description: '非必需，环境光源颜色，为模型底色',
      type: 'String',
      defaultValue: 'rgb(245,222,179)',
    }, {
      parameter: 'cameraZ',
      description: '非必需，=camera.position.z，代表摄像头和模型的距离，越小模型越大',
      type: 'Number',
      defaultValue: '250',
    }, {
      parameter: 'cameraY',
      description: '非必需，=camera.position.y，代表摄像头和模型在Y轴上位置，改变此值会上下移动模型',
      type: 'Number',
      defaultValue: '-80',
    }, {
      parameter: 'isOnMouseMove',
      description: '非必需，模型是否随着鼠标移动而旋转，默认关闭',
      type: 'Boolean',
      defaultValue: 'false',
    }, {
      parameter: 'rotatateY',
      description: '非必需，模型在y轴上旋转的速度，正负数旋转的方向也不一致',
      type: 'Number',
      defaultValue: '0.05',
    }];
    const tableConfig = [
      { title: 'PeopleModel', subtitle: '', dataSource: modelSource },
    ];

    return (
      <div>
        <p className="container-header">ThreeModel 人物模型图</p>
        <p>3D的人物模型图，内置2款男女模型，支持自定义添加模型。可用于用户画像等。更多模型可以参考
          <Link to="https://github.com/mrdoob/three.js/tree/dev/examples/obj">官方github示例</Link>
          或模型网站<Link to="https://clara.io/library">https://clara.io/library</Link>
        </p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ float: 'left' }}>
              <ThreeModel height="400" width="300" />
            </div>
            <div style={{ float: 'right' }}>
              <ThreeModel
                height="400"
                width="300"
                modelType={'female'}
                ambientLightColor={'#ca7a76'}
                cameraZ={220}
                rotatateY={-0.05}
                isOnMouseMove
              />
            </div>
          </div>
          <hr />
          <p className="sample-title">
            内置两款男女模型
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <p className="sample-desc">默认为男性模型，可以对比两个示例代码的差别，
            给右边模型减小和camera的距离、反向旋转、camera位置随鼠标在屏幕上的位置而变化</p>
          <div className="code-container">
            <Highlight className="JavaScript">{
              `import { ThreeModel } from 'deep-viz';

ReactDOM.render(
  <div style={{ overflow: 'hidden' }}>
    <div style={{ float: 'left' }}>
      <ThreeModel height="400" width="300" />
    </div>
    <div style={{ float: 'right' }}>
      <ThreeModel
        height="400"
        width="300"
        modelType={'female'}
        ambientLightColor={'#ca7a76'}
        cameraZ={220}
        rotatateY={-0.05}
        isOnMouseMove
      />
    </div>
  </div>
, mountNode);
              `}
            </Highlight>
          </div>
        </Card>

        <Card>
          <ThreeModel
            modelPath={`${window.location.href.indexOf('github.io') > -1 ? '/deepviz' : ''}/model/standard-male-figure.obj`}
            cameraZ={30}
            cameraY={-10}
          />
          <hr />
          <p className="sample-title">
            引入别的模型
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <p className="sample-desc">引入一个非默认模型方法，模型较小，适当减小cameraZ；当模型引入而看不见或尺寸不合适，需适当调整cameraY、cameraZ</p>
          <div className="code-container">
            <Highlight className="JavaScript">{
              `import { ThreeModel } from 'deep-viz';

ReactDOM.render(
  <ThreeModel
    modelPath={'/model/standard-male-figure.obj'}
    cameraZ={30}
    cameraY={-10}
  />
, mountNode);
              `}
            </Highlight>
          </div>
        </Card>

        <p className="container-title">API</p>
        {this._renderAPI(tableConfig)}
      </div>
    );
  }
}
