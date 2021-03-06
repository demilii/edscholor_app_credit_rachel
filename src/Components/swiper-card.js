import PropTypes from "prop-types"
//import './fonts.css'
import React, {Component} from "react"
//import Image from '../components/image.js';

class SwiperCard extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			open: false
		}
	} 
	render(){
	const runClick=event=>{
		this.props.navigateFunc();
	}
	return(
		<div className = "swiper-card article"/*{'piece ${ this.state.open }'}*/ >
		<div className = "main-image">
		<img src = { this.props.path }/>
		</div>
		<div className = "article-title">
		{ this.props.title }
		</div>
		<div className = "preview">
			{this.props.previewtext}
		</div>
		<div className = "stats">
		</div>
		<span onClick = {runClick} >Read More</span>
		</div>
	);
	}
}

SwiperCard.propTypes = {
  title: PropTypes.string.isRequired, 
  path: PropTypes.string, 
  previewtext:PropTypes.string, 
  navigateFunc:PropTypes.func
}



export default SwiperCard