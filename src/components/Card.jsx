import React from 'react'
import PropTypes from 'prop-types'

import back from '../style/images/back.png'
import basics from '../style/images/basics.png'
import skip from '../style/images/skip.png'
import miina from '../style/images/miina.png'
import pew from '../style/images/pew.png'
import skipall from '../style/images/skipall.png'

import '../style/components/card.scss'

const Card = (props) => {

    const {card, front} = props;

    const getEffect = (card) => {
        let effect
        switch(card) {
            case 'basics':
                return effect = basics
            case 'skip':
                return effect = skip
            case 'miina':
                return effect = miina
            case 'pew':
                return effect = pew
            case 'skipall':
                return effect = skipall
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