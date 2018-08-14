import { createStore } from "redux";

let initialstate = {
  nameArray: [],
  completedTask: []
};

const maintainInitialState = (state = initialstate, action) => {
  // console.log("Function Running oF Type", action.type);
  ///////////////
  if (action.type === "addName") {
    console.log(state, "Going To Add the Name In Store");
    let { nameArray } = state;
    nameArray = [...nameArray, action.payload];
    return { ...state, nameArray };
  }
  ////////////
  else if (action.type === "removePerson") {
    console.log("Removing Person From Array is With key", action.payload);
    let removeItem = action.payload;
    let { nameArray } = state;
    nameArray = [
      ...nameArray.slice(0, removeItem),
      ...nameArray.slice(removeItem + 1, nameArray.length)
    ];
    return { ...state, nameArray };
  }

  //////////////
  else if (action.type === "completedTaskHere") {
    console.log("Removing and Adding Data To CompletedArray in Store");
    let removeItem = action.payload;
    let { nameArray } = state;
    // console.log("BEfore Getting item is nameArray are", nameArray);
    let item = nameArray.slice(removeItem, removeItem + 1);
    // console.log("Item is--------", item[0]);

    let { completedTask } = state;
    completedTask = [...completedTask, item[0]];
    // console.log("Completed Task is===>>>>", completedTask);

    nameArray = [
      ...nameArray.slice(0, removeItem),
      ...nameArray.slice(removeItem + 1, nameArray.length)
    ];

    return { ...state, nameArray, completedTask };
  }
  ///////////////////
  else if (action.type === "ChangeTask") {
    console.log(
      "==>>>>>>>>Going To Change The Task",
      action.payload,
      action.name
    );
    let { nameArray } = state;
    let taskChange = action.name;
    nameArray.splice(action.payload, 1, taskChange);
    nameArray = [...nameArray];
    console.log("Array i==============", nameArray);
    return { ...state, nameArray };
  }
  ////////////////////
  else return state;
};

export const store = createStore(maintainInitialState);

export const addName = statename => {
  return store.dispatch({ type: "addName", payload: statename });
};

export const removePersonInStore = key => {
  return store.dispatch({ type: "removePerson", payload: key });
};

export const completedTaskINStore = key => {
  // console.log("Task complete running in store====>>>>>>>>>");
  return store.dispatch({ type: "completedTaskHere", payload: key });
};

export const ChangeTaskInStore = (key, name) => {
  console.log("WE are going to chane the name", key, name);
  return store.dispatch({ type: "ChangeTask", payload: key, name: name });
};

const Unsucscribe = store.subscribe(() => {
  console.log("Initial State is:", initialstate);
});
