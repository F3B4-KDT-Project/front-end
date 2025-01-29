import styled from "@emotion/styled";

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.13rem 1.75rem;
    background-color: var(--post);
    border-radius: 0.9375rem;
    cursor: pointer;
    
    &:hover {
      background-color: var(--light-gray);
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    color: var(--background);
    font-family: "Pretendard";
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const Badge = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.69rem;
    background-color: var(--red);
    color: var(--white);
    font-family: "Pretendard";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 2.8125rem;
    height: 2.8125rem;
    border-radius: 50%;
`;

export const Date = styled.span`
    color: var(--background);
    font-family: "Pretendard";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;