import axios from "axios"
import { Author } from "models/author";
import { Item } from "models/item";

const apiUri = 'http://localhost:8080'

export const searchQuery = async (query: string) => {
  return (await axios.get(`${apiUri}/api/items`, {params: {q: query}})).data;
}

export const getItem = async (itemId: string): Promise<{ author: Author, item: Item }> => {
  return (await axios.get(`${apiUri}/api/items/${itemId}`)).data;
}