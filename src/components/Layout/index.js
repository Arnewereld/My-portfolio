import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
    return (
        <div class='app'>
            <Sidebar />
            <div className='page'>
                <sapn className='tags top-tags'>&lt;body&gt;</sapn>
                
                <Outlet />

                <span className='tags bottom-tags'>
                &lt;/body&gt;
               <br />
               <span className='bottom-tags-html'>&lt;/htmls&gt;</span>
                </span> 
            </div>
        </div>
    )
}


export default Layout;