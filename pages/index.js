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
        picture= 'https://http2.mlstatic.com/D_NQ_NP_2X_902589-MLB28012935253_082018-F.webp'
        link= "/Viagens/Internacionais/Irlanda"
      />
       <RecipeCard 
        name= "Estados Unidos"
        category= "Internacional"
        picture= 'https://www.melhoresdestinos.com.br/wp-content/uploads/2019/07/passagens-aereas-passagens-estados-unidos-capa2019-02.jpg'
        link= "/Viagens/Internacionais/Estados-Unidos"
      />  
       <RecipeCard 
        name= "França"
        category= "Internacional"
        picture= 'https://www.dhresource.com/webp/m/0x0/f2/albu/g17/M01/46/08/rBVa4l-3c-GAdkrYAACR-gYBPVE537.jpg/90x150cm-france-flag-polyester-printed-european.jpg'
        link= "/Viagens/Internacionais/Franca"
      />
       <RecipeCard 
        name= "Portugal"
        category= "Internacional"
        picture= 'https://i0.wp.com/www.eurodicas.com.br/wp-content/uploads/2017/10/bandeira-de-portugal.jpg?w=1360&ssl=1'
        link= "/Viagens/Internacionais/Portugal"
      />
                   
              
        </main>

    <Footer />
      
      
    </div>
  )
}