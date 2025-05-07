import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown, FaClock } from 'react-icons/fa';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setCurrentTime(new Date());
  }, []);

  const formatBrasiliaTime = (date) => {
    return date.toLocaleTimeString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  const generateSignal = (id, asset, direction, candleTime, confidence) => {
    const entry = new Date().toLocaleTimeString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });

    return {
      id,
      asset,
      direction,
      candleTime,
      entryTime: entry,
      entryPoint: `Entrada na próxima vela após ${entry} (Brasília)`,
      confidence
    };
  };

  const [signals] = useState([
    generateSignal(1, 'EUR/USD', 'up', '1m', 85),
    generateSignal(2, 'GBP/JPY', 'down', '30s', 92),
    generateSignal(3, 'BTC/USD', 'up', '5m', 78),
  ]);

  const candleOptions = [
    { value: '5s', label: '5 segundos (M5S)' },
    { value: '10s', label: '10 segundos (M10S)' },
    { value: '15s', label: '15 segundos (M15S)' },
    { value: '30s', label: '30 segundos (M30S)' },
    { value: '1m', label: '1 minuto (M1)' },
    { value: '2m', label: '2 minutos (M2)' },
    { value: '5m', label: '5 minutos (M5)' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sinais IQ Option</h1>
        <p className="text-gray-400">Monitore sinais de trading em tempo real para tomar as melhores decisões</p>
        <p className="text-purple-400 mt-2">
          Horário atual (Brasília): {formatBrasiliaTime(currentTime)}
        </p>
      </header>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Timeframes Disponíveis</h2>
        <div className="flex flex-wrap gap-2">
          {candleOptions.map((option) => (
            <span key={option.value} className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">
              {option.label}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-6">
        {signals.map((signal) => (
          <div 
            key={signal.id}
            className="bg-gray-800 rounded-lg p-6 shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">Par: {signal.asset}</h3>
                <div className="space-y-2">
                  <p className="text-gray-400 flex items-center gap-2">
                    <FaClock className="text-purple-400" />
                    Horário do Sinal (Brasília): {signal.entryTime}
                  </p>
                  <p className="text-gray-400">
                    Timeframe: {
                      candleOptions.find(opt => opt.value === signal.candleTime)?.label
                    }
                  </p>
                  <p className="text-gray-400">
                    Momento de Entrada: {signal.entryPoint}
                  </p>
                  <p className="text-yellow-400 text-sm mt-2">
                    ⚠️ Aguarde a abertura da próxima vela após o horário do sinal
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                {signal.direction === 'up' ? (
                  <div className="flex flex-col items-center bg-green-500/10 p-3 rounded-lg">
                    <FaArrowUp className="text-green-500 text-2xl mb-2" />
                    <span className="text-green-500 font-semibold">COMPRA</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center bg-red-500/10 p-3 rounded-lg">
                    <FaArrowDown className="text-red-500 text-2xl mb-2" />
                    <span className="text-red-500 font-semibold">VENDA</span>
                  </div>
                )}
                <div className="mt-3 text-center">
                  <span className="text-sm text-gray-400">
                    Assertividade
                  </span>
                  <div className="text-lg font-bold text-purple-400">
                    {signal.confidence}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
