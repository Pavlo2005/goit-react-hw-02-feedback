import { Component } from "react";
import { Feedback } from "./Feedback/Feedback";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = newFeedback => {

    switch (newFeedback) {
      case "good":
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
        break;
      case "neutral":
        this.setState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
        break;
      case "bad":
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
        break;
    }


    console.log(newFeedback);
    console.log(this.state);
  };


  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Feedback onAddFeedback={this.addFeedback} ></Feedback>
        <Statistics good={good} neutral={neutral} bad={bad} message={"There is no feedback"}></Statistics>
      </div>
    );
  }
};
