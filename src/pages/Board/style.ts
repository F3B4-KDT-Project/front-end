import styled from '@emotion/styled';

export const EmptyBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--background);
`;

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  padding: 2.44rem 3.38rem;
  gap: 2.31rem;
  box-sizing: border-box;

  background-color: var(--background);
`;

export const IconWrapper = styled.div`
  color: var(--white);
  margin-bottom: 4.81rem;

  .WinkIcon {
    width: 12.5rem;
    height: 12.5rem;
    flex-shrink: 0;
  }
`;

export const Message = styled.h2`
  color: var(--light-gray);
  text-shadow: 0px 0px 4px var(--black);
  font-family: 'Pretendard';
  font-size: 2.1875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  strong {
    color: var(--white);
    font-family: 'Pretendard';
    font-size: 2.1875rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
`;

export const Description = styled.p`
  color: var(--light-gray);
  text-shadow: 0px 0px 4px var(--black);
  font-family: 'Pretendard';
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 2.19rem;

  strong {
    color: var(--white);
    font-family: 'Pretendard';
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 2.12rem 2.06rem;
  margin-top: 1.56rem;
  border-radius: 2.1875rem;
  background-color: var(--container);
`;

export const Participants = styled.div`
  display: flex;
  justify-content: flex-end;
  color: var(--white);
  font-family: 'Pretendard';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 1.06rem;
  margin-right: 0.56rem;

  .PartIcon {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    color: var(--light-gray);
    margin-right: 0.81rem;
  }
`;

export const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.69rem;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.69rem;
  gap: 0.94rem;

  .left {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    color: var(--footer);
  }

  .right {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    color: var(--footer-ar);
  }
`;

export const PageNumber = styled.span<{ isActive: boolean }>`
  font-family: 'Pretendard';
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${(props) => (props.isActive ? 'var(--white)' : 'var(--light-gray)')};
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;
