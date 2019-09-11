// const firebaseInit=require('./firebase-authentication/firebase');
// //initialize firebase
// var firebase=firebaseInit.firebaseInit();
// var database=firebase.firestore();
var data=[];
var isDone=false;
//get users
exports.user_info=function(user_role,res,database){

    var docRef = database.collection('register_user');
    docRef.get()
    .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  

    
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
      if(doc.data().role!=user_role)
      data.push(doc.data());
      isDone=true
    });

    if(isDone){
      res.send(data);
      data=[];
    }



    })
  .catch(err => {
    console.log('Error getting documents', err);
  });

}