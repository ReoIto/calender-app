import Navigation from "./presentation";
import { connect } from "react-redux";
import { getNextMonth, getPreviousMonth, getMonth, formatMonth } from "../../services/calendar";
import { calendarSetMonth } from "../../redux/calendar/action";

const mapStateToProps = state => ({ calendar: state.calendar });

// connectの第二引数 dispatchを、使うpropsとして渡す関数を定義するためのもの mapDispatchToPropsがないとdispatchすることができない
const mapDispatchToProps = dispatch => ({
  setMonth: month => {
    dispatch(calendarSetMonth(month));
  }
});

const mergeProps = (stateProps, dispatchProps) => ({
  month: getMonth(stateProps.calendar),

  setNextMonth: () => {
    const nextMonth = getNextMonth(stateProps.calendar);
    dispatchProps.setMonth(nextMonth);
  },
  setPreviousMonth: () => {
    const previousMonth = getPreviousMonth(stateProps.calendar);
    dispatchProps.setMonth(previousMonth);
  },
  setMonth: dayObj => {
    // dayjs → reduxのstate
    const month = formatMonth(dayObj);
    dispatchProps.setMonth(month);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation);