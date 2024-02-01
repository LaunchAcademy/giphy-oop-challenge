import GiphyClient from "./src/apiClient/GiphyClient.js";
import GifFrameCalculator from "./src/models/GifFrameCalculator.js";
import GifKeywordCalculator from "./src/models/GifKeywordCalculator.js";
import GifWidthCalculator from "./src/models/GifWidthCalculator.js";

const GIPHY_API_KEY = "AQ95axb0tjDEBhnMhA4P2ciqesFWpQOJ";
const baseGiphyURL = "http://api.giphy.com/v1/gifs";

const giphyClient = new GiphyClient({
  apiKey: GIPHY_API_KEY,
  baseURL: baseGiphyURL,
});

const response = await giphyClient.getTrendingGifs();
const { data } = await giphyClient.parseGiphyResponse({ response });

// Problem #1 : most common keyword
const gifTitles = giphyClient.retrieveGifTitles({ gifs: data });
const keywordCounts = GifKeywordCalculator.countTitleKeywords({ gifTitles });
const mostCommonKeyword = GifKeywordCalculator.mostCommonTitleKeyword({
  keywordCounts,
});
// const { commonKeyword: mostCommonKeyword, greatestCount } =
//   GifKeywordCalculator.mostCommonTitleKeyword({
//     keywordCounts,
//   });
console.log("#1 Most Common Trending Keyword: ", mostCommonKeyword);
// console.log(`Most Common Trending Keyword appears # ${greatestCount} times`);

// Problem #2
const gifImages = giphyClient.retrieveGifImages({ gifs: data });
const originalGifs = giphyClient.originalGifImages({ gifImages });
const gifWidths = GifWidthCalculator.aggregateGifImageWidths({
  gifImages: originalGifs,
});

// Problem #2a : most common original width
const widthCounts = GifWidthCalculator.countGifWidth({ gifWidths });
const mostCommonWidth = GifWidthCalculator.mostCommonWidth({ widthCounts });
console.log("\n#2a Most Common Original GIF width: ", mostCommonWidth);

// Problem #2b : average original width
const averageWidth = GifWidthCalculator.averageWidth({ gifWidths });
console.log("#2b Average Original GIF width: ", averageWidth);

// Problem #2c : # common width GIFs per screen
// const mostCommonWidth = GifWidthCalculator.mostCommonWidth({ widthCounts });
const numCommonWidth = GifWidthCalculator.gifsPerAverageScreenSize({
  gifWidth: mostCommonWidth,
});
console.log(
  "#2c Number of Most Common GIF widths per Average Screen: ",
  numCommonWidth
);

// Problem #2d : average width GIFs per screen
// const averageWidth = GifWidthCalculator.averageWidth({ gifWidths });
const numAverageWidth = GifWidthCalculator.gifsPerAverageScreenSize({
  gifWidth: averageWidth,
});
console.log(
  "#2d Number of Average GIF widths per Average Screen: ",
  numAverageWidth
);

// Problem #3
// const originalGifs = giphyClient.originalGifImages({ gifImages });

const LOW_SPEED = 60;
const MEDIUM_SPEED = 135;
const HIGH_SPEED = 200;

// Problem #3 : low internet speed
const lowSpeedGifs = GifFrameCalculator.getGifsForInternetSpeed({
  gifs: originalGifs,
  internetSpeed: LOW_SPEED,
});
console.log("\n#3a Low Internet Speed GIF count: ", lowSpeedGifs.length);

// Problem #3 : GIF rows for LOW speed
const lowSpeedGifWidths = GifWidthCalculator.aggregateGifImageWidths({
  gifImages: lowSpeedGifs,
});
const averageLowSpeedWidth = GifWidthCalculator.averageWidth({
  gifWidths: lowSpeedGifWidths,
});
const numLowSpeedAverageWidth = GifWidthCalculator.gifsPerAverageScreenSize({
  gifWidth: averageLowSpeedWidth,
});
console.log(
  "#3b Number of Low Speed GIFs per Average Screen: ",
  numLowSpeedAverageWidth
);

// Problem #3 : medium internet speed
const mediumSpeedGifs = GifFrameCalculator.getGifsForInternetSpeed({
  gifs: originalGifs,
  internetSpeed: MEDIUM_SPEED,
});
console.log("#3a Medium Internet Speed GIF count: ", mediumSpeedGifs.length);

// Problem #3 : GIF rows for MED speed
const medSpeedGifWidths = GifWidthCalculator.aggregateGifImageWidths({
  gifImages: mediumSpeedGifs,
});
const averageMedSpeedWidth = GifWidthCalculator.averageWidth({
  gifWidths: medSpeedGifWidths,
});
const numMedSpeedAverageGifWidth = GifWidthCalculator.gifsPerAverageScreenSize({
  gifWidth: averageMedSpeedWidth,
});
console.log(
  "#3b Number of Medium Speed GIFs per Average Screen: ",
  numMedSpeedAverageGifWidth
);

// Problem #3 : high internet speed
const highSpeedGifs = GifFrameCalculator.getGifsForInternetSpeed({
  gifs: originalGifs,
  internetSpeed: HIGH_SPEED,
});
console.log("#3a High Internet Speed GIF count: ", highSpeedGifs.length);

// Problem #3 : GIF rows for HIGH speed
const highSpeedGifWidths = GifWidthCalculator.aggregateGifImageWidths({
  gifImages: highSpeedGifs,
});
const averageHighSpeedWidth = GifWidthCalculator.averageWidth({
  gifWidths: highSpeedGifWidths,
});
const numHighSpeedAverageGifWidth = GifWidthCalculator.gifsPerAverageScreenSize(
  {
    gifWidth: averageHighSpeedWidth,
  }
);
console.log(
  "#3b Number of High Speed GIFs per Average Screen: ",
  numHighSpeedAverageGifWidth
);
