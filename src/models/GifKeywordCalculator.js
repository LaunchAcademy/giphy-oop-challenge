class GifKeywordCalculator {
  static countTitleKeywords({ gifTitles }) {
    const excludedWords = [
      "gif",
      "the",
      "and",
      "an",
      "a",
      "i",
      "is",
      "it",
      "its",
      "it's",
      "by",
      "my",
      "you",
    ];

    // VERSION .reduce()
    return gifTitles.reduce((keywordCounts, title) => {
      title.split(" ").forEach((word) => {
        const lowerCaseWord = word.toLowerCase();
        if (!excludedWords.includes(lowerCaseWord)) {
          keywordCounts[lowerCaseWord] =
            (keywordCounts[lowerCaseWord] || 0) + 1;
        }
      });
      return keywordCounts;
    }, {});
    // .reduce() is slightly more efficient than .forEach()
    //   in that we don't need to create a separate variable
    //   to store the result, `keywordCounts`

    // // VERSION .forEach()
    // const keywordCounts = {};
    // gifTitles.forEach((title) => {
    //   title.split(" ").forEach((word) => {
    //     if (!excludedWords.includes(word.toLowerCase()))
    //       if (keywordCounts[word]) {
    //         keywordCounts[word] += 1;
    //       } else {
    //         keywordCounts[word] = 1;
    //       }
    //   });
    // });
    // return keywordCounts;
  }

  static mostCommonTitleKeyword({ keywordCounts }) {
    let greatestCount = 1;
    let commonKeyword;
    for (const keyword in keywordCounts) {
      if (keywordCounts[keyword] > greatestCount) {
        greatestCount = keywordCounts[keyword];
        commonKeyword = keyword;
      }
    }
    if (greatestCount > 1) {
      // return { commonKeyword, greatestCount };
      return commonKeyword;
    }
    return "No common keyword found";
  }
}

export default GifKeywordCalculator;
