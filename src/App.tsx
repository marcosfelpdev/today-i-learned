import { useState, useRef, useEffect } from "react";
import type { Fact } from "./types";
import Header from "./components/Header.tsx";
import FactList from "./components/FactList";
// import NewItem from "./components/NewItem.tsx";
import CategoryFilter from "./components/CategoryFilter.tsx";
import NewFactForm from "./components/NewFactForm.tsx";

const INITIAL_FACTS: Fact[] = [{
  id: 1,
  text: 'React foi criado e liberado pelo facebook em 2013.',
  source: 'https://react.dev',
  category: 'technology',
  votes_interesting: 23,
  votes_mindblowing: 9,
  votes_false: 1,
  created_at: '2026-05-12T11:16:00-03:00'
}, {
  id: 2,
  text: 'O cérebro humano tem aproximadamente 86 bilhões de neurônios.',
  source: 'https://www.ncbi.nlm.nih.gov',
  category: 'science',
  votes_interesting: 23,
  votes_mindblowing: 9,
  votes_false: 1,
  created_at: '2026-04-12T11:16:00-03:00'
}, {
  id: 3,
  text: 'O Brasil é o maior produtor de café a mais de 150 anos.',
  source: 'https://www.embrapa.br',
  category: 'history',
  votes_interesting: 23,
  votes_mindblowing: 10298,
  votes_false: 1,
  created_at: '2026-03-12T11:16:00-03:00'
}]

export default function App(){
  const [facts, setFacts] = useState<Fact[]>(INITIAL_FACTS);
  const [currentCategory, setCurrentCategory] = useState<string>('all');
  const [showForm, setShowForm] = useState<boolean>(false);

  const displayedFacts = currentCategory === 'all'
    ? facts
    : facts.filter(fact => fact.category === currentCategory);

  function handleToggleForm() {
    setShowForm(show => !show)
  }

  function handleSelectCategory(category: string){
    setCurrentCategory(category)
  }

  const formInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if(showForm) formInputRef.current?.focus()
  },[showForm])

  return (
    <>
      <Header 
        showForm={showForm}
        onToggleForm={handleToggleForm}/>
      { showForm && <NewFactForm inputRef={formInputRef}/>}
      <main>
        <CategoryFilter
          currentCategory={currentCategory}
          onSelectCategory={handleSelectCategory}

        />
        <FactList facts={displayedFacts}/>
      </main>
    </>
  )
}