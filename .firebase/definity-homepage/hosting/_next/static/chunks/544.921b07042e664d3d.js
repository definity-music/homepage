"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[544],{8252:function(t){t.exports=function t(r,e){if(r===e)return!0;if(r&&e&&"object"==typeof r&&"object"==typeof e){if(r.constructor!==e.constructor)return!1;if(Array.isArray(r)){if((s=r.length)!=e.length)return!1;for(i=s;0!=i--;)if(!t(r[i],e[i]))return!1;return!0}if(r.constructor===RegExp)return r.source===e.source&&r.flags===e.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===e.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===e.toString();if((s=(o=Object.keys(r)).length)!==Object.keys(e).length)return!1;for(i=s;0!=i--;)if(!Object.prototype.hasOwnProperty.call(e,o[i]))return!1;for(i=s;0!=i--;){var s,i,o,n=o[i];if(("_owner"!==n||!r.$$typeof)&&!t(r[n],e[n]))return!1}return!0}return r!=r&&e!=e}},544:function(t,r,e){e.r(r),e.d(r,{Particles:function(){return p},default:function(){return l}});var s=e(7294),i=e(3812),o=e(8252),n=e.n(o);let a="tsparticles";class p extends s.Component{constructor(t){super(t),this.state={init:!1,library:void 0}}destroy(){this.state.library&&(this.state.library.destroy(),this.setState({library:void 0}))}shouldComponentUpdate(t){return!n()(t,this.props)}componentDidUpdate(){this.refresh()}forceUpdate(){this.refresh().then(()=>{super.forceUpdate()})}componentDidMount(){(async()=>{this.props.init&&await this.props.init(i.S6),this.setState({init:!0},async()=>{await this.loadParticles()})})()}componentWillUnmount(){this.destroy()}render(){let{width:t,height:r,className:e,canvasClassName:i,id:o}=this.props;return s.createElement("div",{className:e,id:o},s.createElement("canvas",{className:i,style:Object.assign(Object.assign({},this.props.style),{width:t,height:r})}))}async refresh(){this.destroy(),await this.loadParticles()}async loadParticles(){var t,r,e;if(!this.state.init)return;let s=async t=>{this.props.container&&(this.props.container.current=t),this.setState({library:t}),this.props.loaded&&await this.props.loaded(t)},o=null!==(r=null!==(t=this.props.id)&&void 0!==t?t:p.defaultProps.id)&&void 0!==r?r:a,n=this.props.url?await i.S6.loadJSON(o,this.props.url):await i.S6.load(o,null!==(e=this.props.params)&&void 0!==e?e:this.props.options);await s(n)}}p.defaultProps={width:"100%",height:"100%",options:{},style:{},url:void 0,id:a};var l=p}}]);