import type { RefObject } from "react"
import { useState } from "react"
import { CATEGORIES } from "../constants"
import { factSchema } from "./schemas"
import { success } from "zod"

interface NewFactFormProps {
    inputRef: RefObject<HTMLInputElement | null>
}


export default function NewFactForm ({ inputRef }: NewFactFormProps ) {
    const [text, setText] =useState<string>('')
    const [source, setSource] =useState<string>('')
    const [category, setCategory] =useState<string>('')
    const [error, setError] = useState<Record<string, string[]>>({})

    const charRemaining = 200 - text.length

    function handleSubmit ( event: React.SubmitEvent<HTMLFormElement> ) {
        event.preventDefault()

        const result = factSchema.safeParse({
            text,
            source,
            category
        })
        
        if (!result.success) {
            setError(result.error.flatten().fieldErrors)
            return;
        }

        setError({})
        console.log(result.data)
        
    }
    // function handlerError (errorData) {
    //     return (error.errorData && error.source[0] && <span>{error.source[0]}</span>)
    // }


    const categoryOptions = CATEGORIES.map((category) => (
        <option key={category.value}value={category.value}>{category.label}</option>
    ))



    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    ref={inputRef}
                    type="text"
                    placeholder="compartilhe algo que você aprendeu"
                    value={text}
                    onChange={event => setText(event.target.value)}
                    maxLength={200}
                    />
                <span>{charRemaining}</span>
                {error.text && error.text[0] && <span>{error.text[0]}</span>}
                <input 
                    type="text"
                    placeholder="URL da fonte(https://...)"
                    value={source}
                    onChange={event => setSource(event.target.value)}
                />
                {error.source && error.source[0] && <span>{error.source[0]}</span>}
                <select
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                >
                    <option value="">Selecione uma categoria</option>
                    {categoryOptions}
                </select>
                {error.category && error.category[0] && <span>{error.category[0]}</span>}
                <button type="submit">publicar</button>
            </form>
        </>
    )
}