import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';
import Header from '../../components/Header';
import {withRouter} from 'react-router-dom';
import {Modal,Tip,ListView} from '@haoxin_qiu/reactwebcomponent';
import {isEmpty,wrapperFunc} from '../../../utils/utils';
import {connect} from 'react-redux';
import {newPlanTypeAction,getPlanTypeListAction} from '../../actions/mainpageAction';

//计划类型
class PlanType extends Component{
	constructor(props){
		super(props);
		this.modalTitle="新增计划类型";
		this.tipContent="";
        const dataSource=new ListView.DataSource({
        	rowHasChanged: (row1, row2) => row1 !== row2,
        })
	    this.state={
			name:'',
			mark:'',
			showModal:false,
			showTip:false,
			dataSource,
	    }
	}

	componentDidMount(){
        const {getPlanTypeAPI,data:{pagination}}=this.props;
        console.log("pagination si "+JSON.stringify(pagination));
        getPlanTypeAPI({pagination});
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.data.list!=null){
            console.log("nextProps data list is "+JSON.stringify(nextProps.data.list));
            setTimeout(()=>{
                this.setState({
                	dataSource:this.state.dataSource.cloneWithRows(nextProps.data.list),
                })
            },200)
		}
		if(nextProps.result!=1 && !isEmpty(nextProps.message)){
			showTip(nextProps.message);
		}
	}
	handleBack=()=>{
		console.log("PlanType left click");
		this.props.history.push("/main/me");
	}
	handleHeaderRightClick=()=>{
        this.setState({
        	showModal:true,
        })
	}
	handleInputChange=(e,key)=>{
		this.setState({
			[key]:e.target.value,
		})
	}
	showTip=(tipContent)=>{
		this.tipContent=tipContent;
        this.setState({
        	showTip:true,
        })
	}
	validate=()=>{
        const {name,mark}=this.state;
        if(isEmpty(name)){
            showTip("计划类型名称不能为空!");
            return false;
        }
        return true;
	}
	handleModalConfirm=()=>{
        const {name,mark}=this.state;
        const {newPlanAPI}=this.props;
        const result=this.validate();
        if(!result)return;
        newPlanAPI({name,mark});

	}
	handleModalCancel=()=>{

	}
	render(){
	   const {name,mark,showModal,showTip,dataSource}=this.state;
	   console.log("dataSource is "+JSON.stringify(dataSource));	
       return (
         <div className={Styles.wrapper}>
             <Header midContent={"计划类型"} leftWrapperVisible={true} leftClick={this.handleBack}
                rightContent={'new'} rightClick={this.handleHeaderRightClick}/>
             <div className={Styles.content}>
                  <ListView
                       ref={el => this.lv = el}
                       dataSource={this.state.dataSource}
                  >

                  </ListView>
                  <Modal visible={showModal} style={{top:'22%'}} title={this.modalTitle}
                     onOk={this.handleModalConfirm}
                     onCancel={this.handleModalCancel}
                  >
                      <div className={Styles['modal-row']}>
                          <label>名称：</label>
                          <input value={name} placeholder="请输入" onChange={(e)=>this.handleInputChange(e,'name')}/>
                      </div>
                      <div className={Styles['modal-row']}>
                          <label>备注：</label>
                          <textarea value={mark} placeholder="请输入" onChange={(e)=>this.handleInputChange(e,'mark')}/>
                      </div>
                  </Modal>
             </div>
             <Tip tipContent={this.tipContent} tipVisible={showTip}/>
         </div>
       )
	}
}

PlanType.propTypes={

}
PlanType.defaultProps={

}
const mapStateToProps=state=>{
	return {
       data:state.mainpage.data,
       result:state.mainpage.result,
       message:state.mainpage.message,
	}
}
const mapDispatchToProps=dispatch=>{
	return {
       newPlanAPI:payload=>wrapperFunc(payload,newPlanTypeAction,dispatch),
       getPlanTypeAPI:payload=>wrapperFunc(payload,getPlanTypeListAction,dispatch),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(PlanType));