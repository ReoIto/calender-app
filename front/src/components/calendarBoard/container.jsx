// container: reduxからのstateとreduxにdispatchする関数をpropsとして提供するためのコンポーネント
import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";

const mapStateToProps = state => ({ calendar: state.calendar });

// どれが正しいのか 3-4-4 バグ修正
// ①元(変更前)
// const mergeProps = stateProps => ({
//   calendar: createCalendar(stateProps.calendar)
// });

// ②教材
// const mergeProps = (stateProps, dispatchProps) => ({
//   month: stateProps.calendar,
//   calendar: createCalendar(stateProps.calendar)
// });

// ③MIX
const mergeProps = stateProps => ({
  month: stateProps.calendar,
  calendar:  createCalendar(stateProps.calendar)
});


export default connect(mapStateToProps, null, mergeProps)(CalendarBoard);