import { Home, Shield, Smartphone, MessageSquare, Database, Users, Building, CreditCard, CheckCircle, Zap, Globe, Lock } from 'lucide-react'
import { Button } from './components/ui/button'

export default function HomePage() {
  const features = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Autenticação Segura",
      description: "Login com Google, GitHub e email. Painel administrativo totalmente protegido com verificação em duas etapas.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "App Mobile Nativo",
      description: "React Native para iOS e Android. Notificações push, modo offline e experiência nativa premium.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: "WhatsApp Business API",
      description: "Integração oficial com WhatsApp. Chatbots inteligentes, envio automático e atendimento humanizado.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Banco de Dados em Tempo Real",
      description: "Supabase com sincronização instantânea. Backup automático diário e criptografia de ponta a ponta.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "CRM Avançado",
      description: "Gestão completa de clientes com histórico de interações, segmentação e automação de follow-up.",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: <Building className="h-10 w-10" />,
      title: "Catálogo de Imóveis",
      description: "Galeria profissional com tours 360°, fotos em alta resolução e filtros inteligentes por localização e preço.",
      color: "bg-indigo-100 text-indigo-600"
    }
  ]

  const endpoints = [
    { method: "GET", path: "/api/properties", desc: "Lista todos os imóveis com filtros avançados", color: "bg-green-100 text-green-800" },
    { method: "POST", path: "/api/properties", desc: "Cadastra novo imóvel com fotos e detalhes", color: "bg-blue-100 text-blue-800" },
    { method: "GET", path: "/api/properties/{id}", desc: "Detalhes completos de um imóvel específico", color: "bg-green-100 text-green-800" },
    { method: "POST", path: "/api/auth/register", desc: "Registro de novo usuário/Corretor", color: "bg-blue-100 text-blue-800" },
    { method: "POST", path: "/api/auth/login", desc: "Login com JWT e refresh token", color: "bg-blue-100 text-blue-800" },
    { method: "GET", path: "/api/users/me", desc: "Perfil do usuário atual e preferências", color: "bg-green-100 text-green-800" },
    { method: "POST", path: "/api/whatsapp/send", desc: "Envio de mensagem via WhatsApp Business", color: "bg-blue-100 text-blue-800" },
    { method: "GET", path: "/api/analytics", desc: "Estatísticas, relatórios e insights", color: "bg-green-100 text-green-800" }
  ]

  const benefits = [
    "Sem custo inicial - comece gratuitamente",
    "Setup em 5 minutos - sem necessidade de técnico",
    "Suporte 24/7 via chat, email e telefone",
    "Escalável - de 1 a 1000 imóveis",
    "Conformidade com LGPD - dados protegidos",
    "Atualizações automáticas e gratuitas"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* Hero Section com melhor contraste */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2073')] opacity-10 bg-cover bg-center" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Zap className="h-5 w-5 mr-2 text-yellow-300" />
              <span className="text-white font-medium">PLATAFORMA COMPLETA PARA IMOBILIÁRIAS</span>
            </div>
            
            {/* Título principal */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Tudo que sua <span className="text-yellow-300">imobiliária</span> precisa
            </h1>
            
            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Site profissional + App mobile + WhatsApp integrado + Sistema de pagamentos + 
              Gestão completa. <span className="font-semibold text-white">Tudo em uma única plataforma.</span>
            </p>
            
            {/* Botões principais com bom contraste */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-10 py-7 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                <CheckCircle className="mr-3 h-6 w-6" />
                COMEÇAR GRATUITAMENTE
              </Button>
              
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 text-lg px-10 py-7 rounded-xl font-bold backdrop-blur-sm">
                📽 VER DEMONSTRAÇÃO AO VIVO
              </Button>
            </div>
            
            {/* Estatísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {[
                { number: "R$0", label: "Para começar" },
                { number: "5min", label: "Configuração" },
                { number: "24/7", label: "Suporte" },
                { number: "∞", label: "Imóveis" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Por que escolher a ImobiAPI?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Design melhorado */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades Completas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tudo que você precisa para gerenciar sua imobiliária com eficiência e profissionalismo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-2xl ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto">
                    Saiba mais →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints - Design revisado */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 mb-4">
              <Globe className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">API RESTFUL COMPLETA</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Integre com Qualquer Sistema
            </h2>
            <p className="text-xl text-gray-600">
              Documentação completa e exemplos de código para todas as linguagens
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-gray-800 flex items-center">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div className="ml-4 text-gray-400 text-sm font-mono">api.imobiapi.com</div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {endpoints.map((endpoint, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800 transition-colors border border-gray-700/50">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-lg text-sm font-bold ${endpoint.color}`}>
                        {endpoint.method}
                      </span>
                      <Lock className="h-4 w-4 text-gray-500" />
                    </div>
                    
                    <code className="font-mono text-lg text-white block mb-3 bg-gray-900/50 px-3 py-2 rounded">
                      {endpoint.path}
                    </code>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">{endpoint.desc}</p>
                    
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 hover:bg-gray-700">
                        Ver exemplo de código
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-6 rounded-xl text-lg font-bold shadow-2xl">
                  <Globe className="mr-3 h-5 w-5" />
                  ACESSAR DOCUMENTAÇÃO COMPLETA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Design aprimorado */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="text-white font-medium">OFERTA ESPECIAL DE LANÇAMENTO</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para transformar sua imobiliária?
          </h2>
          
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Junte-se a mais de 500 imobiliárias que já automatizaram seus processos 
            e aumentaram suas vendas com nossa plataforma.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-xl mx-auto border border-white/20">
            <div className="text-5xl font-bold text-white mb-2">R$ 0</div>
            <div className="text-blue-200 mb-4">para os primeiros 3 meses</div>
            <div className="text-white">Depois apenas R$ 97/mês • Cancele quando quiser</div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-12 py-7 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CheckCircle className="mr-3 h-6 w-6" />
              CRIAR CONTA GRATUITA
            </Button>
            
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 text-lg px-12 py-7 rounded-xl font-bold backdrop-blur-sm">
              📞 FALAR COM CONSULTOR
            </Button>
          </div>
          
          <p className="text-blue-200 text-sm mt-8">
            Sem compromisso • Sem cartão de crédito • Setup em 5 minutos
          </p>
        </div>
      </section>

      {/* Footer melhorado */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            <div>
              <div className="flex items-center mb-6">
                <Home className="h-8 w-8 text-white mr-3" />
                <span className="text-2xl font-bold text-white">ImobiAPI</span>
              </div>
              <p className="text-gray-400 mb-6">
                A plataforma completa para gestão imobiliária. Moderna, eficiente e acessível.
              </p>
              <div className="flex space-x-4">
                {['Twitter', 'Instagram', 'LinkedIn', 'YouTube'].map((social) => (
                  <div key={social} className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                    {social.charAt(0)}
                  </div>
                ))}
              </div>
            </div>
            
            {[
              {
                title: "Produto",
                links: ["Funcionalidades", "Preços", "API", "App Mobile", "Casos de Sucesso"]
              },
              {
                title: "Recursos",
                links: ["Documentação", "Tutoriais", "Blog", "FAQ", "Status do Sistema"]
              },
              {
                title: "Empresa",
                links: ["Sobre", "Carreiras", "Contato", "Política de Privacidade", "Termos de Uso"]
              }
            ].map((column, idx) => (
              <div key={idx}>
                <h3 className="text-white font-bold text-lg mb-6">{column.title}</h3>
                <ul className="space-y-4">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href="#" className="hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>© 2024 ImobiAPI. Todos os direitos reservados.</p>
            <p className="mt-2">
              Hospedado na Vercel • Banco de dados Supabase • Pagamentos com Stripe • 
              WhatsApp Business API
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}