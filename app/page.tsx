"use client";
import dynamic from 'next/dynamic';
import MyMediaControlCard from './components/MyCard';
import Counter from './components/Counter';
import GuessNumberB from './components/GuessNumberB';


const GoodAccordionFunc = dynamic(() => import('./components/Accordion'), { ssr: false });
export default function Home() {
  return (
    <>
      <GoodAccordionFunc/>
      <MyMediaControlCard/>
      <Counter/>
      <GuessNumberB/>
    </>
  )
}