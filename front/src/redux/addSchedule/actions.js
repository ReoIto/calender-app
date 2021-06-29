// constants
export const ADD_SCHEDULE_SET_VALUE = "ADD_SCHEDULE_SET_VALUE";
export const ADD_SCHEDULE_OPEN_DIALOG = "ADD_SCHEDULE_OPEN_DIALOG";
export const ADD_SCHEDULE_CLOSE_DIALOG = "ADD_SCHEDULE_CLOSE_DIALOG";

// actions
export const addScheduleSetValue = payload => ({ // formの値を更新するacion
  type: ADD_SCHEDULE_SET_VALUE,
  payload // payloadには {[key]: value} のオブジェクトを受け取る
});

export const addScheduleOpenDialog = () => ({ // dialogを開けるaction
  type: ADD_SCHEDULE_OPEN_DIALOG
});

export const addScheduleCloseDialog = () => ({ // dialogを閉じるaction
  type: ADD_SCHEDULE_CLOSE_DIALOG
});