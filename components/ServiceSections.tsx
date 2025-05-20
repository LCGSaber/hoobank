import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const services = [
    {
        id: 1,
        title: '升学申请服务',
        image: 'https://picsum.photos/id/3/600/400',
        description: '提供香港及国际学校的升学咨询和申请指导，帮助学生成功入读理想学校。',
        features: [
            '学校选择与评估',
            '申请材料准备',
            '面试辅导'
        ]
    },
    {
        id: 2,
        title: '学业辅导',
        image: 'https://picsum.photos/id/26/600/400',
        description: '提供各学科的专业辅导，帮助学生提高学习成绩，建立学习信心，进一步进行知识强化。',
        features: [
            '个性化学习计划',
            '学科知识强化',
            '考试技巧培训'
        ]
    },
    {
        id: 3,
        title: '教育规划',
        image: 'https://picsum.photos/id/28/600/400',
        description: '基于学生个体的全方位长时间学业规划，帮助学生明确目标，规划未来。',
        features: [
            '长期学业规划',
            '兴趣能力评估',
            '职业发展指导'
        ]
    }
];

const ServicesSection = () => {
    return (
        <section id="apply" className="">
            <div className="main-container">
                <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-2 md:p-4 border border-gray-100 transition-all duration-500 hover:shadow-2xl">
                    <div className="text-center mb-8">
                        <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-neutral mb-4">服务项目</h2>
                        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto">我们提供全方位的教育咨询服务，满足学生和家长的不同需求</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map(service => (
                            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300" key={service.id}>
                                <div className="h-48 overflow-hidden">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-neutral">{service.title}</h3>
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map(feature => (
                                            <li className="flex items-center text-gray-600" key={feature}>
                                                {/* <i className="fa fa-check text-secondary mr-2"></i> */}
                                                <FontAwesomeIcon icon={faCheck} className='text-thrid mr-2' />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;    