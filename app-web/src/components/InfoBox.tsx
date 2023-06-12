import * as React from 'react';

export const InfoBox:React.FC<{
  label: string;
  valueInCents: number;
  className?: string;
}> = ({ label, valueInCents, className }) => {


  const formatPrice = () => {
    return `R$ ${Math.floor(valueInCents / 100)},${valueInCents % 100 === 0 ? '00' : valueInCents % 100}`;
  }

  return (
    <div className={`${className} flex flex-col items-center justify-start rounded-lg bg-autopass-light border-2 border-autopass`}>
      <div className='font-xl'>{label}</div>
      <div className='text-white font-semibold text-2xl flex flex-col items-center justify-center grow'>
        <p className='my-auto'>
          {formatPrice()}
        </p>
      </div>
    </div>
  )
}
