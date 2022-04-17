import React from 'react'
import PropTypes from 'prop-types'

import back from '../style/images/back.png'
import basics from '../style/images/basics.png'
import skip from '../style/images/skip.png'
import miina from '../style/images/miina.png'
import pew from '../style/images/pew.png'
import explosion from '../style/images/explosion.png'
import skipall from '../style/images/skipall.png'
import lucky from '../style/images/lucky.png'
import evil from '../style/images/evil.png'
import kadet from '../style/images/kadet.png'
import double from '../style/images/double.png'

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
            case 'explosion':
                return effect = explosion
            case 'skipall':
                return effect = skipall
            case 'lucky':
                return effect = lucky
            case 'kadet':
                return effect = kadet
            case 'evil':
                return effect = evil
            case 'double':
                return effect = double
            default:
                return effect
        }
    }
    
    if (front === true) {
        const effect = getEffect(card)
        return (
            <div className='card-container'>
                <img src={`${effect}`} alt={effect} />
            </div>
        )
    } else {
        return (
            <div className='card-container'>
                <img src={`${back}`} alt={back} />
            </div>
        )
    }
}

Card.propTypes = {
    card: PropTypes.string,
    front: PropTypes.bool
}

export default Card;