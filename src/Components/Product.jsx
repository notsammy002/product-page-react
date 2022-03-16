import React from 'react';
import styles from '../CSS/Product.module.css'


export const Product = ({ item }) => {
    return (
        <div>
            <div className={styles.prod_container}>
                <img src={item.image} placeholder="product image" />
                <p className={styles.name}>{item.name}</p>
                <p className={styles.brand}>{item.brand}</p>
                <p className={styles.price}>Price : {item.price}</p>
                <p>suitabe for : {item.category}</p>
                {/* <Link to={`/${item.id}`}>Product {item.id}</Link> */}
            </div>
        </div>
    )
}
