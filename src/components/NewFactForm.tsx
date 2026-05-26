import type { RefObject } from "react"
import { useState } from "react"

interface NewFactFormProps {
    inputRef: RefObject<HTMLInputElement>
}


export default function NewFactForm ({ inputRef }: NewFactFormProps ) {
    const [text, setText] =useState<string>('')
    const [source, setSource] =useState<string>('')
    const [category, setCategory] =useState<string>('')

    const charRemaining = 200 - text.length

    function handleSubmit ( event: React.FormEvent<HTMLFormElement> ) {
        event.preventDefault()
        console.log({ text, source, category })
        
    }

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
                <input 
                    type="text"
                    placeholder="URL da fonte(https://...)"
                    value={source}
                    onChange={event => setSource(event.target.value)}
                />
                <select
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                >
                    <option value="">Selecione uma categoria</option>
                </select>
                <button type="submit">publicar</button>
            </form>
        </>
    )
}