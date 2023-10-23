import styled from 'styled-components';

export const Title = styled.h2`
    font-size: 24px;
    font-weight: 700;
`;

export const ButtonList = styled.div`
    display: flex;
    gap: ${p => p.theme.spacing(6)};
`

export const Button = styled.button`
    width: 120px;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
`