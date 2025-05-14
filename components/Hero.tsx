import styles from "@/styles/style";
import { discount, robot,edu } from "@/public/assets";
import GetStarted from "./GetStarted";
import Image from "next/image";

const Hero: React.FC = () => (
  <section id="home" className={`flex md:flex-row flex-col sm:py-4 py-1`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px]">
        ORTHODOX <a className="text-special">EDUCATION</a> <br className="sm:block hidden" />{" "}
          <span className="text-special">正心 教育</span>{" "}
        </h1>
      </div>
      <h1 className="w-full font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100px] leading-[75px]">
      欲修其身者 <a className="text-special">先正其心</a>
      </h1>
      <p className={`${styles.paragraph} max-w-[470px]`}>
      Start Being Your Academic Companion Since 2016
      </p>
    </div>
  </section>
);

export default Hero;
