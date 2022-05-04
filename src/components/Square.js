import React, { useState } from 'react';

const Square = ({player}) => {
    const [value, setValue ] = useState(null);
    return (
        <button 
            className='square'
            onClick={ () => {
                if (player === 'X') {
                    setValue('X')
                } else {
                    setValue('O')
                }
            } }>
            {value === 'X' ? value : ''}
            {value === 'O' ? value : ''}
        </button>
    );
};

export default Square;