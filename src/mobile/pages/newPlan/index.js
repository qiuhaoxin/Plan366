import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Styles from './index.less';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button,Tip} from '@haoxin_qiu/reactwebcomponent';
import {isEmpty,getTime,wrapperFunc,FilterMaxId} from '../../../utils/utils';
import {SubmitPlanAction} from '../../actions/mainpageAction';

class NewPlan extends Component{
	constructor(props){
		super(props);
		//this.today=getTime('yyyy-MM-dd');
       // console.log("today is "+this.today);
    this.tipContent="";
	}
	state={
		title:`${this.props.userName}${this.props.today}的日计划`,
		inputContent:'',
		planList:[],
    tipVisible:false,
	}
	validateForm=()=>{
        const {inputContent}=this.state;
        if(isEmpty(inputContent)){
            console.log("计划内容不能为空!");
            this.tipContent="计划内容不能为空!";
            this.setState({
              tipVisible:true,
            })
            return false;
        }
        return true;
	}

	renderPlanList=()=>{
		const {planList}=this.state;
		console.log("planList is "+JSON.stringify(planList));
        const planListStr=planList.map(item=><li key={item.id}>{item.content}</li>)
		return <ul>
            {planListStr}
		</ul>
	}
	componentDidMount(){
		const {type}=this.props.match.params;
		const {title}=this.state;
	}
	hanldeSure=(clearContent)=>{
	   const _this=this;
	   const {inputContent}=this.state;
       const result= this.validateForm();
       if(!result)return;
       const {planList}=this.state;
       const maxID=FilterMaxId(planList,'id');
       planList.push({id:maxID,content:inputContent});
       console.log("planList44 is "+JSON.stringify(planList));
       this.setState({
       	  planList,
       	  inputContent:'',
       })
	}
  handleTip=()=>{
    console.log("sdfsdds");
    this.setState({
      tipVisible:false,
    })
  }
	hanldeInputChange=(e,key)=>{
		const val=e.target.value;
        this.setState({
           [key]:val,
        })
	}
	handleSubmit=()=>{
		const {type}=this.props.match.params;
        const {title,planList}=this.state;
        const {submitPlanAPI}=this.props;
        submitPlanAPI({title,planList});

	}
	handleKeyup=(e)=>{
       const keyCode=e.keyCode;
       if(keyCode==13){

       }
	}
	render(){
		const {title,inputContent}=this.state;
		return (
           <div className={Styles.wrapper}>
                <Header midContent={"日计划"}/>
                <div className={Styles.content}>
                     <div className={Styles.row}>
                        <label>标题:</label>
                        <input placeholder="请输入" placeholder={title} onChange={(e)=>this.hanldeInputChange(e,'title')}/>
                     </div>
                     <div className={Styles.row}>
                         <label>计划内容:</label>
                         <textarea placeholder="请输入不超过200字的计划内容" value={inputContent} onKeyUp={this.handleKeyup} onChange={(e)=>this.hanldeInputChange(e,'inputContent')}/>
                     </div>
                     <div style={{display:'inline-flex','justifyContent':'flex-end',width:'100%'}}>
                           <Button styleObj={{width:'120px'}}>重置</Button>
                           <Button type='primary' onClick={this.hanldeSure} styleObj={{width:'120px','marginLeft':'20px'}}>确定</Button>
                     </div>
                </div>
                <div className={Styles.list}>
                     {this.renderPlanList()}
                </div>
                <div className={Styles.footer}>
                     <Button type="primary" styleObj={{margin:'0 auto','padding':'18px',display:'inline-flex','justifyContent':'center'}} onClick={this.handleSubmit}>提交</Button>
                </div>
                <Tip tipContent={this.tipContent} visible={this.state.tipVisible} onHideCallback={this.handleTip}>

                </Tip>
           </div>
		)
	}
}
NewPlan.defaultProps={
   today:getTime('yyyy-MM-dd'),
}
NewPlan.propTypes={
   today:PropTypes.string,
}
const mapStateToProps=state=>{
	return {
       userName:state.user.userName,

	}
}
const mapDispatchToProps=dispatch=>{
	return {
       submitPlanAPI:payload=>wrapperFunc(payload,SubmitPlanAction,dispatch),
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(NewPlan));