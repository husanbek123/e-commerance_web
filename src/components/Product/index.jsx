import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

function Product({title, desc, img, price, id}) {
  let navigate = useNavigate()
  return (
    <div className={styles.product}>
      <div className={styles.product_img}>
        <img src={`http://3.19.30.204/upload/${img}`} alt="" />
      </div>
      <div>
        <h4>{title}</h4>
        <h6>Price: {price}$</h6>
        <p>{desc?.slice(0, 100) + ".."}</p>
        <div className={styles.btns}>
          <button>Buy</button>
          <Button type='primary' onClick={() => navigate(`/products/${id}`)}>More</Button>
        </div>
      </div>
    </div>
  )
}

export default Product