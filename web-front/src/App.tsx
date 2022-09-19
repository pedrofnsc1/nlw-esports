import { useState, useEffect } from 'react';
import { Input } from './components/Form/input';
import { GameController } from 'phosphor-react';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios';

import './styles/main.css';
import logoImg from './assets/logo.svg'


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios('http://localhost:3333/games')
    .then(response => {
      setGames(response.data);
    });
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
        <img src={logoImg} alt="" />

        <h1 className="text-6xl text-white font-black mt-20 font-['Turret_Road']">
          Seu <span className='bg-duo-fade bg-clip-text text-transparent'>duo</span> está aqui
        </h1>

        <div className="grid grid-cols-6 gap-6 mt-16">
          {games.map(game =>{
            console.log(game)
              return (
                <GameBanner
                  key={game.id}
                  bannerUrl={game.bannerUrl} 
                  title={game.title} 
                  adsCount={game._count.ads}
                />    
              )
            })
          }
        </ div>
        <CreateAdBanner/>
    </div>
  )
}

export default App