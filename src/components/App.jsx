import { Component } from "react";
import { Feedback } from "./Feedback/Feedback";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    names: [
      { id: 'id-1', name: 'good', title: 'Good' },
      { id: 'id-2', name: 'neutral', title: 'Neutral' },
      { id: 'id-3', name: 'bad', title: 'Bad' },
    ],
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
      default:
        console.log("default");
    }


    console.log(newFeedback);
    console.log(this.state);
  };


  render() {
    const { good, neutral, bad } = this.state;
    const { names } = this.state;
    return (
      <div>
        <Feedback onAddFeedback={this.addFeedback} names={names}></Feedback>
        <Statistics good={good} neutral={neutral} bad={bad} message={"There is no feedback"}></Statistics>
      </div>
    );
  }
};
