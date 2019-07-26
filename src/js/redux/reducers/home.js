const homeReducer = (state = {}, action )=> {
	switch (action.type) {
		case "test":
		return { 
			...state, 
			count: action.count
		};
		default:
		return state
	};
  };
export default homeReducer;