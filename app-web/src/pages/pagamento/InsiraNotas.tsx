import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTimer } from 'use-timer';
import { ReloadContext } from '../../App';
import { Button } from '../../components/Button';
import { InfoBox } from '../../components/InfoBox';
import { useKeypress } from '../../hooks/useKeypress';

export function InsiraNotas() {
  const [insertedValueInCents, setInsertedValueInCents] = React.useState(0);
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
  useKeypress('ArrowUp', () => {
    setInsertedValueInCents(val => val + 200);
  });

  const goBack = () => {
    navigate('/pagamento');
  };

  const goNext = () => {
    navigate('/pagamento/recibo');
  };

  const valueLeft =
    Number(context?.payment.priceInCents) - insertedValueInCents >= 0
      ? Number(context?.payment.priceInCents) - insertedValueInCents
      : 0;

  return (
    <div className="flex h-full w-full flex-col items-center">
      <h1 className="text-4xl">Insira as notas</h1>
      <h2 className="mt-4 text-xl"></h2>

      <div className="mt-4 flex w-full grow flex-row justify-center gap-4">
        <InfoBox
          className="h-3/6 w-1/6"
          label="Valor da Recarga"
          valueInCents={Number(context?.payment.priceInCents)}
        />
        <InfoBox className="h-3/6 w-1/6" label="Inserido" valueInCents={insertedValueInCents} />
        <InfoBox className="h-3/6 w-1/6" label="Falta" valueInCents={valueLeft} />
      </div>

      <div className="mb-4 inline-flex w-full justify-between">
        <Button className="ml-8 w-1/5" onClick={goBack}>
          <div className="inline-flex items-center py-2 text-2xl text-white">
            <FaArrowLeft className="mr-2" />
            Voltar
          </div>
        </Button>
        {valueLeft === 0 && (
          <Button className="mr-8 w-1/5" onClick={goNext}>
            <div className="inline-flex items-center py-2 text-2xl text-white">
              Continuar
              <FaArrowRight className="mr-2" />
            </div>
          </Button>
        )}
      </div>
      <p className="mb-2 text-xl">
        Este terminal não devolve troco para pagamentos em dinheiro
      </p>
      <p className="mb-2 text-xl">Tempo restante: {time}</p>
    </div>
  );
}
