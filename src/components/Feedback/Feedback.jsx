import { Button, ButtonList, Title } from "./Feedback.styled";

export const Feedback = ({ onAddFeedback }) => {
    return (
        <div>
            <Title>Please leave feedback</Title>
            <ButtonList>
                <Button onClick={evt => onAddFeedback("good")}>Good</Button>
                <Button onClick={evt => onAddFeedback("neutral")}>Neutral</Button>
                <Button onClick={evt => onAddFeedback("bad")}>Bad</Button>
            </ButtonList>
        </div>
    );
}