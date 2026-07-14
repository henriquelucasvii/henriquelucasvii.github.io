function Hero() {
  return (
    <div className="bg-neutral-200 rounded-4xl p-10 flex items-center gap-8 mx-auto max-w-4xl relative z-10 m-7" >
      
      <div className="w-44 h-44 rounded-full bg-white shrink-0" >
        <img src="" alt="" />
      </div>

      {/* Informações */}
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-bold text-black" >
          Lucas Vieira
        </h2>
        <p className="text-sm font-semibold text-neutral-800">
          Desenvolvedor Back-End
        </p>
      </div>
    </div>
  );
}

export {Hero};

// bg-neutral-200 rounded-3xl p-10 flex items-center gap-8 max-w-2xl