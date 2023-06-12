
import React from 'react';
import { Button } from '../../components/Button';
import { FaArrowLeft } from 'react-icons/fa';
import { useTimer } from 'use-timer';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as EnterCode } from '../../icons/enter_code.svg';
import { useKeypress } from '../../hooks/useKeypress';

export function InsiraSenha() {
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
    // TODO: change to correct location
    navigate('/pagamento/processando');
  });

  const goBack = () => {
    navigate('/pagamento');
  };

  return (
    <div className="flex h-full w-full flex-col items-center">
      <h1 className="text-4xl">Digite a senha</h1>
      <h2 className="mt-4 text-xl"></h2>

      <div className="mt-4 flex w-full grow flex-row justify-center items-center gap-4">
        <EnterCode className='h-80' />
      </div>

      <div className="mb-4 w-full">
        <Button className="ml-8 w-1/5" onClick={goBack}>
          <div className="inline-flex items-center py-2 text-2xl text-white">
            <FaArrowLeft className="mr-2" />
            Voltar
          </div>
        </Button>
      </div>
      <p className="mb-2 text-xl">Tempo restante: {time}</p>
    </div>
  );
}
