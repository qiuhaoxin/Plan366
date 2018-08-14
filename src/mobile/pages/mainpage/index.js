import React,{Component} from 'react';
import PropTypes from 'prop-types';
import PageView from '../../components/PageView';
import Styles from './index.less';
import Header from '../../components/Header';
import {isEmpty} from '../../../utils/utils';
import {Image} from '@haoxin_qiu/reactwebcomponent';

import img from '../../../img/haoxin_qiu.jpg';

class MainPage extends Component{
	constructor(props){
		super(props);
		this.FooterData=[
            {FName:'日计划',FKey:'dayPlan',FUrl:'',FID:1},
            {FName:'周计划',FKey:'weekPlan',FUrl:'',FID:2},
            {FName:'我',FKey:'me',FUrl:'',FID:3},
		]
    this.curFooterItem="";
    this.ExtendData=[
       {FID:1,FName:'计划类型',FType:'URL',FUrl:'/planType'},
       {FID:2,FName:'修改密码',FType:'URL',FUrl:'/changePsw'},
    ]
	}
  state={
    headerName:'日计划',
  }
  componentDidMount(){
    const {tabName}=this.props.match.params;
    console.log("tabName is "+tabName);
  }
  handleFooterItemClick=(item)=>{
      console.log("item is "+JSON.stringify(item));
      this.curFooterItem=item.FKey;
      this.setState({
        headerName:item.FName,
      }) 
  }
  hanldeClickAvator=()=>{
    this.props.history.push("/me");
  }
  handleExtendItemClick=(item)=>{
     const type=item.FType;
     switch(type){
        case 'URL':
            this.props.history.push(item.FUrl);
        break;
     }   
  }
  renderExtend=()=>{
      const extendStr=this.ExtendData.map(item=>{

        return (
           <li key={item.FID} className={Styles.row} onClick={()=>this.handleExtendItemClick(item)}>{item.FName}</li>
        )
      })
      return (
         <ul> 
            {extendStr}
         </ul>
      )
  }
  renderAbout=()=>{
     return (
         <div className={Styles.about}>
              <div className={Styles.avator} onClick={this.hanldeClickAvator}>
                  <Image imgSrc={img} imgStyle={{width:'80px',height:'80px',borderRadius:'50%',marginLeft:'80px'}}/>
                  <span className={Styles.rigthArrow}></span>
              </div>
              <div className={Styles.extensiable}>
                  {this.renderExtend()}
              </div>
              <div className={Styles.logout}>
                 退出登陆
              </div>
         </div>
     )
  }
  renderDayPlan=()=>{
      return (
         <div className={Styles.dayPlan}>
             DayPlan
         </div>
      )
  }
  renderWeekPlan=()=>{
    console.log("weekPlan");
      return (
         <div className={Styles.weekPlan}>
             weekPlan
         </div>
      )
  }
	renderFooter=()=>{
        const {tabName}=this.props.match.params;
        if(isEmpty(this.curFooterItem)){
          this.curFooterItem=tabName;
        }
        const footerStr=this.FooterData.map(item=>{
          let styleObj={
            color:item.FKey==this.curFooterItem ? '#1890ff' : '#555',
          }

          return (<li key={item.FID} onClick={()=>this.handleFooterItemClick(item)} style={styleObj}>{item.FName}</li>) 
        })
        return <ul>
            {footerStr}
        </ul>
	}
	render(){
    const {headerName}=this.state;
    console.log("xx headerName is "+headerName);
		return (
           <div className={Styles.wrapper}>
               <Header midContent={headerName}/>
               <div className={Styles.content}>
                   {
                      headerName=='日计划' ? this.renderDayPlan() : 
                      (headerName=='我' ? this.renderAbout() : this.renderWeekPlan())
                   }
               </div>
               <div className={Styles.footer}>
                    {this.renderFooter()}
               </div>
           </div>
		)
	}
}

export default MainPage;