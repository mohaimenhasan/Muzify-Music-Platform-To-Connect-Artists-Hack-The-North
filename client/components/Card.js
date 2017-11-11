
import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import loginSVG from '../log_in.svg';
import Butt from './Butt';

/**
 * Our login page
 * Has a login button that hit's the login url
 */


export default class Card extends Component {
	constructor(props){
 	super(props)
 	this.state ={
 		iconStyle: 'icons',
 		greybackStyle: 'greyback',
 		iconText: 'iconText',
 		cardContainer: 'cardContainer',
 		clicked: false,
 		collabButton: 'collabButton',
    khalidComp: false,
    topContainer: 'topContainer',
    personalityDisSim: [6.6, 7.1, 7.4, 7.6, 8.1],
    MusicDisSim:[3.75, 2.37, 2.4, 2.21, 2.34],
 	}
 }

 onHoverHandle(){
 	this.setState({iconStyle: this.state.iconStyle + ' iconHovered',
 	 greybackStyle: this.state.greybackStyle + ' greybackStyleHover',
 	 iconText: this.state.iconText + ' iconTextHovered',
 	})
 }

 onMouseLeaveHandler(){
 	this.setState({iconStyle: 'icons', greybackStyle: 'greyback', iconText: 'iconText',})
 }

 enlarge(){
 	this.setState({cardContainer: this.state.cardContainer + ' expandCard', clicked: true, collabButton:this.state.collabButton + ' viewCollab'})
 }

 blurHandler(){
 	this.setState({cardContainer: 'cardContainer', clicked: false, collabButton: 'collabButton', khalidComp: false})
 }

 shitsGonnaGoDown(){
 	this.setState({khalidComp: !this.state.khalidComp, 
    iconText: 'iconText expandCard iconTextHovered',
     iconStyle: 'icons expandFull iconHovered',


   })
 }

  render() {
    return (
      <div tabIndex="0" onBlur ={this.blurHandler.bind(this)} onClick={this.enlarge.bind(this)} onMouseLeave={this.onMouseLeaveHandler.bind(this)} onMouseEnter={this.onHoverHandle.bind(this)} className={this.state.cardContainer}>
      	<div className="topContainer">
      		<div className="pop">
      			{this.props.data.popularity}
      		</div>
      		<div className="text">
      			POPULARITY
      		</div>
      	</div>
      	{this.props.data.images.length > 0 ? <img className="albumCover" src={this.props.data.images[0].url}/> : null}
       	<div  className={this.state.iconStyle}>
       		<div className="fans">
       		<p className={this.state.iconText}>
      				{this.props.data.followers.total}
      			</p>
       		</div>
       		<div className="genre">
       			<p className={this.state.iconText}>
      				{this.props.data.genres[0]}
      			</p>
       		</div>
       		<div className="play">
       		</div>
       	</div>
       	<h1 className = "title">
       		<p onClick={this.shitsGonnaGoDown.bind(this)} className={this.state.collabButton}>MORE</p>
      		{this.props.data.name}
      	</h1>
      	<div className={this.state.greybackStyle} />
        {this.state.khalidComp ? <div className="similarities">
          <img className="zayn" src={"https://i.scdn.co/image/78e8741a9b5f3f585c64d3d53db770065a3837d7"}/>
         
          <img className="zayn" src={"https://i.scdn.co/image/e69f71e2be4b67b82af90fb8e9d805715e0684fa"}/>
      
          <img className="zayn" src={"https://i.scdn.co/image/2aa6c96a7d255e76fe654160272a1d2bb3e2054d"}/>
          
          <img className="zayn" src={"https://i.scdn.co/image/48e4567b0ff39cf10f62da6c7e7a9f914e35fd55"}/>
          <div className="comparisonBox">
             <p className="compareNum">{this.state.personalityDisSim[0]}</p>
             <p className="compareNum">{this.state.personalityDisSim[1]}</p>
             <p className="compareNum">{this.state.personalityDisSim[2]}</p>
             <p className="compareNum">{this.state.personalityDisSim[3]}</p>
          </div>
            <div className="comparisonBox1">
             <p className="compareNum">{this.state.MusicDisSim[0]}</p>
             <p className="compareNum">{this.state.MusicDisSim[1]}</p>
             <p className="compareNum">{this.state.MusicDisSim[2]}</p>
             <p className="compareNum">{this.state.MusicDisSim[3]}</p>
          </div>
        </div>: null}
      </div>
    );
  }
}
