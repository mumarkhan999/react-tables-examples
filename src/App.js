// App.js
import React from "react";
import "./App.css";
import Modal from "./components/Modal";
import FilterTableComponent from "./components/filter.table";

class App extends React.Component {
  state = { show: false, values: [] };
  showModal = (values) => {
    this.setState({ show: true, values });

  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="App">
        <Modal show={this.state.show} values={this.state.values} handleClose={this.hideModal}></Modal>
        <h3>
          Filter Table using <code>react-table</code>
        </h3>
        <FilterTableComponent modalHandler={this.showModal} />
      </div>
    );
  }
}

export default App;
