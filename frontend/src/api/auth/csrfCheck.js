import Cookies from 'js-cookie';
import getSCRF from './csrf';

const csrfCheck=async()=>{
    const csrf = Cookies.get('csrftoken')
    if (csrf===undefined) {
         getSCRF()
    }
}

export default csrfCheck