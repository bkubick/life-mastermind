import { ErrorMessage, Formik, Form, Field } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { InputField } from 'src/components/form/fields';
import { Required } from 'src/components/form/validation';
import * as user from 'src/store/user';


interface FormValues {
    username: string;
    password: string;
}


interface Props {
    login: (form: FormValues) => void;
}


interface State {
    form: FormValues;
}


class LoginForm extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            form: {
                username: '',
                password: '',
            }
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    /**
     * Handles the form submission.
     * 
     * @param values 
     * @param actions 
     */
    onSubmit(values: FormValues, actions: any): void {
        setTimeout(() => {
            this.props.login(values);
            actions.setSubmitting(false);
        }, 1000);
    }

    render() {
        return (
            <Formik initialValues={ this.state.form } onSubmit={ this.onSubmit }>
                <Form className='w-full p-10'>
                    <div className='mb-4'>
                        <Field name="username" placeholder="Username/Email" component={ InputField } validate={ Required }/>
                        <ErrorMessage name="username"/>
                    </div>
                    <div className='mb-4'>
                        <Field type="password" name="password" placeholder="Password" component={ InputField } validate={ Required } />
                        <ErrorMessage name="password"/>
                    </div>
                    <button className='btn-sm btn-primary-outline' type="submit">Submit</button>
                </Form>
            </Formik>
        )
    }
}


/**
 * Dispatches the login action to the store.
 * 
 * TODO: Need to figure out how to handle the 'any' type here.
 * 
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        login: (form: FormValues) => dispatch(user.actions.login({ ...form })),
    }
};


export default connect(null, mapDispatchToProps)(LoginForm);
