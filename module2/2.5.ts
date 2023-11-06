{
  //** functions with generics */

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  type User = {
    id: number;
    name: string;
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<boolean>(true);
  const resGeneticObj = createArrayWithGeneric<User>({
    id: 222,
    name: "Abrar",
  });

  // -------------------------------------------->

  //** Array with generic and tuple */
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("Bangladesh", 1971);
  const res11 = createArrayWithTuple<string, { region: string }>("Bd", {
    region: "asia",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({name: 'mr X', email: 'mr.x@gmail.com', devType: 'Next Level'})
  const student2 = addCourseToStudent({name: 'mr y', email: 'mr.y@gmail.com', hasWatch: 'Apple watch'})
}
