import React, { Component } from 'react'

import Card from './components/Card.jsx'
import Actions from './components/Actions.jsx'
import { deck } from './utils/Deck.js'

class App extends Component {

  constructor() {
    super();
    this.state = {
      cards: deck,
      drawn: [],
      front: false
    };
  }

  shuffle = (array) => {
    let currentIndex = array.length, temp, r
    while (0 !== currentIndex) {
      r = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      temp = array[currentIndex]
      array[currentIndex] = array[r]
      array[r] = temp
    }
    this.setState({ cards: array, drawn : [] })
    return array
  }

  drawCard = () => {
    let cards = this.state.cards
    const item = cards[Math.floor(Math.random()*cards.length)]
    const newCards = cards.filter(element => element.index !== item.index)
    this.setState({ cards: newCards })
    let drawn = this.state.drawn
    drawn.length < 85 && drawn.push(item)
    this.setState({ drawn: drawn })
  }

  flip = () => {
    this.setState({ front: !this.state.front })
  }

  render() {
    const cards = this.state.cards
    const drawn = this.state.drawn

    return (
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '40px auto 0px 180px', height: 282 }}>
          {cards && cards.map((card, index) => {
            return (
              <div className='animated slideInDown' key={index}>
                <Card card={card.card} front={this.state.front}/>
              </div>
            )
          })}
        </div> 
        <Actions shuffle={this.shuffle} drawCard={this.drawCard} flip={this.flip} deck={deck} />
        <div style={{ display: 'flex', justifyContent: 'center', margin: '40px auto 0 px 180px' }}>
          {drawn && drawn.map((card, index) => {
            return (
              <div className='animated slideInUp' key={index}>
                <Card card={card.card} front={true}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;