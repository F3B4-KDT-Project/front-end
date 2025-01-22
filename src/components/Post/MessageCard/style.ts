import styled from '@emotion/styled';

export const Container = styled.div`
  width: 85%;
  margin-top: 0.63rem;
  display: flex;
  align-items: flex-start;
  gap: 0.44rem;
`;

interface ProfileImageProps {
  src: string;
}

export const ProfileImage = styled.div<ProfileImageProps>`
  width: 10%;
  margin: 0 0.37rem;
  aspect-ratio: 1 / 1;
  border-radius: 50%;

  background: ${({ src }) => `url(${src})`} lightgray 50% / cover no-repeat;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.19rem;

  > p {
    color: #fff;
    font-family: 'Pretendard Variable';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  > div {
    box-sizing: border-box;
    width: 100%;
    padding: 0.6rem 0.7rem;

    border-radius: 0.4375rem;
    background: var(--bc_light-gray, #dadada);

    color: var(--bc_background, #2b2b2b);
    font-family: 'Pretendard Variable';
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4375rem;
  }
`;

export const Time = styled.p`
  align-self: flex-end;

  color: var(--bc_background, #2b2b2b);
  font-family: Inter;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
