import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// 案例数据
const caseData = [
  {
    id: 1,
    title: "金融科技平台",
    category: "金融行业",
    description: "为某大型银行开发的智能风控系统，利用人工智能和大数据分析技术，提升风险识别效率300%，降低坏账率40%。",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=fintech%20platform%20dashboard&sign=ee581d399d16bb43e1f2bf14f14e35b8",
    results: {
      efficiency: "300%",
      costReduction: "40%",
      satisfaction: "98%"
    },
    metrics: [
      { name: '风险识别', value: 95 },
      { name: '处理效率', value: 90 },
      { name: '系统稳定性', value: 99 },
      { name: '用户满意度', value: 98 },
    ],
    client: "某国有大型银行",
    date: "2024年3月",
    testimonial: "江和软件的解决方案帮助我们显著提升了风险控制能力，系统稳定可靠，服务响应迅速，是值得信赖的技术合作伙伴。"
  },
  {
    id: 2,
    title: "智慧医疗解决方案",
    category: "医疗健康",
    description: "构建区域医疗信息平台，实现患者信息互联互通，优化就医流程，减少患者等待时间40%，提高医生工作效率25%。",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=smart%20healthcare%20system&sign=9364b00f34664e27f4e17a0e8e1280e7",
    results: {
      waitTimeReduction: "40%",
      efficiencyImprovement: "25%",
      dataSharing: "100%"
    },
    metrics: [
      { name: '预约效率', value: 85 },
      { name: '信息共享', value: 100 },
      { name: '诊断准确率', value: 92 },
      { name: '患者满意度', value: 95 },
    ],
    client: "某省级医疗集团",
    date: "2024年5月",
    testimonial: "智慧医疗平台的实施极大改善了我们的医疗服务流程，患者满意度显著提升，医护人员工作负担有效减轻。"
  },
  {
    id: 3,
    title: "新零售管理系统",
    category: "零售行业",
    description: "为连锁零售企业打造的全渠道管理平台，整合线上线下销售数据，实现库存统一管理，提升库存周转率35%，销售额增长25%。",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=retail%20management%20system&sign=2b2e7b7311eaf7eb57be5e8ffff10a47",
    results: {
      inventoryTurnover: "35%",
      salesGrowth: "25%",
      customerRetention: "20%"
    },
    metrics: [
      { name: '库存周转', value: 88 },
      { name: '销售增长', value: 92 },
      { name: '客户留存', value: 85 },
      { name: '运营效率', value: 90 },
    ],
    client: "某全国连锁零售企业",
    date: "2024年1月",
    testimonial: "新零售管理系统帮助我们实现了线上线下一体化运营，库存管理效率大幅提升，销售业绩显著增长。"
  },
  {
    id: 4,
    title: "智能制造执行系统",
    category: "制造业",
    description: "为大型制造企业开发的智能工厂管理平台，实现生产流程数字化、自动化，生产效率提升40%，产品不良率降低25%。",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=smart%20manufacturing%20system&sign=8a47c29684fbd17a47558faa689e7278",
    results: {
      productionEfficiency: "40%",
      defectReduction: "25%",
      energySavings: "18%"
    },
    metrics: [
      { name: '生产效率', value: 95 },
      { name: '产品质量', value: 90 },
      { name: '能源消耗', value: 75 },
      { name: '设备利用率', value: 92 },
    ],
    client: "某汽车制造集团",
    date: "2023年11月",
    testimonial: "智能制造系统的实施使我们的生产效率和产品质量得到显著提升，为企业带来了可观的经济效益。"
  },
  {
    id: 5,
    title: "智慧物流平台",
    category: "物流行业",
    description: "为物流企业打造的智能调度与跟踪系统，实现运输路线优化、实时货物跟踪、智能仓储管理，物流成本降低22%，配送效率提升30%。",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=smart%20logistics%20platform&sign=d5da155d5cad1d1c22aa1cce00cbe889",
    results: {
      costReduction: "22%",
      deliveryEfficiency: "30%",
      accuracy: "99.5%"
    },
    metrics: [
      { name: '配送效率', value: 93 },
      { name: '成本控制', value: 88 },
      { name: '订单准确率', value: 99 },
      { name: '客户满意度', value: 94 },
    ],
    client: "某全国性物流企业",
    date: "2024年2月",
    testimonial: "智慧物流平台帮助我们实现了精细化管理，运营成本显著降低，服务质量得到客户高度认可。"
  },
  {
    id: 6,
    title: "教育资源管理系统",
    category: "教育行业",
    description: "为教育机构开发的一站式教学资源管理平台，整合课程管理、学生管理、教学评估等功能，教学效率提升35%，资源利用率提高50%。",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=education%20resource%20management%20system&sign=f94636f27063e0285abbcdec70dc3aa7",
    results: {
      teachingEfficiency: "35%",
      resourceUtilization: "50%",
      studentEngagement: "45%"
    },
    metrics: [
      { name: '教学效率', value: 90 },
      { name: '资源利用', value: 95 },
      { name: '学生参与度', value: 88 },
      { name: '教师满意度', value: 92 },
    ],
    client: "某知名教育集团",
    date: "2024年4月",
    testimonial: "教育资源管理系统极大地提升了我们的教学管理效率，丰富了教学手段，得到师生一致好评。"
  }
];

