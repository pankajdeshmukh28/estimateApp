import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      chapter: "",
      itemNumber: "",
      refNumber: "",
      description: "",
      unit: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChapter = this.handleChapter.bind(this);
    this.handleItemNumber = this.handleItemNumber.bind(this);
    this.handleRefNumber = this.handleRefNumber.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleUnit = this.handleUnit.bind(this);
  }

  handleSubmit() {
    const data = {
      chapter: this.state.chapter,
      itemNumber: this.state.itemNumber,
      refNumber: this.state.refNumber,
      description: this.state.description,
      unit: this.state.unit
    }
    debugger;
    fetch('/api/save', {
      accept: 'application/json',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: 'post',
      body: JSON.stringify(data)
    }).then(() => {debugger; console.log('got the response from api points')});
  }

  handleChapter(event) {
    this.setState({chapter: event.target.value});
  }

  handleItemNumber(event) {
    this.setState({itemNumber: event.target.value});
  }

  handleRefNumber(event) {
    this.setState({refNumber: event.target.value});
  }

  handleDescription(event) {
    this.setState({description: event.target.value});
  }

  handleUnit(event) {
    this.setState({unit: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Estimate
        </header>
        <section className="">
        <form onSubmit={this.handleSubmit}>
        <label>
          Chapter:
          <input type="text" value={this.state.chapter} onChange={this.handleChapter} />
        </label>
        <label>
          Item No:
          <input type="text" value={this.state.itemNumber}  onChange={this.handleItemNumber}/>
        </label>
        <label>
          Reference No:
          <input type="text" value={this.state.refNumber} onChange={this.handleRefNumber} />
        </label>
        <label>
          Description:
          <input type="text" value={this.state.description} onChange={this.handleDescription}/>
        </label>
        <label>
          Unit:
          <input type="text" value={this.state.unit} onChange={this.handleUnit} />
        </label>
        <input type="submit" value="Submit" />
        </form>
        </section>

      </div>
    );
  }
}

export default App;
