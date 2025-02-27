import styled from '@emotion/styled';

export const EmptyBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  text-shadow: 0px 0px 4px ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.title7};
  margin-top: 4.81rem;

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 900;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  text-shadow: 0px 0px 4px ${({ theme }) => theme.colors.black};
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 2.19rem;

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 900;
  }
`;
