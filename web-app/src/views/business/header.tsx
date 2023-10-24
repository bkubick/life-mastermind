import React from 'react';
import Logo from '../../static/img/logo-small.png';


class Header extends React.Component {
    render() {
        return (
            <div className='py-3'>
                <div className='flex'>
                    <img className='w-10 mr-3' src={ Logo } />
                    <span className='text-black font-bold text-3xl'>Life Mastermind</span>
                </div>
            </div>
        );
    }
}


export default Header;
