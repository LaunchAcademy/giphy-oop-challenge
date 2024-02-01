import got from "got";

class GiphyClient {
  constructor({ apiKey, baseURL }) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
  }

  async getTrendingGifs() {
    const response = await got(
      `${this.baseURL}/trending?api_key=${this.apiKey}`
    );
    return response;
  }

  parseGiphyResponse({ response }) {
    return JSON.parse(response.body);
  }

  retrieveGifTitles({ gifs }) {
    return gifs.map((gif) => {
      return gif.title;
    });
  }

  retrieveGifImages({ gifs }) {
    return gifs.map((gif) => {
      return gif.images;
    });
  }

  originalGifImages({ gifImages }) {
    return gifImages.map((gif) => {
      return gif.original;
    });
  }
}

export default GiphyClient;
