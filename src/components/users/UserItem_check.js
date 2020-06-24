import React from "react";
import PropTypes from "prop-types";
import { Component } from "react";
import axios from "axios";

class UserItem1 extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  showUserInfo = async () => {
    let login = this.props.user.login;
    const res = await axios.get(`https://api.github.com/users/${login}`);
    console.log(res.data);
  };

  render() {
    const { login, avatar_url } = this.props.user;

    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />

        <h3>{login}</h3>

        <button
          onClick={this.showUserInfo}
          className="btn btn-dark btn-sm my-1"
        >
          More
        </button>
      </div>
    );
  }
}

export default UserItem1;
