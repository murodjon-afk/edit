const videoGrid = document.querySelector('.video-grid');

function reload(arr) {
    videoGrid.innerHTML = '';
    for (let video of arr) {
        const videoItem = document.createElement('div');
        const img = document.createElement('img');
        const videoInfo = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const closeButton = document.createElement('button');
        const editButton = document.createElement('button')

        img.setAttribute('src', video.thumbnail);
        img.setAttribute('alt', video.title);

        h3.innerHTML = video.title;
        p.innerHTML = video.channel;
        closeButton.innerHTML = 'X';
        editButton.innerHTML = 'EDIT';


        videoInfo.classList.add('video-info');
        videoItem.classList.add('video-item');
        closeButton.classList.add('close-btn');
        editButton.classList.add('edit-btn');

        closeButton.style.display = 'none';
        editButton.style.display = 'none';


        closeButton.onclick = () => {
            const filteredArray = videos.filter((item) => item.id !== video.id);
            localStorage.setItem('videos', JSON.stringify(filteredArray));
            reload(filteredArray);
            fetch();
        }
 
        videoInfo.append(h3, p);
        videoItem.append(img, videoInfo, closeButton , editButton);
        videoGrid.append(videoItem);
        const modal = document.getElementById("modal");

  const exitButton = document.querySelector('.exitButton');
  const editP = document.querySelector('.editP')
  const editH3 = document.querySelector('.editH3');

  

editButton.onclick = function() {
    modal.style.display = "block";
}
exitButton.onclick = function() {                                                                  
    modal.style.display = "none";
   console.log(editH3,editP);
   
    p.innerHTML = editP.value;
    h3.innerHTML = editH3.value;

    
}



    }
}

reload(videos);

const input = document.querySelector('input');

input.onsearch = () => {
    const value = input.value.toLowerCase();

    const filteredArray = videos.filter((item) => item.title.toLowerCase().includes(value));

    reload(filteredArray);
}






