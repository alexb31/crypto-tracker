import React from 'react'
import Coins from '../Coins'

const CoinList = ({filteredCoins}) => {
    return (
        <div>
            {filteredCoins.map(coin => {
                return (
                <Coins 
                    key={coin.id}
                    name={coin.name}
                    id={coin.id}
                    symbol={coin.symbol}
                    image={coin.image}
                    price={coin.current_price}
                    marketcap={coin.market_cap}
                    volume={coin.total_volume}
                    priceChange={coin.price_change_percentage_24h}
                />
                );
            })}
        </div>
    )
}

export default CoinList
