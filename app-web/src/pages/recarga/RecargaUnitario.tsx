import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTimer } from 'use-timer';
import { ReloadContext } from '../../App';
import { Button } from '../../components/Button';

export function RecargaUnitario() {
  const context = React.useContext(ReloadContext);
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
    navigate('/');
  }

  const handleUnitarioClick = () => {
    context?.setReloadType('unit');
    navigate('/recarga/quantidade');
  }

  return (
    <div className="flex h-full w-full flex-col items-center">
      <h1 className="text-4xl">Selecione a opção desejada</h1>
      <h2 className="mt-4 text-xl"></h2>

      <div className="mt-4 flex w-full grow flex-row justify-center gap-4">
        <Button className="h-3/6 w-1/6" onClick={handleUnitarioClick}>
          <div className="mt-2 font-semibold text-white">Unitário</div>
        </Button>
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
  )
}
