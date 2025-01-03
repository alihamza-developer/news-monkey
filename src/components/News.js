import React, { Component } from 'react'
import NewsItem from './NewsItem.js'

class News extends Component {

    articles = [
        {
            "source": {
                "id": null,
                "name": "Ambcrypto.com"
            },
            "author": "Lennox Gitonga",
            "title": "Bitcoin LTHs start selling to STHs: Warning sign for BTC? - AMBCrypto News",
            "description": "Long-term holders offloading their positions as short-term holders continue to accumulate BTC.",
            "url": "https://ambcrypto.com/bitcoin-lths-start-selling-to-sths-warning-sign-for-btc/",
            "urlToImage": "https://ambcrypto.com/wp-content/uploads/2025/01/Editors-3-1000x600.webp",
            "publishedAt": "2025-01-02T14:00:48Z",
            "content": "<ul><li>Long-term holders have started selling Bitcoin to short-term holders.</li><li>Social media sentiment and crypto market news remained quite positive.</li></ul>Bitcoin’s [BTC] historical data r… [+3001 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Yun Li",
            "title": "Market speculation picks up to start 2025 as crypto stocks jump, traders play 'Roaring Kitty' guessing game - CNBC",
            "description": "Many speculative pockets of the stock market surged in early trading Thursday, the first session of the new year.",
            "url": "https://www.cnbc.com/2025/01/02/market-speculation-picks-up-to-start-2025-as-crypto-stocks-jump.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/108081033-1735658883577-Trader-NYSE-Photo-MW-20241231-PRESS-1.jpg?v=1735659627&w=1920&h=1080",
            "publishedAt": "2025-01-02T13:52:02Z",
            "content": "Crypto trades jumping. Roaring Kitty boosting meme stocks. Broader market ripping on no apparent catalysts.\r\nAnimal spirits are on the run at the dawn of 2025 trading.\r\nMany speculative pockets of th… [+2468 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "MarketWatch",
            "title": "Jobless claims drop to 8-month low to end 2024. Low U.S. unemployment fuels economy. - MarketWatch",
            "description": null,
            "url": "https://www.marketwatch.com/story/jobless-claims-drop-to-8-month-low-to-end-2024-low-u-s-unemployment-fuels-economy-ba92fdb1",
            "urlToImage": null,
            "publishedAt": "2025-01-02T13:36:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Investor's Business Daily"
            },
            "author": "HARRISON MILLER, Investor's Business Daily",
            "title": "Bitcoin Set For 'Significant Bull Market,' Analyst Targets $225,000 - Investor's Business Daily",
            "description": "Bitcoin and cryptocurrency miners are set for a major bull market after notching a record year for 2024, H.C. Wainwright writes.",
            "url": "https://www.investors.com/news/bitcoin-price-2025-bull-market-cryptocurrency-225000-crypto-prices-bitcoin-miners/",
            "urlToImage": "https://www.investors.com/wp-content/uploads/2022/11/Stock-Bitcoin-RollrCoaster-adobe.jpg",
            "publishedAt": "2025-01-02T13:30:00Z",
            "content": "Bitcoin continues to trade under $100,000 to start the New Year after retreating from its record high near $108,300 in mid-December. Despite the recent pullback, analysts expect bitcoin to clear $200… [+2906 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Reuters",
            "title": "Morgan Stanley to leave sector climate coalition - Yahoo Finance",
            "description": "Investment bank Morgan Stanley said on Thursday it had decided to leave the Net-Zero Banking Alliance, becoming the latest U.S. lender to quit the sector's...",
            "url": "https://finance.yahoo.com/news/morgan-stanley-leave-sector-climate-130430083.html",
            "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/04928dc89ccd4a3e051dfbdaf6e361ac",
            "publishedAt": "2025-01-02T13:04:30Z",
            "content": "LONDON (Reuters) - Investment bank Morgan Stanley (MS) said on Thursday it had decided to leave the Net-Zero Banking Alliance, becoming the latest U.S. lender to quit the sector's top global climate … [+938 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Billy Bambrough",
            "title": "Donald Trump’s China Nightmare Could Have Already Come True - Forbes",
            "description": "Fears have emerged China could have beaten Donald Trump and the U.S. to creating a bitcoin reserve...",
            "url": "https://www.forbes.com/sites/digital-assets/2025/01/02/donald-trumps-china-nightmare-could-have-already-come-true/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6776771d46cdbf7c6ac06d49/0x0.jpg?format=jpg&crop=2674,1751,x653,y230,safe&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-01-02T12:15:55Z",
            "content": "Donald Trump, the U.S. president-elect, has embraced bitcoin and crypto over the last year, fueling huge bets on the cryptocurrency that some fear are \"delusional.\"\r\nUnlock over $3,000 in NFT, web3 a… [+3943 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Financial Times"
            },
            "author": "Gloria Li",
            "title": "China’s electric-vehicle leader BYD posts record sales in 2024 - Financial Times",
            "description": "Bigger companies beat targets as intense competition rocks world’s biggest car market",
            "url": "https://www.ft.com/content/b9797e5a-1346-4779-9125-686932c9d8ec",
            "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F6f823994-eb7f-4793-afe2-2e382c7e7873.jpg?source=next-barrier-page",
            "publishedAt": "2025-01-02T12:04:44Z",
            "content": "Try unlimited access\r\nOnly $1 for 4 weeks\r\nThen $75 per month.\r\nComplete digital access to quality FT journalism on any device. \r\nCancel anytime during your trial."
        },
        {
            "source": {
                "id": "the-hill",
                "name": "The Hill"
            },
            "author": "Jeff Arnold",
            "title": "Cruise ship stomach bug illnesses hit 12-year high: CDC - The Hill",
            "description": "Cruise ships saw the highest number of stomach bug illnesses since 2012 with 16 outbreaks that impacted 1,894 passengers.",
            "url": "https://thehill.com/policy/5061889-cruise-ship-stomach-illnesses-12-year-high-cdc/",
            "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/05/AP23150521355181-e1735819178950.jpg?w=1280",
            "publishedAt": "2025-01-02T12:04:00Z",
            "content": "Skip to content\r\n<ul><li>14 of 16 cruise ship outbreaks caused by norovirus</li><li>Five of the outbreaks took place in December</li><li>Norovirus prevalent in crowded, semi-enclosed spaces</li></ul>… [+2059 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Barron's"
            },
            "author": "Barron's",
            "title": "Sangamo Therapeutics Stock Plummets 56% After Pfizer Ends Partnership - Barron's",
            "description": null,
            "url": "https://www.barrons.com/articles/sangamo-stock-pfizer-hemophilia-treatment-57ab6da0",
            "urlToImage": null,
            "publishedAt": "2025-01-02T12:03:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Tesla.com"
            },
            "author": null,
            "title": "Tesla Fourth Quarter 2024 Production, Deliveries & Deployments - Tesla Investor Relations",
            "description": "AUSTIN, Texas, January 2, 2025 – In the fourth quarter, we produced approximately 459,000 vehicles, delivered over 495,000 vehicles and deployed 11.0 GWh of energy storage products – a record for both deliveries and deployments.",
            "url": "https://ir.tesla.com/press-release/tesla-fourth-quarter-2024-production-deliveries-and-deployments",
            "urlToImage": "https://digitalassets.tesla.com/tesla-contents/image/upload/h_628%2Cw_1200%2Cc_fit%2Cf_auto%2Cq_auto:best/Family_Social",
            "publishedAt": "2025-01-02T12:00:00Z",
            "content": "AUSTIN, Texas, January 2, 2025 In the fourth quarter, we produced approximately 459,000 vehicles, delivered over 495,000 vehicles and deployed 11.0 GWh of energy storage products a record for both de… [+2294 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Vince Golle",
            "title": "US Mortgage Rates Rise to Highest Since Early July, Suppressing Demand - Yahoo Finance",
            "description": "(Bloomberg) -- US mortgage rates climbed to an almost six-month high during the Christmas holiday week, suppressing applications for home purchases and...",
            "url": "https://finance.yahoo.com/news/us-mortgage-rates-rise-highest-120000062.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/f.BdZtNb22OyXFUf_RoNSQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/7abfbd67d56c87437bbdc1ecd5b0bd37",
            "publishedAt": "2025-01-02T12:00:00Z",
            "content": "(Bloomberg) -- US mortgage rates climbed to an almost six-month high during the Christmas holiday week, suppressing applications for home purchases and severely undercutting refinancing activity.\r\nMo… [+1488 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Barron's"
            },
            "author": "Barron's",
            "title": "Nvidia Stock Rises. Another Blowout Year Can Drive It Past Apple. - Barron's",
            "description": null,
            "url": "https://www.barrons.com/articles/nvidia-stock-price-apple-374ad416",
            "urlToImage": null,
            "publishedAt": "2025-01-02T11:44:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "MarketWatch",
            "title": "The stock market rarely scores hat tricks. This strategist fears what’s next. - MarketWatch",
            "description": null,
            "url": "https://www.marketwatch.com/story/the-stock-market-rarely-scores-hat-tricks-this-strategist-fears-whats-next-e56ab91f",
            "urlToImage": null,
            "publishedAt": "2025-01-02T11:40:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Teo Armus",
            "title": "The last days of a bizarre, glorious and outdated underground mall - The Washington Post",
            "description": "The Crystal City Underground was a vision of the future when it opened half a century ago. Now this Northern Virginia mall is about to become part of the past.",
            "url": "https://www.washingtonpost.com/dc-md-va/2025/01/02/arlington-underground-mall-crystal-city-closing/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/QTYMYS3F4PN3K7ZIZ4KKMJOJ6U_size-normalized.JPG&w=1440",
            "publishedAt": "2025-01-02T11:22:23Z",
            "content": "The Tex-Mex restaurant had closed months ago. The camera store down the hall was moving online. Even the puppet shop the one with the marionettes and googly-eyed Elmos in the window was boarding up.\r… [+7407 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Reuters",
            "title": "Morning Bid: The first trading day of the year, be wary - Yahoo Finance",
            "description": "Don't be fooled by what might prove to be a positive start to the new year, with stock futures pointing to a strong opening on Wall Street on Thursday.  For ...",
            "url": "https://finance.yahoo.com/news/morning-bid-first-trading-day-110352294.html",
            "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/0323572444c494f372ebc4d65dcc2130",
            "publishedAt": "2025-01-02T11:03:52Z",
            "content": "A look at the day ahead in U.S. and global markets from Dhara Ranasinghe.\r\nDon't be fooled by what might prove to be a positive start to the new year, with stock futures pointing to a strong opening … [+3005 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Melissa Houston",
            "title": "5 Financial Moves To Make Today To Become A Millionaire In 2025 - Forbes",
            "description": "With the right strategy and mindset, becoming a self-made millionaire is no longer a distant dream. It is possible, but it takes work and dedication.",
            "url": "https://www.forbes.com/sites/melissahouston/2025/01/02/5-financial-moves-to-make-today-to-become-a-millionaire-in-2025/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6775489394d92afe4800cab2/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-01-02T11:00:00Z",
            "content": "5 Financial Moves To Make Today To Become A Self-Made Millionaire In 2025\r\ngetty\r\nWith the right strategy and mindset, becoming a millionaire is no longer a distant dream. It is possible, but it take… [+2847 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Nerijus Adomaitis",
            "title": "In Norway, nearly all new cars sold in 2024 were fully electric - Reuters",
            "description": "Nine out of ten new cars sold in Norway last year were powered by battery only, registration data showed on Thursday, placing the country within reach of its target of only adding cars that are electric on the road by 2025.",
            "url": "https://www.reuters.com/business/autos-transportation/norway-nearly-all-new-cars-sold-2024-were-fully-electric-2025-01-02/",
            "urlToImage": "https://www.reuters.com/resizer/v2/C7SNU6P6DBLWPOM5WKSJCMWQGE.jpg?auth=328b7ae9c60876e86f98f6930f1fea74a97004454ca8f283d6a38557414c48fa&height=1005&width=1920&quality=80&smart=true",
            "publishedAt": "2025-01-02T10:46:25Z",
            "content": null
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "The Wall Street Journal",
            "title": "1,800 Miles to Satisfy a Craving: Meet the World’s Most Dedicated Food-Delivery Guy - The Wall Street Journal",
            "description": null,
            "url": "https://www.wsj.com/lifestyle/food-delivery-guatemala-parcels-2b92b12e",
            "urlToImage": null,
            "publishedAt": "2025-01-02T10:30:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "The Wall Street Journal",
            "title": "How Health Insurers Racked Up Billions in Extra Payments From Medicare Advantage - The Wall Street Journal",
            "description": null,
            "url": "https://www.wsj.com/health/healthcare/how-health-insurers-racked-up-billions-in-extra-payments-from-medicare-advantage-9d4c8a89",
            "urlToImage": null,
            "publishedAt": "2025-01-02T10:30:00Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Lilit Marcus",
            "title": "The world’s most punctual airlines for 2024 - CNN",
            "description": "Aviation analytics firm Cirium has compiled its annual ranking of the airlines and airports with the best on-time records.",
            "url": "https://www.cnn.com/travel/worlds-most-punctual-airlines-2024/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230104102052-03-most-punctual-airlines-2022-japan-airlines.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2025-01-02T10:07:00Z",
            "content": "It may not come as a surprise to anyone who has gone on vacation this year, but the United Nations has made it official: global tourism returned to pre-pandemic levels in 2024.\r\nAmid stowawaypassenge… [+4238 chars]"
        }
    ];
    // Constructor
    constructor() {
        super();

        // Defining All States here...
        this.state = {
            articles: this.articles,
            loading: false
        };

    }


    // Render Method
    render() {
        return (
            <div className='container my-3'>
                <h4 className="text-center">US. TOP HEADLINES</h4>
                <hr className='mt-2 mb-5' />

                <div className="row">
                    {this.state.articles.map((article, i) => {
                        if (!article.urlToImage) return true;
                        return <NewsItem key={i} details={article} />
                    })};
                </div>
            </div>
        )
    }
}





export default News;