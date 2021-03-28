import './search-box.component.scss';
import searchIcon from 'assets/search-solid.svg';

import { useHistory } from "react-router-dom";
import { useState } from "react";

export const SearchBox = (props: any) => {
  const [query, setQuery] = useState('');
  let history = useHistory();

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      searchRedirect();
    }
  }

  const searchRedirect = () => {
    history.push(`/items?q=${query}`);
  }

  return (
    <header className={'search-box'}>
      <img className={'search-box__icon'} src={'https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.3/mercadolibre/logo__small.png'} alt={'Logo Mercadolibre'}/>
      <input onKeyDown={handleKeyDown} onChange={event => setQuery(event.target.value)} className={'search-box__input'} type={'text'} placeholder={'Nunca dejes de buscar'}/>
      <button onClick={searchRedirect} className={'search-box__button'}><img src={searchIcon} alt={'search-icon'}/></button>
    </header>
  );
};
