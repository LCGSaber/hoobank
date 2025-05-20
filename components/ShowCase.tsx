import styles, { layout } from "@/styles/style";
import '@/styles/Contact.css';
import '@/styles/globals.css';
import { addressPic, hanji, hku } from "@/public/assets";
import Image from "next/image";
import BackgroundDecor from '@/components/BackgroundDecor';
import Divider from '@/components/Divider';
import InfoCard from '@/components/InfoCard';
import Card from '@/components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile,faBookMedical,faCalendarAlt,faUsersBetweenLines, faChalkboardTeacher, faUserGraduate, faUserCheck, faBookmark, faChampagneGlasses, faChalkboard, faHighlighter, faWebAwesome, faPlaneArrival } from '@fortawesome/free-solid-svg-icons'
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";

const Contact: React.FC = () => (
  <section id="recommend">
    <div className="main-container">
      {/* 背景装饰元素 */}
      <BackgroundDecor />

      {/* 主容器 */}
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 md:p-8 border border-gray-100 transition-all duration-500 hover:shadow-2xl">
        {/* 案例分享 */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-neutral mb-4">案例分享</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-3"></div>
            <p className="text-[clamp(1.75rem,3vw,2.5rem)] mx-auto">學生: CHRISTY TANG</p>
          </div>

          <div className="grid md:grid-cols-2 gap-2 items-center">
            <div className="space-y-3">
              <div className="bg-neutral-light p-1 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <i className="fa fa-calendar text-primary text-xl"></i>
                    <FontAwesomeIcon icon={faPlaneArrival} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">轉學來港</h3>
                    <p className="text-gray-600">在Christy完成初一上學期學業后，她的父母萌生了讓孩子前往更大更好平台發展的意願，并聯繫我們，很快達成了合作共識。</p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-light p-1 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    {/* <i className="fa fa-users text-secondary text-xl"></i> */}
                    <FontAwesomeIcon icon={faChalkboard} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">平穩過渡</h3>
                    <p className="text-gray-600">在Christy的第一年申請中，正心教育結合學生的性格和特點，為其順利申請多所學校，并最終被滬江維多利亞學校錄取。正式展開其在香港的求學之旅。</p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-light p-1 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    {/* <i className="fa fa-book text-accent text-xl"></i> */}
                    <FontAwesomeIcon icon={faHighlighter} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">百尺竿頭</h3>
                    <p className="text-gray-600">滬江維多利亞學校為學生配備完善的融入及適應過程，讓Christy非常快的就適應了香港的生活和學習，並且她在學習中體現出來的勤勉和投入受到了老師廣泛的好評。</p>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-light p-1 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    {/* <i className="fa fa-book text-accent text-xl"></i> */}
                    <FontAwesomeIcon icon={faWebAwesome} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">入讀漢基</h3>
                    <p className="text-gray-600">在Christy即將完成在港第一年學習的時候，正心教育協助她開展了轉學的申請，并成功獲得了漢基國際學校的錄取。目前Christy在漢基國際學校就讀11年級並和我們成為了非常好的朋友。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image src={hanji} alt="教育团队" className="w-full h-max-[100px] hanji-logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            {/* <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-neutral mb-4"></h2> */}
            {/* <div className="w-20 h-1 bg-primary mx-auto mb-6"></div> */}
            <p className="text-[clamp(1.75rem,3vw,2.5rem)] mx-auto mt-6">學生: LEAH LEUNG</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <div className="bg-neutral-light p-1 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <i className="fa fa-calendar text-primary text-xl"></i>
                    <FontAwesomeIcon icon={faPlaneArrival} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">轉學來港</h3>
                    <p className="text-gray-600">Leah在完成初二學習后，選擇轉學來到香港繼續她的學習，並在第一年入讀蘇浙公學</p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-light p-1 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    {/* <i className="fa fa-users text-secondary text-xl"></i> */}
                    <FontAwesomeIcon icon={faChalkboard} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">入讀培正</h3>
                    <p className="text-gray-600">在Leah完成第一年的學習后，我們開始協助她申請轉學，並且成功獲得傳統名校培正中學的錄取。</p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-light p-1 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    {/* <i className="fa fa-book text-accent text-xl"></i> */}
                    <FontAwesomeIcon icon={faHighlighter} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">錄取港大</h3>
                    <p className="text-gray-600">培正求學的兩年時間里，我們除了在學業上提供幫助外，也和她一起尋找她感興趣的職業方向。在剛剛結束的香港中學文憑試中Leah在
超過六萬名應考生中位列180名，並且在我們的協助下申請了香港大學的計量金融專業。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image src={hku} alt="教育团队" className="w-full h-auto" />
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
