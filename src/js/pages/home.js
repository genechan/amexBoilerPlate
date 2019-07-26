import React from "react";
import { connect } from 'react-redux';
import {homeAction} from "../redux/actions";

const HomeClass = (props) =>{
	
	const handleOnClick = () => {
		props.testDisplatch(props.count+1);
	}
	return(
		<div>
			Home count {props.count}
			<button onClick={handleOnClick}>Click me!</button>
		</div>)
	;
};

const mapStateToProps = (state) => {
	return {
		count: state.homeReducer.count || 0,
	};
};
const mapDispatchToProps = (dispatch) =>{
	
	return {
		testDisplatch: (data)=>dispatch(homeAction(data))
	};
}
const Home = connect(
	mapStateToProps,
	mapDispatchToProps
  )(HomeClass);

  export default Home;