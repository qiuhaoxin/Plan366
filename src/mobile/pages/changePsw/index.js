import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';
import Header from '../../components/Header';


class ChangePsw extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){

	}
	render(){
        return (
           <div className={Styles.wrapper}>
              <Header midContent={"修改密码"}/>
              <div className={Styles.content}>

              </div>
           </div>
        )
	}
}

ChangePsw.propTypes={

}
ChangePsw.defaultProps={

}
export default ChangePsw;
