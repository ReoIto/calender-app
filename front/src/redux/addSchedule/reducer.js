import dayjs from "dayjs";
import {
  ADD_SCHEDULE_SET_VALUE,
  ADD_SCHEDULE_CLOSE_DIALOG,
  ADD_SCHEDULE_OPEN_DIALOG
} from "./actions";

// 初期値 主にformのデータとdialogが開いているかどうかの２つの状態が必要だから
const init = { // いつ,どこで,誰が の情報
  form: {
    title: "",
    description: "",
    date: dayjs(),
    location: ""
  },
  isDialogOpen: false
};

// reducerの作成
const addScheduleReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_SCHEDULE_SET_VALUE:
      return { ...state, form: { ...state.form, ...payload } }; // 現状のstateの中に新しいformを追加しつつformの中でも現在のformに対して新しいデータを展開して追加している
    case ADD_SCHEDULE_OPEN_DIALOG:                              // ex)titleだけを変更したい場合は{title: "タイトルだよ"}とすると、{...state.form, ...payload}でtitleだけが変更される仕組み
      return { ...state, isDialogOpen: true };                  // オブジェクトをコピーしてその一部を変更してそれを返すという方法もできる
    case ADD_SCHEDULE_CLOSE_DIALOG:
      return init;
    default:
      return state; // 初期化
  }
};

export default addScheduleReducer;