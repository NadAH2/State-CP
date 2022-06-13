import React, { Component, Fragment } from "react";
import Bill from "./Bill-Gates.webp";
class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FullName: "Bill Gates",
      bio: "Born October 28, 1955, Seattle, Washington, U.S.He is none other than the co-founder of Microsoft and the famous Windows operating system he created with Paul Allen when he was only 20 years old. His inventions have long earned him the title of the richest man in the world",
      profession: " A computer programmer and a co-founder of Microsoft",
      imgsrc: Bill,
      shows: false,
      date: new Date().toLocaleString(),
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        date: new Date().toLocaleString(),
      }));
    }, 1000);
  }

  update() {
    this.setState({
      shows: true,
    });
  }

  render() {
    return (
      <Fragment>
        <div>
          <img
            src={this.state.imgsrc}
            alt=""
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div style={{ paddingTop: 30 }}>
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
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: 30 }}>
          <h5> {this.state.date}.</h5>
        </div>
      </Fragment>
    );
  }
}

export default Profile;
