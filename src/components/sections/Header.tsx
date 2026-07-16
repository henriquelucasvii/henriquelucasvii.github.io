import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre Mim", href: "#sobre" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contatos" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full flex justify-center px-4 py-4">
            <div className="w-full max-w-4xl bg-[#FBE8CB] rounded-full md:rounded-full px-6 py-2 md:py-4 relative">
                <nav className="flex items-center justify-center relative">
    
                <ul className="hidden md:flex items-center justify-center gap-8">
                    {links.map((link) => (
                        <li key={link.href} className="text-center">
                            <a
                                href={link.href}
                                className="text-sm font-medium hover:opacity-70 transition-opacity"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Botão menu mobile */}
                <button className="md:hidden absolute right-0" onClick={() => setIsOpen((prev) => !prev)} aria-label="Abrir menu" aria-expanded={isOpen}>
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>

            </nav>
                {/* Menu mobile */}
                {isOpen && (
                    <div className="w-full flex justify-center px-4 py-4">
                    <ul className="md:hidden absolute top-full left-0 w-full mt-2 bg-[#FBE8CB] rounded-3xl px-6 py-4 flex flex-col gap-4">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    </div>
                )}
            </div>
        </header>
    );
}