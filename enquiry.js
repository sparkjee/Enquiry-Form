// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfwU8_sRlzapwLl7shr6NeBrDp9m3Iay0",
  authDomain: "sparkjee-913e5.firebaseapp.com",
  databaseURL: "https://sparkjee-913e5.firebaseio.com",
  projectId: "sparkjee-913e5",
  storageBucket: "sparkjee-913e5.firebasestorage.app",
  messagingSenderId: "209232786485",
  appId: "1:209232786485:web:418322e17cafafb4a1ad7c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the database
const database = firebase.database();

document.getElementById('enquiryForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get values
  const studentName = document.getElementById('studentName').value;
  const contactNumber = document.getElementById('contactNumber').value;
  const course = document.getElementById('course').value;

  // Save data to Firebase
  saveEnquiry(studentName, contactNumber, course);

  // Clear form
  document.getElementById('enquiryForm').reset();
}

function saveEnquiry(name, contact, course) {
  const newEnquiryRef = database.ref('enquiries').push();
  newEnquiryRef.set({
    name: name,
    contact: contact,
    course: course
  });
}
