import './search-box.component.scss';
import searchIcon from 'assets/search-solid.svg';

export const SearchBox = (props: any) => {
  console.log(props);
  return (<div className={'search-box'}>
    <img className={'search-box__icon'} src={'https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.3/mercadolibre/logo__small.png'} alt={'Logo Mercadolibre'}/>
    <input className={'search-box__input'} type={'text'} placeholder={'Nunca dejes de buscar'}/>
    <button className={'search-box__button'}><img src={searchIcon} alt={'search-icon'}/></button>
  </div>);
};