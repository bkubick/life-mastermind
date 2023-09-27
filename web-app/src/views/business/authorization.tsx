import React from 'react';


interface Props {}


interface State {}


class Authorization extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id='app' className='container mx-auto h-screen flex'>
                Authorization Page
            </div>
        )
    }
}

export default Authorization;
