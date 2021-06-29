// eslint-disable-next-line
import React from 'react';

export function Pokemon({ pokemon }) {
    return (
        <div className="pokemon">
            <div>
                <div className="pokemon__name">
                    <h2>{pokemon.name}</h2>
                </div>

                <div className="pokemon__meta">
                    <p>Max HP: {pokemon.maxHP}</p>
                    <p>Max CP: {pokemon.maxCP}</p>
                </div>

                <div className="pokemon__image">
                    <img src={pokemon.image}></img>
                </div>

                <div className="pokemon__attacks">
                    {pokemon.attacks.special.slice(0, 3).map(attacks => 
                    <p key={`${attacks.name}-${attacks.damage}`}>Name: {attacks.name} Power: {attacks.damage}</p>
                    )}
                </div>
            </div>
        </div>
    )
}