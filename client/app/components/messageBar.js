import React from 'react';
import SnackBar from 'material-ui/lib/snackbar';

export default (props) => {
    return <SnackBar message={ props.message } openOnMount autoHideDration={ 60 } />;
};
