import React from 'react';
import { useTimer } from 'use-timer';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaTimes } from 'react-icons/fa';
import { Button } from '../../components/Button';

export function CompraRejeitada() {
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
  
  const goBack = () => {
    navigate('/', { replace: true })
  }

  return (
    <div className="flex h-full w-full flex-col items-center">
      <h1 className="text-4xl">Compra rejeitada</h1>
      <h2 className="mt-4 text-xl"></h2>

      <div className="mt-4 flex w-full grow flex-row justify-center items-center gap-4">
        <FaTimes className="text-[20rem] text-autopass" />
      </div>

      <div className='w-full mb-4'>
        <Button className='w-1/5 ml-8' onClick={goBack}>
          <div className='text-white inline-flex py-2 items-center text-2xl'>
            <FaArrowLeft className="mr-2"/>
            Voltar ao início
          </div>
        </Button>
      </div>
      <p className="mb-2 text-xl">Tempo restante para voltar ao início: {time}</p>
    </div>
  );
}
