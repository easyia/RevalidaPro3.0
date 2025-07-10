import { Link } from 'react-router-dom'

const StationLibrary = () => {
  const stations = [
    {
      id: 1,
      title: 'Cardiologia - Infarto Agudo do Miocárdio',
      specialty: 'Cardiologia',
      difficulty: 'Intermediário',
      duration: '10 min',
      completed: true,
      score: 9.0
    },
    {
      id: 2,
      title: 'Pediatria - Febre em Criança',
      specialty: 'Pediatria',
      difficulty: 'Básico',
      duration: '8 min',
      completed: true,
      score: 8.5
    },
    {
      id: 3,
      title: 'Neurologia - Acidente Vascular Cerebral',
      specialty: 'Neurologia',
      difficulty: 'Avançado',
      duration: '12 min',
      completed: false,
      score: null
    },
    {
      id: 4,
      title: 'Ginecologia - Gravidez de Alto Risco',
      specialty: 'Ginecologia',
      difficulty: 'Intermediário',
      duration: '10 min',
      completed: false,
      score: null
    },
    {
      id: 5,
      title: 'Ortopedia - Fratura de Fêmur',
      specialty: 'Ortopedia',
      difficulty: 'Avançado',
      duration: '15 min',
      completed: false,
      score: null
    },
    {
      id: 6,
      title: 'Psiquiatria - Depressão',
      specialty: 'Psiquiatria',
      difficulty: 'Intermediário',
      duration: '10 min',
      completed: false,
      score: null
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Biblioteca de Estações</h1>
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded-md px-3 py-2">
              <option>Todas as Especialidades</option>
              <option>Cardiologia</option>
              <option>Pediatria</option>
              <option>Neurologia</option>
            </select>
            <select className="border border-gray-300 rounded-md px-3 py-2">
              <option>Todas as Dificuldades</option>
              <option>Básico</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stations.map((station) => (
            <div key={station.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{station.title}</h3>
                  {station.completed && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                      Concluída
                    </span>
                  )}
                </div>
                
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Especialidade:</span> {station.specialty}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Dificuldade:</span> {station.difficulty}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Duração:</span> {station.duration}
                  </p>
                  {station.completed && (
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Pontuação:</span> {station.score} pontos
                    </p>
                  )}
                </div>

                <Link
                  to={`/simulation/${station.id}`}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-center block"
                >
                  {station.completed ? 'Refazer' : 'Iniciar'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StationLibrary 