import React from 'react'
import { Card, CardTitle } from './ui/card'

const ProductCard = () => {
  return (
    <div className='w-[20%]  h-[47%]'>
        <Card className=' w-full, h-full'>
            {/* product title */}
            <Card className=' h-[15%]'>
                <CardTitle>Title of the card</CardTitle>
            </Card>
            {/* price,image */}
            <div className=' flex flex-col h-[70%] '>
                {/* price */}
                <div className=' h-[20%] items-center flex justify-center '>MRP:</div>
                {/* image */}
                <div className=' h-[80%]'>
                    <img src='' alt='ni image' className=' w-full h-full ' />
                </div>
            </div>        
            {/* card footer */}
            <Card className=' h-[15%] flex items-center justify-center'>
                jjk
            </Card>
        </Card>
    </div>
  )
}

export default ProductCard