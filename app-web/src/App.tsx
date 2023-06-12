import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { InsiraCartaoTransporte } from './pages/home/InsiraCartaoTransporte';
import { CompraAprovada } from './pages/pagamento/CompraAprovada';
import { CompraRejeitada } from './pages/pagamento/CompraRejeitada';
import { GerarQrCode } from './pages/pagamento/GerarQrCode';
import { InsiraCartao } from './pages/pagamento/InsiraCartao';
import { InsiraNotas } from './pages/pagamento/InsiraNotas';
import { InsiraSenha } from './pages/pagamento/InsiraSenha';
import { Pagamento } from './pages/pagamento/Pagamento';
import { PagamentoPage } from './pages/pagamento/PagamentoPage';
import { Processando } from './pages/pagamento/Processando';
import { Recibo } from './pages/pagamento/Recibo';
import { TelaFinal } from './pages/pagamento/TelaFinal';
import { ConfirmarValor } from './pages/recarga/ConfirmarValor';
import { RecargaPage } from './pages/recarga/RecargaPage';
import { RecargaQuantidade } from './pages/recarga/RecargaQuantidade';
import { RecargaQuatidadeOutro } from './pages/recarga/RecargaQuatidadeOutro';
import { RecargaTipo } from './pages/recarga/RecargaTipo';
import { RecargaUnitario } from './pages/recarga/RecargaUnitario';
import { RecargaValor } from './pages/recarga/RecargaValor';
import { RecargaValorOutro } from './pages/recarga/RecargaValorOutro';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/insiracartao',
    element: <InsiraCartaoTransporte />
  },
  {
    path: '/pagamento',
    element: <PagamentoPage />,
    children: [
      {
        path: '',
        element: <Pagamento />,
      },
      {
        path: 'recibo',
        element: <Recibo />,
      },
      {
        path: 'insiranotas',
        element: <InsiraNotas />
      },
      {
        path: 'insiracartao',
        element: <InsiraCartao />,
      },
      {
        path: 'insirasenha',
        element: <InsiraSenha />,
      },
      {
        path: 'processando',
        element: <Processando />,
      },
      {
        path: 'aprovada',
        element: <CompraAprovada />,
      },
      {
        path: 'rejeitada',
        element: <CompraRejeitada />,
      },
      {
        path: 'qrcode',
        element: <GerarQrCode />
      },
      {
        path: 'final',
        element: <TelaFinal />
      }
    ],
  },
  {
    path: 'recarga',
    element: <RecargaPage />,
    children: [
      {
        path: 'tipo',
        element: <RecargaTipo />,
      },
      {
        path: 'unitario',
        element: <RecargaUnitario />,
      },
      {
        path: 'valor',
        element: <RecargaValor />,
      },
      {
        path: 'valoroutro',
        element: <RecargaValorOutro />,
      },
      {
        path: 'quantidade',
        element: <RecargaQuantidade />,
      },
      {
        path: 'quantidadeoutro',
        element: <RecargaQuatidadeOutro />,
      },
      {
        path: 'confirmarvalor',
        element: <ConfirmarValor />
      }
    ],
  },
]);

type ReloadType = 'voucher' | 'common' | 'school' | 'unit';
type PaymentType = 'card' | 'cash';

type ReloadContextType = {
  setPaymentType: (type: PaymentType) => void;
  setPriceInCents: (price: number) => void;
  setReloadType: (type: ReloadType) => void;
  setEmitRecipt: (value: boolean) => void;
  clearReload: () => void;
} & Reload;

type Reload = {
  payment: {
    type: PaymentType | null;
    priceInCents: number | null;
  };
  reload: {
    type: ReloadType | null;
  };
  isToEmitReceipt: boolean | null;
};

export const ReloadContext = React.createContext<ReloadContextType | null>(null);

function App() {
  const currentTimeDate = new Date();
  const timeDateFormat = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
  const [reload, setReload] = React.useState<Reload>({
    payment: {
      type: null,
      priceInCents: null,
    },
    reload: {
      type: null,
    },
    isToEmitReceipt: null,
  });

  const setPaymentType = (type: PaymentType) => {
    setReload((reload) => {
      if (!reload) return reload;

      const payment = {
        ...reload.payment,
        type: type,
      };
      return {
        ...reload,
        payment,
      };
    });
  };

  const setPriceInCents = (price: number) => {
    setReload((reload) => {
      console.log('context reload', reload);
      if (!reload) return reload;

      const payment = {
        ...reload.payment,
        priceInCents: price,
      };

      console.log('will return', { ...reload, payment });
      return {
        ...reload,
        payment,
      };
    });
  };

  const setReloadType = (type: ReloadType) => {
    setReload((reload) => {
      if (!reload) return reload;

      const reloadObj = {
        ...reload.reload,
        type: type,
      };

      return {
        ...reload,
        reload: reloadObj,
      };
    });
  };

  const setEmitRecipt = (value: boolean) => {
    setReload((reload) => {
      if (!reload) return reload;

      return {
        ...reload,
        isToEmitReceipt: value,
      };
    });
  };

  const clearReload = () => {
    setReload({
      payment: {
        type: null,
        priceInCents: null,
      },
      reload: {
        type: null,
      },
      isToEmitReceipt: null,
    });
  };

  return (
    <ReloadContext.Provider
      value={{
        ...reload,
        setPaymentType,
        setPriceInCents,
        setReloadType,
        setEmitRecipt,
        clearReload,
      }}
    >
      <div className="flex h-screen w-screen flex-col bg-neutral-200">
        <div className="w-full pl-2 pt-2">
          <img className="h-20" src="/images/autopass_logo.webp" alt="autopass" />
        </div>

        <div className="mt-4 grow">
          <RouterProvider router={routes} />
        </div>

        <div className="h-13 inline-flex w-full items-center justify-between border-t-2 border-autopass pl-2">
          <p className="text-xl">{timeDateFormat.format(currentTimeDate)}</p>
          <img className="h-12" src="/images/bandeiras.png" alt="bandeiras" />
        </div>
      </div>
    </ReloadContext.Provider>
  );
}

export default App;
