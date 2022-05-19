/*
В файле `src/Context.tsx` реализуйте следующее:

1. Компонент `ThemeProvider`, который будет принимать проп `theme: 'light' | 'dark'` и распространять его вниз через контекст.
2. Хук `useTheme`, который будет получать тему из контекста.
*/

import { ReactElement, createContext, useContext } from 'react';

type Theme = 'light' | 'dark';
const MyContext = createContext<Theme>('light');

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <MyContext.Provider value={props.theme}>
            {props.children}
        </MyContext.Provider>
    );
}
export function useTheme(): Theme {
    return useContext(MyContext);
}
