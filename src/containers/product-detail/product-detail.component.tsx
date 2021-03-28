import './product-detail.component.scss';
import { useParams } from "react-router-dom";
import {getItem} from "services/items.service";
import {useEffect, useState} from "react";
import {emptyItem} from "models/item";
import {formatDecimals, formatPrice, translateCondition} from "utils/text-utils";

export const ProductDetail = (props: any) => {
  const [resultText, setResultText] = useState('')
  const params = useParams<{id: string}>();

  const [item, setItem] = useState(emptyItem);
  useEffect(() => {
    if (!item.title) getItemData();
  })

  const getItemData = async () => {
    getItem(params.id).then(result => setItem(result.item))
      .catch(() => setResultText('Producto no encontrado'))
  }
  return item.title ? (
    <div className={'product-detail'}>
      <img className={'product-detail__image'} src={item.picture} alt={item.title}/>
      <div className={'product-detail__info'}>
        <h3 className={'product-detail__info__subtitle'}>{translateCondition(item.condition)} - {item.sold_quantity} vendidos</h3>
        <h1 className={'product-detail__info__title'}>{item.title}</h1>
        <h2 className={'product-detail__info__price'}>{item.price.currency} {formatPrice(item.price.amount)}<sup className={'product-detail__info__price__decimals'}>{formatDecimals(item.price.decimals)}</sup></h2>
        <button className={'product-detail__info__buy-button'}>Comprar</button>
      </div>
      <div className={'product-detail__description'}>
        <h4 className={'product-detail__description__title'}>Descripción del producto</h4>
        <p className={'product-detail__description__text'}>{item.description}</p>
      </div>
    </div>)
 : (<p>{resultText}</p>)


}