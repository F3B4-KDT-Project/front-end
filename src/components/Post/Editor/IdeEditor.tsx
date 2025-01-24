import React from 'react';
import styled from '@emotion/styled';
import Editor from '@monaco-editor/react';

const IdeEditor:React.FC = () =>{

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
    background: var(--background, #2B2B2B);
    box-shadow: 0px 0px 4px 0px var(--black, #161616) inset;
`;
