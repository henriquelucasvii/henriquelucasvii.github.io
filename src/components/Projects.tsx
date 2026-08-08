function Projects() {
    const projects = [
        {
            title: "Agro.in",
            description: "O AGRO.IN é uma plataforma digital desenvolvida para impulsionar a modernização e a profissionalização de propriedades rurais.",
            github: "https://github.com/henriquelucasvii/agro.in",
            demo: "https://agro-in.vercel.app"
        },
        {
            title: "Import PPN",
            description: "A imports PPN é um catalógo de produtos de um loja de eletrônicos. O objetivo deste projeto é exibição de produtos periféricos, como mouses, celulares, fones de ouvido, carregadores, entre outros.",
            github: "https://github.com/henriquelucasvii/imports-ppn",
            demo: ""
        }
    ]

    return (
        <section id="projetos" className="bg-[#1E1E1E] rounded-4xl p-10 mx-4 gap-6 md:gap-12 md:mx-auto max-w-4xl m-3">
            <h2 className="text-white text-2xl md:text-3xl mb-5">Projetos</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border border-gray-500 rounded-2xl p-6 flex flex-col gap-3 hover:border-white transition"
                    >
                        <h3 className="text-white text-xl font-medium">{project.title}</h3>
                        <p className="text-gray-300 text-base flex-1">{project.description}</p>

                        <div className="flex gap-3 mt-2">
                            <button 
                                className="bg-[#D9D9D9] hover:bg-[#9A9A9A] text-black font-bold py-2 px-4 rounded transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5">
                                <a href={project.github} target="_blank">Github</a>
                            </button>
                            
                            <button 
                                className="border border-[#D9D9D9] text-[#D9D9D9] font-bold py-2 px-4 rounded transition delay-150 duration-200 ease-in-out hover:-translate-y-0.5">
                                <a href={project.demo} target="_blank" >Ver aplicação</a>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects