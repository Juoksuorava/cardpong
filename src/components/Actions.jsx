import React from 'react'
import PropTypes from 'prop-types'

const Actions = (props) => {
    
    return (
        <div style={{ margin: '40px auto', textAlign: 'center' }}>
            <button onClick={() => props.shuffle(props.deck)}> Shuffle </button>
            <button onClick={() => props.drawCard()}> Draw card </button>
            <button onClick={() => props.flip()}> Flip </button>
        </div>
    )

}

Actions.propTypes = {
    shuffle: PropTypes.func,
    drawCard: PropTypes.func,
    flip: PropTypes.func,
    deckArray: PropTypes.array
  };

export default Actions