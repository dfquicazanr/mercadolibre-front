import './search-result.component.scss';
import {useQuery} from "utils/routing-utils";
import {useEffect, useState} from "react";
import {searchQuery} from "services/items.service";
import {ProductResult} from "components/product-result/product-result.component";

export const SearchResult = (props: any) => {
  const params = useQuery();
  const [items, setItems] = useState([]);
  let queryString = params.get('q') as string;

  useEffect(() => {
    searchQueryString();
  }, [queryString]);

  const searchQueryString = async () => {
    setItems((await searchQuery(queryString)).items);
  }


  return (
    <div className={'search-result'}>
      {items?.map((item, key) => ProductResult({item, key}))}
    </div>
  )
};