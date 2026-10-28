import Link from "next/link";

const mockURL = ["https://53pi0p1qzj.ufs.sh/f/GiNCL67dJz3EXEZyI3Wsl94rcK8QCjzfitMPoOh2AgxVuLDY", "https://53pi0p1qzj.ufs.sh/f/GiNCL67dJz3EBRiJoZPTXhZjFlKNDvJ3O16uz5ad9bVq82PR", "https://53pi0p1qzj.ufs.sh/f/GiNCL67dJz3E1O8yOO2GtvzRKQYNEFHTnX6sqoWfbeJSVmud"];
const mockImages = mockURL.map((url, index) =>({ 
        id: index + 1,
        url,
      }));
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap gap-4">
      {
        mockImages.map((image) => (
          <div key ={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))
      }
    </div>

    </main>
  );
}
