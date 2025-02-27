import { Theme } from '@emotion/react';
import { fonts } from './fonts';

import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      background: string;
      text: string;
      white: string;
      lightGray: string;
      gray: string;
      black: string;
      post: string;
      postHover: string;
      footer: string;
      footerAr: string;
      red: string;
      green: string;
      redInput: string;
      greenInput: string;
      input: string;
      modalBg: string;
      modalArea: string;
      container: string;
      icon: string;
      navigationGr: string;
      navigationBs: string;
    };
    fonts: {
      caption1: string;
      caption2: string;
      caption3: string;
      caption4: string;
      caption5: string;
      caption6: string;
      caption7: string;
      caption8: string;
      body1: string;
      body2: string;
      body3: string;
      body4: string;
      body5: string;
      body6: string;
      body7: string;
      header1: string;
      header2: string;
      header3: string;
      header4: string;
      title1: string;
      title2: string;
      title3: string;
      title4: string;
      title5: string;
      title6: string;
      title7: string;
      button1: string;
      button2: string;
      button3: string;
      button4: string;
      input1: string;
      input2: string;
      input3: string;
    };
  }
}

export const darkTheme: Theme = {
  colors: {
    background: '#2b2b2b',
    text: '#ffffff',
    white: '#ffffff',
    lightGray: '#dadada',
    gray: '#5a5a5a',
    black: '#161616',
    post: '#a4a3a3',
    postHover: '#d1d1d1',
    footer: '#5a5a5a',
    footerAr: '#a4a3a3',
    red: '#d75656',
    green: '#3dbc8d',
    redInput: 'rgba(215, 86, 86, var(--transparent-opacity))',
    greenInput: 'rgba(61, 188, 141, var(--transparent-opacity))',
    input: 'rgba(218, 218, 218, var(--transparent-opacity))',
    modalBg: 'rgba(43, 43, 43, var(--transparent-opacity))',
    modalArea: 'rgba(218, 218, 218, 0.15)',
    container: '#3b3b3b',
    icon: '#a4a3a3',
    navigationGr:
      'linear-gradient(180deg, #5a5a5a 0%, #4d4d4d 39.5%, #161616 100%)',
    navigationBs:
      '4px 0px 10px 5px rgba(0, 0, 0, 0.25), 0px 0px 4px 0px rgba(180, 180, 180, 0.25) inset',
  },
  fonts,
};

export const lightTheme: Theme = {
  colors: {
    background: '#fffefb',
    text: '#4e4d4c',
    white: '#ffffff',
    lightGray: '#eae9e6',
    gray: '#9f9d98',
    black: '#4e4d4c',
    post: 'rgba(175, 174, 167, 0.35)',
    postHover: '#afaea7',
    footer: '#9f9d98',
    footerAr: '#9f9d98',
    red: '#f26c6c',
    green: '#3dbc8d',
    redInput: 'rgba(242, 108, 108, var(--transparent-opacity))',
    greenInput: 'rgba(61, 188, 141, var(--transparent-opacity))',
    input: 'rgba(234, 233, 230, var(--transparent-opacity))',
    modalBg: 'rgba(78, 77, 76, var(--transparent-opacity))',
    modalArea: 'rgba(218, 218, 218, 0.55)',
    container: 'rgba(90, 90, 90, 0.35)',
    icon: '#9f9d98',
    navigationGr: 'linear-gradient(180deg, #fff 0%, #cbcbcb 60%, #acacac 100%)',
    navigationBs:
      '4px 0px 10px 5px var(--wh_nav_dpshd, rgba(255, 255, 255, 0.5)), 0px 0px 4px 0px var(--bg_board_select, rgba(22, 22, 22, 0.35)) inset',
  },
  fonts,
};
