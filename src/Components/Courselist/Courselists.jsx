import PropTypes from 'prop-types';
import SingleCourseList from '../SingleCourseList/SingleCourseList';

const Courselists = ({ lists, remaining, totalCredit }) => {
    return (


        <div className=" card md:w-[300px] md:h-[355px] text-center ml-10 bg-base-100 shadow-xl rounded-lg mt-6">
            <h3 className='text-[#2F80ED] border-b-2 pb-4 font-bold'>Credit Hour Remaining {remaining} hr</h3>
            <h2 className='font-bold pb-4 pt-4 text-xl'>Course Name</h2>

            {
                lists.map(singleCourseList => (
                    <SingleCourseList key={singleCourseList.id} singleCourseList={singleCourseList} />
                ))
            }

            <h4 className='pb-4 pt-4'>Total Credit Hour: {totalCredit}</h4>
        </div>







    );
};

Courselists.propTypes = {
    lists: PropTypes.array,
    remaining: PropTypes.number.isRequired,
    totalCredit: PropTypes.number.isRequired,
}

export default Courselists;
