import React, { useState } from 'react'
import ListSeller from './list__seller';
import { Redirect } from 'react-router-dom';

const ListSellerContainer = ({ seller }) => {
  return <ListSeller seller={seller} /> 
}

export default ListSellerContainer;