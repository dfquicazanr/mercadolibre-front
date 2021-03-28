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
    searchQuery(queryString).then(result => {
        setItems(result.items);
        setResultText('');
      }
    ).catch(() => {
      setResultText('No se encontraron productos')
      setItems([])
    });
    setItems((await searchQuery(queryString)).items);
  }

  useEffect(() => {
    searchQueryString();
  }, [queryString]);

  return resultText !== ''
    ? (<p>{resultText}</p>)
    : (
      <div className={'search-result'}>
        { items?.map((item, key) => ProductResult({item, key}))}
      </div>
    )
};