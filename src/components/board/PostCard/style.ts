import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.13rem 1.75rem;
  background-color: ${({ theme }) => theme.colors.post};
  border-radius: 0.9375rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.background};
  ${({ theme }) => theme.fonts.title4}
`;

export const Badge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.69rem;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body5};
  width: 2.8125rem;
  height: 2.8125rem;
  border-radius: 50%;
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.colors.background};
  ${({ theme }) => theme.fonts.body4};
`;
