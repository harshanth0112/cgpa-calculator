import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
  // Replace with your Firebase configuration values. Firebase provides a free tier.
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export let allSemPapers;
export function setAllsemPapers(){
  const rollNumber=JSON.parse(localStorage.getItem("rollNumber"));
  allSemPapers=JSON.parse(localStorage.getItem(rollNumber.rollNo))||[
    {
      subject:'Basic Electrical, Electronics and Measurement Engineering',
      credits:3,
      grade:''
    },
    {
      subject:'Communicative English',
      credits:3,
      grade:''
    },
    {
      subject:'Engineering Chemistry',
      credits:3,
      grade:''
    },
    {
      subject:'Engineering Physics',
      credits:3,
      grade:''
    },
    {
      subject:'Mathematics - I',
      credits:4,
      grade:''
    },
    {
      subject:'Problem Solving and Fundamentals of C Programming',
      credits:3,
      grade:''
    },
    {
      subject:'C Programming Laboratory',
      credits:1.5,
      grade:''
    },
    {
      subject:'Physics and Chemistry Laboratory',
      credits:1.5,
      grade:''
    },
    {
      subject:'Technical English',
      credits:3,
      grade:''
    },
    {
      subject:'Mathematics - II',
      credits:4,
      grade:''
    },
    {
      subject:'Physics for Information Science',
      credits:3,
      grade:''
    },
    {
      subject:'Introduction to Artificial Intelligence',
      credits:3,
      grade:''
    },
    {
      subject:'Computational Thinking Using Python',
      credits:3,
      grade:''
    },
    {
      subject:'Engineering Graphics',
      credits:4,
      grade:''
    },
    {
      subject:'Engineering Practice Laboratory',
      credits:1.5,
      grade:''
    },
    {
      subject:'Python Programming Laboratory',
      credits:1.5,
      grade:''
    },
    {
      subject:'Professional Skill - I',
      credits:1,
      grade:''
    },
    {
      subject:'Transforms and Partial Differencial Equations',
      credits:4,
      grade:''
    },
    {
      subject:'Data Structures and Algorithms',
      credits:4,
      grade:''
    },
    {
      subject:'Fundamentals of OS',
      credits:4,
      grade:''
    },
    {
      subject:'Object Oriented Programming',
      credits:3,
      grade:''
    },
    {
      subject:'Database Management System',
      credits:3,
      grade:''
    },
    {
      subject:'Data Structures and Algorithms Laboratory',
      credits:2,
      grade:''
    },
    {
      subject:'Object Oriented Programming Laboratory',
      credits:1.5,
      grade:''
    },
    {
      subject:'Database Management System Laboratory',
      credits:1.5,
      grade:''
    },
    {
      subject:'Professional Skills - II',
      credits:1,
      grade:''
    },
    {
      subject:'Heritage of Tamil',
      credits:1,
      grade:''
    }
  ];
}

export function updateSemPapers(){

  /***** Updating sem - IV papers *****/

  if (allSemPapers.length===27){
    allSemPapers.push(
      {
        subject:'Probability and Statistics',
        credits:4,
        grade:''
      },
      {
        subject:'Computer Architecture',
        credits:3,
        grade:''
      },
      {
        subject:'Foundation of Data Science',
        credits:3,
        grade:''
      },
      {
        subject:'Data Warehousing and Data Mining',
        credits:3,
        grade:''
      },
      {
        subject:'Computer Networks',
        credits:4,
        grade:''
      },
      {
        subject:'Environmental Science and Engineering',
        credits:3,
        grade:''
      },
      {
        subject:'Foundation of Data Science Laboratory',
        credits:1.5,
        grade:''
      },
      {
        subject:'Data Warehousing and Data Mining Laboratory',
        credits:1.5,
        grade:''
      },
      {
        subject:'Professional Skills - III',
        credits:1,
        grade:''
      }
    );
  }
  if (allSemPapers.length===36){
    allSemPapers.push(
      {
        subject:'Tamils and Technology',
        credits:1,
        grade:''
      }
    );
  }
  if (allSemPapers[33].credits===2){
    allSemPapers[33].credits=1.5;
    allSemPapers[34].credits=1.5;
  }

  /***** Updating sem - V papers *****/

  if (allSemPapers.length===37){
    allSemPapers.push(
      {
        subject:'Discrete Mathematics',
        credits:4,
        grade:''
      },
      {
        subject:'Software Engineering for Data Science',
        credits:3,
        grade:''
      },
      {
        subject:'Internet Of Things',
        credits:3,
        grade:''
      },
      {
        subject:'Machine Learning Techniques',
        credits:3,
        grade:''
      },
      {
        subject:'Foundations of Cloud Computing',
        credits:4,
        grade:''
      },
      {
        subject:'PE-I(Getting Started with Competitive Programming)',
        credits:3,
        grade:''
      },
      {
        subject:'Machine Learning Laboratory',
        credits:2,
        grade:''
      },
      {
        subject:'Internet of Things Laboratory',
        credits:2,
        grade:''
      },
      {
        subject:'Design Project',
        credits:1,
        grade:''
      },
      {
        subject:'Professional Skills - IV',
        credits:1,
        grade:''
      }
    );
  }
}


export const gradePoints={
  'o':10,
  'a+':9,
  'a':8,
  'b+':7,
  'b':6,
  'c':5,
  'u':0
};

export function save(allSemPapers, start){
  const inputs=document.querySelectorAll('input');
  let i=start;
  inputs.forEach((input)=>{
    const grade=input.value;
    allSemPapers[i].grade=grade;
    i++;
  });
  const rollNumber=JSON.parse(localStorage.getItem("rollNumber"));
  localStorage.setItem(rollNumber.rollNo, JSON.stringify(allSemPapers));

  // Save data to Firebase cloud database
  set(ref(db, "cgpaData/" + rollNumber.rollNo), {
    allSemPapers: allSemPapers,
    timestamp: Date.now()
  })
  .then(() => {
    alert('Successfully Saved to Cloud and LocalStorage!');
  })
  .catch((error) => {
    console.error("Firebase error:", error);
    alert('Saved locally, but cloud save failed!');
  });
}

export function setGrades(allSemPapers,start){
  const inputs=document.querySelectorAll('input');
  let i=start;
  inputs.forEach((input)=>{
    input.value=allSemPapers[i].grade;
    i++;
  });
}