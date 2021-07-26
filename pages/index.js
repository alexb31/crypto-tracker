import { useState } from 'react'
import Layout from '../components/Layout'
import CoinList from '../components/CoinList'
import SearchBar from '../components/SearchBar/index'

export default function Home({filteredCoins}) {

  const [search, setSearch] = useState('');

  const allCoins = filteredCoins.filter(coin => {
    return (
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    )
  });

  const handleChange = e => {
    e.preventDefault();
    
    setSearch(e.target.value.toLowerCase())
  }
  return (
    <Layout title='crypto-tracker'>
      <div className="coin_app">
        <SearchBar type="text" placeholder="Search" onChange={handleChange}/>
        <CoinList filteredCoins={allCoins}/>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false")


  const filteredCoins = await res.json();
  
  // await new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(filteredCoins)
  //   }, 2000)
  // })

  return {
    props: {
      filteredCoins
    }
  }
}