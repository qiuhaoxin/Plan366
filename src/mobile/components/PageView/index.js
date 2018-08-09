import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';

import {Icon} from '@haoxin_qiu/reactwebcomponent';

class PageView extends Component{
	constructor(props){
		super(props);
	}
	renderFooterView=()=>{
        const {iconData}=this.props;
        console.log("iconData is "+JSON.stringify(iconData));
        const iconStr=iconData.map(item=><li key={item.id}>
        	<Icon config={{icon:item.icon,text:item.text,Style:{},icon_click:item['icon_click']}}></Icon>
        </li>)
        return <ul>
            {iconStr}
        </ul>
	}
	render(){
        return (
           <div className={Styles.wrapper}>
              <Icon config={{icon:'e914',text:'商品',icon_click:'e913'}}></Icon>
           </div>
        )
	}
}
PageView.defaultProps={
    iconData:[       
       {id:1,type:'icon',icon:'e914',text:'商品',icon_click:'e913'},
       {id:2,type:'icon',icon:'e919',text:'购物车',icon_click:'e918'},
       {id:3,type:'icon',icon:'e91b',text:'文件夹',icon_click:'e91a'},
       {id:4,type:'icon',icon:'e905',text:'订单',icon_click:'e904'}
    ],//底部tab元数据
}
PageView.propTypes={
    iconData:PropTypes.array,
}
export default PageView;