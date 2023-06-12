import React from 'react';
import { useTimer } from 'use-timer';
import { useNavigate } from 'react-router-dom';
import { useKeypress } from '../../hooks/useKeypress';
import { Spinner } from '../../components/Spinner';

export function Processando() {
  const navigate = useNavigate();
  const { time } = useTimer({
    endTime: 0,
    initialTime: 60,
    timerType: 'DECREMENTAL',
    autostart: false,
    onTimeOver() {
      navigate('/', { replace: true })
    },
  });
  
  useKeypress('ArrowUp', () => {
    navigate('/pagamento/aprovada');
  });

  useKeypress('ArrowDown', () => {
    navigate('/pagamento/rejeitada');
  })


  return (
    <div className="flex h-full w-full flex-col items-center">
      <h1 className="text-4xl">Processando</h1>
      <h2 className="mt-4 text-xl">Aguarde</h2>

      <div className="mb-20 flex w-full grow flex-row justify-center items-center gap-4">
        <Spinner className='h-80 fill-autopass text-gray-300' />
      </div>

      <p className="mb-2 text-xl">Tempo até cancelamento da ação: {time}</p>
    </div>
  );
}
