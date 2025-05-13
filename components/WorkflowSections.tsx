import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const WorkflowSection = () => {
    const workflowSteps = [
        {
            id: 1,
            title: "確認合作模式",
            description: "正心教育和家庭初步溝通教育理念及方向，雙方達成合作意向。同時正心教育對學生進行評估及核定，確認學生目前學術水平。",
            icon: "fa-handshake-o",
            iconBg: "bg-primary",
            services: [
                "教育理念沟通",
                "学生学术水平评估",
                "合作协议签订"
            ]
        },
        {
            id: 2,
            title: "選校及申請",
            description: "正心教育會根據學生的水平及家長對於學生教育的偏向性，在和家長充分溝通的前提下，設定選擇的學校并在家長的授權下完成各個學校的申請工作，并確定適合方便家庭的考試日程。",
            icon: "fa-university",
            iconBg: "bg-primary",
            services: [
                "学校评估与推荐",
                "申请材料准备",
                "考试日程安排"
            ]
        },
        {
            id: 3,
            title: "備考及應考",
            description: "正心教育給學生提供度身定制的備考方案，以全團隊全方位全天候服務備考學生，在合理時間内提升學生的學術水平以及應試表現。並在考試當天陪同學生及家長前往應考，處理考試當天相關事宜。",
            icon: "fa-book",
            iconBg: "bg-primary",
            services: [
                "定制备考计划",
                "全方位辅导支持",
                "考试当天陪同"
            ]
        },
        {
            id: 4,
            title: "錄取及注冊",
            description: "學生在獲得相關學校錄取后，正心教育會在家長的授權下處理相關的學位注冊，校車，膳食及可能的住宿安排，幫助學生盡快的融入新環境。",
            icon: "fa-graduation-cap",
            iconBg: "bg-primary",
            services: [
                "录取结果跟进",
                "学位注册协助",
                "校园生活适应指导"
            ]
        },
        {
            id: 5,
            title: "後續跟進",
            description: "在成功獲得錄取后，正心教育會繼續協助輔導學生在學校内的學習和生活，提供課后輔導，選課咨詢以及潛在的轉學申請等。我們對於高年級學生更會提供大學方向的咨詢和建議并協助學生申請到自己理想的大學及專業。",
            icon: "fa-rocket",
            iconBg: "bg-thrid",
            services: [
                "学业辅导支持",
                "选课指导",
                "升学规划与申请"
            ]
        }
    ];

    return (
        <section id="workflow">
            <div className="main-container">
                <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 md:p-8 border border-gray-100 transition-all duration-500 hover:shadow-2xl">
                    <div className="text-center mb-16">
                        <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-neutral mb-4">合作流程</h2>
                        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto">我们为每位学生提供个性化的服务流程，确保最佳的申请结果</p>
                    </div>

                    {/* 流程时间线 */}
                    <div className="relative">
                        {/* 连接线 */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-thrid opacity-30"></div>

                        {/* 流程步骤 */}
                        <div className="space-y-16 relative">
                            {workflowSteps.map((step, index) => {
                                const isEven = index % 2 === 0;

                                return (
                                    <div className="flex flex-col md:flex-row items-center" key={step.id}>
                                        {isEven && (
                                            <>
                                                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                                                    <h3 className="text-2xl font-bold text-neutral mb-4">{step.title}</h3>
                                                    <p className="text-gray-600">{step.description}</p>
                                                </div>
                                                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                                    <div className={`w-12 h-12 rounded-full ${step.iconBg} text-white flex items-center justify-center shadow-lg`}>
                                                        <i className={`fa ${step.icon} text-xl`}></i>
                                                    </div>
                                                </div>
                                                <div className="md:w-1/2 md:pl-12 md:mt-0 mt-8">
                                                    <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                                                        <h4 className="font-bold text-primary mb-2">关键服务</h4>
                                                        <ul className="space-y-2 text-gray-600">
                                                            {step.services.map((service, idx) => (
                                                                <li key={idx}><FontAwesomeIcon icon={faCheck} className='text-thrid mr-2'/>{service}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {!isEven && (
                                            <>
                                                <div className="md:w-1/2 md:pr-12 order-2 md:order-1">
                                                    <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                                                        <h4 className="font-bold text-primary mb-2">关键服务</h4>
                                                        <ul className="space-y-2 text-gray-600">
                                                            {step.services.map((service, idx) => (
                                                                <li key={idx}><FontAwesomeIcon icon={faCheck} className='text-thrid mr-2' />{service}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                                    <div className={`w-12 h-12 rounded-full ${step.iconBg} text-white flex items-center justify-center shadow-lg`}>
                                                        <i className={`fa ${step.icon} text-xl`}></i>
                                                    </div>
                                                </div>
                                                <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 order-1 md:order-2">
                                                    <h3 className="text-2xl font-bold text-neutral mb-4">{step.title}</h3>
                                                    <p className="text-gray-600">{step.description}</p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkflowSection;    