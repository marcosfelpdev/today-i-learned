import type { Fact } from "../types";
import { CATEGORIES } from "../constants";

interface FactItemProps {
    fact: Fact
}

export default function FactItem({ fact }: FactItemProps) { 
    const category = CATEGORIES.find((category) => {
        return fact.category === category.value;
    })

    return (
        <>
            <li>
                <p>{fact.text}</p>
                <a href={fact.source} target="_blank" rel="noreferrer">(Fonte)</a>
                <span>{ category?.label}</span>
            </li>
        </>
    )
}