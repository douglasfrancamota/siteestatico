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
                        <p>{props.texto}</p>
                        <h2> Locais para visitar </h2>
                        <h3>{props.subtitulo} </h3>
                        <img className="recipe-body-picture" alt={props.name} src= {props.picture1} />
                        <p>{props.texto1}</p>

                        <h3>{props.subtitulo1} </h3>
                        <img className="recipe-body-picture" alt={props.name} src= {props.picture2} />
                        <p>{props.texto2}</p>
                        <h3>{props.subtitulo2} </h3>
                        <img className="recipe-body-picture" alt={props.name} src= {props.picture3} />
                        <p>{props.texto3}</p>
                        <h3>{props.subtitulo3} </h3>
                        <img className="recipe-body-picture" alt={props.name} src= {props.picture4} />
                        <p>{props.texto4}</p>
                        <h3>{props.subtitulo4} </h3>
                        <img className="recipe-body-picture" alt={props.name} src= {props.picture5} />
                        <p>{props.texto5}</p>




                        </div>
                </article>

            </main>



        <Footer />


        </div>
    )
}