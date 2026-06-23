import type { Fact } from "../types";
import FactItem from "./FactItem";
import { styles } from "../classes";

interface FactListProps {
    facts: Fact[]
    isLoading: boolean
    error: string | null
    onVote: () => Promise<void>
}

export default function FactList({ facts, isLoading, error, onVote }: FactListProps) {
    if (isLoading){
        return <p>Carregando fatos...</p>
    }

    if(error){
        return <p>{error}</p>
    }

    if (facts.length === 0) {
        return <p>Ainda não há fatos para esa categoria! Crie o primeiro! 👌 </p>
    }

    return (
        <>
            <ul className={styles.lista}>
                {facts.map(fact=> <FactItem key={fact.id} fact={fact} onVote={onVote}/>)}
            </ul>
        </>
    )


}