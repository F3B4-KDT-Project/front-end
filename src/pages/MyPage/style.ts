import styled from '@emotion/styled';

export const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  width: auto;
  height: 100vh;
  padding: 1.81rem 3rem 2.31rem 3.38rem;
`;

export const MyPageHeader = styled.header`
  color: ${({ theme }) => theme.colors.text};
  text-shadow: 0px 0px 4px ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.header2}
`;

export const MyPageHeaderUserName = styled.span`
  ${({ theme }) => theme.fonts.header3}
`;

export const MyPageContent = styled.div`
  border-radius: 2.1875rem;
  background: ${({ theme }) => theme.colors.container};
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.81rem;
  padding: 2.06rem;
`;

export const UserInfoSection = styled.section`
  display: flex;
  gap: 2.56rem;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.69rem;
  flex-grow: 1;
  margin-top: 2.2rem;
`;
