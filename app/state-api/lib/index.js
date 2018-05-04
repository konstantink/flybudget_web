class StateApi {
  constructor(rawData) {
    // this.rawData = rawData;
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: ''
    };
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
  }

  // getArticles() {
  //   return this.mapIntoObject(this.rawData.articles);
  // }
  //
  // getAuthors() {
  //   return this.mapIntoObject(this.rawData.authors);
  // }

  lookupAuthor = (authorId) => {
    return this.data.authors[authorId];
  }

  getState = () => {
    return this.data;
  }
}

export default StateApi;
