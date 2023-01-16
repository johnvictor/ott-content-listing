const initialState = {
  totalContentItems: 0,
  contents: [],
  title: "",
  isLoading: false,
  error: false,
  searchText: "",
  filteredContents: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CONTENTS_SUCCESS":
      return {
        ...state,
        totalContentItems: +action.payload.page["total-content-items"],
        title: action.payload.page["title"],
        contents: [
          ...state.contents,
          ...action.payload.page["content-items"].content,
        ],
        filteredContents: [
          ...state.contents,
          ...action.payload.page["content-items"].content,
        ],
        isLoading: false,
        error: false,
      };
    case "GET_CONTENTS_INIT":
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case "START_SEARCH":
      return {
        ...state,
        filteredContents: state.contents.filter((c) => {
          if (action.payload.trim() === "") {
            return true;
          } else {
            return c.name.toLowerCase().includes(action.payload.toLowerCase());
          }
        }),
      };
    default:
      return state;
  }
};

export default reducer;
