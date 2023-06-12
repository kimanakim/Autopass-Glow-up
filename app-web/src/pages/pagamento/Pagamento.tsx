import React from 'react';
import { Button } from '../../components/Button';
import { FaRegMoneyBillAlt, FaArrowLeft } from 'react-icons/fa';
import { BsFillCreditCard2BackFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { ReloadContext } from '../../App';

export function Pagamento() {
  const navigate = useNavigate();
  const context = React.useContext(ReloadContext);

  const goBack = () => {
    navigate('/');
  }

  const goToRecibo = () => {
    navigate('./recibo');
  }

  const goToInsiraCartao = () => {
    navigate('/pagamento/insiracartao');
  };

  const goToInsiraNotas = () => {
    navigate('/pagamento/insiranotas');
  };

  const handleCashButtonClick = () => {
    context?.setPaymentType('cash');
    goToInsiraNotas();
  }

  const handleCardButtonClick = () => {
    context?.setPaymentType('card');
    goToInsiraCartao();
  }

  return (
    <div className="flex h-full w-full flex-col items-center">
      <h1 className="text-4xl">Escolha a forma de pagamento</h1>
      <h2 className="mt-4 text-xl"></h2>

      <div className="mt-4 flex w-full grow flex-row justify-center gap-4">
        <Button className='h-3/6 w-1/6' onClick={handleCashButtonClick}>
          <div className="w-3/5">
            <FaRegMoneyBillAlt className="h-full w-full text-white" />
          </div>
          <div className="mt-2 font-semibold text-white">Dinheiro</div>
        </Button>
        <Button className='h-3/6 w-1/6' onClick={handleCardButtonClick}>
          <div className="w-3/5">
            <BsFillCreditCard2BackFill className="h-full w-full text-white" />
          </div>
          <div className="mt-2 font-semibold text-white">Cartão de débito</div>
        </Button>
      </div>

      <div className='w-full mb-4'>
        <Button className='w-1/5 ml-8' onClick={goBack}>
          <div className='text-white inline-flex py-2 items-center text-2xl'>
            <FaArrowLeft className="mr-2"/>
            Voltar
          </div>
        </Button>
      </div>
      <p className="mb-2 text-xl">
        Este terminal aceita apenas cartōes de débito e não devolve troco para pagamentos em dinheiro
      </p>
    </div>
  );
}
