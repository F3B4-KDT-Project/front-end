import styled from '@emotion/styled';

export const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  width: auto;
  height: 100vh;
  box-sizing: border-box;
  padding: 1.81rem 3rem 2.31rem 3.38rem;
`;

export const MyPageHeader = styled.header`
  color: #fff;
  text-shadow: 0px 0px 4px var(--black);
  font-family: 'Pretendard';
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const MyPageHeaderUserName = styled.span`
  font-size: 4.0625rem;
`;

export const MyPageContent = styled.div`
  border-radius: 2.1875rem;
  background: var(--container);
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
