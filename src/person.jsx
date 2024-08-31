const Person = ({ name, age, image, },{setPeople}) => {
  return (
    <>
      <article className="person">
        <img className="img" src={image} alt={name} />
      </article>
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </>
  );
};

export default Person;
