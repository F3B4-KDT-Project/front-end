import styled from '@emotion/styled';

export const ProfileImage = styled.div`
  width: 21.875rem;
  height: 21.875rem;
  border-radius: 1.0625rem;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.4375rem;
    background: ${({ theme }) => theme.colors.gray};
    position: absolute;
    top: 18.25rem;
    right: 1.13rem;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
