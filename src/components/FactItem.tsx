import type { Fact } from "../types";
import { CATEGORIES } from "../constants";
import { styles } from "../classes";

interface FactItemProps {
    fact: Fact
}

export default function FactItem({ fact }: FactItemProps) { 
    const category = CATEGORIES.find((category) => {
        return fact.category === category.value;
    })

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
                <span>{ category?.label}</span>
            </li>
        </>
    )
}