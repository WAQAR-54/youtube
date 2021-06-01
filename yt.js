

// async function fetchData()
// {
// const response = await fetch('https://www.googleapis.com/youtube/v3/videos?id=1PXTPMCTkTk&key=AIzaSyCjYwg1bKEk7tJPbL8RE3DgH6G2eU1-RdU&part=snippet,contentDetails,statistics,status')

// console.log(response);


// const data = await response.json();
// console.log("Data =" , data);

// }

// fetchData();






// // https://www.googleapis.com/youtube/v3/channels?id=UCk-aUD7iBOyjEKIReRddPtA&key=AIzaSyCjYwg1bKEk7tJPbL8RE3DgH6G2eU1-RdU&part=status,snippet,contentDetails,statistics





// YOutube analysis Report 



// Options

const CLIENT_ID = '964239201679-jop7eb9glio1mi8jsfe2btcb9hd3us4i.apps.googleusercontent.com';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

const authorizeButton = document.getElementById('authorize-button');
const signoutButton = document.getElementById('signout-button');
const content = document.getElementById('content');
const channelForm = document.getElementById('channel-form');
const channelInput = document.getElementById('channel-input');
const videoContainer = document.getElementById('video-container');


const defaultChannel = 'techguyweb';

// Form submit and change channel
channelForm.addEventListener('submit', e => {
  e.preventDefault();

  const channel = channelInput.value;

  getChannel(channel);
});



// Load auth2 library
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
  }

// Init API client library and set up sign in listeners
function initClient() {
    gapi.client
      .init({
        discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scope: SCOPES
      })
      .then(() => {
        // Listen for sign in state changes
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
        // Handle initial sign in state
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
      });
  }

  // Update UI sign in state changes
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      authorizeButton.style.display = 'none';
      signoutButton.style.display = 'block';
      content.style.display = 'block';
      videoContainer.style.display = 'block';
      getChannel(defaultChannel);
    } else {
      authorizeButton.style.display = 'block';
      signoutButton.style.display = 'none';
      content.style.display = 'none';
      videoContainer.style.display = 'none';
    }
  }


// Handle login
function handleAuthClick() {
  gapi.auth2.getAuthInstance().signIn();
}

// Handle logout
function handleSignoutClick() {
  gapi.auth2.getAuthInstance().signOut();
}




function getChannel(channel) {
    console.log(channel)
}





