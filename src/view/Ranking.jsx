import axios from "axios";
import React, { Component } from "react";
import ListRanking from "../component/ListRanking";
import Term from "../component/Term";
import TopRanking from "../component/TopRanking";
import WantToGo from "../component/WantToGo";
import { connect } from "react-redux";

class Ranking extends Component {
  componentDidMount() {
    axios
      .get("https://6214adb789fad53b1f1b0f00.mockapi.io/rankingPostUser")
      .then((data) => {
        this.props.fetchDataUser(data.data);
        //user Login
        localStorage.setItem(
          "idUserLogin",
          data.data[Math.floor(Math.random() * 100)].id
        );
      })
      .catch((err) => {
        console.log("rrrrrr", err);
      });
  }

  constructor(props) {
    super(props);
    this.state = { flag: true };
    this.changePostToGo = this.changePostToGo.bind(this);
    this.changeGoToPost = this.changeGoToPost.bind(this);
  }

  changePostToGo = () => {
    this.setState({ flag: true });
  };
  changeGoToPost = () => {
    this.setState({ flag: false });
  };

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <div className="content">
            <div className="navigate">
              <button
                onClick={() => {
                  this.changePostToGo();
                }}
                className={
                  this.state.flag ? "btn btn-primary" : "btn btn-transparent"
                }
              >
                POST
              </button>
              <button
                onClick={() => {
                  this.changeGoToPost();
                }}
                className={
                  !this.state.flag ? "btn btn-primary" : "btn btn-transparent"
                }
              >
                WANT TO GO
              </button>
            </div>
            {this.state.flag ? <TopRanking /> : <WantToGo />}
          </div>
        </div>
        <div className="wrapperList">
          <ListRanking
            isPost={this.state.flag}
            listUser={this.props.listUser}
            time={this.props.time}
          />

          <Term />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataUser: (data) => {
      dispatch({ type: "DISPATCH__LIST__USER", data });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    listUser: state.userReducer.userList,
    time: state.userReducer.time,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
