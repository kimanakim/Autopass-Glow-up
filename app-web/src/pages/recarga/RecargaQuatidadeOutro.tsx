import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTimer } from 'use-timer';
import { ReloadContext } from '../../App';
import { Button } from '../../components/Button';

export function RecargaQuatidadeOutro() {
  const [quantidade, setQuantidade] = React.useState(0);
  const context = React.useContext(ReloadContext);
  const navigate = useNavigate();
  const { time } = useTimer({
    endTime: 0,
    initialTime: 60,
    timerType: 'DECREMENTAL',
    autostart: false,
    onTimeOver() {
      navigate('/', { replace: true });
    },
  });

  const UNIT_PRICE_IN_CENTS = 440;

  const goBack = () => {
    navigate('/recarga/quantidade')
  }

  const goNext = () => {
    context?.setPriceInCents(UNIT_PRICE_IN_CENTS * quantidade);
    navigate('/pagamento');
  }

  const handleNumberPadClick = (val: string) => {
    if (val === 'clear') {
      setQuantidade(quantidade => Number(`${quantidade}`.slice(0, -1)));
    } else {
      setQuantidade(quantidade => Number(`${quantidade}${val}`));
    }
  }

  const formatPrice = () => {
    const priceInCents = quantidade * UNIT_PRICE_IN_CENTS;
    return `R$ ${Math.floor(priceInCents / 100)},${priceInCents % 100 === 0 ? '00' : priceInCents % 100}`;
  }

  return (
    <div className="flex h-full w-full flex-col items-center">
      <h1 className="text-4xl">Insira a quatidade de unidades</h1>
      <h2 className="mt-4 text-xl"></h2>
      <div className="mt-4 flex w-full grow flex-col justify-start items-center gap-4">
        <div className="w-3/6">
          <div className='h-20 w-full flex flex-col justify-center items-center'>
            <div className='text-lg font-bold'> { quantidade } unidades </div>
            <div className='text-lg'> ({ formatPrice() }) </div>
         </div>
        </div>
        <div className="grid grid-cols-3 gap-4 w-2/6 grow">
          <Button className={`h-full w-full`}  onClick={() => handleNumberPadClick('1')}>
            <div className="mt-2 font-semibold text-white">1</div>
          </Button>
          <Button className={`h-full w-full`}  onClick={() => handleNumberPadClick('2')}>
            <div className="mt-2 font-semibold text-white">2</div>
          </Button>
          <Button className={`h-full w-full`}  onClick={() => handleNumberPadClick('3')}>
            <div className="mt-2 font-semibold text-white">3</div>
          </Button>
          <Button className={`h-full w-full`}  onClick={() => handleNumberPadClick('4')}>
            <div className="mt-2 font-semibold text-white">4</div>
          </Button>
          <Button className={`h-full w-full`}  onClick={() => handleNumberPadClick('5')}>
            <div className="mt-2 font-semibold text-white">5</div>
          </Button>
          <Button className={`h-full w-full`}  onClick={() => handleNumberPadClick('6')}>
            <div className="mt-2 font-semibold text-white">6</div>
          </Button>
          <Button className={`h-full w-full`}  onClick={() => handleNumberPadClick('7')}>
            <div className="mt-2 font-semibold text-white">7</div>
          </Button>
          <Button className={`h-full w-full`}  onClick={() => handleNumberPadClick('8')}>
            <div className="mt-2 font-semibold text-white">8</div>
          </Button>
          <Button className={`h-full w-full`}  onClick={() => handleNumberPadClick('9')}>
            <div className="mt-2 font-semibold text-white">9</div>
          </Button>
          <Button className={`h-full w-full`}  onClick={() => handleNumberPadClick('0')}>
            <div className="mt-2 font-semibold text-white">0</div>
          </Button>
          <Button className={`h-full w-full col-span-2`}  onClick={() => handleNumberPadClick('clear')}>
            <div className="mt-2 font-semibold text-white">Limpa</div>
          </Button>
        </div>
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
  )
}
