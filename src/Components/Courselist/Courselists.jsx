import PropTypes from 'prop-types';
import SingleCourseList from '../SingleCourseList/SingleCourseList';


const Courselists = ({ lists }) => {
    return (
        <div className="md:w-[300px] text-center ml-10  bg-[#FFF] rounded-sm ">
            <h2 className='font-bold'>Course Name: {lists.length}</h2>
            {
                lists.map(singleCourseList => <SingleCourseList key={singleCourseList.id} singleCourseList={singleCourseList}></SingleCourseList>)
            }
        </div>
    );
};

Courselists.propTypes = {
    lists: PropTypes.array

}

export default Courselists;