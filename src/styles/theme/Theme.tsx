import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { RootState } from '../../store'

const Theme: React.FC = ({ children }) => {
  const colors = useSelector((state: RootState) => state.ThemeReducer)
  return <ThemeProvider theme={colors}>{children}</ThemeProvider>
}

export default Theme
