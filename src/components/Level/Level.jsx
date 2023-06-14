import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Level extends Component {

    state = {
        levels: [],
        show: true
    }

    async componentDidMount() {
        const response = await fetch('http://127.0.0.1:8000/level');
        const levels = await response.json();
        this.setState({
            "levels": levels
        });
    }

    handleClick() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        const hide = this.state.show ? 'block' : 'hidden';

        return (
            <React.Fragment>
                <header className="flex justify-between px-8 mt-4">
                    <h1 className="text-2xl ">Liste des niveaux</h1>
                    <button className="bg-cyan-950 px-4 py-2 text-lg text-white rounded-lg" onClick={this.handleClick.bind(this)}>
                        Ajouter un niveau
                    </button>
                </header>

                <section className="px-8 mt-12 w-[1200px] mx-auto">
                    {
                        this.state.levels.map(level => {
                            return <Link to={"http://127.0.0.1:8000/level/classe/" + level.id} key={level.id} className="px-6 py-2 bg-slate-400 block mb-2">
                                {level.label}
                            </Link>
                        })
                    }
                </section>

                <div className={"w-96 px-6 py-3 rounded-lg bg-white shadow-lg absolute right-4 top-32 " + hide}>
                    <div>
                        <label htmlFor="level" className="block text-xl">Libellé</label>
                        <input type="text" className="block border-2 border-slate-500 px-4 py-1 rounded-lg mt-4" name="level" id="level" placeholder="Entrer le libellé" />
                    </div>
                    <button className="px-4 py-2 bg-cyan-900 text-white rounded-lg mt-4">Valider</button>
                </div>

            </React.Fragment>
        );
    }
}