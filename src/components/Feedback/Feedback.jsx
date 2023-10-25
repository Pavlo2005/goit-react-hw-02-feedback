import { Button, ButtonList, Title } from "./Feedback.styled";

export const Feedback = ({ names, onAddFeedback }) => {
    return (
        <div>
            <Title>Please leave feedback</Title>
            <ButtonList>
                {names.map(element => {
                    return (
                        <Button key={element.id} onClick={evt => onAddFeedback(element.name)}>{element.title}</Button>
                    )

                })}
            </ButtonList>
        </div>
    );
}