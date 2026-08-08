function Hero()  {
  const handleVerProjetos = () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
  }

  const handleFalarComigo = () => {
    window.open("https://wa.me/5531984408945", "_blank");
  }

  return (
    <section className="bg-[#1E1E1E] rounded-4xl p-10 flex flex-col md:flex-row items-center mx-4 gap-6 md:gap-12 md:mx-auto max-w-4xl m-3">
      
      <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-white shrink-0 overflow-hidden">
        <img
          src="src/assets/photos/picture.jpeg"
          alt="Foto de perfil"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
        <h2 className="flex text-2xl md:text-3xl font-bold text-white">
          Lucas Vieira
        </h2>
        <p className="text-m font-semibold text-white">
          Desenvolvedor Back-End
        </p>
        <p className="text-sm font-normal text-white">
          Estudante de Ciência da Computação. Construindo sistemas de ponta a ponta, de APIs e modelagem de dados a interfaces que as pessoas realmente usam.
        </p>
        <div className="flex gap-4">
          
          <button 
            onClick={handleVerProjetos}
            className="bg-[#D9D9D9] hover:bg-[#9A9A9A] text-black font-bold py-2 px-4 rounded cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5">
              Ver projetos
          </button>
          
          <button 
            onClick={handleFalarComigo}
            className="border border-[#D9D9D9] text-[#D9D9D9] font-bold py-2 px-4 rounded cursor-pointer transition delay-150 duration-200 ease-in-out hover:-translate-y-0.5">
              Falar comigo
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero