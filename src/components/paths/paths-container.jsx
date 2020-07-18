import React from 'react'
import Paths from './paths'
import { useRouteMatch } from 'react-router-dom'

const PathsContainer = () => {
  const { url } = useRouteMatch();
  return <Paths url={url} />
}

export default PathsContainer;