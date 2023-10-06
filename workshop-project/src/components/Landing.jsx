import Button from "./Button";

export const Landing = () => {
    return (
        <div className="bg-[color:var(--background)] pb-12">
            <h1 className="pb-6 pt-24 line leading-none w-[80vw] text-center m-auto text-zinc-300 text-[5vw] font-bold font-['Ubuntu']" data-aos="fade-up">Participer à la vie locale de votre comune 👋</h1>
            <h3 className="pb-8 text-center m-auto text-zinc-300 text-xl font-normal font-['Amaranth']" data-aos="fade-up">Donnez un coup de main à vos commerçants / associations !</h3>

            <Button text="Commencer dès maintenant" href="/missions" isOutline data-aos="fade-up" arrow />
            <img className="m-auto mt-16 w-[80vw] h-[625px] rounded-[10px] shadow border-4 border-neutral-200 object-cover" src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" data-aos="fade-up"/>
            <div className="left-[100px] -top-[40px] justify-end items-start inline-flex relative">
                <img className="w-[72px] h-[72px] rounded-full border-4 border-neutral-200" src="https://source.unsplash.com/random/400x400/?face,volonteer,1" data-aos="fade-left"/>
                <img className="w-[72px] h-[72px] rounded-full border-4 border-neutral-200 -ml-8" src="https://source.unsplash.com/random/400x400/?face,volonteer,2" data-aos="fade-left" data-aos-delay="100"/>
                <img className="w-[72px] h-[72px] rounded-full border-4 border-neutral-200 -ml-8" src="https://source.unsplash.com/random/400x400/?face,volonteer,3" data-aos="fade-left" data-aos-delay="200"/>
                <img className="w-[72px] h-[72px] rounded-full border-4 border-neutral-200 -ml-8" src="https://source.unsplash.com/random/400x400/?face,volonteer,4" data-aos="fade-left" data-aos-delay="300"/>
                <img className="w-[72px] h-[72px] rounded-full border-4 border-neutral-200 -ml-8" src="https://source.unsplash.com/random/400x400/?face,volonteer,5" data-aos="fade-left" data-aos-delay="400"/>
            </div>
        </div>
    );
}