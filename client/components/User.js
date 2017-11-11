import React, { Component } from 'react';
import { connect }      from 'react-redux';
import {
  getMyInfo,
  setTokens,
}   from '../actions/actions';
import Spotify from 'spotify-web-api-js';
import Card from './Card'



/**
 * Our user page
 * Displays the user's information
 */
class User extends Component {
  constructor(props){
    super(props)
    const {dispatch, params} = this.props;
    const {accessToken, refreshToken} = params;
    dispatch(setTokens({accessToken, refreshToken}));
    dispatch(getMyInfo());
    this.state={
      dataState: [],
      accessToken: accessToken,
      info: null,
     
    }
    this.apple = "app"
  }
  /** When we mount, get the tokens from react-router and initiate loading the info */
componentDidMount() {
    // params injected via react-router, dispatch injected via connect



// spotifyApi.setAccessToken(access);


  }

  barClicked(){
    this.refs.inputField.classList += " searchLogoColor"
  }

  handleBlur(){
    this.refs.inputField.classList.remove("searchLogoColor")
  }
  submit(){
   
    console.log(this.search())
    // console.log(data)

  }

  // setStateFunction(){
  //   this.setState({dataState: this.apple})
  // }

  // callback(result){
  //   console.log(result)
  // }

  search(){
    var damn = this
    var token = this.state.accessToken
    var query = this.refs.inputField1.value
    function foo(fn){
      var s = new Spotify();
      s.setAccessToken(token)
      s.searchArtists(query, {limit:6}).then(function(data) {
        
        console.log(data)
        fn(data)
        return data
    }, function(err) {
      console.error(err);
    })
    }

    foo(function(ans){
      test(ans)
      return ans
       // this is where you get the return value
    });


    function test(ans){
      const cardList = ans.artists.items.map((info) =>
          <Card key={info.id} data={info}/>
      );
      console.log(this)
      damn.setState({dataState: cardList})
    }





  }


  generateCard(){
      const cardList = this.state.dataState.map((info) =>
          <Card />
      );
      // if (this.state.unMount=== false)
      return cardList
  }
  //   hello (query, types, options, callback) {
  //     var _baseUri = 'https://api.spotify.com/v1';
  //   var requestData = {
  //     url: _baseUri + '/search/',
  //     params: {
  //       q: query,
  //       type: types.join(',')
  //     }
  //   };
  //   console.log(requestData)
  // }




  /** Render the user's info */
  render() {
    const { accessToken, refreshToken, user } = this.props;
    const { loading, display_name, images, id, email, external_urls, href, country, product } = user;
    const imageUrl = images[0] ? images[0].url : "";
    // if we're still loading, indicate such
    if (loading) {
      return <h2>Loading...</h2>;
    }
    return (
         <div>
           <form onSubmit={this.submit.bind(this)} id = "searchId" className="searchBar" onBlur={this.handleBlur.bind(this)} onClick={this.barClicked.bind(this)}>     
              <div className="group">      
                <input ref ="inputField1" id="searchInput" type="text" required/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label >Search For Artists</label>
                <div ref ="inputField" className = "searchLogo"></div>
              </div>
            </form>
        <div className="cardBox">
            {this.state.dataState}
        </div>
      </div>
    );
  }
}

export default connect(state => state)(User);
