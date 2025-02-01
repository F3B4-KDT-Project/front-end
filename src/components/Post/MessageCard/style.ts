import styled from '@emotion/styled';
import { MessageProps } from '../../../models/ChatData.type';

export const Container = styled.div<MessageProps>`
  display: flex;
  flex-direction: ${(props) => (props.isFlexRight ? 'row-reverse' : 'row')};
  align-items: flex-start;
  gap: 0.44rem;

  align-self: ${(props) => (props.isFlexRight ? 'flex-end' : 'flex-start')};
`;

export const ProfileImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 0.37rem;
  border-radius: 2.5rem;
  object-fit: cover;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div<MessageProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isFlexRight ? 'flex-end' : 'flex-start')};
  gap: 0.19rem;

  > p {
    color: #fff;
    font-family: 'Pretendard';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  > div {
    box-sizing: border-box;
    padding: 0.6rem 0.7rem;
    white-space: pre-wrap;

    border-radius: 0.4375rem;
    background: var(--bc-light-gray, #dadada);

    color: var(--bc-background, #2b2b2b);
    font-family: 'Pretendard';
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4375rem;
  }
`;

export const Time = styled.p`
  align-self: flex-end;

  color: var(--bc-background, #2b2b2b);
  font-family: 'Pretendard';
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
