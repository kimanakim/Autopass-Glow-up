import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTimer } from 'use-timer';
import { ReloadContext } from '../../App';
import { Button } from '../../components/Button';
import { InfoBox } from '../../components/InfoBox';

type ChargeValue = '2' | '5' | '10' | '20' | '50' | '100' | 'outro';

export function RecargaValor() {
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

  React.useEffect(() => {
    context?.setPriceInCents(0);
  }, []);

  const goBack = () => {
    navigate('/recarga/tipo');
  };

  const goNext = () => {
    navigate('/recarga/confirmarvalor');
  }


 const handleValueClick = (value: ChargeValue) => {
    if (value === 'outro') {
      navigate('/recarga/valoroutro')
    } else {
      console.log('setting context value with', Number(value) * 100);
      context?.setPriceInCents(Number(value) * 100);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center">
      <h1 className="text-4xl">Selecione a opção desejada</h1>
      <h2 className="mt-4 text-xl"></h2>

      <div className="mt-4 flex w-3/4 h-40 flex-row justify-center gap-4">
        <Button className="h-full w-44" onClick={() => handleValueClick('2')}>
          <div className="mt-2 font-semibold text-white">R$2,00</div>
        </Button>
        <Button className="h-full w-44" onClick={() => handleValueClick('5')}>
          <div className="mt-2 font-semibold text-white">R$5,00</div>
        </Button>
        <Button className="h-full w-44" onClick={() => handleValueClick('10')}>
          <div className="mt-2 font-semibold text-white">R$10,00</div>
        </Button>
        <Button className="h-full w-44" onClick={() => handleValueClick('20')}>
          <div className="mt-2 font-semibold text-white">R$20,00</div>
        </Button>
        <Button className="h-full w-44" onClick={() => handleValueClick('50')}>
          <div className="mt-2 font-semibold text-white">R$50,00</div>
        </Button>
        <Button className="h-full w-44" onClick={() => handleValueClick('100')}>
          <div className="mt-2 font-semibold text-white">R$100,00</div>
        </Button>
        <Button className="h-full w-44" onClick={() => handleValueClick('outro')}>
          <div className="mt-2 font-semibold text-white">Outro valor</div>
        </Button>
      </div>

      <div className="mt-10 flex w-full grow flex-row justify-center gap-4">
        <InfoBox className="w-1/6" label="Saldo atual" valueInCents={500}/>
        <InfoBox className="w-1/6" label="Valor da recarga" valueInCents={Number(context?.payment.priceInCents)}/>
        <InfoBox className="w-1/6" label="Saldo final" valueInCents={Number(context?.payment.priceInCents) + 500}/>
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
