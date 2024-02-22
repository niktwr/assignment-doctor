const images = document.getElementById('images');
const data = [ 
    { "image": "https://img.freepik.com/free-photo/doctor-examines-patient-medicine-health-care-concept_1328-3146.jpg?size=626&ext=jpg"
    ,"name":"Dr. James Alex"  , "speciality":"Surgeon" },
    // ... other image objects
    { "image": "https://img.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg?size=626&ext=jpg&ga=GA1.1.211532192.1708596470&semt=ais" 
    ,"name":"Dr. Wael Alomari"  , "speciality":"Orthodontist"},
    { "image": "https://img.freepik.com/free-photo/male-doctor-with-stethoscope-standing-looking-camera_114579-72885.jpg?size=626&ext=jpg&ga=GA1.1.211532192.1708596470&semt=ais"
    ,"name":"Dr. Alt Katherine"  , "speciality":"Dental Care" },
    { "image": "https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?size=626&ext=jpg&ga=GA1.1.211532192.1708596470&semt=ais" 
    ,"name":"Dr. Paul Adams"  , "speciality":"Psychiatrist"},

    { "image": "https://img.freepik.com/free-photo/doctor-examines-patient-medicine-health-care-concept_1328-3146.jpg?size=626&ext=jpg"
    ,"name":"Dr. James Alex"  , "speciality":"Surgeon" },
    // ... other image objects
    { "image": "https://img.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg?size=626&ext=jpg&ga=GA1.1.211532192.1708596470&semt=ais" 
    ,"name":"Dr. Wael Alomari"  , "speciality":"Orthodontist"},
    { "image": "https://img.freepik.com/free-photo/male-doctor-with-stethoscope-standing-looking-camera_114579-72885.jpg?size=626&ext=jpg&ga=GA1.1.211532192.1708596470&semt=ais"
    ,"name":"Dr. Alt Katherine"  , "speciality":"Dental Care" },
    { "image": "https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?size=626&ext=jpg&ga=GA1.1.211532192.1708596470&semt=ais" 
    ,"name":"Dr. Paul Adams"  , "speciality":"Psychiatrist"},

    { "image": "https://img.freepik.com/free-photo/doctor-examines-patient-medicine-health-care-concept_1328-3146.jpg?size=626&ext=jpg"
    ,"name":"Dr. James Alex"  , "speciality":"Surgeon" },
    // ... other image objects
    { "image": "https://img.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg?size=626&ext=jpg&ga=GA1.1.211532192.1708596470&semt=ais" 
    ,"name":"Dr. Wael Alomari"  , "speciality":"Orthodontist"},
    { "image": "https://img.freepik.com/free-photo/male-doctor-with-stethoscope-standing-looking-camera_114579-72885.jpg?size=626&ext=jpg&ga=GA1.1.211532192.1708596470&semt=ais"
    ,"name":"Dr. Alt Katherine"  , "speciality":"Dental Care" },
    { "image": "https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?size=626&ext=jpg&ga=GA1.1.211532192.1708596470&semt=ais" 
    ,"name":"Dr. Paul Adams"  , "speciality":"Psychiatrist"},

    { "image": "https://img.freepik.com/free-photo/doctor-examines-patient-medicine-health-care-concept_1328-3146.jpg?size=626&ext=jpg"
    ,"name":"Dr. James Alex"  , "speciality":"Surgeon" },
    // ... other image objects
    { "image": "https://img.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg?size=626&ext=jpg&ga=GA1.1.211532192.1708596470&semt=ais" 
    ,"name":"Dr. Wael Alomari"  , "speciality":"Orthodontist"},
    { "image": "https://img.freepik.com/free-photo/male-doctor-with-stethoscope-standing-looking-camera_114579-72885.jpg?size=626&ext=jpg&ga=GA1.1.211532192.1708596470&semt=ais"
    ,"name":"Dr. Alt Katherine"  , "speciality":"Dental Care" },
    { "image": "https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?size=626&ext=jpg&ga=GA1.1.211532192.1708596470&semt=ais" 
    ,"name":"Dr. Paul Adams"  , "speciality":"Psychiatrist"},

    { "image": "https://img.freepik.com/free-photo/doctor-examines-patient-medicine-health-care-concept_1328-3146.jpg?size=626&ext=jpg"
    ,"name":"Dr. James Alex"  , "speciality":"Surgeon" },
    // ... other image objects
    { "image": "https://img.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg?size=626&ext=jpg&ga=GA1.1.211532192.1708596470&semt=ais" 
    ,"name":"Dr. Wael Alomari"  , "speciality":"Orthodontist"},
    { "image": "https://img.freepik.com/free-photo/male-doctor-with-stethoscope-standing-looking-camera_114579-72885.jpg?size=626&ext=jpg&ga=GA1.1.211532192.1708596470&semt=ais"
    ,"name":"Dr. Alt Katherine"  , "speciality":"Dental Care" },
    { "image": "https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?size=626&ext=jpg&ga=GA1.1.211532192.1708596470&semt=ais" 
    ,"name":"Dr. Paul Adams"  , "speciality":"Psychiatrist"},

    { "image": "https://img.freepik.com/free-photo/doctor-examines-patient-medicine-health-care-concept_1328-3146.jpg?size=626&ext=jpg"
    ,"name":"Dr. James Alex"  , "speciality":"Surgeon" },
    // ... other image objects
    { "image": "https://img.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg?size=626&ext=jpg&ga=GA1.1.211532192.1708596470&semt=ais" 
    ,"name":"Dr. Wael Alomari"  , "speciality":"Orthodontist"},
    { "image": "https://img.freepik.com/free-photo/male-doctor-with-stethoscope-standing-looking-camera_114579-72885.jpg?size=626&ext=jpg&ga=GA1.1.211532192.1708596470&semt=ais"
    ,"name":"Dr. Alt Katherine"  , "speciality":"Dental Care" },
    { "image": "https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?size=626&ext=jpg&ga=GA1.1.211532192.1708596470&semt=ais" 
    ,"name":"Dr. Paul Adams"  , "speciality":"Psychiatrist"},
   
 
];


data.forEach(imageObject => {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const image = document.createElement('img');
    image.classList.add('loading'); 
    image.alt = 'User Image';

    const imageName = document.createElement("h5");
    imageName.innerHTML = imageObject.name;
    imageName.classList.add('imgName');

    const imageSpeciality = document.createElement("p");
    imageSpeciality.innerHTML = imageObject.speciality;
    imageName.classList.add('imgSpec');
    


    image.addEventListener('load', () => {
        image.classList.remove('loading');
    });

    image.src = imageObject.image; 

    imageContainer.appendChild(image);
    imageContainer.appendChild(imageName);
    imageContainer.appendChild(imageSpeciality);

    images.appendChild(imageContainer);
});