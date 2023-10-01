import PropTypes from 'prop-types';

const SingleCourseList = ({ singleCourseList }) => {
    const { title } = singleCourseList;
    return (
        <div>
            <ol className='text-zinc-500 text-xl p-y-5 '>{title}</ol>
        </div>
    );
};

SingleCourseList.propTypes = {
    singleCourseList: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default SingleCourseList;
