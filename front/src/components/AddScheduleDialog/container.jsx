import { connect } from "react-redux";
import AddScheduleDialog from "./presentation";
import { addScheduleCloseDialog, addScheduleSetValue } from "../../redux/addSchedule/actions";

const mapStateToProps = state => ({ schedule: state.addSchedule }); // stateからscheduleだけ受け取っている。dispatchはまだする必要ないからここでは実装してない

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  },
  setSchedule: value => {
    dispatch(addScheduleSetValue(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleDialog);