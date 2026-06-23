import type { Fact } from "../types";
import { CATEGORIES } from "../constants";
import { styles } from "../classes";
import { useState } from "react";
import { supabase } from "../supabaseClient";

interface FactItemProps {
    fact: Fact
    onVote: () => Promise<void>
}

export default function FactItem({ fact }: FactItemProps) { 
    const [isVoting, setIsVoting] = useState<boolean>(false)
    const [voteError, setVoteError] = useState<string | null>(null)

    async function handleVote(
        column: 'votes_interesting' | 'votes_mindblowing' | 'votes_false' 

    ) {
        setIsVoting(true)
        setVoteError(null)

        try {
            const { error } = await supabase
                .from('facts')
                .update({[column]: fact[column] + 1})
                .eq('id', fact.id)

            if(error) return setVoteError ('Não foi possível registrar voto. Tente Novamente mais tarde!')
        } finally {
            setIsVoting(false)

        }

    }
    const category = CATEGORIES.find((category) => {return fact.category === category.value;})

    return (
        <>
            <li className={styles.itemLista}>
                <div className={styles.divItem}>
                    <p>{fact.text}</p>
                    <a href={fact.source} 
                        target="_blank" 
                        rel="noreferrer" 
                        className={styles.linkItemLista}>(Fonte)</a>
                </div>
                <span className={styles.categoryTag}>{ category?.label}</span>
                <div className={styles.votesList}>
                    <button onClick={() => handleVote("votes_interesting")} disabled={isVoting} className={styles.votesBtns}>👍{fact.votes_interesting}</button>
                    <button onClick={() => handleVote("votes_mindblowing")} disabled={isVoting} className={styles.votesBtns}>🤯{fact.votes_mindblowing}</button>
                    <button onClick={() => handleVote("votes_false")} disabled={isVoting} className={styles.votesBtns}>💩{fact.votes_false}</button>
                </div>
            </li>
        </>
    )
}