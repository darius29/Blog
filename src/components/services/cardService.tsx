export function getCards() {
    return fetch('/api/card').then(res => res.json())
  }
  
  export function destroyCard(id:any) {
    return fetch(`/api/card/${id}`, { method: 'DELETE' })
  }
  
  export function saveCard(card:any) {
    return card.id ? updateCard(card) : createCard(card)
  }
  
  export function createCard(card:any) {
    return fetch('/api/card', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(card),
    }).then(res => res.json())
  }
  
  function updateCard(card:any) {
    return fetch(`/api/card/${card.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(card)
    }).then(res => res.json())
  }
  