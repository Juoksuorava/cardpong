import React, { Component } from 'react'

import Card from './components/Card.jsx'
import Actions from './components/Actions.jsx'
import { deck } from './utils/Deck.js'

import './style/app.scss';

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
    drawn.length < 4 && drawn.push(item)
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
        <div style={{ display: 'flex', justifyContent: 'center', margin: '40px auto 0 px 180px', height: 282}}>
          {drawn && drawn.map((card, index) => {
            return (
              <div className='animated slideInUp' key={index}>
                <Card card={card.card} front={true}/>
              </div>
            )
          })}
        </div>
        <div className='rules-container'>
          <h1 className='rules-title'> Säännöt </h1>
          <ul className='rules-list'>
            <li> <strong> Back to Basics </strong> - Molemmat pelaajat heittävät normaaliin tapaan, ilman mitään erikoisuuksia. </li>
            <li> <strong> Uno Skip </strong> - Vain yksi (1) pelaajista heittää pallon, ja toinen pelaajista skippaa heittovuoron. </li>
            <li> <strong> Uno Skip Ultra </strong> - Molemmat pelaajat skippaavat heittovuoron. </li>
            <li> <strong> Righty Tighty, Lefty Loosey </strong> - Toinen pelaajista heittää vasemmalla kädellä, ja toinen pelaajista heittää oikealla kädellä. </li>
            <li> <strong> Miten kädet toimii? </strong> - Kumpikin pelaajista heittää pallon “väärällä kädellä”: oikeakätiset vasemmalla, vasenkätiset oikealla. </li>
            <li> <strong> pew pew pew </strong> - Kumpikin pelaaja heittää “pistol”-otteella: pallo asetetaan peukalon ja etusormen väliseen kulmaan, ja pallo “ammutaan” painamalla peukalolla palloa vasten etusormea. </li>
            <li> <strong> Amogus </strong> - Kumpikin pelaaja heittää pallon toinen käsi taskussa ja toinen silmä kiinni. </li>
            <li> <strong> Explosion </strong> - Jos molemmat pelaajat osuvat samaan kuppiin, poistetaan kyseisen kupin lisäksi myös jokainen sitä koskettava kuppi. <br/> <italic> WSOBP-poikkeus: jos ensimmäinen heittäjä osuu kuppiin, sitä ei poisteta välittömästi. </italic> </li>
            <li> <strong> Miinakenttä </strong> - Vastustajatiimi valitsee hiljaisesti yhden kupeista "miinaksi", ja kirjoittavat tiedon ylös esim. paperille. Jos heittävä tiimi osuu miinaan, kyseinen kuppi jää pöytään ja heittävä tiimi poistaa yhden kupeistaan </li>
            <li> <strong> Pompun kautta </strong> - Kumpikin pelaaja heittää pompun kautta. <br/> <italic> WSOBP-poikkeus: heittoja ei saa torjua ja mikäli pallo osuu kuppiin, poistetaan vain yksi kuppi. </italic> </li>
            <li> <strong> Trick Shot </strong> - Kumpikin pelaaja heittää vapaavalintaisen “trick shotin”, temppuheiton. </li>
            <li> <strong> Double Trouble </strong> - Kumpikin pelaaja heittää kaksi kertaa. </li>
            <li> <strong> Backhand </strong> - Kumpikin pelaaja heittää pallon kämmenselkä edellä. </li>
            <li> <strong> Raisionkaari </strong> - Kumpikin pelaaja heittää pallon yksi polvi maassa. </li>
            <li> <strong> Pesä pong </strong> - Toinen pelaajista heittää pallon lukkarin tapaan ilmaan, ja toinen pelaajista lyö sen kädellään/käsivarrellaan. Rooleja vaihdetaan tiimin toista heittoa varten. </li>
            <li> <strong> Yrittäkää edes </strong> - os vastustajat ovat heittäneet enemmän kuppeja tähän mennessä, saatte kolmannen heittoyrityksen </li>
            <li> <strong> Valot pois </strong> - Kumpikin pelaaja heittää pallon silmät kiinni. </li>
            <li> <strong> Valot päälle </strong> - Kumpikin pelaaja heittää pallon räpäyttämättä silmiään. </li>
            <li> <strong> Olkaa hei inhimillisiä sit </strong> - astustajatiimi valitsee kortin kääntäneen tiimin heittotyylin (siis esim. pompun kautta, vasemmalla kädellä). </li>
            <li> <strong> Sä pystyt siihen!! </strong> - Tiimin pelaajat kehuvat ja tsemppaavat toisiaan heittovuoron ajan mahdollisimman vuolaasti heittovuoron ajan. </li>
            <li> <strong> Backstage </strong> - Tiimi laittaa kappaleen “Rebel Yell” (esittäjä Billy Idol) soimaan niin kovaa kuin mahdollista heittovuoron ajaksi. </li>
            <li> <strong> Lucky Reformation </strong> - Kortin nostanut tiimi valitsee vastustajan kupeille haluamansa muodostelman. </li>
            <li> <strong> Evil Reformation </strong> - Vastustajatiimi valitsee kortin kääntäneen tiimin kupeille uuden, haluamansa muodostelman. </li>
            <li> <strong> Taivaan lahja </strong> - Kortin nostanut tiimi poistaa yhden vastustajan kupeista. Jos kuppeja on jäljellä vain yksi, kortilla ei ole vaikutusta. </li>
            <li> <strong> Antitaivaan antilahja </strong> - Kortin nostanut tiimi lisää yhden jo heitetyn vastustajan kupin takaisin pöytään. Jos kuppeja on jäljellä täydet kymmenen, kortilla ei ole vaikutusta. </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;