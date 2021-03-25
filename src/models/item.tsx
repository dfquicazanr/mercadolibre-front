export interface Item {
  id: string,
  title: string,
  price: {
    currency: string,
    amount: number,
    decimals: number
  },
  picture: string,
  condition: string,
  free_shipping: boolean,
  sold_quantity: number,
  description: string
}

export const emptyItem: Item = {
  id: '',
  title: '',
  price: {
    currency: '',
    amount: 0,
    decimals: 0
  },
  picture: '',
  condition: '',
  free_shipping: false,
  sold_quantity: 0,
  description: ''
}