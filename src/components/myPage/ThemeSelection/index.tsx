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
  isDarkMode,
  setIsDarkMode,
}) => {
  return (
    <ThemeSelectionSection aria-labelledby="theme-selection">
      <h2 id="theme-selection">테마 선택</h2>
      <ThemeSelectionForm action="">
        <RadioOption
          isChecked={isDarkMode === true}
          onClick={() => setIsDarkMode(true)}
        >
          {isDarkMode === true ? (
            <BsFillCheckCircleFill size="1.5rem" />
          ) : (
            <UncheckedCircle />
          )}
          <label>Dark Mode</label>
        </RadioOption>
        <RadioOption
          isChecked={isDarkMode === false}
          onClick={() => setIsDarkMode(false)}
        >
          {isDarkMode === false ? (
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
