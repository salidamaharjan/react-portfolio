import salida from "../assets/images/salida.png";
export default function AboutMe() {
  return (
    <div className="flex justify-center">
      <div className="flex max-w-5xl flex-col pt-8 gap-6">
        <h2 className="font-bold text-2xl">About Me</h2>
        <img className="w-[150px] h-[150px] rounded-full" src={salida} alt="ImageImage" />
        <p>
          Welcome to my portfolio! As a full stack developer, I offer a unique
          perspective that merges technical proficiency. I embarked on a coding
          journey to leverage innovation for new apps. In this portfolio, you
          will find a collection of projects that reflect my diverse skill set,
          from developing applications to implementing solutions for data
          analysis. Through my coding endeavors, I aim to revolutionize
          healthcare delivery by creating user-friendly interfaces, streamlining
          processes, and ensuring data accuracy.
        </p>
      </div>
    </div>
  );
}
