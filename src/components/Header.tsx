interface HeaderProps {
    showForm: boolean;
    onToggleForm: () => void;
}

export default function Header({ showForm, onToggleForm }:HeaderProps) {

    return (
        <>
            <div>    
                <span>🧠</span>
                <h1>Hoje eu aprendi</h1>
            </div>
            <button onClick={onToggleForm}>
                { showForm ? 'Fechar' : 'Novo fato'}
            </button>
        </>
    )

}