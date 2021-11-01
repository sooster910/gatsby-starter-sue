import { useReducer, createContext, Dispatch, useContext } from 'react'
import { ThemeProvider } from '@emotion/react'
import GlobalStyles from '../styles/GlobalStyles'
import theme from '../styles/theme'

type State = {
  isDark?: string
  theme: string
}
type Action = { type: 'TOGGLE_DARK_MODE'; theme: string }
type SampleDispatch = Dispatch<Action>

export const GlobalStateContext = createContext<State | null>(null)
export const GlobalDispatchContext = createContext<SampleDispatch | null>(null)
declare global {
  interface Window {
    __theme: string
    __setPreferredTheme: (toggleTheme: string) => void
  }
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE': {
      const toggledTheme = window.__theme === 'dark' ? 'light' : 'dark'
      window.__setPreferredTheme(toggledTheme)
      return {
        theme: toggledTheme,
      }
    }

    default:
      return state
  }
}

const initializeState = () => {
  if (typeof window !== 'undefined') {
    return {
      theme: window.__theme,
    }
  } else {
    return { theme: 'light' }
  }
}

const initialState: State = {
  theme: 'light',
}

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState, initializeState)

  if (state) {
    console.log('render??')
    return (
      <GlobalStateContext.Provider value={state}>
        <GlobalDispatchContext.Provider value={dispatch}>
          <ThemeProvider
            theme={state.theme === 'light' ? theme.light : theme.dark}
          >
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </GlobalDispatchContext.Provider>
      </GlobalStateContext.Provider>
    )
  }
}

export default GlobalContextProvider

export function useThemeState() {
  const state = useContext(GlobalStateContext)
  if (!state) throw new Error('Cannot find GlobalStateProvider')
  return state
}

export function useThemeDispatch() {
  const dispatch = useContext(GlobalDispatchContext)
  if (!dispatch) throw new Error('Cannot find GlobalStateProvider') // 유효하지 않을땐 에러를 발생
  return dispatch
}
