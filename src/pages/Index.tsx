import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Bem-vindo ao Revalida Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A plataforma definitiva para preparação do Revalida. 
            Pratique com estações clínicas realistas e melhore suas habilidades.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/stations"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Começar a Praticar
            </Link>
            <Link
              to="/register"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Criar Conta
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index 