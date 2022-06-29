import Image from 'next/image'
import React from 'react'

export interface GameProps { image: string, link: string, gameName: string, gameType: string }

function GameItem(props: GameProps) {
  const { gameName, gameType, image, link} = props;

  return (
    <div className="featured-game-card position-relative">
      <a href={link}>
        <div className="blur-sharp">
          <Image
            className='thumbnail'
            src={image??'/asa.png'}
            width={205}
            height={270}
            alt=""
          />
        </div>
        <div className="cover position-absolute bottom-0 m-32">
          <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
            <div className="game-icon mx-auto">
              <Image src='/icon/console.svg' width={54} height={36} alt='console' />
            </div>
            <div>
              <p className="fw-semibold text-white text-xl m-0">
                {gameName}
              </p>
              <p className="fw-light text-white m-0">{gameType}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default GameItem