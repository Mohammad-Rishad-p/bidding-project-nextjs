import React from 'react'
import { Button } from './ui/button';

type Props ={
    text: string,
    
};

function ItemInHeader({text}: Props) {
  return (
    <div>
        <Button variant='secondary'> {text}</Button>
    </div>
  )
}

export default ItemInHeader