import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTimer } from 'use-timer';
import { ReloadContext } from '../../App';
import { Button } from '../../components/Button';
import { InfoBox } from '../../components/InfoBox';

export function ConfirmarValor() {
  const context = React.useContext(ReloadContext);
  const navigate = useNavigate();
  const { time } = useTimer({
    endTime: 0,
    initialTime: 60,
    timerType: 'DECREMENTAL',
    autostart: true,
    onTimeOver() {
      navigate('/', { replace: true });
    },
  });

  const goBack = () => {
    navigate('/recarga/valor');
  };

  const goNext = () => {
    navigate('/pagamento')
  }


  return (
    <div className="flex h-full w-full flex-col items-center">
      <h1 className="text-4xl">Confira as informações</h1>
      <h2 className="mt-4 text-xl"></h2>

      <div className="mt-4 flex w-full grow flex-row justify-center gap-4">
        <InfoBox className="h-3/6 w-1/6" label="Saldo atual" valueInCents={500}/>
        <InfoBox className="h-3/6 w-1/6" label="Valor da recarga" valueInCents={Number(context?.payment.priceInCents)}/>
        <InfoBox className="h-3/6 w-1/6" label="Saldo final" valueInCents={Number(context?.payment.priceInCents) + 500}/>
      </div>

      <div className="mb-4 w-full inline-flex justify-between">
        <Button className="ml-8 w-1/5" onClick={goBack}>
          <div className="inline-flex items-center py-2 text-2xl text-white">
            <FaArrowLeft className="mr-2" />
            Voltar
          </div>
        </Button>
        <Button className="mr-8 w-1/5" onClick={goNext}>
          <div className="inline-flex items-center py-2 text-2xl text-white">
            Continuar
            <FaArrowRight className="mr-2" />
          </div>
        </Button>
      </div>
      <p className="mb-2 text-xl">Tempo restante: {time}</p>
    </div>
  );
}
