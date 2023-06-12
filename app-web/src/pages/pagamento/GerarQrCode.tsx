import React from 'react';
import { useTimer } from 'use-timer';
import { useNavigate } from 'react-router-dom';
import { useKeypress } from '../../hooks/useKeypress';
import { Spinner } from '../../components/Spinner';

export function GerarQrCode() {
  const navigate = useNavigate();
  
  useKeypress('ArrowUp', () => {
    navigate('/pagamento/final');
  });


  return (
    <div className="flex h-full w-full flex-col items-center">
      <h1 className="text-4xl">Gerando QRcode</h1>
      <h2 className="mt-4 text-xl">Aguarde</h2>

      <div className="mb-20 flex w-full grow flex-row justify-center items-center gap-4">
        <Spinner className='h-80 fill-autopass text-gray-300' />
      </div>

      <p className="mb-2 text-xl"></p>
    </div>
  );
}
