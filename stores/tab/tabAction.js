export const SET_SELECTED_TAB = "SET_SELECTED_TAB ";
// need to define this constant for not breaking the logic if we change the above value

export const setSelectedTabSuccess = (selectedTab) => ({
  type: SET_SELECTED_TAB,
  payload: { selectedTab },
});
export function setSelectedTab(selectedTab) {
  return (dispatch) => {
    dispatch(setSelectedTabSuccess(selectedTab));
  };
}

//Bug fix
// export const setSelectedTabSuccess = (selectedTab) ({
//   type: SET_SELECTED_TAB,
//   payload: { selectedTab },
// });

//It should be
// export const setSelectedTabSuccess = (selectedTab) => ({
//   type: SET_SELECTED_TAB,
//   payload: { selectedTab },
// });

//It's an arrow funciton instead of funciton assignment
