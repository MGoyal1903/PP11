import React from "react";
import "./App.css";
import List from "./List";
import Input from "./Input";

class App extends React.Component {
  state = {
    tasks: ["hi"],
    currInput: "",
  };

  deleteTask = (singlevalue) => {
    let currTaskArr = this.state.tasks;
    let filteredArr = currTaskArr.filter((element) => {
      return element !== singlevalue;
    });
    this.setState({ tasks: filteredArr });
  };

  handleCurrInput = (value) => {
    this.setState({ currInput: value });
  };

  handleTask = () => {
    this.setState({
      tasks: [...this.state.tasks, this.state.currInput],
      currInput: "",
    });
  };

  render = () => {
    return (
      <div>
        <Input
          handleCurrInput={this.handleCurrInput}
          handleTask={this.handleTask}
          currInput={this.state.currInput}
        />
        <List tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </div>
    );
  };
}

export default App;
