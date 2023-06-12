
import React from 'react';
import { useTimer } from 'use-timer';
import { useNavigate } from 'react-router-dom';
import { useKeypress } from '../../hooks/useKeypress';
import { FaCheck } from 'react-icons/fa';

export function CompraAprovada() {
  const navigate = useNavigate();
  const { time } = useTimer({
    endTime: 0,
    initialTime: 60,
    timerType: 'DECREMENTAL',
    autostart: true,
    onTimeOver() {
      navigate('/', { replace: true })
    },
  });
  
  useKeypress('ArrowUp', () => {
    navigate('/pagamento/recibo');
  });


  return (
    <div className="flex h-full w-full flex-col items-center">
      <h1 className="text-4xl">Compra aprovada</h1>
      <h2 className="mt-4 text-xl"></h2>

      <div className="mt-4 flex w-full grow flex-row justify-center items-center gap-4">
        <FaCheck className="text-[20rem] text-autopass" />
      </div>

      <p className="mb-2 text-xl">Tempo restante: {time}</p>
    </div>
  );
}
