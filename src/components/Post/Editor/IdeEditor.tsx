import React, { useState,useEffect } from 'react';
import styled from '@emotion/styled';
import Editor, { OnChange, OnMount } from '@monaco-editor/react';

import lightTheme from  '../../../assets/editor/dark.json';
import darkTheme from  '../../../assets/editor/light.json';

const IdeEditor:React.FC = () =>{
    const [theme, setTheme] = useState<'light'|'dark'>('dark'); // 테마 상태 관리

    const handleEditorChange: OnChange = (value, event) => {
        console.log('Editor Change : ', value);
    };

    const handleEditorDidMount: OnMount = (editor, monaco) => {
        // 테마 등록
        monaco.editor.defineTheme('light-theme', lightTheme as any);
        monaco.editor.defineTheme('dark-theme', darkTheme as any);
    
        // 초기 테마 적용
        monaco.editor.setTheme(theme === 'dark' ? 'dark-theme' : 'light-theme');
      };

    const toggleTheme =() => {
        setTheme((prev)=>(prev === 'dark'?'light':'dark')); // 상태 업데이트
    }

    return(
        <>
            <Container>
                <Editor 
                    width='100%'
                    height ='100%'
                    defaultLanguage = "javascript"
                    // defaultValue = "// start coding!"
                    // onChange = {handleEditorChange}
                    // onMount={handleEditorDidMount}
                    theme='vs-dark'
                />
            </Container>
        </>
    )
};

export default IdeEditor;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    margin: 0;
    padding: 0.62rem 1.19rem;
    box-sizing: border-box;
    
    width: 47.9375rem;
    height: 46.125rem;
    
    p{
        font-size: 30px;
    }

    flex: 2;

    border-radius: 0.9375rem;
    background: var(--bc_background, #2B2B2B);
    box-shadow: 0px 0px 4px 0px var(--bc_black, #161616) inset;
`;
