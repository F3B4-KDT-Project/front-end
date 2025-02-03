export interface IdeEditorProps {
    defaultLanguage: string;
    defaultValue: string;
    language: string;
    value: string;
    theme: string;
    boardName:string;
    postName:string;
}

// custom theme json 파일 구조 정의
export interface CustomTheme {
    base: 'vs' | 'vs-dark' | 'hc-black';
    inherit: boolean;
    rules: Array<{
      token: string;
      foreground?: string;
      background?: string;
      fontStyle?: string;
    }>;
    colors: Record<string, string>;
}