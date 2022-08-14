import React from 'react'
import Game from '../../game/view/game-view'
import GameForm from '../../game/form/game-form'
import './GameCanvas.scss'

const GameCanvas = () => {
    return (
        <div className="content">
            <div className="gameBorder">
                <div className="Game">
                    <Game />
                    <GameForm />
                </div>
            </div>
        </div>
    )
}

export default GameCanvas