import React from 'react';
import {
  RadioOption,
  ThemeSelectionForm,
  ThemeSelectionSection,
  UncheckedCircle,
} from './style';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { ThemeSelectionProps } from '../../../models/MyPage';

export const ThemeSelection: React.FC<ThemeSelectionProps> = ({
  theme,
  setTheme,
}) => {
  return (
    <ThemeSelectionSection aria-labelledby="theme-selection">
      <h2 id="theme-selection">테마 선택</h2>
      <ThemeSelectionForm action="">
        <RadioOption
          isChecked={theme === 'dark'}
          onClick={() => setTheme('dark')}
        >
          {theme === 'dark' ? (
            <BsFillCheckCircleFill size="1.5rem" />
          ) : (
            <UncheckedCircle />
          )}
          <label>Dark Mode</label>
        </RadioOption>
        <RadioOption
          isChecked={theme === 'light'}
          onClick={() => setTheme('light')}
        >
          {theme === 'light' ? (
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
