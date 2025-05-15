import styles, { layout } from "@/styles/style";
import '@/styles/Contact.css';
import '@/styles/globals.css';
import BackgroundDecor from '@/components/BackgroundDecor';
import InfoCard from '@/components/InfoCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile, faBookMedical, faCalendarAlt, faUsersBetweenLines, faChalkboardTeacher, faUserGraduate, faUserCheck, faBookmark, faBuilding, faPeopleRoof } from '@fortawesome/free-solid-svg-icons'

const Contact: React.FC = () => (
  <section id="about">
    <div className="main-container">
      {/* 背景装饰元素 */}
      <BackgroundDecor />

      {/* 主容器 */}
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 md:p-8 border border-gray-100 transition-all duration-500 hover:shadow-2xl">
        {/* 标题 */}
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-center mb-6 bg-primary text-transparent bg-clip-text">
          公司理念
        </h1>

        {/* 顶部装饰线 */}
        <div className="w-20 h-1 rounded-full mb-8 mx-auto bg-primary"></div>

        {/* 装饰分隔线 */}
        {/* <Divider /> */}

        {/* 理念内容 */}
        <div className="space-y-8">
          <InfoCard
            icon="book"
            title='"正心誠意，格物致知"'
            content="我們秉承誠信與專業的精神，引導學生探索知識的本質，培養獨立思考與解決問題的能力。"
          />

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-3 border border-gray-100">
            <h3 className="text-xl font-semibold text-dark mb-3 flex items-center">
              <FontAwesomeIcon icon={faChalkboardTeacher} />
              &nbsp;教育理念
            </h3>
            <p className="text-gray-600 leading-relaxed">
              正心教育立足香港這一個中西教育交匯的平台，致力於為追求更好教育資源的家庭提供全方位的教育服務。我們試圖在了解學生和家庭的基礎上為客戶提供量身定做的升學及學習規劃，在讓學生的學業成績穩步提升的同時更注重孩子對於自身自律，自強，自信的培養，為其升入大學，甚至是走入社會之後的旅程做好十足的準備。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3`}>
                  <FontAwesomeIcon icon={faUserGraduate} />
                </div>
                <h4 className="font-semibold text-dark mb-2">升學規劃</h4>
              </div>
              <p className="text-sm text-gray-500">為學生量身定制長期升學策略，提高錄取成功率。</p>
            </div>
            <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3`}>
                  <FontAwesomeIcon icon={faBookmark} />
                </div>
                <h4 className="font-semibold text-dark mb-2">學業輔導</h4>
              </div>
              <p className="text-sm text-gray-500">提供專業的學科輔導，幫助學生克服學習困難。</p>
            </div>
            <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3`}>
                  <FontAwesomeIcon icon={faUserCheck} />
                </div>
                <h4 className="font-semibold text-dark mb-2">心理成長</h4>
              </div>
              <p className="text-sm text-gray-500">關注學生心理健康，培養積極向上的人生態度。</p>
            </div>
          </div>
        </div>

        {/* 页脚装饰线 */}
        <div className="mt-10 mx-auto"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-neutral mb-4">關於我們</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">正心教育是一間專註於提供香港本土及國際化教育的咨詢機構</p>
          </div>

          <div className="grid md:grid-cols-2 gap-3 items-center">
            <div className="space-y-3">
              <div className="bg-neutral-light p-3 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FontAwesomeIcon icon={faBuilding} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">成立背景</h3>
                    <p className="text-gray-600">正心教育成立於2016年9月，由一群教育行業資深人士創立，致力於為學生提供專業的教育咨詢服務。</p>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-light p-2 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <FontAwesomeIcon icon={faUsersBetweenLines} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">我們的使命</h3>
                    <p className="text-gray-600">我們試圖提供的是一種基於互信的雙向的學習和成長關系，以及全方位的跨越區域限製的教育咨詢服務。</p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-light p-2 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-accent/10 p-2 rounded-full mr-4">
                    {/* <i className="fa fa-book text-accent text-xl"></i> */}
                    <FontAwesomeIcon icon={faPeopleRoof} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">專業團隊</h3>
                    <p className="text-gray-600">正心教育擁有一支專業性高、責任心強的教師團隊，咨詢師會全程跟蹤學生的學業及心理狀況。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img src="https://picsum.photos/id/20/800/600" alt="教育团队" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs animate-pulse-slow">
                <div className="flex items-center">
                  <div className="text-primary font-bold text-3xl mr-3">7+</div>
                  <div>
                    <div className="text-sm text-gray-500">年教育咨詢經驗</div>
                    <div className="text-sm font-medium">服務超過1000+學生</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* </div> */}
    {/* </div> */}
  </section>
);

export default Contact;
