const MyPersonalData = ({ name, university, course }) => {
  /* Desestruturação das props usando variáveis
    const name = { name };
    const university = { university };
    const course = { course };
  */

  return (
    <>
      <h1>{name}</h1>
      <h1>{course} </h1>
      <h1>{university} </h1>
    </>
  );
};

export { MyPersonalData };
