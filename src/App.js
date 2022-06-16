import "./App.css";
import React, { Component, Fragment } from "react";

import Bill from "./Bill-Gates.webp";

import "./index.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FullName: "Bill Gates",
      bio: "Born October 28, 1955, Seattle, Washington, U.S.He is none other than the co-founder of Microsoft and the famous Windows operating system he created with Paul Allen when he was only 20 years old. His inventions have long earned him the title of the richest man in the world",
      profession: " A computer programmer and a co-founder of Microsoft",
      imgsrc: Bill,
      shows: false,
      digit: 0,
      date: new Date().toLocaleString(),
    };
  }
  update() {
    this.setState({
      shows: true,
    });
  }
  reset = () => {
    this.setState({ digit: 0 });
  };
  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState((prevState) => ({
        digit: prevState.digit + 1,
        date: new Date().toLocaleString(),
      }));
    }, 1000);
  }
  render() {
    return (
      <Fragment>
        <div className="text-center" style={{ paddingTop: 50 }}>
          <img
            src={this.state.imgsrc}
            alt=""
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="text-center" style={{ paddingTop: 30 }}>
          <button
            onClick={() => this.update()}
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Show Profile
          </button>
        </div>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header ">
                <h5 className="modal-title" id="staticBackdropLabel">
                  {this.state.FullName}
                </h5>
              </div>
              <div className="modal-body">
                <h5>{this.state.profession}</h5>

                <p>{this.state.bio}</p>
              </div>
              <div className="modal-footer row justify-content-between">
                <div className="col-4" style={{ paddingTop: 30 }}>
                  <p> {this.state.date}</p>
                  <p>counter:{this.state.digit}</p>
                </div>
                <div className="col-4">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={this.reset}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
  componentDidUpdate = () => {
    console.log("run componentDidUpdate");
  };

  componentWillUnmount = () => {
    console.log("run componentWillUnmount");
    clearInterval(this.intervalID);
  };
}
