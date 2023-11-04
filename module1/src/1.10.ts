{
  // Union types in TypeScript (Like or '||' operator in Js )
  // type FrontendDeveloper = 'fakibaz' | 'juniorDeveloper'
  // type FullStackDeveloper = 'frontendDeveloper' | 'expertFullStackDeveloper'

  // type Developer = FrontendDeveloper | FullStackDeveloper

  // const newDeveloper : FrontendDeveloper = 'juniorDeveloper'

  // type User = {
  //   name: string;
  //   email?: string;
  //   gender: 'male' | 'female';
  //   bloodGroup: 'A+' | 'O+' | 'AB+' | 'O-'
  // }

  // const user1:User = {
  //   name: 'Hasem',
  //   email: 'same@gmail.com',
  //   gender: 'male',
  //   bloodGroup: 'A+'
  // }

  //*** InterSection types in TypeScript (Common types using '&' Operator) */
   type FrontendDeveloper = {
    skills: string[];
    designation1: 'Frontend Developer';
   }
   type BackendDeveloper = {
    skills: string[];
    designation2: 'Backend Developer';
   }

   type FullStackDeveloper = FrontendDeveloper & BackendDeveloper

   const fullStackDeveloper: FullStackDeveloper = {
    skills: ['Html', 'JavaScript','CSS'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
   }
}