import React from 'react';
import { Button } from '../../components/Button';
import { AiOutlineQrcode } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { ReloadContext } from '../../App';

export function Home() {
  const context = React.useContext(ReloadContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    context?.clearReload();
  }, [])

  const hour = new Date().getHours();
  const welcomeMessage = hour > 6 && hour <= 12 ? 'Bom dia' : hour > 12 && hour < 18 ? 'Boa tarde' : 'Boa Noite';

  const goToRecarga = () => {
    navigate('/insiracartao');
  }

  const goToRecargaUnitario = () => {
    navigate('/recarga/unitario');
  }

  return (
    <div className="flex h-full w-full flex-col items-center">
      <h1 className="text-4xl">{welcomeMessage}</h1>
     <h2 className="mt-4 text-xl">Insira seu cartão de transporte ou escolha uma das opções abaixo</h2>

      <div className="mt-4 flex w-full grow flex-row justify-center gap-4">
        <Button className='h-3/6 w-1/6' onClick={goToRecarga}>
          <div className="w-3/5 bg-black">
            <img src="images/top.png" />
          </div>
          <div className=''>
            <p>Recarga</p>
          </div>
        </Button>
        <Button className='h-3/6 w-1/6' onClick={goToRecargaUnitario}>
          <div className="w-3/5">
            <AiOutlineQrcode className="h-full w-full" />
            <p>Unitario</p>
          </div>
        </Button>
        <Button className='h-3/6 w-1/6' onClick={goToRecarga}>
          <div className="w-3/5">
            <img src="images/bilhete_unico.png" />
            <p>Recarga</p>
          </div>
        </Button>
      </div>

      <p className="mb-2 text-xl">
        Este terminal aceita apenas cartōes de débito e não devolve troco para pagamentos em dinheiro
      </p>
    </div>
  );
}
