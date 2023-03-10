import React from 'react'
import styles from './index.module.scss'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { Form, Input, Select } from 'antd'
import {useGetData} from '../../hooks/useQueryHook'
import useMyStore from '../context/Store'


function Navbar({lang}) {

  let {currentLang, setCurrentLang} = useMyStore((state) => state)
  let {data} = useGetData(["all_products"], '/products')
  let products = data?.data
  console.log(products);

  function Click(e) {
    console.log(e);
  }

  function SwitchLang(e) {
    console.log(e);
    setCurrentLang(e)
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link to={"/"}><img src={logo} alt="" /></Link>
      </div>
      <div className={styles.search}>
        <Form>
          <Select 
            showSearch
            onChange={Click}
            placeholder="Search"
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={products?.map(item => ({
              label: item[`name_${lang}`],
              value: item?.id
            }))}
          />
        </Form>
      </div>
      <div className={styles.icons}>
        <div className={styles.cart}><i class="fa-solid fa-cart-shopping"></i></div>
        <Select 
          defaultValue={currentLang}
          className={styles.lang}
          showSearch
          onChange={SwitchLang}
          filterOption={(input, option) => (option?.label ?? '').includes(input)}
          options={["Uz", "Ru", "En"]?.map(item => ({
            label: item,
            value: item
          }))}
        />
      </div>
    </div>
  )
}

export default Navbar