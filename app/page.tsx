"use client"
import styles from "@/styles/style";
import { Navbar, Hero, Stats,ServiceSection,WorkflowSections, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer,Contact, AboutUs, ShowCase } from "@/components"
const Home: React.FC = () => {
  return (
    <>
      <div className="bg-all w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`bg-all ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={`bg-all ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <AboutUs/>
            <ServiceSection/>
            <WorkflowSections/>
            <ShowCase/>
            <Contact/>
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home