import axios from "axios";
import React, { Component } from "react";
import ListRanking from "../component/organism/ListRanking";
import TopRanking from "../component/organism/TopRanking";
import WantToGo from "../component/organism/WantToGo";
import { connect } from "react-redux";
import "./ranking.css";
import Button from "../component/atoms/Button";
import Term from "../component/molecules/Term";

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
        console.log("errrrrrr", err);
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
              <Button
                action={this.changePostToGo}
                flag={this.state.flag}
                text="POST"
              />

              <Button
                action={this.changeGoToPost}
                flag={!this.state.flag}
                text="Want To Go"
              />
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
