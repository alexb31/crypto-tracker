import React from 'react'
import styles from './Search.module.css'

const searchBar = ({...rest}) => {
    return (
        <div className={styles.wrap}>
            <input className={styles.searchTerm} {...rest}/>
        </div>
    )
}

export default searchBar
