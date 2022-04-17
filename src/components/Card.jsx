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
import amogus from '../style/images/amogus.png'
import backhand from '../style/images/backhand.png'
import backstage from '../style/images/backstage.png'
import dealer from '../style/images/dealer.png'
import doit from '../style/images/doit.png'
import heaven from '../style/images/heaven.png'
import hell from '../style/images/hell.png'
import pesapallo from '../style/images/pesapallo.png'
import pls from '../style/images/pls.png'
import pomppu from '../style/images/pomppu.png'
import raisio from '../style/images/raisio.png'
import trick from '../style/images/trick.png'
import valot0 from '../style/images/valot0.png'
import valot1 from '../style/images/valot1.png'
import rightylefty from '../style/images/rightylefty.png'

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
            case 'rightylefty':
                return effect = rightylefty
            case 'valot1':
                return effect = valot1
            case 'valot0':
                return effect = valot0
            case 'trick':
                return effect = trick
            case 'raisio':
                return effect = raisio
            case 'pomppu':
                return effect = pomppu
            case 'pls':
                return effect = pls
            case 'pesapallo':
                return effect = pesapallo
            case 'hell':
                return effect = hell
            case 'heaven':
                return effect = heaven
            case 'doit':
                return effect = doit
            case 'backstage':
                return effect = backstage
            case 'amogus':
                return effect = amogus
            case 'backhand':
                return effect = backhand
            case 'dealer':
                return effect = dealer
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