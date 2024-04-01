import iconSedans from '../assets/icon-sedans.svg'


export default function Sedans() {

    return (

        <section className="bg-orange p-12 max-lg:rounded-t-lg lg:rounded-l-lg">
            <img src={iconSedans} alt="" className="mb-7"/>
            <h2 className="font-shoulders uppercase mb-7 text-4xl font-bold text-offwhitebg">Sedans</h2>
            <p className="font-lexend mb-7 text-offwhite lg:mb-20">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
            <a href="https://www.webmotors.com.br/suvs" target="_blank" className="font-lexend bg-offwhitebg px-10 py-3 block w-fit rounded-3xl text-orange border-2 border-offwhitebg hover:bg-orange">Ver Mais</a>
          </section>

    )

}