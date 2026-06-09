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
            <li className="py-4 px-6 flex gap-6 justify-between bg-stone-700 rounded-2xl">
                <div className="flex gap-3">
                    <p>{fact.text}</p>
                    <a href={fact.source} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-stone-400 capitalize transition duration-300 hover:text-sky-600">(Fonte)</a>
                </div>
                <span>{ category?.label}</span>
            </li>
        </>
    )
}