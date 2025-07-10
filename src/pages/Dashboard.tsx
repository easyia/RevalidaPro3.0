const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Progresso Geral</h3>
            <p className="text-3xl font-bold text-blue-600">75%</p>
            <p className="text-gray-600">Concluído</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Estações Praticadas</h3>
            <p className="text-3xl font-bold text-green-600">24</p>
            <p className="text-gray-600">de 32</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Média de Pontuação</h3>
            <p className="text-3xl font-bold text-purple-600">8.5</p>
            <p className="text-gray-600">pontos</p>
          </div>
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Atividades Recentes</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Estação de Cardiologia</p>
                  <p className="text-sm text-gray-600">Concluída há 2 horas</p>
                </div>
                <span className="text-green-600 font-semibold">9.0 pontos</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Estação de Pediatria</p>
                  <p className="text-sm text-gray-600">Concluída ontem</p>
                </div>
                <span className="text-blue-600 font-semibold">8.5 pontos</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Estação de Neurologia</p>
                  <p className="text-sm text-gray-600">Concluída há 3 dias</p>
                </div>
                <span className="text-yellow-600 font-semibold">7.8 pontos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 