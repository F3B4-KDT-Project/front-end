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
    color: ${({ theme }) => theme.colors.text};
    ${({ theme }) => theme.fonts.caption2};
  }

  > div {
    padding: 0.6rem 0.7rem;
    white-space: pre-wrap;

    border-radius: 0.4375rem;
    background: ${({ theme }) => theme.colors.lightGray};

    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body2};
  }

  > img {
    max-width: 15rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const Time = styled.p`
  align-self: flex-end;

  color: ${({ theme }) => theme.colors.background};
  ${({ theme }) => theme.fonts.caption1};
`;

export const Spacer = styled.div`
  width: 3rem;
`;

export const SkeletonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.44rem;
`;

export const SkeletonProfileImage = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0.5rem 0.37rem;
  border-radius: 2.5rem;
  background-color: ${({ theme }) => theme.colors.gray};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;
