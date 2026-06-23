import type { RefObject } from "react"
import { useState } from "react"
import { CATEGORIES } from "../constants"
import { factSchema } from "./schemas"
import { supabase } from "../supabaseClient"
import { styles } from "../classes"

interface NewFactFormProps {
    inputRef: RefObject<HTMLInputElement | null>
    onAddFact: () => Promise<void>
}


export default function NewFactForm ({ 
    inputRef, 
    onAddFact 
    }: NewFactFormProps ) {
    const [text, setText] =useState<string>('')
    const [source, setSource] =useState<string>('')
    const [category, setCategory] =useState<string>('')
    const [error, setError] = useState<Record<string, string[]>>({})
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [submitError, setSubmitError] = useState<string | null>(null);

    const charRemaining = 200 - text.length

    async function handleSubmit ( event: React.SubmitEvent<HTMLFormElement> ) {
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
        setSubmitError(null)
        setIsSubmitting(true)

        try {
            const {error} = await supabase
                .from('facts')
                .insert([{text, source, category}])
                .select()
            if (error) return setSubmitError('Não foi possível compartilhar o fato, tente novamente!')
            
            setText('')
            setSource('')
            setCategory('')

            await onAddFact()
        } finally {
            setIsSubmitting(false)

        }
        
    }
    // function handlerError (errorData) {
    //     return (error.errorData && error.source[0] && <span>{error.source[0]}</span>)
    // }


    const categoryOptions = CATEGORIES.map((category) => (
        <option key={category.value}value={category.value}>{category.label}</option>
    ))



    return (
        <>
            <form onSubmit={handleSubmit} className={styles.formulario}>
                <input 
                    ref={inputRef}
                    type="text"
                    placeholder="compartilhe algo que você aprendeu"
                    value={text}
                    onChange={event => setText(event.target.value)}
                    maxLength={200}
                    disabled={isSubmitting}
                    className={styles.selectlist}
                    />
                <span>{charRemaining}</span>
                {error.text && error.text[0] && <span>{error.text[0]}</span>}
                <input 
                    type="text"
                    placeholder="URL da fonte(https://...)"
                    value={source}
                    onChange={event => setSource(event.target.value)}
                    disabled={isSubmitting}
                    className={styles.selectlist}
                />
                {error.source && error.source[0] && <span>{error.source[0]}</span>}
                <select
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                    disabled={isSubmitting}
                    className={styles.selectlist}
                >
                    <option value="">Selecione uma categoria</option>
                    {categoryOptions}
                </select>
                {error.category && error.category[0] && <span>{error.category[0]}</span>}
                <button disabled={isSubmitting} className={styles.btnHeader} type="submit">
                    {isSubmitting ? 'enviando...' : 'compartilhar'} 
                </button>
            </form>
            {submitError && (
                <p className="text-red-500 text-[14px] mb-4">{submitError}</p>
            )}
        </>
    )
}