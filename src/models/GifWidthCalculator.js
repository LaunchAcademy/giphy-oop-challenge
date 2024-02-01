class GifWidthCalculator {
  static aggregateGifImageWidths({ gifImages }) {
    return gifImages.map((image) => {
      return parseInt(image.width);
    });
  }

  static countGifWidth({ gifWidths }) {
    // VERSION .reduce()
    return gifWidths.reduce((imageWidths, width) => {
      imageWidths[width] = (imageWidths[width] || 0) + 1;
      return imageWidths;
    }, {});

    // // VERSION .forEach()
    // const imageWidths = {};
    // gifWidths.forEach((width) => {
    //   if (imageWidths[width]) {
    //     imageWidths[width] += 1;
    //   } else {
    //     imageWidths[width] = 1;
    //   }
    // });
    // return imageWidths;
  }

  static mostCommonWidth({ widthCounts }) {
    // VERSION Math.max()
    let greatestCount = Math.max(...Object.values(widthCounts));
    for (const width in widthCounts) {
      if (widthCounts[width] === greatestCount) {
        return width;
      }
    }
    // find the `greatestCount` immediately with Math.max()
    // search the `widthCounts` object for the corresponding key
    //   that is for the greatestValue
    // exit the `for` loop once the match has been found
    //   returning the found `width`

    // // VERSION
    // let greatestCount = 0;
    // let commonWidth;
    // for (const width in widthCounts) {
    //   if (widthCounts[width] > greatestCount) {
    //     greatestCount = widthCounts[width];
    //     commonWidth = width;
    //   }
    // }
    // return commonWidth;
  }

  static averageWidth({ gifWidths }) {
    const reducedWidths = gifWidths.reduce((prev, curr) => prev + curr, 0);
    return reducedWidths / gifWidths.length;
  }

  static gifsPerAverageScreenSize({ gifWidth }) {
    const MARGIN_SIZE = 10;
    let averageScreenWidth = 1024;
    let gifCount = 0;
    let totalWidthWidthMargin = parseInt(gifWidth) + MARGIN_SIZE;

    while (averageScreenWidth >= totalWidthWidthMargin) {
      averageScreenWidth -= totalWidthWidthMargin;
      gifCount++;
    }
    return gifCount;
  }
}

export default GifWidthCalculator;
