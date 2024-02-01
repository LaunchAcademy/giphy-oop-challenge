class GifFrameCalculator {
  static getGifsForInternetSpeed({ gifs, internetSpeed }) {
    const LOW_SPEED = 60;
    const MEDIUM_SPEED = 135;
    const HIGH_SPEED = 200;

    return gifs.filter((gif) => {
      const gifFrames = parseInt(gif.frames);
      // if (internetSpeed <= LOW_SPEED) {
      if (internetSpeed === LOW_SPEED) {
        if (gifFrames <= 50) {
          return gif;
        }
      }
      // if (internetSpeed >= LOW_SPEED && internetSpeed <= MEDIUM_SPEED) {
      if (internetSpeed === MEDIUM_SPEED) {
        if (gifFrames <= 125) {
          return gif;
        }
      }
      // if (internetSpeed >= MEDIUM_SPEED && internetSpeed >= HIGH_SPEED) {
      if (internetSpeed === HIGH_SPEED) {
        if (gifFrames <= 200) {
          return gif;
        }
      }
    });
  }
}

export default GifFrameCalculator;
