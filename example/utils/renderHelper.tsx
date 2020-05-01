import React from 'react'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader'

/**
 * 渲染模式
 * MOBILE 为开发模式,具有热更新及其它的一些功能
 * DOC 为文档模式，独立会用 iframe 包裹，主要用于文档展示
 * */
export const renderMobile = (Example: any) => {
  if (({ MOBILE: 1 })[process.env.RUN_ENV]) {
    function Render(App: any) {
      render(
        <App />,
        document.getElementById('app')
      )
    }

    Render(hot(module)(() => <Example />))
  }
  if (({ DOC: 1 })[process.env.RUN_ENV]) {
    window.system = {
      env: 'doc'
    }
  }
}