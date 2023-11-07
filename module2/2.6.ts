{
  // Constraints (to enforce / সীমাবদ্ধতা ) in TypeScript

  const addCourseToStudent = <T extends {id: number, name: string, email: string }>(student: T) => {
    const course = "Next Level Web development";
    return {
      ...student,
      course,
    };
  };

  const student3= addCourseToStudent({
    id: 256,
    name: 'Hasan',
    email: 'emni@gmail.com',
  })

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
}>({
    id: 223,
    name: "mr X",
    email: "mr.x@gmail.com",
    devType: "Next Level",
  });

  const student2 = addCourseToStudent({
    id: 225,
    name: "mr y",
    email: "mr.y@gmail.com",
    hasWatch: "Apple watch",
  });
}
