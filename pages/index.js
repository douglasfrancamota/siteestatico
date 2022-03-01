import Link from "next/link"
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import RecipeCard from "../components/RecipeCard/RecipeCard";

export default function Index(){
  return(
    <div>
           
    <Header title= 'Viajando pelo Mundo'/>

    <main>
      <RecipeCard 
        name= "Irlanda"
        category= "Internacional"
        picture= 'https://www.asseguresuaviagem.com/images/Viagem-para-Irlanda.jpg'
        link= "/Viagens/Internacionais/Irlanda"
      />
       <RecipeCard 
        name= "Estados Unidos"
        category= "Internacional"
        picture= 'https://dicasnovayork.com.br/wp-content/uploads/2017/03/hospedagem_header-1000x700.jpg'
        link= "/Viagens/Internacionais/Estados-Unidos"
      />  
       <RecipeCard 
        name= "França"
        category= "Internacional"
        picture= 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/aa/fc.jpg'
        link= "/Viagens/Internacionais/Franca"
      />
       <RecipeCard 
        name= "Portugal"
        category= "Internacional"
        picture= 'https://i0.wp.com/www.eurodicas.com.br/wp-content/uploads/2018/12/regioes-de-portugal.jpg?w=1360&ssl=1'
        link= "/Viagens/Internacionais/Franca"
      />
                   
              
        </main>

    <Footer />
      
      
    </div>
  )
}