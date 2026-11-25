'use client'
import { desc } from "drizzle-orm";
import Link from "next/link";

const mockURL = ["https://53pi0p1qzj.ufs.sh/f/GiNCL67dJz3E4tJsAOFlsSYTjV6CBORxiHqEgybcWpw2ItXh","https://53pi0p1qzj.ufs.sh/f/GiNCL67dJz3EXEZyI3Wsl94rcK8QCjzfitMPoOh2AgxVuLDY", "https://53pi0p1qzj.ufs.sh/f/GiNCL67dJz3EBRiJoZPTXhZjFlKNDvJ3O16uz5ad9bVq82PR", "https://53pi0p1qzj.ufs.sh/f/GiNCL67dJz3E1O8yOO2GtvzRKQYNEFHTnX6sqoWfbeJSVmud","https://53pi0p1qzj.ufs.sh/f/GiNCL67dJz3EdZWKbq71wv9OTAWfMJ7Yb2sEjB6yuL0RNSIZ"];
const description = ["<--- Henry", "welcome back 1/2 1235 125 6 6 1364 63 61 1263 346  1717", "crow 07", "true 1234", "CROW OF JUDGEMENT"];
const mockImages = mockURL.map((url, index, caption) =>({ 
        id: index + 1,
        url,
        caption: description[index],
      }));
const alertFunction = () => {
  alert("You have been scammed successfully sucker")
}
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-t from-black to-blue-500 bg-url[]">
      {/* /* <div className="flex flex-wrap gap-4">
      {
        mockImages.map((image) => (
          <div key ={image.id} className="w-48">
            <img src={image.url} alt="image" />
            <p className="
            text-emerald-400
            font-mono
            text-xl
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
        </div>  */}
        <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please provide all important information</h1>
          <p className="py-6">
            If you provide all your information here, we will give you a 5% discount on nothing and take all your belongings and soul
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Credit Card Number</label>
              <input type="password" className="input" placeholder="Credit Card Number" />
              <label className="label">Credit Card Security Code</label>
              <input type="password" className="input" placeholder="Security Code" />
              <label className="label">Social Security Number</label>
              <input type="password" className="input" placeholder="Social Security Number" />
              

                {/* AAAAAAAAAAAAAAAAAA */
                /* Drawer content here */
                /* AAAAAAAAAAAAAAAAAA */}
                <div className="justify-center">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-neutral drawer-button">Send Information</label>
                  </div>
                  <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                      {/* Sidebar content here */}
                      <label className="label">All Family Members Names</label>
                      <input type="password" className="input" placeholder="All Family Members Names" />
                      <label className="label">License Plate Number</label>
                      <input type="password" className="input" placeholder="License Plate Number" />
                      <label className="label">Address</label>
                      <input type="password" className="input" placeholder="Address" />
                    </ul>
                  </div>
                  </div>



            </fieldset>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}
