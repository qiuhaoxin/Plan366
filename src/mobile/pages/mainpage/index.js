import React,{Component} from 'react';
import PropTypes from 'prop-types';
import PageView from '../../components/PageView';
import Styles from './index.less';
import Header from '../../components/Header';
import {isEmpty} from '../../../utils/utils';
import {Image} from '@haoxin_qiu/reactwebcomponent';
import img from '../../../img/haoxin_qiu.jpg';
import {connect} from 'react-redux';

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
    const {userName,phoneNum}=this.props;
    console.log("curFooterItem in did mount is "+this.curFooterItem);
    //if(isEmpty(this.curFooterItem)){
      console.log("tabName is "+tabName+" and is "+this.curFooterItem);
      this.curFooterItem=tabName;
      let result=this.FooterData.filter(item=>item.FKey==tabName);
      console.log("reuslt is "+JSON.stringify(result));
      result=result && result[0];
      this.setState({
         headerName:result && result['FName']
      })
    //}
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
  renderHeaderLeft=()=>{
    return (
       <div className={Styles.headerLeft}>
           new
       </div>
    )
  }
  handleNew=()=>{
    const {headerName}=this.state;
    const type=headerName=='日计划' ? 'dayPlan' : 'weekPlan';
    this.props.history.push("/newPlan/"+type);
  }
  renderHeaderRight=()=>{
    return (
       <div className={Styles.headerRight} onClick={this.handleNew}>
           new
       </div>
    )
  }
  handleHeaderRightClick=()=>{
     this.props.history.push("/newPlan/"+this.curFooterItem);
  }
	render(){
    const {headerName}=this.state;
		return (
           <div className={Styles.wrapper}>
               <Header leftWrapperVisible={true} rightContent={headerName!='我' ? 'new' : null} 
                  midContent={headerName} rightClick={this.handleHeaderRightClick}/>
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
const mapStateToProps=state=>{
  return {
      userName:state.user.userName,
      phoneNum:state.user.phoneNum,
  }
}
const mapDispatchToProps=dispatch=>{
  return {


  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);

/*
*rightContent={headerName!='我' ? this.renderHeaderLeft : null}
*/