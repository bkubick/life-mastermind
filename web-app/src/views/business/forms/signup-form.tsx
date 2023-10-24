import { ErrorMessage, Formik, Form, Field } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { InputField } from 'src/components/form/fields';
import { FieldMatch, Required, ValidateEmail, ValidationPipeline } from 'src/components/form/validation';
import * as user from 'src/store/user';


interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}


interface Props {
    register: (form: FormValues) => void;
}


interface State {
    form: FormValues;
}



class SignupForm extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            form: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
            }
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.validateConfirmPassword = this.validateConfirmPassword.bind(this);
    }

    onSubmit(values: FormValues, actions: any) {
        setTimeout(() => {
            this.props.register(values);
            actions.setSubmitting(false);
        }, 1000);
    }

    validateConfirmPassword(value?: string): React.JSX.Element | undefined {
        return FieldMatch(value, this.state.form.password);
    }

    render() {
        return (
            <Formik initialValues={ this.state.form } onSubmit={ this.onSubmit }>
                <Form className='w-full p-10'>
                    <div className='mb-4'>
                        <Field name="firstName" placeholder="Firstname" component={ InputField } validate={ Required } />
                        <ErrorMessage name="firstName"/>
                    </div>
                    <div className='mb-4'>
                        <Field name="lastName" placeholder="Lastname" component={ InputField } validate={ Required }/>
                        <ErrorMessage name="lastName"/>
                    </div>
                    <div className='mb-4'>
                        <Field type="email" name="email" placeholder="Email" component={ InputField } validate={ ValidationPipeline([Required, ValidateEmail]) }/>
                        <ErrorMessage name="email"/>
                    </div>
                    <div className='mb-4'>
                        <Field type="password" name="password" placeholder="Password" component={ InputField } validate={ Required } />
                        <ErrorMessage name="password"/>
                    </div>
                    <div className='mb-4'>
                        <Field type="password" name="confirmPassword" placeholder="Confirm Password" component={ InputField } validate={ this.validateConfirmPassword } />
                        <ErrorMessage name="confirmPassword"/>
                    </div>
                    <button className='btn-sm btn-primary-outline' type="submit">Submit</button>
                </Form>
            </Formik>
        )
    }
}


/**
 * Dispatches the register action to the store.
 * 
 * TODO: Need to figure out how to handle the 'any' type here.
 * 
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        register: (form: FormValues) => dispatch(user.actions.register({ ...form })),
    }
};


export default connect(null, mapDispatchToProps)(SignupForm);
