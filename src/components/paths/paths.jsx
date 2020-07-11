import React from 'react'
import { useRouteMatch } from 'react-router-dom';
import PathsRoutes from './__routes/paths__routes';

const Paths = () => {
  const { url } = useRouteMatch();
  return(
    <section className="paths">
      <PathsRoutes url={url} />
    </section>
  )
}

export default Paths;