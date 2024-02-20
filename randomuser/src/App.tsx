import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import { Box, CssBaseline, Divider, PaletteMode, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useState } from 'react'
import Features from './components/Features'
import Hero from './components/Hero'
import LogoCollection from './components/LogoCollection'
import Testimonials from './components/Testimonials'
import Navbar from './components/common/Navbar'
import getLPTheme from './theme/theme'

const defaultTheme = createTheme({})

interface ToggleCustomThemeProps {
  showCustomTheme: boolean
  toggleCustomTheme: () => void
}

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }: ToggleCustomThemeProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100dvw',
        position: 'fixed',
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color='primary'
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label='Platform'
        sx={{
          backgroundColor: 'background.default',
          '& .Mui-selected': {
            pointerEvents: 'none',
          },
        }}
      >
        <ToggleButton value>
          <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
          Custom theme
        </ToggleButton>
        <ToggleButton value={false}>Material Design</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}

const App = () => {
  const [mode, setMode] = useState<PaletteMode>('dark')
  const [showCustomTheme, setShowCustomTheme] = useState(true)
  const LPtheme = createTheme(getLPTheme(mode))

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev)
  }
  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <Navbar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
      <ToggleCustomTheme showCustomTheme={showCustomTheme} toggleCustomTheme={toggleCustomTheme} />
    </ThemeProvider>
  )
}

export default App
