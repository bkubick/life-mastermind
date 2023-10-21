import React from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';

import { InputField } from '../../../components/form/fields';
import { FieldMatch, Required, ValidateEmail, ValidationPipeline } from '../../../components/form/validation';


interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
}


interface Props {}


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
                username: '',
                password: '',
                confirmPassword: '',
            }
        }
    }

    onSubmit(values: FormValues, actions: any) {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
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
                        <Field name="username" placeholder="Username" component={ InputField } validate={ Required } />
                        <ErrorMessage name="username"/>
                    </div>
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


export default SignupForm;
