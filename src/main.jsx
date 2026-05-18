import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider, theme as antdTheme } from 'antd'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        algorithm: antdTheme.darkAlgorithm,
        token: {
          colorPrimary: '#1f8dff',
          colorInfo: '#1f8dff',
          colorBgBase: '#04122a',
          colorTextBase: '#eaf2ff',
          borderRadius: 14,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
)
