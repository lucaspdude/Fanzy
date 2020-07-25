import React, { useRef, useEffect } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';


export default function Valor({ name, valor, label, ...rest }) {


    const numberMask = createNumberMask({
        prefix: 'R$',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: '.',
        allowDecimal: true,
        decimalSymbol: ',',
        allowLeadingZeroes: true,
        requireDecimal: true
    });



    return (
        <>
            <label htmlFor={name}>{label}</label>
            <MaskedInput
                value={valor}
                name={name}
                id={name}
                aria-label={name}
                mask={numberMask}
            />
        </>
    )
}
