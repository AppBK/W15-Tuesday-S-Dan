import articles from "../data/data.json";

const LOAD_ARTICLES = "article/loadArticles";
const ADD_ARTICLE = "article/addArticle";

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    article: article
  };
};

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLE:
      // step 1  -> copy state
      const newState = { ...state };
      // step 2  -> mutate copied state
      // const entries2 = "entries"
      // newState[entries2] = [...state.entries, action.article];
      console.log("action.article.id", action.article.id);
      newState[action.article.id] = action.article;
      newState.entries = [...state.entries, action.article];
      // return mutated copy
      return newState;
    // return { ...state, entries: [...state.entries, action.article] };
    default:
      return state;
  }
};

export default articleReducer;
