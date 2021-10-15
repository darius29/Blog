import React from 'react'
import { saveCard } from '../services/cardService'


export function CardForm({ onSave, onCancel, card}: any) {
  const id = card && card.id ? card.id : undefined

  const [term, setTerm] = React.useState(id ? card.term : '')
  const [definition, setDef] = React.useState(id ? card.definition : '')
  const [data, setData] = React.useState(id ? card.data : '')
  const [img, setImg] = React.useState(id ? card.img : '')

  function handleSubmit(event:any) {
    event.preventDefault()
    saveCard({ term, definition, data, id }).then(card => {
      clearForm()
      onSave && typeof onSave === 'function' && onSave(card)
    })
  }

  function clearForm() {
    setTerm('')
    setDef('')
    setData('')
    setImg('')
    onCancel && typeof onCancel === 'function' && onCancel()
  }

  function handleTermChange(event:any) {
    const { value } = event.target
    setTerm(value)
    console.log(value);
  }

  function handleDefChange(event:any) {
    const { value } = event.target
    setDef(value)
    console.log(value);
  }

  function handleDataChange(event:any) {
    const { value } = event.target
    setData(value)
    console.log(value);
  }
  function handleImgChange(event:any) {
    const { value } = event.target
    setImg(value)
    console.log(value);
  }

 

  // function validateSentence(term:any) {
  //   return ((/[^A-Za-z0-9 .'?!,@$#-_]/).test(term));
  //   }

  
  return (
    <div className="tile">
      <h4>{id ? 'Update Card' : 'Add Card'}</h4>
      <form onReset={clearForm} onSubmit={handleSubmit}>

      <div className="img">
          <label  htmlFor={`card_data_${id ? id : 'new'}`}>
            Img
          </label>
          <input
            id={`card_data_${id ? id : 'new'}`}
            value={img}
            onChange={handleImgChange}
            required
          />
        </div>
        <div>
          <label htmlFor={`card_term_${id ? id : 'new'}`}>Title</label>
          <input
            id={`card_term_${id ? id : 'new'}`}
            value={term}
            onChange={handleTermChange}
            pattern="(?![aA]\d{6}$).*"
            //pattern="[A-Za-z]{3}"
           // pattern= "new RegExp('([a-zA-Z]{3,30}\\s*)+')"
          //  rules={[
          //   {
          //     type: "regexp",
          //     pattern: new RegExp("([a-zA-Z]{3,30}\\s*)+"),
          //     message: "Format is wrong"
          //   },
          //   {
          //     required: true,
          //     message: "Enter you title"
          //   }
          // ]}
          />
        </div>
        <div>
          <label htmlFor={`card_data_${id ? id : 'new'}`}>
            Date
          </label>
          <input
            id={`card_data_${id ? id : 'new'}`}
            value={data}
            onChange={handleDataChange}
            required
          />
        </div>
        <div>
          <label htmlFor={`card_definition_${id ? id : 'new'}`}>
            Content
          </label>
          <input
            id={`card_definition_${id ? id : 'new'}`}
            value={definition}
            onChange={handleDefChange}
            
          />
        </div>
       
        <div className="buttons">
          <button className="primary" type="submit">
            save
          </button>
          <button className="secondary" type="reset">
            cancel
          </button>
        </div>
      </form>
    </div>
  )
}
