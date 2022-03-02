import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

export default function Pedaco(props){
    return(
        <div>
             <Header title={props.name} />
            <main>
                <article className="recipe-body">
                    <h1 className="Recipe-body-name">{props.titulo1}</h1>
                        <img className="recipe-body-picture" alt={props.name} src= {props.picture} />    
                </article>

            </main>



        <Footer />




        </div>



    )

}