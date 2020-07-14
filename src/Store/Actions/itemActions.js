import imgs from './../../Data/imgs.json'

export const initialItems = () => {
  const ROOT = 'https://applicant-dev.misfitsmarket.com/api/test/v1'

  return (dispatch, getState) => {


    const fetchItems = async () => {
      const res = await fetch(ROOT)
      return await res.json()
    }

    fetchItems()
      .then(res => {
        let items = res.data.items
        for (let i = 0; i < items.length; i++) {
          items[i].imgPath = imgs[i]
          items[i].justAdded = false
        }
        const shoppingCart = {}
        for (let i = 0; i < items.length; i++) {
          shoppingCart[items[i].id] = 0
        }
        dispatch({ type: 'INITIAL_ITEMS', items: res.data.items, shoppingCart })
      })
      .catch(error => console.log('Error: ', error))
  }
}

export const incrementQuantity = id => {
  return {
    type: 'INCREMENT_QUANTITY',
    id
  }
}

export const decrementQuantity = id => {
  return {
    type: 'DECREMENT_QUANTITY',
    id
  }
}