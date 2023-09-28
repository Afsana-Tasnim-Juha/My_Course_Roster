
import PropTypes from 'prop-types';

const SingleCourse = ({ singleCourse }) => {
    const { img, title, course_details, price, credit } = singleCourse;
    return (

        <div className="card w-80 h-[401px] bg-base-100 shadow-xl g mx-6 my-6 ">
            <figure><img src={img} alt={`${img}`} /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-lg	text-black mt-4">{title}</h2>
                <p className='text-zinc-500 text-base font-normal w-[280px] mt-4'>{course_details}</p>
                <div className="flex justify-between">
                    <h1 className="text-zinc-500 text-base font-normal mt-4">$ Price: {price}</h1>
                    <div className='flex items-center '>


                        <p className='inline-flex ml-2 text-zinc-500 text-base font-normal mt-4'>  Credit :{credit}hr </p>
                    </div>



                </div>
                <div className="card-actions">
                    <button className="btn btn-primary w-full h-[40px] bg-blue-600 rounded-lg text-white mt-4">Select</button>
                </div>

            </div>

        </div>



    );
};

SingleCourse.propTypes = {
    course: PropTypes.object.isRequired
}

export default SingleCourse;