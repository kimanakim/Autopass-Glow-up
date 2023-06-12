import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTimer } from 'use-timer';
import { ReloadContext } from '../../App';
import { Button } from '../../components/Button';

type ChargeQuantity = '1' | '2' | '3' | '4' | '5' | 'outro';

export function RecargaQuantidade() {
  const UNIT_PRICE_IN_CENTS = 440;
  const [selectedQuantity, setSelectedQuantity] = React.useState<ChargeQuantity | null>(null);
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
    navigate('/recarga/unitario');
  };

  const goNext = () => {
    if (selectedQuantity && selectedQuantity === 'outro') {
      navigate('/recarga/quantidadeoutro');
    } else {
      navigate('/pagamento');
    }
  }

  const handleValueClick = (value: ChargeQuantity) => {
    if (value === selectedQuantity) {
      setSelectedQuantity( null);
    } else {
      setSelectedQuantity(value);
      context?.setPriceInCents(UNIT_PRICE_IN_CENTS * Number(value));
    }
  };

  const isActiveClass = (value: ChargeQuantity) => {
    return selectedQuantity === value;
  };

  return (
    <div className="flex h-full w-full flex-col items-center">
      <h1 className="text-4xl">Selecione a opção desejada</h1>
      <h2 className="mt-4 text-xl"></h2>

      <div className="mt-4 flex w-full grow flex-row justify-center gap-4">
        <Button className={`h-3/6 w-44`} isActive={isActiveClass('1')} onClick={() => handleValueClick('1')}>
          <div className="mt-2 font-semibold text-white">1 unidade</div>
          <div className="mt-2 font-semibold text-white">R$4,40</div>
        </Button>
        <Button className={`h-3/6 w-44`} isActive={isActiveClass('2')} onClick={() => handleValueClick('2')}>
          <div className="mt-2 font-semibold text-white">2 unidade</div>
          <div className="mt-2 font-semibold text-white">R$8,80</div>
        </Button>
        <Button className={`h-3/6 w-44`} isActive={isActiveClass('3')} onClick={() => handleValueClick('3')}>
          <div className="mt-2 font-semibold text-white">3 unidade</div>
          <div className="mt-2 font-semibold text-white">R$13,20</div>
        </Button>
        <Button className={`h-3/6 w-44`} isActive={isActiveClass('4')} onClick={() => handleValueClick('4')}>
          <div className="mt-2 font-semibold text-white">4 unidade</div>
          <div className="mt-2 font-semibold text-white">R$17,60</div>
        </Button>
        <Button className={`h-3/6 w-44`} isActive={isActiveClass('5')} onClick={() => handleValueClick('5')}>
          <div className="mt-2 font-semibold text-white">5 unidade</div>
          <div className="mt-2 font-semibold text-white">R$22,00</div>
        </Button>
        <Button className={`h-3/6 w-44`} isActive={isActiveClass('outro')} onClick={() => handleValueClick('outro')}>
          <div className="mt-2 font-semibold text-white">Outra quantidade</div>
        </Button>
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
