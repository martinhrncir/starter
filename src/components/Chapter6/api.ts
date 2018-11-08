import axios from "axios"

export const getMergadoFormats = () => {
    return axios.get('https://api.mergado.com/formats/')
}

