import React from 'react'
import { destroyCard } from '../services/cardService'
import { CardForm } from './CardForm'

import {
  CardWrapper,
  CardImage,
  //CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
 // LinkText
} from "../Card/CardStyles";

import img1 from "../../Assets/images/img1.jpg";

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
      <CardWrapper >
      <h4 className="cardTerm">{isFront ? <CardTextTitle>{term}</CardTextTitle> : <CardTextBody> {definition} </CardTextBody>}</h4>
      <h4 className="cardTerm">{isFront ? <CardTextDate>{data} days ago</CardTextDate> : <CardImage background={img1} />}</h4>
      </CardWrapper>
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
