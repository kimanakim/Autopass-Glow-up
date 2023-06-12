import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTimer } from 'use-timer';
import { ReloadContext } from '../../App';

export function TelaFinal() {
  const context = React.useContext(ReloadContext);
  const navigate = useNavigate();
  const { time } = useTimer({
    endTime: 0,
    initialTime: 15,
    timerType: 'DECREMENTAL',
    autostart: true,
    onTimeOver() {
      navigate('/', { replace: true })
    },
  });

  return (
    <div className="flex h-full w-full flex-col items-center">
      <h1 className="text-4xl">Obrigado por viajar conosco</h1>
      <h2 className="mt-4 text-xl"> Facilite, baixe o app!</h2>

      <div className="mt-4 flex w-full grow flex-row justify-center gap-4">
        <div>
          <img src="/images/baixa_app_top.png" alt="baixa a app" />
        </div>
      </div>

      <p className="mb-2 text-xl">
        {
          context?.isToEmitReceipt
          ? 'Por favor, retire o recibo!'
          : null
        }
      </p>
    </div>
  );
}