// 行业分类
const categories = [
  { id: 'all', name: '全部案例' },
  { id: 'finance', name: '金融行业' },
  { id: 'healthcare', name: '医疗健康' },
  { id: 'retail', name: '零售行业' },
  { id: 'manufacturing', name: '制造业' },
  { id: 'logistics', name: '物流行业' },
  { id: 'education', name: '教育行业' }
];

// 项目成果统计数据
const projectStats = [
  { name: '金融行业', value: 92 },
  { name: '医疗健康', value: 88 },
  { name: '零售行业', value: 95 },
  { name: '制造业', value: 90 },
  { name: '物流行业', value: 85 },
  { name: '教育行业', value: 89 },
];

export default function AllCases() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredCases, setFilteredCases] = useState(caseData);
  const navigate = useNavigate();

  // 监听滚动事件，控制导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 根据选择的分类筛选案例
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredCases(caseData);
    } else {
      // 根据分类ID映射到案例中的category名称
      const categoryMap = {
        'finance': '金融行业',
        'healthcare': '医疗健康',
        'retail': '零售行业',
        'manufacturing': '制造业',
        'logistics': '物流行业',
        'education': '教育行业'
      };
      
      setFilteredCases(
        caseData.filter(item => item.category === categoryMap[activeCategory])
      );
    }
  }, [activeCategory]);

  // 获取案例对应的路由路径
  const getCaseRoute = (caseTitle: string) => {
    switch(caseTitle) {
      case "金融科技平台":
        return "/cases/financial-technology";
      case "智慧医疗解决方案":
        return "/cases/smart-healthcare";
      case "新零售管理系统":
        return "/cases/retail-management";
      default:
        return "/cases/" + caseTitle.toLowerCase().replace(/\s+/g, '-');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Header scrolled={scrolled} />
      
      <main>
        {/* 英雄区域 */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
          {/* 背景装饰元素 */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute top-20 right-20 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-600 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="flex justify-start mb-8">
                <button 
                  onClick={() => navigate('/')}
                  className="flex items-center text-blue-300 hover:text-white transition-colors"
                >
                  <i className="fa-solid fa-arrow-left mr-2"></i>
                  <span>返回首页</span>
                </button>
              </div>
              
              <span className="inline-block px-4 py-1 rounded-full bg-blue-600/30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
                成功案例
              </span>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                我们的<span className="text-blue-400">项目成果</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                探索江和软件为各行业客户打造的数字化转型解决方案，见证技术创新如何驱动业务增长
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map(category => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* 波浪装饰 */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
              <path 
                fill="#f9fafb" 
                fillOpacity="1" 
                d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
              ></path>
            </svg>
          </div>
        </section>
        
        {/* 项目成果统计 */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-16">行业解决方案效果评分</h2>
              
              <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={projectStats}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} domain={[0, 100]} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          borderRadius: '12px', 
                          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                          border: 'none'
                        }}
                        formatter={(value) => [`${value}%`, '客户满意度']}
                      />
                      <Bar 
                        dataKey="value" 
                        fill="#3b82f6" 
                        radius={[4, 4, 0, 0]}
                        barSize={40}
                        animationDuration={1500}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* 案例展示区域 */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCases.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                    <div className="relative overflow-hidden h-56">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded-full backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-sm text-gray-500">{project.date}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-6 flex-grow">
                        {project.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {Object.entries(project.results).map(([key, value], i) => (
                          <div key={i} className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                            <p className="text-lg font-bold text-blue-600">{value}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="pt-4 border-t border-gray-100">
                        <Link
                          to={getCaseRoute(project.title)}
                          className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors w-full justify-between"
                        >
                          <span>查看案例详情</span>
                          <i className="fa-solid fa-arrow-right ml-2 text-sm transition-transform duration-300 group-hover:translate-x-1"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* 客户评价 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-24"
            >
              <h2 className="text-3xl font-bold text-center mb-16">客户评价</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCases.slice(0, 3).map((project) => (
                  <div key={project.id} className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 flex">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star"></i>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 italic mb-6">"{project.testimonial}"</p>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                        <i className="fa-solid fa-user"></i>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{project.client}</p>
                        <p className="text-sm text-gray-500">{project.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* CTA区域 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-24 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="p-8 md:p-12 lg:p-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    准备好开启您的数字化转型之旅了吗？
                  </h2>
                  <p className="text-blue-100 mb-8 max-w-lg">
                    联系我们，获取专属的数字化解决方案，让技术创新成为您的业务增长引擎
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <motion.button
                      onClick={() => navigate('/contact')}
                      className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      联系我们
                    </motion.button>
                    <motion.button
                      onClick={() => navigate('/services')}
                      className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      了解服务
                    </motion.button>
                  </div>
                </div>
                <div className="hidden lg:block relative h-full min-h-[300px]">
                  <img
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=business%20team%20collaboration&sign=1ef12756d5a75c472a8f2f692e62fc1c"
                    alt="团队协作"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}