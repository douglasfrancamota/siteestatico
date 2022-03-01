import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Index(){
  return(
    <div>
           
     <Header title= 'Viajando pelo Mundo'/>

      <main>
         <figure className='recipe-card'>
      <Link href="/Viagens/Internacionais/Irlanda">
            <a>
              <img className='recipe-picture' src='https://www.asseguresuaviagem.com/images/Viagem-para-Irlanda.jpg' />
            </a>
        </Link>
            <div className='recipe-category'>Internacionais</div>
                <figcaption className='recipe-name'>Irlanda</figcaption>
          </figure>
       
          <figure className='recipe-card'>
      <Link href="/Viagens/Internacionais/Irlanda">
            <a>
              <img className='recipe-picture' src='https://www.asseguresuaviagem.com/images/Viagem-para-Irlanda.jpg' />
            </a>
        </Link>
            <div className='recipe-category'>Internacionais</div>
                <figcaption className='recipe-name'>Irlanda</figcaption>
          </figure>

            <figure className='recipe-card'>
      <Link href="/Viagens/Internacionais/Irlanda">
            <a>
              <img className='recipe-picture' src='https://www.asseguresuaviagem.com/images/Viagem-para-Irlanda.jpg' />
            </a>
        </Link>
            <div className='recipe-category'>Internacionais</div>
                <figcaption className='recipe-name'>Irlanda</figcaption>
          </figure>         
              

          

      </main>

      <Footer />
      
      
    </div>
  )
}