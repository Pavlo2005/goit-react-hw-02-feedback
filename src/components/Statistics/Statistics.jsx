import { Title, StatisticsList } from "./Statistics.styled.js";

export const Statistics = ({ good, neutral, bad, message }) => {

    const total = good + neutral + bad;
    const percent = Math.floor(((good / total) * 100));
    if (total > 0)
        return (
            <div>
                <Title>Statistics</Title>
                <StatisticsList>
                    <li>{`Good: ${good}`}</li>
                    <li>{`Neutral: ${neutral}`}</li>
                    <li>{`Bad: ${bad}`}</li>
                    <li>{`Total: ${total}`}</li>
                    <li>{`Positive feedback: ${percent}%`}</li>
                </StatisticsList>
            </div>
        );
    else
        return (
            <div>{`${message}`}</div>
        );
}