interface HeaderProps {
    showForm: boolean;
    onToggleForm: () => void;
}

export default function Header({ showForm, onToggleForm }:HeaderProps) {

    return (
        <>
            <header className="mb-10 flex justify-between">
                <div className="flex items-center gap-4">    
                    <img 
                        src="./logo.png"
                        className="w-17"
                    />
                    <h1 className="text-5xl uppercase mt-1.5">Hoje eu aprendi</h1>
                </div>
                <button 
                    onClick={onToggleForm}
                    className="bg-[linear-gradient(135deg,#3b82f6,#ef4444,#16a34a,#eab308)] text-xl uppercase rounded-full h-14.25 pt-4 px-8 pb-4.25 btn-h"
                    >
                    { showForm ? 'Fechar' : 'Novo fato'}
                </button>
            </header>
        </>
    )

}