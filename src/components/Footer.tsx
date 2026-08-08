function Footer() {
  return (
    <footer className="bg-[#1E1E1E] rounded-4xl p-10 mx-4 md:mx-auto max-w-4xl m-3 flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-white text-base md:text-lg text-center md:text-left">
        Desenvolvido com <span className="text-red-500">♥</span> por Lucas
      </p>

      <div className="flex gap-3">
        <button className="bg-[#D9D9D9] hover:bg-[#9A9A9A] text-black font-bold py-2 px-4 rounded transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5">
          <a
            href="hhttps://www.linkedin.com/in/lucasdeoliveiravieira/"
            target="_blank"
          >
            LinkedIn
          </a>
        </button>

        <button className="bg-[#D9D9D9] hover:bg-[#9A9A9A] text-black font-bold py-2 px-4 rounded cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5">
          <a href="https://github.com/henriquelucasvii" target="_blank">
            GitHub
          </a>
        </button>
        <button className="bg-[#D9D9D9] hover:bg-[#9A9A9A] text-black font-bold py-2 px-4 rounded cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5">
          <a href="mailto:slucashenriquevieira86@gmail.com">E-mail</a>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
