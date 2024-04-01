import salida from "../assets/images/salida.png";

export default function Home() {
  return (
    <div className="flex justify-center min-h-[100dvh]">
      <div className="flex max-w-5xl flex-col pt-8 gap-6">
        <h2 className="font-bold text-3xl ">Salida Maharjan</h2>
        <img
          className="w-[150px] h-[150px] rounded-full"
          src={salida}
          alt="ImageImage"
        />
        <p className="text-xl pt-4">
          Welcome to my portfolio! As a full stack developer, I offer a unique
          perspective that merges technical proficiency. I embarked on a coding
          journey to leverage innovation for new apps. In this portfolio, you
          will find a collection of projects that reflect my diverse skill set,
          from developing applications to implementing solutions for data
          analysis. Through my coding endeavors, I aim to revolutionize creating
          user-friendly interfaces, streamlining processes, and ensuring data
          accuracy.
        </p>
        <div></div>
      </div>
    </div>
  );
}
