import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ReloadContext } from '../../App';
import { Button } from '../../components/Button';

export function RecargaTipo() {
  const navigate = useNavigate();
  const context = React.useContext(ReloadContext);

  const goBack = () => {
    navigate('/');
  }

  const goToValor = () => {
    navigate('/recarga/valor');
  }

  const handleValeTransporteClick = () => {
    context?.setReloadType('voucher');
    goToValor();
  }

  const handleCommonClick = () => {
    context?.setReloadType('common');
    goToValor();
  }

  const handleSchoolClick = () => {
    context?.setReloadType('school');
    goToValor();
  }

  return (
    <div className="flex h-full w-full flex-col items-center">
      <h1 className="text-4xl">Selecione a opção desejada</h1>
      <h2 className="mt-4 text-xl"></h2>

      <div className="mt-4 flex w-full grow flex-row justify-center gap-4">
        <Button className='h-3/6 w-1/6' onClick={handleValeTransporteClick}>
          <div className="mt-2 font-semibold text-white">Vale Transporte</div>
        </Button>
        <Button className='h-3/6 w-1/6' onClick={handleCommonClick}>
          <div className="mt-2 font-semibold text-white">Comum</div>
        </Button>
        <Button className='h-3/6 w-1/6' onClick={handleSchoolClick}>
          <div className="mt-2 font-semibold text-white">Escolar</div>
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
