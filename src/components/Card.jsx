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
            <div className='card-container' style={{ backgroundImage: `url(${effect})`}}></div>
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