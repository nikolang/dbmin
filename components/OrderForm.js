//import { Field,reduxForm } from 'redux-form';
//import RFTextView from '../../../RFTextInput';
import React from 'react';

const OrderForm = ({ handleSubmit }) => (
  <View>
    <Field
      name="firstName"
      //component={RFTextView}
    />
    <Field
      name="lastName"
      //component={RFTextView}
    />
    <Button
      title="Submit Simple"
      //onPress={handleSubmit}
    />
  </View>
); 

// SimpleFormView.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };

export default HomeForm;