
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const KEY = "42660444-3b11bfb6c5a092fcbbd55e52b";
const URL = "https://pixabay.com/api/";

export function searchImages(QUERY) {
    loader.style.display = 'flex';
    const LINK = `${URL}?key=${KEY}&q=${QUERY}&image_type=photo&orientation=horizontal&savesearch=true`;
return fetch(LINK)
.then(response => {
    if(!response.ok){
    throw new Error (`Response error ${response.status}`)
    }
    return response.json()
})
.then(data => {
    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }
    return data;
  })
.catch (error => 
    console.log(error))
}