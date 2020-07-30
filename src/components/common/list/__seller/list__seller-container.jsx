import React, { useState } from 'react'
import ListSeller from './list__seller';
import { Redirect } from 'react-router-dom';

const ListSellerContainer = ({ seller }) => {
  const [state, setState] = useState(false);
  if (state) return <Redirect to={seller.path} />;
  return <ListSeller seller={seller} onClick={() => setState(true)} /> 
}

export default ListSellerContainer;