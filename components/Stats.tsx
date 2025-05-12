import styles from "@/styles/style";
import { stats } from "@/constants";
import Chart from '@/components/Chart';
const Stats: React.FC = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-2`}>
    {/* {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-special">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))} */}

      {/* <div className={`flex-1 flex justify-start items-center flex-row m-3`} > */}

      {/* </div> */}
      <div className="app-container">
      <h1 className="app-title">数据概览</h1>
      <div className="charts-grid">
        <Chart 
          percent={70} 
          label="國際學校" 
          subLabel="就讀香港國際學校的學生比例" 
          color="#6babf0" 
        />
        <Chart 
          percent={30} 
          label="公立學校" 
          subLabel="就讀香港公立學校的學生比例" 
          color="#6babf0" 
        />
        <Chart 
          percent={100} 
          label="申請成功" 
          subLabel="學生獲得理想學校錄取的比例" 
          color="#10B981" 
        />
        <Chart 
          percent={90} 
          label="大學錄取" 
          subLabel="世界排名前100名大學錄取的比例" 
          color="#6babf0" 
        />
      </div>
    </div>
  </section>
);

export default Stats;
