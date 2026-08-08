function Experience() {
    return (
        <section className="bg-[#1E1E1E] rounded-4xl p-10 md:flex-row items-center mx-4 gap-6 md:gap-12 md:mx-auto max-w-4xl m-3">
            <h2 className="text-white text-2xl md:text-3xl mb-5">Experiência</h2>

            <div className="flex flex-col gap-6">

                <div className="border-l-2 border-gray-500 pl-4">
                    <h3 className="text-white text-lg font-medium">Estagiário de Gestão de Automação e Inteligência Aritificial</h3>
                    <p className="text-gray-400 text-sm mb-1">Ava Sales · Fevereiro 2026 - Abril 2026</p>
                    <p className="text-gray-300 text-base">
                        · Atuação no desenvolvimento e gerenciamento de automações de processos utilizando ferramentas no-code / lowcode e integrações via APIs, 
                        integrando CRM, e-mail marketing e SMS para otimização do cliente.
                    </p>
                    <p className="text-gray-300 text-base">
                        · Implementação de soluções com uso de inteligência artificial voltadas para otimização de atendimento, organização de dados e fluxos internos.
                    </p> 
                    <p className="text-gray-300 text-base">
                        · Desenvolvimento e manutenção de landing pages integradas a fluxos automatizados e funis digitais
                    </p>   
                </div>

                <div className="border-l-2 border-gray-500 pl-4">
                    <h3 className="text-white text-lg font-medium">Desenvolvedor Full Stack</h3>
                    <p className="text-gray-400 text-sm mb-1">Projetos Pessoas e Freelancer  · 2025 - Presente</p>
                    <p className="text-gray-300 text-base">
                        · Criação e manutenção de APIs em Java e TypeScript, integração de sistemas e automações com N8N.
                    </p >
                    <p className="text-gray-300 text base">
                        · Desenvolvimento de design de interfaces responsivas com React e Tailwind CSS alinhando os requisitos de frontend com as capacidades do backend.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Experience