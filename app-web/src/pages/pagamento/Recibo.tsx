import React from 'react';
import { Button } from '../../components/Button';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ReloadContext } from '../../App';

export function Recibo() {
  const context = React.useContext(ReloadContext);
  const navigate = useNavigate();

  const handleReciboClick = (isToEmitReceipt: boolean) => {
    context?.setEmitRecipt(isToEmitReceipt);
    if (context?.reload.type === 'unit') {
      navigate('/pagamento/qrcode');
    } else {
      navigate('/pagamento/final');
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center">
      <h1 className="text-4xl">Deseja imprimir um recibo?</h1>
      <h2 className="mt-4 text-xl"></h2>

      <div className="mt-4 flex w-full grow flex-row justify-center gap-4">
        <Button className="h-3/6 w-1/6" onClick={() => handleReciboClick(true)}>
          <div className="w-3/5">
            <FaCheck className="h-full w-full text-white" />
          </div>
          <div className="mt-2 font-semibold text-white">Sim</div>
        </Button>
        <Button className="h-3/6 w-1/6" onClick={() => handleReciboClick(false)}>
          <div className="w-3/5">
            <FaTimes className="h-full w-full text-white" />
          </div>
          <div className="mt-2 font-semibold text-white">Não</div>
        </Button>
      </div>

      <p className="mb-2 text-xl">
        Este terminal aceita apenas cartōes de débito e não devolve troco para pagamentos em dinheiro
      </p>
    </div>
  );
}
