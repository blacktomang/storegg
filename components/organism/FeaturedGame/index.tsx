import React from 'react'
import GameItem from '../../molecules/GameItem'

function FeaturedGame() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <GameItem gameName='Super Mechs' gameType='Mobile' image='/img/Thumbnail-1.png' link='/detail' />

          <GameItem gameName='Call of Duty: Modern' gameType='Mobile' image='/img/Thumbnail-2.png' link='/detail' />


          <GameItem gameName='Clash Of Clans' gameType='Mobile' image='/img/Thumbnail-4.png' link='/detail' />

          <GameItem gameName='Mobile Legends' gameType='Mobile' image='/img/Thumbnail-5.png' link='/detail' />
         
          <GameItem gameName='Valorant' gameType='Desktop' image='/img/Thumbnail-3.png' link='/detail' />
        </div>
      </div>
    </section>
  )
}

export default FeaturedGame