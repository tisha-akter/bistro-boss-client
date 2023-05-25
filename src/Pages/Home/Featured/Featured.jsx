import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Featuredimg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading="Check it out "
                heading="Featured Item"
            >
            </SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20  pt-12 px-36">
                <div>
                    <img src={Featuredimg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2019</p>
                    <p className="uppercase">Where can I get  some?</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius voluptatem quidem, libero corrupti omnis perferendis ipsum labore quibusdam odit enim natus molestias? Eos cumque rerum nulla! Libero neque recusandae animi expedita repellat? Quasi, reprehenderit laboriosam unde obcaecati maiores sed commodi soluta, necessitatibus aut dolores vel quam distinctio sint ad quia!
                    </p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;