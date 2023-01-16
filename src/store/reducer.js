const initialState = { totalContentItems: 0, contents: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CONTENTS_SUCCESS":
      return {
        ...state,
        totalContentItems: action.payload.page["total-content-items"],
        contents: [
          ...state.contents,
          ...action.payload.page["content-items"].content,
        ],
      };
    default:
      return state;
  }
};

export default reducer;
