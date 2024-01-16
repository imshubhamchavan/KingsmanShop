import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.style.scss';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.util';

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
   

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='navlink' to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className='navlink' onClick={signOutUser}>
                            {''}
                            SIGN OUT{''}
                        </span>
                    ) : (
                        <Link className='navlink' to='/auth'>
                            SIGN-IN
                        </Link>
                    )
                    }
                </div>

            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;