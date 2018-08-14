import React,{Component} from 'react';
import Styles from './index.less';
import PropTypes from 'prop-types';
class Header extends Component{
	constructor(props){
		super(props);
	}
    renderLeftWrapper=()=>{
       const {leftWrapperVisible}=this.props;
       return leftWrapperVisible ?  <div onClick={this.handleLeftClick} className={Styles.leftContent}><span className={Styles.symbol}></span><span className={Styles.text}>Back</span></div> : null
    }
    handleLeftClick=()=>{
    	console.log("click left!");
    }
    renderRightWrapper=()=>{
       
    }
	render(){
	    const {leftContent,rightContent,midContent}=this.props;
        return (
	       <div className={Styles.wrapper}>
	           <div className={Styles.leftWrapper}>
	                {
	                	leftContent ? leftContent() : this.renderLeftWrapper()
	                }
	           </div>
	           <div className={Styles.midWrapper}>
	                {
	                   typeof midContent=='string' ? midContent : midContent()
	                }
	           </div>
	           <div className={Styles.rightWrapper}>
                  {
                  	rightContent ? rightContent() : this.renderRightWrapper()
                  }
	           </div>
	       </div>
        )
	}
}
Header.propTypes={

}
Header.defaultProps={
   leftWrapperVisible:false,
}
export default Header;