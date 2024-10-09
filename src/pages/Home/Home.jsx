import Header from '../shared/Header/Header'
import Navbar from '../shared/Navbar/Navbar'
import LeftSide from '../shared/LeftSideNav/LeftSide'
import RightSide from '../shared/RightSideNav/RightSide'
import moment from 'moment';
import BreakingNews from './BreakingNews';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <p>{moment().format('MMMM Do YYYY')}</p>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSide></LeftSide>
                </div>
                <div className="col-span-2"><h1>News</h1></div>
                <div>
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Home;