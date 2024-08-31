import Person from "./Person";
const List = ({ people,setPeople }) => {
  return (
    <>
      <section>
        {people.map((p) => {
          return <Person key={p.id} {...p} />;
        })}
      </section>
    </>
  );
};

export default List;
