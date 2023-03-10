import React from 'react'
import Category_Card from '../../components/category_card'
import useMyStore from '../../components/context/Store'
import { useGetData } from '../../hooks/useQueryHook'
import styles from './index.module.scss'


function Categories() {
  let {data: categories} = useGetData(["categories"], '/category')
  let {currentLang} = useMyStore((state) => state)

  return (
    <>
      <div className={styles.categories}>
      {
        categories?.data?.map(item => (
          <Category_Card id={item?.id} img={item?.photo?.path} title={item[`name_${currentLang}`]} />
        ))
      }
      </div>
    </>
  )
}

export default Categories