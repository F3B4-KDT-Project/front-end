import React, { useEffect, useState } from 'react';
import {
  RadioOption,
  ThemeSelectionForm,
  ThemeSelectionSection,
  UncheckedCircle,
} from './style';
import { BsFillCheckCircleFill } from 'react-icons/bs';

export const ThemeSelection: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);

    if (theme === 'light') {
      localStorage.setItem('theme', theme);
    } else {
      localStorage.removeItem('theme');
    }
  };

  useEffect(() => {
    document.body.className = selectedTheme;
  }, [selectedTheme]);

  return (
    <ThemeSelectionSection aria-labelledby="theme-selection">
      <h2 id="theme-selection">테마 선택</h2>
      <ThemeSelectionForm action="">
        <RadioOption
          isChecked={selectedTheme === 'dark'}
          onClick={() => handleThemeChange('dark')}
        >
          {selectedTheme === 'dark' ? (
            <BsFillCheckCircleFill size="1.5rem" />
          ) : (
            <UncheckedCircle />
          )}
          <label>Dark Mode</label>
        </RadioOption>
        <RadioOption
          isChecked={selectedTheme === 'light'}
          onClick={() => handleThemeChange('light')}
        >
          {selectedTheme === 'light' ? (
            <BsFillCheckCircleFill size="1.5rem" />
          ) : (
            <UncheckedCircle />
          )}
          <label>Light Mode</label>
        </RadioOption>
      </ThemeSelectionForm>
    </ThemeSelectionSection>
  );
};
