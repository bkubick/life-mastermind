import React from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';

import { InputField } from 'src/components/form/fields';
import { Required, ValidationPipeline } from '../../../components/form/validation';


interface FormValues {
    username: string;
    password: string;
}


interface Props {}


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
    }

    onSubmit(values: FormValues, actions: any) {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        }, 1000);
    }

    render() {
        return (
            <Formik initialValues={ this.state.form } onSubmit={ this.onSubmit }>
                <Form className='w-full p-10'>
                    <div className='mb-4'>
                        <Field name="username" placeholder="Username/Email" component={ InputField } validate={ ValidationPipeline([Required]) }/>
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


export default LoginForm;
