import { useState, useRef, useEffect } from "react";
import type { Fact } from "./types";
import Header from "./components/Header.tsx";
import FactList from "./components/FactList";
// import NewItem from "./components/NewItem.tsx";
import CategoryFilter from "./components/CategoryFilter.tsx";
import NewFactForm from "./components/NewFactForm.tsx";
import { styles } from "./classes.ts";
import { supabase } from "./supabaseClient";


export default function App(){
  const [facts, setFacts] = useState<Fact[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>('all');
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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

  async function loadFacts(){
    setisLoading(true)

    let query = supabase
      .from('facts')
      .select('*')
      .order('created_at', {ascending: false})

    if(currentCategory !== 'all'){
      query = query.eq('category', currentCategory)
    }

    const { data, error } = await query;

    if(error) {
      setError('Não foi possível carregar os fatos. Tente novamente.')
      setisLoading(false)
      return
    }

    setFacts(data as Fact[])
    setisLoading(false)

  }

  useEffect(()=>{
    loadFacts()
  }, [currentCategory])




  return (
    <>
      <Header 
        showForm={showForm}
        onToggleForm={handleToggleForm}/>
      { showForm && (
        <NewFactForm 
          inputRef={formInputRef}
          onAddFact={loadFacts}
        />

      )}
      <main className={styles.main}>
        <CategoryFilter
          currentCategory={currentCategory}
          onSelectCategory={handleSelectCategory}

        />
        <FactList 
          facts={facts}
          isLoading={isLoading}
          error={error}
          onVote={loadFacts}
        
        />
      </main>
    </>
  )
}