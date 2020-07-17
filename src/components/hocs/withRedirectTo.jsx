import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';

const withRedirect = (Component, to) => {
  const ComponentWithRedirect = props => {
    const [state, setState] = useState(false);
    if(state) return <Redirect to={`/${to}`} />
    return <Component redirect={() => setState(true)} {...props}/>
  }
  return ComponentWithRedirect;
}

export default withRedirect;