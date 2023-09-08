import landingPage from "../project-img/img2.png";

export default function Header() {
  return (
    <header>
      <section className=" sm:mt-[50px] sm:flex justify-around container mx-auto px-2 ">
        <div className="   ">
          <h1 className="text-[108px] sm:leading-[102px] font-bold sm:ml-[10px]">YOUR FEET DESERVE<br/>THE BEST</h1>
          <p className="text-[16px] sm:mt-[35px] sm:ml-[6px] sm:mb-[29px]">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO<br/> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE<br/>THE BEST AND WE’RE HERE TO HELP YOU WITH OUR<br/>SHOES.</p>
          <button className="text-[24px] sm:leading-[29.05px] inline bg-[red] gap-[10px] px-2 py-1 rounded  ">Shop Now</button>
          
        <button className="sm:ml-[24px] w-[118px] sm:leading-[29.05px] border-[2px]  px-2 py-1 rounded  ">Category</button>
        </div>
        <img className="w-[530px]" src={landingPage} alt="landing_img" />
      
      </section>
     
    </header>
  );
}
