interface NewFactProps {
    AddFact: () => void
}

export default function NewItem({ AddFact }: NewFactProps) {

    return (
        <>
            <button onClick={AddFact}>
                Adicionar fato
            </button>
        </>
    )

}