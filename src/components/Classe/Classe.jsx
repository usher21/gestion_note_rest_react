import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Classe extends Component {

    state = {
        classes: []
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8000/classe');
        const classes = await response.json();
        
        this.setState({
            "classes": classes
        });
    }

    render() {
        return (
            <React.Fragment>
                <header className="flex justify-between px-8 mt-4">
                    <h1 className="text-2xl ">Liste des classes</h1>
                    <button className="bg-cyan-950 px-4 py-2 text-lg text-white rounded-lg">Ajouter une classe</button>
                </header>

                <section className="px-8 mt-12 w-[1200px] mx-auto">
                    {
                        this.state.classes.map(classe => {
                            return <Link to={"http://127.0.0.1:8000/level/classe/" + classe.id} key={classe.id} className="px-6 py-2 bg-slate-400 block mb-2">
                                {classe.label}
                            </Link>
                        })
                    }
                </section>
            </React.Fragment>
        );
    }
}
