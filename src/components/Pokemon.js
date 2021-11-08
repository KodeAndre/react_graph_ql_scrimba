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
                    <h4>Max HP: {pokemon.maxHP}</h4>
                    <h4>Max CP: {pokemon.maxCP}</h4>
                </div>

                <div className="pokemon__image">
                    <img src={pokemon.image}></img>
                </div>

                <div className="pokemon__attacks">
                    {pokemon.attacks.special.slice(0, 3).map(attacks => 
                    <p key={`${attacks.name}-${attacks.damage}`}>Name: <b>{attacks.name}</b> Power: <b>{attacks.damage}</b></p>
                    )}
                </div>
            </div>
        </div>
    )
}