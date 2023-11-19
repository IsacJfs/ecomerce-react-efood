export interface MenuItem {
  idMenu: number
  image: string
  name: string
  description: string
  price: number
  serves: number
}

export interface Restaurants {
  id: string
  image: string
  name: string
  rate: number
  infos: string[]
  description: string
  path: string
  categorie: string
  menu: MenuItem[]
}
