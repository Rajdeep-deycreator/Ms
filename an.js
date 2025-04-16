// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkpdhDngA9Rv2FpRnjt-yujRqm5gMgxzE",
  authDomain: "adinet-1b5d2.firebaseapp.com",
  projectId: "adinet-1b5d2",
  storageBucket: "adinet-1b5d2.firebasestorage.app",
  messagingSenderId: "295798421295",
  appId: "1:295798421295:web:10e67b29ff8b7a477153da",
  measurementId: "G-HQ2WFCBW0R"
};
 
firebase.initializeApp(firebaseConfig);
const an=firebase.analytics();
  


setTimeout(function(){
  var msgbox=document.createElement('div');
  msgbox.setAttribute('id','mesg')
  msgbox.innerHTML +=" <p>Happy birthday to an incredible person! Today marks a special day, a celebration of your life, your laughter, and your beautiful spirit. May this year be filled with adventure, happiness, and all your heart's desires. You deserve every bit of love and celebration that comes your way. Here's to another amazing year of growth!......I know I have messed up everything....but this is just a small birthday gift and best wishes from my side😅</p>"
  document.body.appendChild(msgbox);
  msgbox.style.animation=' scrolltop 12s ease-in-out forwards'
},6000)