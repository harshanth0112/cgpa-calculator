# CGPA & GPA Calculator Web App

A web application for students to calculate and save their CGPA and semester-wise GPA, with support for cloud backup using Firebase.

## note 

it is created based on krct dept of ai and ds syllabus

## Features

- **Login with Roll Number:** Securely enter and save your roll number.
- **CGPA Calculator:** Enter grades for all subjects and calculate your cumulative CGPA.
- **GPA Calculator:** Calculate GPA for each semester (I to V) individually.
- **Persistent Storage:** Grades are saved in browser localStorage and backed up to Firebase.
- **Responsive UI:** Clean, modern, and mobile-friendly design.
- **Cloud Sync:** Grades are saved to Firebase Realtime Database for backup.

## Folder Structure

```
cgpa-calci-main/
│
├── cgpaCalci.html           # CGPA calculator page
├── cgpaHome.html            # Home page after login
├── gpaCalci.html            # GPA semester selection page
├── loginPage.html           # Login page
├── sem-I-gpaCalci.html      # Semester I GPA calculator
├── sem-II-gpaCalci.html     # Semester II GPA calculator
├── sem-III-gpaCalci.html    # Semester III GPA calculator
├── sem-IV-gpaCalci.html     # Semester IV GPA calculator
├── sem-V-gpaCalci.html      # Semester V GPA calculator
│
├── data/
│   ├── data.js              # Data model, Firebase integration, and utility functions
│   └── # Code Citations.md  # Code citations and references
│
├── images/
│   └── cgpa logo.jpeg       # App logo
│
├── scripts/
│   ├── cgpaCalci.js         # CGPA calculator logic
│   ├── gpaCalculator.js     # GPA calculator logic
│   ├── loginPage.js         # Login page logic
│   ├── sem-1-gpaCalci.js    # Semester I GPA logic
│   ├── sem-2-gpaCalci.js    # Semester II GPA logic
│   ├── sem-3-gpaCalci.js    # Semester III GPA logic
│   ├── sem-4-gpaCalci.js    # Semester IV GPA logic
│   └── sem-5-gpaCalci.js    # Semester V GPA logic
│
└── styles/
    └── main.css             # Main stylesheet
```

## How to Use

1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/cgpa-calci-main.git
   cd cgpa-calci-main
   ```

2. **Configure Firebase**
   - Open [`data/data.js`](data/data.js).
   - Replace the placeholder values in `firebaseConfig` with your Firebase project credentials.

3. **Run Locally**
   - Open `loginPage.html` in your browser.
   - Enter your roll number to log in.
   - Use the home page to navigate to CGPA or GPA calculators.
   - Enter your grades and save. Data is stored locally and in Firebase.

4. **Deploy**
   - You can deploy the app using GitHub Pages, Vercel, Netlify, or any static hosting.

## Technologies Used

- HTML5, CSS3, JavaScript (ES6 modules)
- [Firebase Realtime Database](https://firebase.google.com/docs/database)
- LocalStorage for offline persistence

## Customization

- **Subjects & Credits:** Update the subject list and credits in [`data/data.js`](data/data.js) as per your curriculum.
- **Grade Points:** Modify the `gradePoints` object in [`data/data.js`](data/data.js) if your grading system differs.

## Screenshots

![image](https://github.com/user-attachments/assets/24ecf7fa-6cf9-4256-849f-5c6da69cc02b)


## License

This project is for educational purposes. See [`data/# Code Citations.md`](data/#%20Code%20Citations.md) for code references.

---

**Contributions welcome!**  
Feel free to open issues or submit pull requests.
