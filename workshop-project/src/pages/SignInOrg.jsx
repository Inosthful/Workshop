import React from "react"; // Assurez-vous que cette ligne est présente
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Navigation from "../components/Navigation";
import FormBaseSignIn from "../components/FormBaseSignIn";
import Input from "../components/Input"; // Importez le composant Input avec React.forwardRef



async function sha256(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }
  

const SignInOrg = () => {
    const { handleSubmit, register } = useForm();
    const onSubmit = async (data) => {
      // Hachez le mot de passe avant de l'envoyer à l'API
      const hashedPassword = await sha256(data.password);
  
      // Créez un objet à envoyer à l'API
      const user = {
        nom: data.nom,
        prenom: data.prenom,
        email: data.email,
        age: data.age,
        password: hashedPassword, // Utilisez le mot de passe haché
      };
  
      // Envoyez l'objet `user` à votre API (vous devrez implémenter cette partie)
      console.log("Données à envoyer à l'API :", user);
      
    };

    const inputRef = React.createRef();

  
    return (
      <div className="bg-[color:var(--background)] h-[100vh] overflow-hidden">
        <Navigation />
        <FormBaseSignIn />
        <div className="flex justify-center flex-col items-center mt-10">
          <div className="flex justify-center flex-col items-center rounded-xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-[430px] md:w-[480px] h-[415px] px-[5px] py-5 bg-white rounded-[10px] shadow justify-start items-start gap-2.5 inline-flex mb-40">
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                  <div className="flex-col text-center gap-[61px] flex">
                    <div className="flex-col gap-[25px] flex">
                      <div className="text-left text-black items-start text-base font-medium font-['Ubuntu'] pl-3">
                        Connexion
                      </div>
                  
                        <div className="flex flex-row gap-3">
                          <div className="ml-2 h-[50px] text-[11px] bg-zinc-200 rounded-[121.27px] justify-start items-center gap-2.5 flex">
                            <div className="text-black text-base font-normal font-['Ubuntu']">
                              {/* Utilisez l'élément Input avec la référence inputRef */}
                              <Input ref={inputRef} {...register("email")} placeholder="     Email" type="email" name="email" />
                            </div>
                          </div>
                     
  
                        <div className="flex flex-col justify-center gap-3">
                          <div className="h-[50px] text-[11px] bg-zinc-200 rounded-[121.27px] justify-start items-center gap-2.5 flex">
                            <div className="text-black text-base font-normal font-['Ubuntu']">
                              {/* Utilisez l'élément Input avec la référence inputRef */}
                              <Input ref={inputRef} {...register("password")} placeholder="     Password" type="password" name="password" />
                            </div>
                            <br />
                          </div>
                          <a href="/" className="text-blue-400 underline">
                            Mot de passe oublié
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col text-right justify-end items-end pr-5 pt-20">
                        <button className="px-10 py-[12px] mt-10  bg-amber-300 rounded-[100px] justify-start items-center gap-2.5 flex text-black" type="submit">
                          Se connecter
                        </button>
                        <NavLink
                          to="/login/register/user"
                          className={(navData) => (navData.isActive ? "underline bold text-yellow-400" : "none")}
                        >
                          <div className="pt-5 items-start text-gray-500 underline">Vous n'avez pas de compte ? Créez le ici !</div>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
export default SignInOrg;