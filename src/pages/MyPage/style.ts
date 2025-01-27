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
    background: var(--gray);
    border: none;
    position: absolute;
    top: 18.25rem;
    right: 1.13rem;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .icon_image {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.69rem;
`;

export const ProfileInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  label {
    color: var(--light-gray);
    font-family: 'Pretendard';
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.06875rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      background: none;
      border: none;
      cursor: pointer;

      .icon_edit {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`;

export const EditInfo = styled.div`
  display: flex;
  gap: 1.88rem;
  align-items: center;

  button {
    width: 5.75rem;
    height: 3.4375rem;
    border: none;
    border-radius: 1.0625rem;
    background: var(--gray, #5a5a5a);
    cursor: pointer;

    color: var(--white, #fff);
    font-family: 'Pretendard';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.025rem;

    &:hover {
      background: var(--light-gray);
      color: var(--background);
    }
  }
`;

export const ProfileInfoDetailsContent = styled.div`
  color: #fff;
  font-family: 'Pretendard';
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ThemeSelectionSection = styled.section`
  width: 21.875rem;
  height: 11.4375rem;
  border-radius: 1.0625rem;
  background: var(--gray);
  padding: 1.25rem 1.31rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.88rem;

  h2 {
    color: var(--white);
    font-family: 'Pretendard Variable';
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const ThemeSelectionForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  }
`;

export const RadioOption = styled.div<{ isChecked: boolean }>`
  height: 2.8125rem;
  display: flex;
  align-items: center;
  gap: 0.94rem;
  cursor: pointer;
  padding: 0.69rem;
  box-sizing: border-box;
  border-radius: 0.4375rem;
  background-color: ${(props) =>
    props.isChecked ? 'var(--input)' : 'transparent'};

  label {
    color: var(--white);
    font-family: 'Pretendard Variable';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
  }
`;

export const UncheckedCircle = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: var(--input, rgba(218, 218, 218, 0.35));
`;
