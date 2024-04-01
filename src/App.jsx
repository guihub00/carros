import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main className="min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex jusify-center iems-center" >
        <section className="lg:flex max-w-[920px]">
          <div className="bg-orange p-12 max-lg:rounded-t-lg lg:rounded-l-lg">
            <img src={iconSedans} alt="" className="mb-7"/>
            <h2 className="font-shoulders uppercase mb-7 text-4xl font-bold text-offwhitebg">Sedans</h2>
            <p className="font-lexend mb-7 text-offwhite lg:mb-20">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
            <a href="https://www.webmotors.com.br/suvs" target="_blank" className="font-lexend bg-offwhitebg px-10 py-3 block w-fit rounded-3xl text-orange border-2 border-offwhitebg hover:bg-orange">Ver Mais</a>
          </div>

          <div className="bg-green p-12">
            <img src={iconSuvs} alt="" className="mb-7" />
            <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Suvs</h2>
            <p className="font-lexend mb-7 text-offwhite lg:mb-20">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
            <a href="https://www.webmotors.com.br/suvs" target="_blank" className="font-lexend bg-offwhitebg px-10 py-3 block w-fit rounded-3xl text-green border-2 border-offwhitebg hover:bg-green">Ver Mais</a>
          </div>

          <div className="bg-dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg">
            <img src={iconLuxury} alt="" className="mb-7" />
            <h2 className="font-shoulders mb-7 text-4xl font-bold text-offwhitebg">Luxury</h2>
            <p className="font-lexend mb-7 text-offwhite lg:mb-20">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
            <a href="https://www.webmotors.com.br/suvs" target="_blank" className="font-lexend bg-offwhitebg px-10 py-3 block 
            w-fit rounded-3xl text-dark-green border-2 border-offwhitebg hover:bg-dark-green">Ver Mais</a>
            
          </div>
          
        </section>
    </main>
  )
}