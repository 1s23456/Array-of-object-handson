let studentRecords = [
              {name: 'John',id: 123, marks: 98},
              {name: 'Baba',id: 101, marks: 23},
              {name: 'yaga',id: 200, marks: 45},
              {name: 'Wick',id: 115, marks: 75},

]

// //Q1::--
//   studentRecords.map((item)=>{
//      console.log(item.name.toUpperCase());
//   })



//   //Q2::
 
//   studentRecords.map((item)=>{
//               if(item.marks>50){
//                             console.log(item);
//               }
//   })


//   //OR Another method of Q2:

// //   let student = studentRecords.filter((item)=>{
// //               return item.marks>50 
// //   })
// //   console.log(student);



//   //Q3:
//   studentRecords.map((item)=>{
//               if(item.id>120 && item.marks>50){
//                             console.log(item)
//               }
//   })



//   //Q4::
//   let student1= studentRecords.reduce((prev,curr)=>{
//               return prev += curr.marks
//   },0)
//  console.log(student1);




//Q5:
//  studentRecords.map((item)=>{
//               if(item.marks>50){
//                             console.log(item.name)
//               }
// })



//Q6:
// let stu = studentRecords.filter((item)=>{
//               return (item.id>120)
// }).reduce((pre,cur)=>{
//               return pre += cur.marks
// },0)


// console.log(stu);

//Q7:
studentRecords.forEach((student) => { 
              if (student.marks < 50) { 
                student.marks += 15; 
              }
              const totalMarks = student.marks; 
              if (totalMarks > 50) { 
                console.log(`${student.name}: ${totalMarks}`);
              } 
            });





// //Q8:
let stu1 = {
              name:"Shikha",
              class: 7,
              rollno : 16
}
let stu2 = {
              name:"Nishu",
              class: 8,
              rollno : 17
}
let stu3 = {
              name:"Astha",
              class: 9,
              rollno : 18
}
let stu4 = {
              name:"Himani",
              class: 10,
              rollno : 19
}
let stu5 = {
              name:"Prachi",
              class: 11,
              rollno : 20
}
let stu6 = {
              name:"Laxmi",
              class: 12,
              rollno : 21
}

let st7 = new Array(stu1,stu2,stu3,stu4,stu5,stu6);
console.log(st7);










// //example of reduce--
// //   let arr=[1,2,3,4,5,6,7,8,9,10]

// //  let sum=  arr.reduce((preValue,currValue)=>{
// //               return preValue += currValue
// //   },0)

// //   console.log(sum);








//Q7:
