
import '@/styles/Contact.css';
import '@/styles/globals.css';
import BackgroundDecor from '@/components/BackgroundDecor';

const Contact: React.FC = () => (
  <section id="contact">
    <div className="main-container-contact">
      {/* 背景装饰元素 */}
      <BackgroundDecor />

      {/* 主容器 */}
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-2 md:p-4 border border-gray-100 transition-all duration-500 hover:shadow-2xl">
        {/* 顶部装饰线 */}
        <div className="text-center mb-4">
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-neutral mb-4">聯繫我們</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-3 items-center">
          <div className="space-y-6">
            <div className="bg-neutral-light p-3 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start">
                <div className="">
                  <h3 className="text-xl font-semibold mb-2"></h3>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">感謝關注</h3>
                  <h2 className="text-xl">正心教育諮詢有限公司（香港）</h2>
                  <h3 className="text-xl mt-2">聯繫方式:</h3>
                  <div className="contact-item">
                    <span className="icon-location"></span>
                    <span className="text-sm">尖沙咀漢口道5-15號漢口中心311A室</span>
                  </div>
                  <div className="contact-item">
                    <span className="icon-phone"></span>
                    <span className="text-sm">+852 5345 4061</span>
                  </div>
                  <div className="contact-item">
                    <span className="icon-email"></span>
                    <a href="mailto:orthodoxeducaiton.hk@gmail.com" className="text-sm">orthodoxeducaiton.hk@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="relative">
            <div className="rounded-t-lg overflow-hidden shadow-xl">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.525416738025!2d114.16840857578185!3d22.2959603796897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400f25ecc28e5%3A0x31b40a49bf966679!2z5rGJ5Y-j5Lit5b-D!5e0!3m2!1szh-CN!2shk!4v1747227012246!5m2!1szh-CN!2shk" className='address-map' loading="lazy"></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section >
);

export default Contact;
