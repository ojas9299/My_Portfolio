export default function Skills() {
  const languages = [
    {
      name: "C++",
      img: "https://img.icons8.com/?size=512&id=40669&format=png",
    },
    {
      name: "HTML",
      img: "https://img.icons8.com/?size=512&id=20909&format=png",
    },
    {
      name: "CSS",
      img: "https://img.icons8.com/?size=512&id=21278&format=png",
    },
    {
      name: "JavaScript",
      img: "https://img.icons8.com/?size=512&id=108784&format=png",
    },
    {
      name: "Bootstrap",
      img: "https://img.icons8.com/?size=512&id=PndQWK6M1Hjo&format=png",
    },
    {
      name: "Node.js",
      img: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
    },
    {
      name: "Express.js",
      img: "https://img.icons8.com/?size=512&id=kg46nzoJrmTR&format=png&color=FFFFFF",
    },
    {
      name: "MySQL",
      img: "https://img.icons8.com/?size=512&id=UFXRpPFebwa2&format=png",
    },
    {
      name: "MongoDB",
      img: "https://img.icons8.com/?size=512&id=74402&format=png",
    },
    {
      name: "React",
      img: "https://img.icons8.com/?size=512&id=wPohyHO_qO1a&format=png",
    },
    {
      name: "GitHub",
      img: "https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF",
    },
    {
      name: "Tailwind",
      img: "https://img.icons8.com/?size=512&id=CIAZz2CYc6Kc&format=png",
    },
  ];
  return (
    <>
      <div className="mt-32 lg:mx-12 px-10 my-40 ">
        <h1 className="hvr-underline-from-left text-white font-rubik-mono-one tracking-[10px] font-extrabold text-2xl mb-32 ml-7">
          Skills
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-6 sm:grid-cols-6 gap-5  text-white b">
          {languages.map((lang, index) => (
            <div key={index}>
              <img
                src={lang.img}
                alt={lang.name}
                className="lg:size-36 transform transition-transform duration-300 hover:scale-125 "
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
