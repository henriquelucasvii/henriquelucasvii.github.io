function Stack() {
    return (
        <section className="bg-[#1E1E1E] rounded-4xl p-10 md:flex-row items-center mx-4 gap-6 md:gap-12 md:mx-auto max-w-4xl m-3">
            <h2 className="text-white text-2xl md:text-3xl mb-5">Stack</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                <div>
                    <h3 className="text-white text-1xl font-medium mb-2">backend</h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="border border-gray-500 rounded-full px-4 py-1 text-white text-lg hover:border-white transition">Node.js</span>
                        <span className="border border-gray-500 rounded-full px-4 py-1 text-white text-lg hover:border-white transition">Java</span>
                        <span className="border border-gray-500 rounded-full px-4 py-1 text-white text-lg hover:border-white transition">TypeScript</span>
                        <span className="border border-gray-500 rounded-full px-4 py-1 text-white text-lg hover:border-white transition"> PostgreSQL</span>
                    </div>
                </div>

                <div>
                    <h3 className="text-white text-1xl font-medium mb-2">frontend</h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="border border-gray-500 rounded-full px-4 py-1 text-white text-lg hover:border-white transition">React</span>
                        <span className="border border-gray-500 rounded-full px-4 py-1 text-white text-lg hover:border-white transition">Tailwind</span>
                        <span className="border border-gray-500 rounded-full px-4 py-1 text-white text-lg hover:border-white transition">Vite</span>
                    </div>
                </div>

                <div>
                    <h3 className="text-white text-1xl font-medium mb-2">ferramentas</h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="border border-gray-500 rounded-full px-4 py-1 text-white text-lg hover:border-white transition">Git</span>
                        <span className="border border-gray-500 rounded-full px-4 py-1 text-white text-lg hover:border-white transition">N8N</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stack