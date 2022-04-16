import React from 'react'
import PropTypes from 'prop-types'

import back from '../style/images/back.png'
import testi from '../style/images/testi.png'
import backtobasics from '../style/images/backtobasics.png'

import '../style/components/card.scss'

const Card = (props) => {

    const {card, front} = props;

    const getEffect = (card) => {
        let effect
        switch(card) {
            case 'testi':
                return effect = testi
            case 'backtobasics':
                return effect = backtobasics
            default:
                return effect
        }
    }
    
    if (front === true) {
        const effect = getEffect(card)
        return (
            <div className='card-container'>
                <div style={{ position: 'absolute', top: 5, left: 5 }}>
                    <div> {card} </div>
                    <img src={effect} alt='suit-symbol'/>
                </div>
                <div>
                <img src={effect} alt='suit-symbol' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}/>
                </div>
                <div style={{ position: 'absolute', bottom: 5, right: 5, transform: 'rotate(-180deg)' }}>
                    <div> {effect} </div>
                    <img src={effect} alt='suit-symbol'/>
                </div>
            </div>
        )
    } else {
        return (
            <div className='card-container' style={{ backgroundImage: `url(${back})`}}></div>
        )
    }
}

Card.propTypes = {
    card: PropTypes.string,
    front: PropTypes.bool
}

export default Card;