import React, { useState } from 'react';
import defaultImg from '../../assets/icons/logo_black.svg';
import { BsImageFill, BsPencilFill } from 'react-icons/bs';
import { Input } from '../../components/common/Input';

const MyPage: React.FC = () => {
  const userName = '유지희';
  const userId = 'esder1310';

  const [isEditingId, setIsEditingId] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);

  return (
    <div>
      <header>
        <h1>
          <span>{userName}</span>님의 마이페이지
        </h1>
      </header>

      <div>
        <section aria-labelledby="user-info">
          <h2 id="user-info" style={{ display: 'none' }}>
            사용자 정보
          </h2>

          <div>
            <img src={defaultImg} alt="프로필 이미지" />
            <button aria-label="프로필 이미지 수정">
              <BsImageFill />
            </button>
          </div>

          <div>
            <div>
              <label htmlFor="id">
                사용자 아이디
                <button
                  onClick={() => setIsEditingId(true)}
                  aria-label="사용자 아이디 수정"
                >
                  <BsPencilFill />
                </button>
              </label>
              {isEditingId ? (
                <div>
                  <Input
                    type="id"
                    id="id"
                    value={userId}
                    onChange={() => {}}
                    placeholder="수정할 아이디를 입력하세요."
                  />
                  <button onClick={() => setIsEditingId(false)}>
                    수정완료
                  </button>
                </div>
              ) : (
                <div>
                  <span>{userId}</span>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="name">
                사용자 이름
                <button
                  onClick={() => setIsEditingName(true)}
                  aria-label="사용자 이름 수정"
                >
                  <BsPencilFill />
                </button>
              </label>
              {isEditingName ? (
                <div>
                  <Input
                    type="text"
                    id="name"
                    value={userName}
                    onChange={() => {}}
                    placeholder="수정할 이름 입력하세요."
                  />
                  <button onClick={() => setIsEditingName(false)}>
                    수정완료
                  </button>
                </div>
              ) : (
                <div>
                  <span>{userName}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        <section aria-labelledby="theme-selection">
          <h2 id="theme-selection">테마 선택</h2>
          <form action="">
            <div>
              <input type="radio" />
              <label htmlFor="dark-mode">dark mode</label>
            </div>
            <div>
              <input type="radio" />
              <label htmlFor="light-mode">light mode</label>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default MyPage;
