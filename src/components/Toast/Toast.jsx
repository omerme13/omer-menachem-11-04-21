import React from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from '@material-ui/lab';
import { useDispatch, useSelector } from "react-redux";
import { coreActions } from "../../store/core/core.actions";
import { coreSelector } from "../../store/core/core.selector";
import './Toast.scss';

const Toast = () => {
	const dispatch = useDispatch();

	const toast = useSelector(coreSelector.getToastData);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		dispatch(coreActions.toggleToast({ msg: '', isOpen: false, type: 'success' }));
	};

	return (
		<div className="toast">
			<Snackbar open={toast.isOpen} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity={toast.type} icon={false}>
					{toast.msg}
				</Alert>
			</Snackbar>
		</div>
	);
};

export default Toast;
