import { useEffect, useState } from 'react'
const getInitialTheme = () => {
  const prefersColorScheme =
    typeof window !== 'undefined' &&
    window?.matchMedia('prefers-color-scheme: dark').matches
      ? 'dark'
      : 'light'
  const localTheme =
    typeof window !== 'undefined' && window.localStorage.getItem('theme')

  return localTheme || prefersColorScheme
}

const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme)

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'light' ? 'dark' : 'light'
    })
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('theme', theme)
      }
    }, [theme])
  }

  return [theme, toggleTheme]
}

export default useTheme
