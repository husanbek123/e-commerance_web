import { Button } from 'antd'
import React from 'react'
import styles from './index.module.scss'

function Product({title, desc, img, price}) {
  return (
    <div className={styles.product}>
      <div className={styles.product_img}>
        <img src={`http://3.19.30.204/upload/${img}`} alt="" />
      </div>
      <div>
        <h4>{title}</h4>
        <h6>Price: {price}$</h6>
        <p>{desc}</p>
        <div>
          <button>Buy</button>
          <Button type='primary'>More</Button>
        </div>
      </div>
    </div>
  )
}

export default Product