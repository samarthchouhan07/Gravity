import { Footer } from "./_components/Footer";
import { Heading } from "./_components/Heading";
import { Hero } from "./_components/hero";


export default function MarketingPage() {
  return (
    <div className="min-h-full flex flex-col">
       <div className="flex flex-col items-center justify-center md:justify-normal text-center gap-y-8 flex-1 p-6 pb-10">
           <Heading/>
           <Hero/>
       </div>
       <Footer/>
    </div>
  );
}
