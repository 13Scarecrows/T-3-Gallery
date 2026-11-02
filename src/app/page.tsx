import { desc } from "drizzle-orm";
import Link from "next/link";

const mockURL = ["https://53pi0p1qzj.ufs.sh/f/GiNCL67dJz3E4tJsAOFlsSYTjV6CBORxiHqEgybcWpw2ItXh","https://53pi0p1qzj.ufs.sh/f/GiNCL67dJz3EXEZyI3Wsl94rcK8QCjzfitMPoOh2AgxVuLDY", "https://53pi0p1qzj.ufs.sh/f/GiNCL67dJz3EBRiJoZPTXhZjFlKNDvJ3O16uz5ad9bVq82PR", "https://53pi0p1qzj.ufs.sh/f/GiNCL67dJz3E1O8yOO2GtvzRKQYNEFHTnX6sqoWfbeJSVmud","https://53pi0p1qzj.ufs.sh/f/GiNCL67dJz3EdZWKbq71wv9OTAWfMJ7Yb2sEjB6yuL0RNSIZ"];
const description = ["<--- Henry AFSDF SDF ADFJASKLG WE T AS ASDG GAG ASASDFG ASDF AS DFASDF ASFASDF ASF", "welcome back 1/2 1235 125 6 6 1364 63 61 1263 346  1717", "crow 07", "true 1234", "CROW OF JUDGEMENT"];
const mockImages = mockURL.map((url, index, caption) =>({ 
        id: index + 1,
        url,
        caption: description[index],
      }));
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white bg-linear-to-t from-orange-500 to-yellow-400 bg-[url(https://53pi0p1qzj.ufs.sh/f/GiNCL67dJz3E4tJsAOFlsSYTjV6CBORxiHqEgybcWpw2ItXh)]">
      <div className="flex flex-wrap gap-4">
      {
        mockImages.map((image) => (
          <div key ={image.id} className="w-48">
            <img src={image.url} alt="image" />
            <p className="
            text-emerald-400
            font-mono
            text-9xl
            text-shadow-yellow-300
            italic
            font-light
            stacked-fractions
            slashed-zero
            tracking-widest
            ">{image.caption}</p>
          </div>
        ))
      }
    </div>

    </main>
  );
}
