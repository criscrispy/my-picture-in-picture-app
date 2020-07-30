const videoElement = document.querySelector("video");
const button = document.querySelector("button");


/* Prompt the user to select the Media Stream, 
pass to video element and then play */
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch (error) {
        // Catch error
        console.log(`whoops, something went wrong here`, error)
    }
}

button.addEventListener("click", async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
});

//On load
selectMediaStream();