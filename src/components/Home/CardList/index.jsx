
import React from "react";
import Altimage from '../../../assests/pokeball.png'
import PopUpModal from "./PopUpModal";
import './style.css';


const CardList = ({ pokemon }) => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <PopUpModal pokeInfo={pokemon} openModel={open} onHide={() => setOpen(false)} />
            <div className="card col-md-12 mx-2 my-4" onClick={() => setOpen(true)} >
                <div className="card-image" style={{ display: "contents" }}>
                    {
                        pokemon.sprites.other.home.front_default == '' ? (
                            <img src={pokemon.sprites.other.home.dream_world.front_default} alt="" />
                        ) : (
                            <img src={Altimage} alt="" />
                        )
                    }
                </div>
                <div className="card-contents">
                    <span className='pokemon-id'>N° {pokemon.id}</span>
                    <h3 className="card-title my-2">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
                    <div className='card-types'>
                        {pokemon.types.map(data => (
                            <span key={data.type.name} className={data.type.name}>
                                {data.type.name.charAt(0).toUpperCase() + data.type.name.slice(1)}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardList;