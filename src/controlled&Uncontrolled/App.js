import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    //  this.firstname=React.createRef()  //uncontrolled component state acces using by createRef
    this.state = {
      firstname: "",
    }; //controlled component  update the state using setstate
  }
  handleChange = (e) => {
    this.setState({ firstname: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(this.firstname.current.value)
    console.log(this.state.firstname);
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          {/* <input type="text" placeholder='enter your name' ref={this.firstname}></input> */}
          <input
            type="text"
            placeholder="enter your name"
            value={this.state.firstname}
            onChange={this.handleChange}
          ></input>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default App;
