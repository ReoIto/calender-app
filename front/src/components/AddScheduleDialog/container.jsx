import AddScheduleDialog from "./presentation";
import { connect } from "react-redux";
import { addScheduleCloseDialog } from "../../redux/addSchedule/actions";

const mapStateToProps = state => ({ schedule: state.addSchedule }); // stateからscheduleだけ受け取っている。dispatchはまだする必要ないからここでは実装してない

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleDialog);