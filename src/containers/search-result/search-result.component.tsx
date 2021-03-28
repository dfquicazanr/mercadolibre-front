import './search-result.component.scss';
import {useQuery} from "utils/routing-utils";
import {useEffect, useState} from "react";
import {searchQuery} from "services/items.service";
import {ProductResult} from "components/product-result/product-result.component";

export const SearchResult = (props: any) => {
  const [resultText, setResultText] = useState('')
  const params = useQuery();
  let queryString = params.get('q') as string;
  const [items, setItems] = useState([]);

  const searchQueryString = async () => {
    searchQuery(queryString).then(result => setItems(result.items))
      .catch(() => setResultText('No se encontraron productos'));
    setItems((await searchQuery(queryString)).items);
  }

  useEffect(() => {
    searchQueryString();
  }, [queryString]);

  return (
    <div className={'search-result'}>
      {
        items.length !== 0
          ? items?.map((item, key) => ProductResult({item, key}))
          : (<p>{resultText}</p>)
      }
    </div>
  )
};