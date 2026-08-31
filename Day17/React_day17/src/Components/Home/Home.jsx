import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
export default function Home() {
  let [students, setStudents] = useState([
    {
      id: 1,
      name: "Ahmed Mohamed",
      age: 20,
      faculty: "Computer Science",
      level: 3,
      gpa: 3.4,
      city: "Cairo",
    },
    {
      id: 2,
      name: "Omar Ali",
      age: 21,
      faculty: "Information Systems",
      level: 3,
      gpa: 3.7,
      city: "Giza",
    },
    {
      id: 3,
      name: "Youssef Ahmed",
      age: 19,
      faculty: "Computer Science",
      level: 2,
      gpa: 3.1,
      city: "Helwan",
    },
    {
      id: 4,
      name: "Mahmoud Hassan",
      age: 22,
      faculty: "Engineering",
      level: 4,
      gpa: 3.8,
      city: "Nasr City",
    },
    {
      id: 5,
      name: "Mohamed Khaled",
      age: 20,
      faculty: "Business Administration",
      level: 3,
      gpa: 3.2,
      city: "October",
    },
    {
      id: 6,
      name: "Abdelrahman Samir",
      age: 21,
      faculty: "Computer Science",
      level: 4,
      gpa: 3.9,
      city: "Maadi",
    },
    {
      id: 7,
      name: "Karim Mostafa",
      age: 20,
      faculty: "Information Systems",
      level: 3,
      gpa: 3.5,
      city: "Faisal",
    },
    {
      id: 8,
      name: "Seif Mahmoud",
      age: 19,
      faculty: "Engineering",
      level: 2,
      gpa: 2.9,
      city: "Dokki",
    },
    {
      id: 9,
      name: "Hassan Ibrahim",
      age: 22,
      faculty: "Computer Science",
      level: 4,
      gpa: 3.6,
      city: "Shubra",
    },
    {
      id: 10,
      name: "Mostafa Adel",
      age: 21,
      faculty: "Business Administration",
      level: 3,
      gpa: 3.3,
      city: "Haram",
    },
  ]);
  return (
    <>
      <Navbar />
      <Hero studentData={students} />
      <Footer/>
    </>
  );
}
