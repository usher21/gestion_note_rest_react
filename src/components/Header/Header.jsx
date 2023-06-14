import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="w-full px-12 py-3 bg-cyan-800">
            <nav className="text-white">
                <Link to="/level" className="mr-3 cursor-pointer">Niveau</Link>
                <Link to="/classe" className="mr-3 cursor-pointer">Classe</Link>
            </nav>
        </header>
    );
}