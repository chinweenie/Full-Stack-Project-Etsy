import EditUserProfleForm from "./edit_user_profile_form";
import {connect} from 'react-redux';
import { selectCurrentUser } from "../../reducers/selectors";
import { updateUser, fetchAllUsers } from "../../actions/users_actions";

const mapStateToProps = state => ({
    user: selectCurrentUser(state.entities.users, state.session.id)
});

const mapDispatchToProps = dispatch => ({
    updateUser: formData => dispatch(updateUser(formData)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUserProfleForm);
