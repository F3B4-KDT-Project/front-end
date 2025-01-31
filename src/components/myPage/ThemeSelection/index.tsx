import React, { useState } from 'react';
import {
  RadioOption,
  ThemeSelectionForm,
  ThemeSelectionSection,
  UncheckedCircle,
} from './style';
import { BsFillCheckCircleFill } from 'react-icons/bs';

export const ThemeSelection: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState('dark');

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);
  };

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
