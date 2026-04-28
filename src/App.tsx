import type { Fact } from "./types";
import type { Category } from "./types";

const category: Category = {
  value: 'Es',
  label: '',
  color: '',
}

const fato: Fact = {
  id: 1,
  text: 'o céu é azul',
  source: 'minhacabeca.com',
  category: 'science',
  votes_interesting: 0,
  votes_mindblowing: 0,
  votes_false: 10,
  created_at: '2026-04-28'
}

console.log(fato);

export default function App () {
  return <h1>Olá!</h1>
}