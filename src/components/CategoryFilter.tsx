import { CATEGORIES } from "../constants";

interface CategoryFilterProps {
    currentCategory: string;
    onSelectCategory: (category: string) => void
}



export default function CategoryFilter({
    currentCategory,
    onSelectCategory
}: CategoryFilterProps) {
    return(
        <>
            <aside className="w-62.5 md-4">
                <ul className="flex flex-col gap-4">
                    <li>
                        <button
                            onClick={() => onSelectCategory('all')}
                            disabled={currentCategory === 'all'}
                            className="w-full bg-[linear-gradient(135deg,#3b82f6,#ef4444,#16a34a,#eab308)] rounded-full uppercase text-[17px] pt-3 pb-3.25 h-11.5 mb-4 btn-h"
                        >
                        todas
                        </button>
                    </li>
                    {CATEGORIES.map(category => (
                        <li key={category.value}>
                            <button
                                onClick={() => onSelectCategory(category.value)}
                                disabled={currentCategory === category.value}
                                className={`${category.color} w-full rounded-full uppercase text-[17px] pt-3 pb-3.25 h-11.5 btn-h`}
                            >{category.label}</button>
                        </li>
                    ) ) }
                </ul>
            </aside>
        </>
    )
    
}