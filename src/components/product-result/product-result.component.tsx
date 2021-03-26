import './product-result.component.scss';
import {Item} from "models/item";
import {formatPrice} from "utils/text-utils";
import {useHistory} from "react-router-dom";
import React from 'react';

export const ProductResult = (props: { item: Item, key: number}) => {
  const { item, key } = props;
  let history = useHistory();

  const redirectToProduct = () => {
    console.log(item.id)
    history.push(`items/${item.id}`);
  }

  return(
    <div onClick={redirectToProduct} key={key}>
      <div className={'product-result'}>
        <img className={'product-result__image'} src={item.picture}/>
        <div className={'product-result__info'}>
          <h2 className={'product-result__info__price'}>{item.price.currency} {formatPrice(item.price.amount)}</h2>
          <h3 className={'product-result__info__title'}>{item.title}</h3>
        </div>
      </div>
      <hr className={'product-result__separator'}/>
    </div>
  );
};