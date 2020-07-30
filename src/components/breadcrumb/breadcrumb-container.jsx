import React from 'react'
import Breadcrumb from './breadcrumb'
import { useRouteMatch } from 'react-router-dom'

const BreadcrumbContainer = () => {
  const { url } = useRouteMatch();
  return <Breadcrumb url={url} />
}

export default BreadcrumbContainer;