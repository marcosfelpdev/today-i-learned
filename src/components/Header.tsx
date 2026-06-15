import { styles } from "../classes";

interface HeaderProps {
    showForm: boolean;
    onToggleForm: () => void;
}

export default function Header({ showForm, onToggleForm }:HeaderProps) {

    return (
        <>
            <header className={styles.header}>
                <div className={styles.logoHeader}>    
                    <img 
                        src="./logo.png"
                        className={styles.imgHeader}
                    />
                    <h1 className={styles.titulo}>Hoje eu aprendi</h1>
                </div>
                <button 
                    onClick={onToggleForm}
                    className={styles.btnHeader}
                    >
                    { showForm ? 'Fechar' : 'Novo fato'}
                </button>
            </header>
        </>
    )

}