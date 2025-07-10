import { useParams, Link } from 'react-router-dom'

const SimulationRoom = () => {
  const { id } = useParams()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Estação {id} - Cardiologia
              </h1>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Tempo restante: 08:45</span>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
                  Finalizar
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Caso Clínico</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  Paciente masculino, 65 anos, chega ao pronto-socorro com dor torácica 
                  intensa há 2 horas, irradiando para o braço esquerdo. Relata sudorese 
                  fria e dispneia. Hipertenso e diabético há 10 anos. 
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Exame físico:</strong> PA: 180/100 mmHg, FC: 110 bpm, 
                  SatO2: 92% em ar ambiente. Ausculta cardíaca com ritmo regular, 
                  sem sopros. Pulmões com roncos difusos.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Exames Disponíveis</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Eletrocardiograma</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Exame cardíaco para avaliar ritmo e isquemia
                  </p>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                    Solicitar
                  </button>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Troponina</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Marcador de lesão miocárdica
                  </p>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                    Solicitar
                  </button>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Radiografia de Tórax</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Avaliação pulmonar e cardíaca
                  </p>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                    Solicitar
                  </button>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Hemograma</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Avaliação hematológica completa
                  </p>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                    Solicitar
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Conduta</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Medicamentos</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <button className="text-left p-2 border border-gray-200 rounded hover:bg-gray-50">
                      AAS 300mg VO
                    </button>
                    <button className="text-left p-2 border border-gray-200 rounded hover:bg-gray-50">
                      Nitrato sublingual
                    </button>
                    <button className="text-left p-2 border border-gray-200 rounded hover:bg-gray-50">
                      Morfina IV
                    </button>
                    <button className="text-left p-2 border border-gray-200 rounded hover:bg-gray-50">
                      Heparina IV
                    </button>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Procedimentos</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <button className="text-left p-2 border border-gray-200 rounded hover:bg-gray-50">
                      Cateterismo cardíaco
                    </button>
                    <button className="text-left p-2 border border-gray-200 rounded hover:bg-gray-50">
                      Monitorização cardíaca
                    </button>
                    <button className="text-left p-2 border border-gray-200 rounded hover:bg-gray-50">
                      Oxigenoterapia
                    </button>
                    <button className="text-left p-2 border border-gray-200 rounded hover:bg-gray-50">
                      Acesso venoso
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Link
                to="/stations"
                className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700"
              >
                Voltar
              </Link>
              <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
                Confirmar Conduta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimulationRoom 