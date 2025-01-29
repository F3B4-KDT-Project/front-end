import React from 'react';
import styled from '@emotion/styled';
import { BsTrashFill,BsThreeDotsVertical } from 'react-icons/bs';

interface BoardHeader{
    boardName : string;
  }
  
  const Header:React.FC<BoardHeader> = ({ boardName }) => {
  
    const handleEditButton = () =>{
  
        /* 추후 api 연동 */
        alert('수정하기 버튼을 눌렀습니다.')
    };
  
    const handleDeleteButton = () => {
  
        /* 추후 api 연동 */
        alert('삭제하기 버튼을 눌렀습니다.')
    }

    const handleCreateButton = () => {
  
        /* 추후 api 연동 */
        alert('생성하기 버튼을 눌렀습니다.')
    }
  
    return (
  
      <Container>
          <Info>
            <Title>
              <Board>{boardName}</Board>
            </Title>
            <EditButton 
              onClick={handleEditButton}
            />
            <DeleteButton 
              onClick={handleDeleteButton}
          />
          </Info>
          <CreateButton onClick={handleCreateButton}>수업 생성</CreateButton>
        </Container>
    )
  };
  
  export default Header;
  
  const Container=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  
    width: 100%;
  `;
  
  const Info=styled.div`
    display: flex;
    flex-direction: row;
  
    width: 100%;
  `;
  
  const Title = styled.div`
      display: flex;
      margin-right: 1.19rem;
  `;
  
  const Board = styled.p`
      color: var(--white);
      margin: 0; /* 기본 마진 제거 */
  
      text-shadow: 0px 0px 4px var(--black);
      font-family: "Pretendard";
      font-size: 4.0625rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
  `;
  
  const EditButton=styled(BsThreeDotsVertical)`
      color: var(--light-gray);
      width: 1.5rem;
      height: 1.5rem;
      flex-shrink: 0;
  `;
  
  const DeleteButton=styled(BsTrashFill)`
      color: var(--light-gray);
      width: 1.5rem;
      height: 1.5rem;
      flex-shrink: 0;
  `;

  const CreateButton=styled.button`
      color: var(--white);
      text-align: center;
      font-family: "Pretendard";
      font-size: 1.375rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      width: 9.92306rem;
      height: 3.25rem;
      flex-shrink: 0;
      border: none;
      border-radius: 3.125rem;
      background: var(--gray);

      margin-top: 3rem;

      &:hover {
        background: var(--black);
      }
`;