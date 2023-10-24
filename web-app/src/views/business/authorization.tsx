import React from 'react';

import Header from 'src/views/business/header';
import LoginForm from 'src/views/business/forms/login-form';
import ConnectedList from 'src/components/connected-list';


interface Props {}


interface State {}


interface CapabilitiesCard {
    title: string;
    items: string[];
}


class Authorization extends React.Component<Props, State> {

    capabilitiesCard: CapabilitiesCard = {
        title: 'Our platform provides the tools to monitor your life!',
        items: [
            'Lorum ipsom lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum.',
            'Lorum ipsom lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum.',
            'Lorum ipsom lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum.',
        ]
    };

    constructor(props: Props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id='app' className='container mx-auto h-screen'>
                <div className='mb-10'>
                    <Header />
                </div>
                <div className='grid grid-cols-7'>
                    <div className='col-span-4 flex'>
                        <div className='mr-10'>
                            <div className="text-3xl font-bold text-gray-900 mb-10">
                                Monitor your <strong className="text-primary">Life</strong> and Take Initiative
                                <div className="text-xl text-gray-600">
                                    Your life demands attention. Time to take the first step!
                                </div>
                            </div>
                            <div className="card bg-white">
                                <ConnectedList title={ this.capabilitiesCard.title } listItems={ this.capabilitiesCard.items } />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3 mx-10 flex'>
                        <div className='card w-full bg-white h-fit'>
                            <LoginForm></LoginForm>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Authorization;
