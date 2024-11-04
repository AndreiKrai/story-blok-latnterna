
const TeacherCard = ({ blok }) => {
  return (
    <div>
      <img
        style={{ height: 359, width:"100%",objectFit: "cover" }}
        src={blok.src}
        alt={blok.alt}
      ></img>
      <div className="pt-6 pe-4 pb-10 ps-4 text-lg " style={{backgroundColor:"rgb(255, 255, 255)"}}>
        <h4 className="text-2xl">{blok.title}</h4>
        <p className="mt-4 text-start">{blok.text}</p>
        <p className="mt-3 font-bold text-start">
          Years as an IB teacher:<span className="font-normal">{blok.year}</span>
        </p>
        <p className="mt-3 font-bold text-start">
          Subjects:<span className="font-normal">{blok.subject}</span>
        </p>
        <p className="mt-3 font-bold text-start">
          Years with Lanterna:<span className="font-normal">{blok.together}</span>
        </p>
        <p className="mt-3 font-bold text-start">
          Favourite thing about teaching online:<span className="font-normal">{blok.favorite}</span>
        </p>
      </div>
    </div>
  );
};

export default TeacherCard;
