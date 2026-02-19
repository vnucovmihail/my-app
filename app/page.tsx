"use client";
import dynamic from 'next/dynamic';
import MyMediaControlCard from './components/MyCard';

const GoodAccordionFunc = dynamic(() => import('./components/Accordion'), { ssr: false });
export default function Home() {
  return (
    <>
      <GoodAccordionFunc/>
      <MyMediaControlCard/>
    </>
  )
}