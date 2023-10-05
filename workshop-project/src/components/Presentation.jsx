const Presentation = () => {
    return (
        <div className="flex justify-center items-center bg-[color:var(--background)] pb-12">
            <div className="w-[90%] justify-between  items-start md:inline-flex px-5">
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                    <div className="align-center text-center w-full lg:text-start text-white text-[60px] break-words" data-aos="fade-up" data-aos-duration="500">1.</div>
                    <div className=" break-words text-white text-md md:text-lg" data-aos="fade-left" data-aos-delay="200">Qorem ipsum dolor sit amet, consectetur adipiscing elit. Qorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                </div>
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                    <div className="align-center text-center w-full lg:text-start text-white text-[60px] break-words" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="500">2.</div>
                    <div className=" break-words text-white text-md md:text-lg" data-aos="fade-left" data-aos-delay="700">Qorem ipsum dolor sit amet, consectetur adipiscing elit. Qorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                </div>        
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                    <div className="align-center text-center w-full lg:text-start text-white text-[60px] break-words" data-aos="fade-up" data-aos-delay="1500" data-aos-duration="500">3.</div>
                    <div className=" break-words text-white text-md md:text-lg" data-aos="fade-left" data-aos-delay="1200">Qorem ipsum dolor sit amet, consectetur adipiscing elit. Qorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                </div>
            </div>
        </div>
    )
}


export default Presentation;