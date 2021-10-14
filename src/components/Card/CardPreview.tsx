import React from 'react'
import { destroyCard } from '../services/cardService'
import { CardForm } from './CardForm'

export function CardPreview({ onRemove, onUpdate, ...card }:any) {
  const [isEditMode, setIsEditMode] = React.useState(false)
  function handleToggleEdit() {
    setIsEditMode(current => !current)
  }
  return isEditMode ? (
    <CardForm onCancel={handleToggleEdit} onSave={onUpdate} card={card} />
  ) : (
    <View {...card} onEdit={handleToggleEdit} onRemove={onRemove} />
  )
}

function View({ id, term, definition, data, img, onEdit, onRemove }:any) {
  const [isFront, setIsFront] = React.useState(true)
  function handleCardFlip() {
    setIsFront(current => !current)
  }
  function handleDelete() {
    const confirm = window.confirm(`Are you sure you wish to delete "${term}"?`)
    if (confirm) {
      destroyCard(id).then(() => {
        onRemove && typeof onRemove === 'function' && onRemove(id)
      })
    }
  }
  return (
    <div className={`tile ${isFront ? '' : 'back'}`}>
      <h4 className="cardTerm">{isFront ? term : definition}</h4>
      <h4 className="cardTerm">{isFront ? data : img}</h4>
      <div className="cardButtons">
        <button type="button" className="tertiary" onClick={handleCardFlip}>
          {isFront ? 'show back' : 'show front'}
        </button>
        <div>
          <button type="button" className="secondary" onClick={onEdit}>
            edit
          </button>
          <button
            type="button"
            className="secondary danger"
            onClick={handleDelete}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  )
}
