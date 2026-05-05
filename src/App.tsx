import type { Fact } from "./types";
import NewItem from "./NewItem";
// import type { Category } from "./types";


// console.log(fato);
// import { useState } from "react";

export default function App () {
  const facts: Fact[] = [{
    id: 1,
    text: 'A digital college tem o melhor curso de programação de Fortaleza.',
    source: 'https://meusounho.com',
    category: 'Tecnology',
    votes_interesting: 15,
    votes_mindblowing: 1,
    votes_false: 0,
    created_at: '2026-05-05'
  }, {
    id: 2,
    text: 'Neymar é acusado de tentativa de homicidio contra homem negro',
    source: 'htpps://g1.com',
    category: 'Esportes',
    votes_interesting: 0,
    votes_mindblowing: 0,
    votes_false: 535,
    created_at: '2026-05-04'
  }, {
    id: 3,
    text: 'Virginia foi para balada com Zé Felipe e houve troca de etimulos públicos',
    source: 'htpps://leodias.com',
    category: 'entretenimento',
    votes_interesting: 2,
    votes_mindblowing: 3,
    votes_false: 5,
    created_at: '2026-04-01'
  },]

  return (
    <>
      {facts.map(fact => <NewItem 
        key={fact.id} 
        fact={fact.text} 
        source={fact.source} 
        category={fact.category} 
        votes_interesting = {fact.votes_interesting} 
        votes_mindblowing={fact.votes_mindblowing} 
        votes_false={fact.votes_false} 
        created_at={fact.created_at}/>)}
    </>

  )
  
}