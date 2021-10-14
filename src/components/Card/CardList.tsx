import React from 'react'


import { CardForm } from './CardForm'
import { CardPreview } from './CardPreview'

export function CardList({ cards, onAdd, onRemove, onUpdate }:any) {
  return (
    <div>
      <h3>Your Cards</h3>
      
      <div className="gridContainer">
        <CardForm onSave={onAdd} />
        {cards.map((card: any)  => (
          <CardPreview
            key={card.id}
            {...card}
            onUpdate={onUpdate}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  )
}
