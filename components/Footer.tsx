import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-black border-t border-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">TV Stream Plus</h3>
            <p className="text-white/60 text-sm">
              Sua melhor experiência em entretenimento digital
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <p className="text-white/60 text-sm">
              WhatsApp: (11) 99388-1970<br />
              Email: contato@tvstreamplus.com.br
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/termos" className="text-white/60 hover:text-white text-sm transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-white/60 hover:text-white text-sm transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Dados Legais</h3>
            <p className="text-white/60 text-sm">
              TV Stream Plus Tecnologia LTDA<br />
              CNPJ: 12.345.678/0001-90<br />
              Av. Paulista, 1000 - Bela Vista<br />
              São Paulo - SP, 01310-100
            </p>
          </div>
        </div>
        
        <div className="border-t border-purple-900/20 pt-8">
          <p className="text-center text-white/40 text-sm">
            © {new Date().getFullYear()} TV Stream Plus. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}