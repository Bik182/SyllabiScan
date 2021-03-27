import React from 'react';
import { connect } from 'react-redux'
import { uploadPDFPending } from '../redux/actions/action.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './NavigationBar';
import { bindActionCreators } from "redux";

import { uploadPDF } from "../redux/fetch/upload.js";

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}


const numbers = {"test1": 5, "test2": 6};
class Home extends React.Component {
  handleClick = () => {
    var keys = Object.keys(JSON.parse(this.props.calendarReducer.tempUploadHolder));
    console.log('this is:', keys);
    // below is where we make the call, follow it to understand, uncomment, save and press the button, look at console in browser.
    //inspect the page and click on console, you should see a response with a body and other properties.
    //after comment the line bellow again, the json file of the pdf will be in the reducer




    //this.props.uploadPDF();
  }
  render() {

    return (
      <React.Fragment>

        <div>
          <button onClick={this.handleClick}>
            Click me
          </button>
            Hello
          </div>


      </React.Fragment>
    );
  }




}



const mapStateToProps = (state /*, ownProps*/) => {
  return {
    calendarReducer: state.calendarReducer,
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      uploadPDF: uploadPDF,

    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);

