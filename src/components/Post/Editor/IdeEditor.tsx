import React, { useEffect, useState, useRef } from 'react';
import Editor, { loader } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import { IdeEditorProps, CustomTheme } from '../../../models/Editor.type';
import { BsFillBrushFill, BsTrash } from 'react-icons/bs';
import { Container, ButtonContainer, CopyButton, SaveButton, HighlightButton } from './style';

import { Client } from '@stomp/stompjs';

const IdeEditor: React.FC<IdeEditorProps> = ({
  defaultLanguage,defaultValue,
  language,value,
  theme,
}) => {
  const [themeLoaded, setThemeLoaded] = useState(false);
  const [selectedRange, setSelectedRange] = useState<monaco.IRange | null>(null);
  const [highlightedRanges, setHighlightedRanges] = useState<monaco.IRange[]>([]);
  const [showHighlightButton, setShowHighlightButton] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({x:0, y:0});
  // 코드 복사, 저장 : 명시적으로 monaco.editor.IStandaloneCodeEditor 타입 지정
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  
  // 아래 코드 주석?
  const decorationsRef = useRef<string[]>([]); // 저장된 하이라이터

  // Websocket Client
  const stompClientRef = useRef<Client | null>(null);

  useEffect(()=>{
    // JSON 테마 파일 로드 및 Monaco Editor 초기화
    const loadCustomTheme = async () => {
      try {
        const response = await fetch('/monaco-themes/dark.json'); // public 폴더 기준
        if (!response.ok) {
          throw new Error(`HTTP error! 테마 로드 안됨!! Status: ${response.status}`);
        }

        // 'response.json()'의 결과를 CustomTheme 타입으로 캐스팅
        const customTheme = (await response.json()) as CustomTheme;
        const monaco = await loader.init(); // Monaco 로더 초기화

        monaco.editor.defineTheme('custom-dark', customTheme); // 커스텀 테마 등록
        setThemeLoaded(true); // 테마 로드 완료
      } catch (error) {
        console.error('Failed to load Monaco theme:', (error as Error).message);
      }
    };

    loadCustomTheme();

    if(editorRef.current){
      editorRef.current.focus(); // 마운트 시 code 창에 자동으로 포커스
    }

    // Monaco Editor 하이라이트 스타일을 전역에 추가
    const style = document.createElement("style");
    style.innerHTML = `
      .highlighted-code {
        background-color: rgba(255, 255, 0, 0.15); /* 형광펜 색상 */
        color : white;
        padding: 0.5px;
        cursor: pointer;
        font-weight:600;
      }
    `;
    document.head.appendChild(style);

    // Websocket 연결 설정
    stompClientRef.current = new Client({
      brokerURL: // [필수] 연결할 서버 주소 명시
        'ws://ec2-3-36-75-8.ap-northeast-2.compute.amazonaws.com:8080/chatting',
      onConnect:()=>{
        console.log("Connected IDE");

        // 코드 변경 이벤트 구독
        stompClientRef.current?.subscribe(`/ide/edit/{postId}`,(message)=>{
          const receivedCode = JSON.parse(message.body);
          if(editorRef.current){
            editorRef.current.setValue(receivedCode);
          }
        });

        // 하이라이트 이벤트 구독 -> 백엔드 추가 요청 해야함.
        stompClientRef.current?.subscribe(`/ide/edit/{postId}`,(message)=>{
          const receivedHighlights = JSON.parse(message.body);
          setHighlightedRanges(receivedHighlights);
          applyHighlight(receivedHighlights);
        });
      },
      onDisconnect:()=>{
        console.log("Disconneted IDE");
      },
    });

    stompClientRef.current.activate();

    return ()=>{
      stompClientRef.current?.deactivate();
    };
  },[]);

  if (!themeLoaded) {
    return <div style={{color:'#000'}}>
      코드를 불러오는 중입니다! 잠시만 기다려주세요!
      </div>;
  }

  const handleEditorMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;

    /* 하이라이터 기능 */
    // ✅ 마우스가 하이라이트 근처에 있으면 삭제 버튼 표시
    editor.onMouseMove((event: monaco.editor.IEditorMouseEvent) => {
      if (!editorRef.current) return;
      const position = event.target.position;
      if (!position) {
        setShowDeleteButton(false);
        return;
      }

      // const isNearHighlighted = highlightedRanges.some((range) =>
      //   position.lineNumber >= range.startLineNumber &&
      //   position.lineNumber <= range.endLineNumber &&
      //   position.column >= range.startColumn - 2 && // 하이라이트 근처 감지
      //   position.column <= range.endColumn + 2
      // );

      // if (isNearHighlighted) {
      //   const positionCoords = editorRef.current.getScrolledVisiblePosition(
      //     new monaco.Position(position.lineNumber, position.column)
      //   );
      //   if (positionCoords) {
      //     setButtonPosition({ x: positionCoords.left, y: positionCoords.top - 25 });
      //     setSelectedRange(highlightedRanges.find(
      //       (range) =>
      //         position.lineNumber >= range.startLineNumber &&
      //         position.lineNumber <= range.endLineNumber &&
      //         position.column >= range.startColumn &&
      //         position.column <= range.endColumn
      //     ) || null);
      //     setShowDeleteButton(true);
      //   }
      // } else {
      //   setShowDeleteButton(false);
      // }

      const highlightedRange = highlightedRanges.find((range)=>
        position.lineNumber >= range.startLineNumber &&
        position.lineNumber <= range.endLineNumber &&
        position.column >= range.startColumn &&
        position.column <= range.endColumn
      );
      if (highlightedRange){
        const positionCoords = editorRef.current.getScrolledVisiblePosition(
          new monaco.Position(position.lineNumber, position.column)
        );
        if (positionCoords){
          setButtonPosition({x:positionCoords.left, y:positionCoords.top-25});
          setSelectedRange(highlightedRange);
          setShowDeleteButton(true);
        }
      }else{
        setShowDeleteButton(false);
      }
    });
    editor.onDidChangeModelContent(()=>{
      if(!editorRef.current)return;
      const newCode = editorRef.current.getValue();
      stompClientRef.current?.publish({
        destination:'/send/posts/edit/1',
        body:JSON.stringify(newCode),
      });
    });

    // 드래그 이벤트 감지
    editor.onMouseUp(()=>{
      const selection = editor.getSelection();
      if (selection && !selection.isEmpty()){
        // IRange 객체 생성
        const range: monaco.IRange = {
          startLineNumber: selection.startLineNumber,
          startColumn: selection.startColumn,
          endLineNumber: selection.endLineNumber,
          endColumn: selection.endColumn,
        };
        // 선택 영역의 마지막 위치 계산
        const position = editor.getScrolledVisiblePosition(selection.getEndPosition());
        if (position){
          setSelectedRange(range);
          setButtonPosition({ x: position.left, y: position.top - 25 });
          
          const isHighlighted = highlightedRanges.some(
            (highlighted) => 
              highlighted.startLineNumber === range.startLineNumber &&
              highlighted.startColumn === range.startColumn &&
              highlighted.endLineNumber === range.endLineNumber &&
              highlighted.endColumn === range.endColumn
          );
          // 이미 하이라이트 된 경우 삭제버튼으로 교체체
          // if(isHighlighted){
          //   setShowDeleteButton(true);
          //   setShowHighlightButton(false);
          // } else {
          //   setShowHighlightButton(true);
          //   setShowDeleteButton(false);
          // }
          setShowHighlightButton(!isHighlighted);
        }
      }
    });
  };

  const addHighlight = (range:monaco.IRange ) => {
    if (!editorRef.current) return;

    // 새 하이라이트 추가 및 ID 저장
    // const newDecorations = editorRef.current.deltaDecorations(decorationsRef.current, [
    //   {
    //     range,
    //     options: {
    //       inlineClassName: 'highlighted-code',
    //     },
    //   },
    // ]);
    // decorationsRef.current = newDecorations;
    // setHighlightedRanges((prev) => [...prev, range]);
    // setShowHighlightButton(false);
    // setShowDeleteButton(false);

    const updatedHighlights = [...highlightedRanges, range];
    setHighlightedRanges(updatedHighlights);
    applyHighlight(updatedHighlights);

    stompClientRef.current?.publish({
      destination:'/send/posts/edit/1',
      body:JSON.stringify(updatedHighlights),
    });

    setShowHighlightButton(false);
    setShowDeleteButton(false);

    // 추후 api 연동 작업 필요
  };

  const removeHighlight = (range: monaco.IRange) => {
    if (!editorRef.current) return;

    // 하이라이트 업데이트 : 삭제할 하이라이트 찾아서 제거거
    // const updatedRanges = highlightedRanges.filter((highlighted) =>!(
    //       highlighted.startLineNumber === range.startLineNumber &&
    //       highlighted.startColumn === range.startColumn &&
    //       highlighted.endLineNumber === range.endLineNumber &&
    //       highlighted.endColumn === range.endColumn
    // ));
    // setHighlightedRanges(updatedRanges);
    const updatedHighlights  = highlightedRanges.filter((highlighted) =>!(
          highlighted.startLineNumber === range.startLineNumber &&
          highlighted.startColumn === range.startColumn &&
          highlighted.endLineNumber === range.endLineNumber &&
          highlighted.endColumn === range.endColumn
    ));
    setHighlightedRanges(updatedHighlights );
    applyHighlight(updatedHighlights );
    // ✅ 하이라이트 삭제 WebSocket 전송
    stompClientRef.current?.publish({
      destination: "/app/highlight",
      body: JSON.stringify(updatedHighlights),
    });

    // monaco-editor에서 하이라이트 제거거
    // const newDecorations = updatedRanges.map((r) => ({
    //   range: r,
    //   options: { inlineClassName: "highlighted-code" },
    // }));
    const newDecorations = updatedHighlights.map((r) => ({
      range: r,
      options: { inlineClassName: "highlighted-code" },
    }));

    // decorationsRef.current = updatedDecorations;
    decorationsRef.current = editorRef.current.deltaDecorations(decorationsRef.current, newDecorations);

    // 버튼 숨기기
    // setShowHighlightButton(false);
    setShowDeleteButton(false);

    // 추후 소켓 연결하기기
  };

  const applyHighlight = (ranges:monaco.IRange[]) => {
    if(!editorRef.current) return;
    const newDecorations = ranges.map((r)=>({
      range : r,
      options : { inlineClassName:'highlighted-code'},
    }));
    decorationsRef.current = editorRef.current.deltaDecorations(decorationsRef.current, newDecorations);
  };

  const handleCopyButton = async () => {
    if (editorRef.current) {
      const currentCode = editorRef.current.getValue();
      try {
        await navigator.clipboard.writeText(currentCode);
        alert('코드가 클립보드에 복사되었습니다!');
      } catch (error) {
        console.error('클립보드 복사 실패:', error);
        alert('클립보드 복사에 실패했습니다.');
      }
    } else {
      alert('Editor가 초기화되지 않았습니다.');
    }
  };

  // 추후 api연동시 수정
  const handleSaveButton = async() =>{
    if(editorRef.current){
      const currentCode = editorRef.current.getValue();
      try{
        
        alert('save!')
        console.log('save currentCode : \n',currentCode);
      } catch (error){
        console.error('코드 저장 실패')
      }
    }else {
      console.log('editor가 초기화 되지 않음.')
    }
  }

  return (
    <Container>
      <Editor
        width="100%" height="100%"
        defaultLanguage={defaultLanguage} defaultValue={defaultValue}
        language={language} value={value}
        theme={theme}
        onMount={handleEditorMount}
        options={{ 
          minimap:{ enabled:false },
          scrollbar:{ 
            alwaysConsumeMouseWheel: true,
            vertical : 'auto',
            verticalScrollbarSize : 5,
            horizontal : 'auto'
           }
        }}
      />
      {showHighlightButton  &&(
        <HighlightButton
          style={{ top: buttonPosition.y, left: buttonPosition.x }}
          onClick={() => selectedRange && addHighlight(selectedRange) }
        >
          <BsFillBrushFill />
        </HighlightButton>
      )}

      {showDeleteButton && (
        <HighlightButton
          style={{
            top: buttonPosition.y,
            left: buttonPosition.x + 40, // 하이라이트 버튼 옆에 위치
            backgroundColor: "red",
          }}
          onClick={() => selectedRange && removeHighlight(selectedRange)}
        >
          <BsTrash />
        </HighlightButton>
      )}
      <ButtonContainer>
        <CopyButton onClick={handleCopyButton} />
        <SaveButton onClick={handleSaveButton}/>
      </ButtonContainer>
    </Container>
  );
};

export default IdeEditor;