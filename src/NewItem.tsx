export default function NewItem({fact, source, category, votes_interesting, votes_mindblowing, votes_false, created_at}: 
    {
        fact: string, 
        source: string, 
        category: string, 
        votes_interesting: number, 
        votes_mindblowing: number, 
        votes_false: number,
        created_at: string
    }) {
        
            const card = {
                backgroundColor: 'red',
                fontSize: '1.3rem',
                color: 'white'
            }
        
        return(
        <>
            <div style={card}>
                <h1>{fact}</h1>
                <span>{category}</span><br />
                <span>{votes_interesting}</span>
                <span>{votes_mindblowing}</span>
                <span>{votes_false}</span><br />
                <span>{created_at}</span><br />
                <a href={source}>Fonte</a>
            </div>
        </>
    )
}