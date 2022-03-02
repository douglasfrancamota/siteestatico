import Header from '../Header/Header';
import Footer from '../Footer/Footer';


export default function Recebe(props){
    return(
        <div>
             <Header title={props.name} />
            <main>
                <article class="recipe-body">
                    <h1 className="Recipe-body-name">{props.name}</h1>
                        <img className="recipe-body-picture" alt={props.name} src= {props.picture} />    
                        <div>
                        <h2>Sobre o país <br/> </h2> 
                        <p> A Irlanda[4] (em irlandês: Éire; [ˈeːɾʲə] (Sobre este somescutar 
                            (ajuda·info)) e em inglês: Ireland [ˈaɪərlənd], localmente: [ˈaːɹlənd] ou 
                            [ˈaɪɹlənd]), por vezes chamada (de maneira não oficial, para diferenciá-la 
                            da ilha de mesmo nome, que divide com a Irlanda do Norte) República da Irlanda 
                            (em irlandês: Poblacht na hÉireann e em inglês: Republic of Ireland) ou então 
                            Eire,[4] é um estado soberano da Europa que ocupa cerca de cinco sextos da ilha homônima.
                            </p>
                        <h2> Locais para visitar </h2>
                        <p>Clássica nas listas de cidades para visitar dos viajantes, não tem como Dublin ficar de fora 
                            de qualquer aventura irlandesa. Você tem a cervejaria original da Guinness, o Trinity College,a 
                            Spire of Dublin, o castelo de Dublin, só para apontar alguns pontos de interesse, sem mencionar
                                que a cidade inteira é repleta de história e caráter. Se você realmente quer sentir a vibe dessa 
                                animada cidade, a explore de noite; as ruas ganham vida logo que o sol se põe. Visite a área do 
                                Temple Bar (o Temple Bar é mais do que só um bar) para boas cervejas, uma galera internacional, 
                                e vá de bar em bar como jamais fez antes.
                            </p>
                            
                        </div>
                </article>

            </main>



        <Footer />


        </div>
    )
}