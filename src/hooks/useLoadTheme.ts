import { useEffect } from 'react'
import { getThemeFromLocalStorage, useTheme } from '../store/theme'

const useLoadTheme = () => {
  useEffect(() => {
    const theme = getThemeFromLocalStorage()

    if (theme) {
      useTheme.setState({ theme })
      document.body.className = theme
    }
  }, [])

  useEffect(() => {
    const removeSusc = useTheme.subscribe(({ theme }) => {
      if (theme) document.body.className = theme
    })

    return () => {
      removeSusc()
    }
  }, [])
}

export default useLoadTheme
