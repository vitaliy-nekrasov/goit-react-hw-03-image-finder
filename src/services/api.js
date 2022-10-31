import axios from 'axios';

export async function getPictures() {
  const response = await axios.get(
    'https://pixabay.com/api/?q=cat&page=1&key=29456353-5465c64cf9d8797860ea8e981&image_type=photo&orientation=horizontal&per_page=12'
  );
  console.log(response.data);
  return response;
}
