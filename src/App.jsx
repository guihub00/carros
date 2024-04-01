




import Luxury from "./assets/components/Luxury"
import Sedans from "./assets/components/Sedans"
import Suvs from "./assets/components/Suvs"

export default function App() {
  return (
    <main className="min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex jusify-center iems-center" >
        <section className="lg:flex max-w-[920px]">

          <Sedans/>
          <Suvs/>
          <Luxury/>


          

          
          
        </section>
    </main>
  )
}