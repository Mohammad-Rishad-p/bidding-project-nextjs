import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

type Props = {
    text: string;
    link: string;
};

function ItemInHeader({ text, link }: Props) {
    return (
        <div>
            <Link href={link}>         
                    <Button variant='secondary'>{text}</Button>   
            </Link>
        </div>
    );
}

export default ItemInHeader;
