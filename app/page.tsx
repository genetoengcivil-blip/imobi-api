export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho */}
        <header className="text-center py-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🏠 Imobi API
          </h1>
          <p className="text-xl text-gray-600">
            Sistema completo de gerenciamento imobiliário
          </p>
          <div className="mt-8">
            <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              ✅ Online e Funcionando
            </span>
          </div>
        </header>

        {/* Cards de Funcionalidades */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-500">
            <div className="text-3xl mb-4">🔐</div>
            <h3 className="text-xl font-bold mb-3">Autenticação Segura</h3>
            <p className="text-gray-600">
              Login com Google, GitHub e email. Painel administrativo protegido.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-500">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-3">App Mobile</h3>
            <p className="text-gray-600">
              Aplicativo React Native para iOS e Android. Notificações em tempo real.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-purple-500">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-3">WhatsApp Integrado</h3>
            <p className="text-gray-600">
              Envio automático de mensagens. Atendimento via WhatsApp Business.
            </p>
          </div>

        </div>

        {/* Endpoints da API */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            📡 Endpoints da API
          </h2>
          
          <div className="space-y-6">
            
            <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  GET
                </span>
                <code className="text-lg font-mono bg-gray-100 px-3 py-1 rounded">
                  /api/properties
                </code>
              </div>
              <p className="text-gray-700">
                Lista todos os imóveis cadastrados. Suporte a filtros por tipo, localização e preço.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 rounded-r-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  POST
                </span>
                <code className="text-lg font-mono bg-gray-100 px-3 py-1 rounded">
                  /api/contact
                </code>
              </div>
              <p className="text-gray-700">
                Envia mensagem de contato. Integração com WhatsApp e email automático.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded-r-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  GET
                </span>
                <code className="text-lg font-mono bg-gray-100 px-3 py-1 rounded">
                  /api/users/{'{id}'}
                </code>
              </div>
              <p className="text-gray-700">
                Busca informações do usuário. Retorna dados do perfil e imóveis favoritos.
              </p>
            </div>

          </div>
        </div>

        {/* Botão de Ação */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105">
            🚀 Começar a Usar Agora
          </button>
          <p className="text-gray-500 mt-4">
            Crie sua conta gratuitamente em 1 minuto
          </p>
        </div>

        {/* Rodapé */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>© 2024 Imobi API - Sistema de Gestão Imobiliária</p>
          <p className="text-sm mt-2">
            Hospedado na Vercel • Banco de dados Supabase • Pagamentos com Stripe
          </p>
        </footer>

      </div>
    </main>
  )
}