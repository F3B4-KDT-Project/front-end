import React, { useEffect, useState, useRef } from 'react';
import Editor, { loader } from '@monaco-editor/react';
// Monaco 타입 가져오기
import * as monaco from 'monaco-editor';
import { BsFillBrushFill, BsTrash } from 'react-icons/bs';
import { Container,ButtonContainer, CopyButton, SaveButton, HighlightButton, GlobalStyle } from './style';

interface IdeEditorProps {
  defaultLanguage: string;
  defaultValue: string;
  language: string;
  value: string;
  theme: string;
}

// custom theme json 파일 구조 정의
interface CustomTheme {
  base: 'vs' | 'vs-dark' | 'hc-black';
  inherit: boolean;
  rules: Array<{
    token: string;
    foreground?: string;
    background?: string;
    fontStyle?: string;
  }>;
  colors: Record<string, string>;
};

const IdeEditor: React.FC<IdeEditorProps> = ({
  defaultLanguage,
  defaultValue,
  language,
  value,
  theme,
}) => {
  const [themeLoaded, setThemeLoaded] = useState(false);
  const [selectedRange, setSelectedRange] = useState<monaco.IRange | null>(null);
  const [highlightedRanges, setHighlightedRanges] = useState<monaco.IRange[]>([])
  const [showHighlightButton, setShowHighlightButton] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({x:0, y:0});
  // 코드 복사, 저장 : 명시적으로 monaco.editor.IStandaloneCodeEditor 타입 지정
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  
  // 아래 코드 주석?
  const decorationsRef = useRef<string[]>([]); // 저장된 하이라이터

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
  },[])

  if (!themeLoaded) {
    return <div>Loading Editor...</div>;
  }

  const handleEditorMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;

    /* 하이라이터 기능 */
    // 드래그 이벤트 감지
    editor.onMouseUp(()=>{
      const selection = editor.getSelection();

      if (selection && !selection.isEmpty()){
        // IRange 객체 생성성
        const range: monaco.IRange = {
          startLineNumber: selection.startLineNumber,
          startColumn: selection.startColumn,
          endLineNumber: selection.endLineNumber,
          endColumn: selection.endColumn,
        };
        // 선택 영역의 마지막 위치 계산산
        const position = editor.getScrolledVisiblePosition(selection.getEndPosition());
        if (position){
          setSelectedRange(range);
          setButtonPosition({ x: position.left, y: position.top - 25 });
          
          // 아래 코드 주석처리
          // setShowHighlightButton(true);
          const isHighlighted = highlightedRanges.some(
            (highlighted) => {
              highlighted.startLineNumber === range.startLineNumber &&
              highlighted.startColumn === range.startColumn &&
              highlighted.endLineNumber === range.endLineNumber &&
              highlighted.endColumn === range.endColumn
            }
          );

          setShowHighlightButton(true);
          // 이미 하이라이트 된 경우 삭제버튼으로 교체체
          if(isHighlighted){
            setShowHighlightButton(false);
          }
        }
      }
    })
  };

  const addHighlight = (range:monaco.IRange ) => {
    if (!editorRef.current) return;

    // 새 하이라이트 추가 및 ID 저장
    const newDecorations = editorRef.current.deltaDecorations(decorationsRef.current, [
      {
        range,
        options: {
          inlineClassName: 'highlighted-code',
        },
      },
    ]);
    decorationsRef.current.push(...newDecorations); // ID를 저장

    setHighlightedRanges((prev) => [...prev, range]);
    setShowHighlightButton(false);

    // 추후 api 연동 작업 필요
  };

  const removeHighlight = (range: monaco.IRange) =>{
    if (!editorRef.current) return;

    // 제거할 하이라이트의 ID 가져오기
    const decorationsToRemove = decorationsRef.current;
    editorRef.current.deltaDecorations(decorationsToRemove, []); // ID를 사용하여 제거

    decorationsRef.current = []; // ID 초기화
    setHighlightedRanges((prev)=>
      prev.filter(
        (highlighted)=>!(
          highlighted.startLineNumber !== range.startLineNumber &&
          highlighted.startColumn !== range.startColumn &&
          highlighted.endLineNumber !== range.endLineNumber &&
          highlighted.endColumn !== range.endColumn
        )
      )
    );

    setShowHighlightButton(false);

    // 추후 소켓 연결하기기
  };

  const handleHighlightClick = () => {
    if(selectedRange){
      addHighlight(selectedRange);
    }
  };

  const handleDeleteHighlight = () => {
    if(selectedRange){
      removeHighlight(selectedRange);
    }
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
        width="100%"
        height="100%"
        defaultLanguage={defaultLanguage}
        defaultValue={defaultValue}
        language={language}
        value={value}
        theme={theme}
        onMount={handleEditorMount}

        options={{ 
          minimap:{ enabled:false },
          scrollbar:{ 
            alwaysConsumeMouseWheel:true,
            vertical : 'auto',
            verticalScrollbarSize : 5,
            horizontal : 'auto'
           }
        }}
      />
      {showHighlightButton && (
        <HighlightButton
          style={{ top: buttonPosition.y, left: buttonPosition.x }}
          onClick={selectedRange ? handleHighlightClick : handleDeleteHighlight}
          onContextMenu={(e)=>{
            e.preventDefault();
            handleDeleteHighlight();
          }}
        >
          {highlightedRanges.some(
            (highlighted) =>
              highlighted.startLineNumber === selectedRange?.startLineNumber &&
              highlighted.startColumn === selectedRange?.startColumn &&
              highlighted.endLineNumber === selectedRange?.endLineNumber &&
              highlighted.endColumn === selectedRange?.endColumn
          ) ? (
            <BsTrash />
          ) : (
            <BsFillBrushFill />
          )}
        </HighlightButton>
      )}

      <ButtonContainer>
        <CopyButton onClick={handleCopyButton} />
        <SaveButton onClick={handleSaveButton}/>
      </ButtonContainer>
      <GlobalStyle />
    </Container>
  );
};

export default IdeEditor;