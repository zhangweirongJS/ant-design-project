require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

import ReactDOM from 'react-dom';
//获取图片相关信息
let imageData =  require('../data/imageData.json');
//利用自执行函数，将图片名信息转成图片URL路径信息
var genImageUrl = (function(imageDataArr) {
  for(var i=0, j = imageDataArr.length;i<j;i++){
    var singleImageData = imageDataArr[i];
    singleImageData.imageUrl = require('../images/'+singleImageData.filename);
    imageDataArr[i] = singleImageData;
  }
  return imageDataArr;
}
)(imageData)
function getRangeRandom (low, high){
 return Math.floor(Math.random() * (high-low) + low)
}
//获取0到30度之间的任意正负值
function get30DegRandom() {
 return ((Math.random() > 0.5?'':'-') + Math.ceil(Math.random() * 30));
}
var ImgFigure = React.createClass({
  handleClick: function (e) {
    e.stopPropagation();
    e.preventDefault();
    if(this.props.arrange.isCenter) {
      this.props.inverse();
    }else {
      this.props.center();
    }
  },
  render: function() {
   
      var styleObj = {}
    if(this.props.arrange.pos) {
      styleObj = this.props.arrange.pos;
    }
    //如果图片的旋转角度有值且不为0，添加旋转角度
    if (this.props.arrange.rotate) {
      //内联得采用驼峰标识写法
      (['MozTransform','WebkitTransform','msTransform','transform']).forEach(function(value){
        styleObj[value] = 'rotate(' + this.props.arrange.rotate + 'deg)';
      }.bind(this))
      
    }
    if(this.props.arrange.isCenter) {
      styleObj.zIndex = 11;
    }
    var imgFigureClassName = "img-figure";
        imgFigureClassName +=this.props.arrange.isInverse ? ' is-inverse' : '';
    return (
      <figure className={imgFigureClassName} style={styleObj} onClick={this.handleClick}>
        <img style={{width:'250px'}} src={this.props.data.imageUrl} alt={this.props.data.title}/>
        <figurecaption>
          <h2 className="img-title">{this.props.data.title}</h2>
          <div className="img-back" onClick={this.handleClick}>
            <p>
            {this.props.data.desc}
            </p>
          </div>
        </figurecaption>
      </figure>
    )
  }
});
var ControllerUnit = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    e.stopPropagation();

    if(this.props.arrange.isCenter) {
      this.props.inverse();
    }else {
      this.props.center();
    }
  },
  render: function () {
    var controllerUnitClassName = "controller-unit";
    //如果对应的事居中的图片，显示控制按钮的居中态
    if(this.props.arrange.isCenter) {
      controllerUnitClassName += " is-center";
      if(this.props.arrange.isInverse) {
        controllerUnitClassName += " is-inverse";
      }
    }
    return (
      <span className={controllerUnitClassName} onClick={this.handleClick}></span>
    )
  }
})
var GalleryByReactApp = React.createClass({
  Constant: {
    centerPos: {
      'left': 0,
      'right': 0
    },
    'hPosRange': {
      'leftSecX': [0,0],
      'rightSecX': [0,0],
      'y': [0,0]
    },
    'vPosRange': {
      'topY': [0,0],
      'x': [0,0]
    }
  },
  /*
  *翻转图片
  *@param index 输入当前被执行inverse操作的图片对应的图片信息数组的index值
  *@return {Function} 这是一个闭包函数， 其内return一个真正被执行的函数
  */
  inverse: function (index) {
    return function () {
      var imgsArrangeArr = this.state.imgsArrangeArr;

      imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse;

      this.setState({imgsArrangeArr: imgsArrangeArr})
    }.bind(this)
  },
  rearrange: function(centerIndex){
    var imgsArrangeArr = this.state.imgsArrangeArr,
    Constant = this.Constant,
    centerPos = Constant.centerPos,
    hPosRange = Constant.hPosRange,
    vPosRange = Constant.vPosRange,
    hPosRangeLeftSecX = hPosRange.leftSecX,
    hPosRangeRightSecX = hPosRange.rightSecX,
    hPosRangeY = hPosRange.y,
    vPosRangeTopY = vPosRange.topY,
    vPosRangeX = vPosRange.x,

    imgsArrangeTopArr = [],
    topImageNum = Math.floor(Math.random() * 2),
    
    topImgSpliceIndex = 0,
    imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex,1);
    //首先居中 centerIndex 的图片
    imgsArrangeCenterArr[0] = {
      pos: centerPos,
      rotate: 0,
      isCenter: true
    }
  
    //居中的centerIndex图片不需要旋转
    imgsArrangeCenterArr[0].rotate = 0;
    topImgSpliceIndex = Math.floor(Math.random()*(imgsArrangeArr.length - topImageNum))

    imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex, topImageNum)
  
    //布局上册图片
    imgsArrangeTopArr.forEach(function(value, index){
      imgsArrangeTopArr[index] = {
        pos: {
        top: getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
        left: getRangeRandom(vPosRangeX[0], vPosRangeX[1])
        },
        rotate: get30DegRandom(),
        isCenter: false
      };
      
    });
    
    
    for (var i = 0,j = imgsArrangeArr.length, k=j / 2;i<j; i++){
      var hPosrangeLorR = null;
      if(i<k){
        hPosrangeLorR = hPosRangeLeftSecX;
        
      }else {
        hPosrangeLorR = hPosRangeRightSecX;
        
      }
      
      imgsArrangeArr[i] = {
        pos: {
        top: getRangeRandom(hPosRangeY[0], hPosRangeY[1]),
        left: getRangeRandom(hPosrangeLorR[0], hPosrangeLorR[1])
        },
        rotate: get30DegRandom(),
        isCenter: false
      };
     
    }

    if (imgsArrangeTopArr && imgsArrangeTopArr[0]) {
      imgsArrangeArr.splice(topImgSpliceIndex,0,imgsArrangeTopArr[0]);
    }

    imgsArrangeArr.splice(centerIndex,0,imgsArrangeCenterArr[0])
    this.setState({
      imgsArrangeArr: imgsArrangeArr
    });
  },
  /*
  *利用 rearrange函数，居中对应的图片
  *@param index, 需要被居中的图片对应的图片信息数组的index值
  */
  center: function(index){
    return function () {
      this.rearrange(index);
    }.bind(this)
  },
  getInitialState: function(){
    return {
      imgsArrangeArr: [
        {
          pos: {
            left: 0,
            top: 0
          },
          rotate: 0,
          isInverse: false,
          isCenter: false
        }
      ]
    }
  },
  componentDidMount:function () {
    var stageDOM = ReactDOM.findDOMNode(this.refs.stage);
    var stageW = stageDOM.scrollWidth;
    var stageH = stageDOM.scrollHeight;
    var halfStageW = Math.ceil(stageW / 2);
    var halfStageH = Math.ceil(stageH / 2);

    var imgFigureDOM = ReactDOM.findDOMNode(this.refs.imageFigure0);
    
    var imgW = imgFigureDOM.scrollWidth;
    var imgH = imgFigureDOM.scrollHeight;
    var halfImgW = Math.ceil(imgW / 2);
    
    var halfImgH = Math.ceil(imgH / 2);
    this.Constant.centerPos = {
      left: halfStageW - halfImgW,
      top: halfStageH - halfImgH
    }
    this.Constant.hPosRange.leftSecX[0] = -halfImgW;
    this.Constant.hPosRange.leftSecX[0] = halfStageW - halfImgW * 3;
    this.Constant.hPosRange.rightSecX[0] = halfStageW + halfImgW;
    this.Constant.hPosRange.rightSecX[1] = stageW - halfImgW;
    this.Constant.hPosRange.y[0] = -halfImgH;
    this.Constant.hPosRange.y[1] = stageH - halfImgH;

    this.Constant.vPosRange.topY[0] = -halfImgH;
    this.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;
    this.Constant.vPosRange.x[0] = halfStageW - imgW;
    this.Constant.vPosRange.x[1] = halfStageW;
    this.rearrange(0);
    
  },
  render:function() {
    var controllerUnits = [];
    var imgFigures = [];
    imageData.forEach(function(value,index) {
      if(!this.state.imgsArrangeArr[index]){
        this.state.imgsArrangeArr[index] = {
          pos: {
            left: 0,
            top: 0
          },
          rotate: 0,
          isInverse: false,
          isCenter: false
        }
      }
      imgFigures.push(<ImgFigure key={index} ref={'imageFigure'+index} center={this.center(index)} data={value} inverse={this.inverse(index)} arrange={this.state.imgsArrangeArr[index]}/>);
      controllerUnits.push(<ControllerUnit key={index} arrange={this.state.imgsArrangeArr[index]} center={this.center(index)} inverse={this.inverse(index)}/>);
    }.bind(this))
    return (
     <section className="stage" ref="stage">
       <section className="img-sec">
         {imgFigures}
       </section>
       <nav className="controller-nav">
         {controllerUnits}
       </nav>
     </section>
    );
  }
})


GalleryByReactApp.defaultProps = {
};

export default GalleryByReactApp;
