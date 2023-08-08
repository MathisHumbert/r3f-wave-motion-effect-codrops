import React, { useEffect } from 'react';

import articles from '../data/articles';
import Article from './Article';

export default function Main() {
  return (
    <main className='content'>
      <div className='frame'>
        <div className='frame__links'>
          <a
            href='https://github.com/MathisHumbert/r3f-wave-motion-effect-codrops'
            target='_blank'
          >
            Github
          </a>
          <a
            href='https://r3f-infinite-circular-gallery-codrops.vercel.app/'
            target='_blank'
          >
            Previous Demo
          </a>
          <a
            href='https://tympanus.net/codrops/2020/03/17/create-a-wave-motion-effect-on-an-image-with-three-js/'
            target='_blank'
          >
            Article
          </a>
        </div>
        <div className='frame__demo'>Wave Motion Effect</div>
      </div>
      {articles.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          pretitle={article.pretitle}
          description={article.description}
          img={article.img}
          aspect={article.aspect}
          index={index + 1}
        />
      ))}
    </main>
  );
}
