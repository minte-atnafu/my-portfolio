import aboutImg from "../assets/porfolio.jpg";
import { motion } from "framer-motion";
const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">About
                <span className="text-neutral-500"> Me</span>
            </h1>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{duration:0.5}}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="w-64 h-64 rounded-full " src={aboutImg} alt="about" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{duration:0.5}}
                    className="w-full lg:w-1/2">
                        <div className="flex justify-center lg:justify-start">
                            <p className="my-2 max-w-xl py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate quaerat illo,
                                possimus laboriosam corrupti iure excepturi accusantium doloremque sunt,
                                accusamus itaque cumque aspernatur harum dolores eveniet quibusdam explicabo minima necessitatibus,
                                voluptatem ut illum est sapiente nemo magni!
                                Laboriosam nam quos mollitia id ut accusamus ullam fugiat in maxime ipsa doloremque,
                                quaerat iste ex sequi architecto dolore at? Velit blanditiis ipsa iusto porro ipsam,
                                ratione veritatis beatae provident quidem, consequatur magnam dolore. Quo,
                                esse quia aut sequi hic ab ipsum amet, non, aliquam voluptatum ea excepturi eaque quam atque!
                                Tenetur sapiente neque soluta repellat voluptates at dolor omnis sequi reprehenderit pariatur.</p>
                        </div> 
                    </motion.div>
            </div>
        </div>
    );
};

export default About;