import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { inherits } from 'util'

const ProductCard = () => {
    return (
        <div className=' w-[320px] flex gap-8 h-[57%] overflow-hidden'>
            {/* card starting */}
            <Card className='shadow-lg'>
                <div className=''>
                   <Card className='h-[10%]'>
                    {/* card headinf */}
                   <CardHeader className='text-xl items-center justify-center'>
                        Title of the card
                    </CardHeader>
                   </Card>
                    </div>
                    <div className='mt-4 text-xl flex flex-col gap-5 items-center justify-center'>
                        <CardDescription className=' text-xl'>MRP: </CardDescription>
                            <div className='h-[250px]'>
                                <img className=' h-[100%]' src="data:image/jpeg;base64,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" alt='photo of the product' />
                            </div>
                    </div>
                    <Card className=' bg-slate-200'>
                    <div className=' mt-4'>
                        <CardFooter className=' items-center justify-center text-2xl'>
                            open after 2 days
                        </CardFooter>
                    </div>
                    </Card>
            </Card>
            
        </div>
    )
}

export default ProductCard