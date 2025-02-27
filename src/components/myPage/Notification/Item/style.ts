import styled from '@emotion/styled';

export const ItemWrapper = styled.li`
  height: 2.8125rem;
  display: flex;
  align-items: center;
<<<<<<< HEAD
  gap: 0.69rem;
=======
>>>>>>> 9c59c688476b9eea4bc5f1147cf882bede21fcad
  border-radius: 1.875rem;
  border: solid 1px ${({ theme }) => theme.colors.lightGray};
  background: ${({ theme }) => theme.colors.input};
  padding: 0 0.69rem;

<<<<<<< HEAD
  img {
    width: 1.875rem;
    height: 1.875rem;
=======
  button {
    display: flex;
    align-items: center;
    gap: 0.69rem;

    img {
      width: 1.875rem;
      height: 1.875rem;
    }
>>>>>>> 9c59c688476b9eea4bc5f1147cf882bede21fcad
  }
`;

export const Message = styled.p`
  display: flex;
  gap: 1rem;
  ${({ theme }) => theme.fonts.body3}
<<<<<<< HEAD
=======
  color: ${({ theme }) => theme.colors.text};
>>>>>>> 9c59c688476b9eea4bc5f1147cf882bede21fcad
`;
