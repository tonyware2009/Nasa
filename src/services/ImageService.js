import axios from "axios"
import { AppState } from "../AppState"
import { Image } from "../Model/Image"

const apiKey = 'api_key=E358vNeldWasWkSDlOr9aPSWh5OFAViLnCNB1H7v'

const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary'
})

class ImageService {

  async nasaApod(date) {
    console.log(date)
    const res = await nasaApi.get(`apod?date=${date}&${apiKey}`)
    console.log(res.data)
    AppState.Apod = new Image(res.data)

  }
}

export const imageService = new ImageService