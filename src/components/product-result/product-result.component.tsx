import './product-result.component.scss';
import freeShippingIcon from 'assets/ic_shipping.png'
import {Item} from "models/item";
import {formatPrice} from "utils/text-utils";
import {useHistory} from "react-router-dom";
import React from 'react';

export const ProductResult = (props: { item: Item, key: number}) => {
  const { item, key } = props;
  let history = useHistory();

  const redirectToProduct = () => {
    history.push(`/items/${item.id}`);
  }

  return(
    <div onClick={redirectToProduct} key={key}>
      <div className={'product-result'}>
        <img className={'product-result__image'} src={item.picture} alt={item.title}/>
        <div className={'product-result__info'}>
          <h2 className={'product-result__info__price'}>{item.price.currency} {formatPrice(item.price.amount)}{item.free_shipping ? (<img className={'product-result__info__price__free-shipping'} src={freeShippingIcon} alt={'free-shipping'}/>) : null}</h2>
          <h3 className={'product-result__info__title'}>{item.title}</h3>
        </div>
        <h4 className={'product-result__location'}>Capital Federal</h4>
      </div>
      <hr className={'product-result__separator'}/>
    </div>
  );
};