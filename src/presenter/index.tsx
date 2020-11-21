import React from 'react'
import ReactDom from 'react-dom'
import UniversalRouter from 'universal-router'
import { Top } from './page/top'
;(async () => {
  const rootElement = document.querySelector('#root')

  const routes = [
    { path: '/', action: () => <Top></Top> },
    { path: '(.*)', action: () => <h1>Not Found</h1> },
  ]
  const router = new UniversalRouter(routes)

  await router.resolve(location.pathname).then((page) => {
    ReactDom.render(
      page as React.DOMElement<React.DOMAttributes<Element>, Element>,
      rootElement
    )
  })
})()
