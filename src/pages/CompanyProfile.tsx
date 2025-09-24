import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CompanyProfile() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navigate = useNavigate();
  
  // 公司发展历程数据
  const companyHistory = [
    { year: "2025", event: "江和软件（海南）有限公司正式成立" },
    { year: "2026", event: "推出智能获客系统，获得市场广泛认可" },
    { year: "2027", event: "武汉研发中心成立，团队规模扩大至50人" },
    { year: "2028", event: "荣获海南省高新技术企业认证" },
    { year: "2029", event: "完成A轮融资，估值达1亿元" }
  ];
  
  // 核心团队成员数据
  const teamMembers = [
    {
      name: "张明",
      position: "创始人 & CEO",
      description: "10年软件行业经验，曾任职于阿里巴巴技术总监",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=male%20ceo%20professional%20portrait&sign=41b1159aa60f818372c9b3ab2a7a4d1f"
    },
    {
      name: "李华",
      position: "技术总监",
      description: "15年软件开发经验，精通前后端技术架构",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=male%20cto%20professional%20portrait&sign=1de8df4ba6f230a7c6973dbf1d0157a6"
    },
    {
      name: "王芳",
      position: "产品总监",
      description: "8年产品设计经验，专注用户体验与产品创新",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=female%20product%20director%20professional%20portrait&sign=e2d8995e9646212ce51a93fa8538a7f5"
    }
  ];
  
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header scrolled={scrolled} />
      
      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
               <div className="flex justify-between items-start mb-6">
                  <button 
                    onClick={() => navigate('/')}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <i className="fa-solid fa-arrow-left mr-2"></i>
                    <span>返回首页</span>
                  </button>
                </div>
                <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-3">
                关于我们
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  公司简介
                </h1>
                <p className="text-lg text-gray-600">
                  江和软件（海南）有限公司致力于为企业提供全方位的数字化转型解决方案，助力企业实现业务增长与效率提升。
                </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=modern%20software%20company%20office&sign=5ccd8d1a79b04ac0258b8f1823e7dd47" 
                  alt="江和软件办公环境" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">公司概述</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  江和软件（海南）有限公司成立于2025年，是一家专注于企业数字化转型的高新技术企业。公司总部位于海南自由贸易港，依托政策优势和技术创新，为国内外企业提供全方位的数字化解决方案。
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  我们拥有一支由资深技术专家和行业顾问组成的专业团队，具备丰富的软件开发和项目实施经验。公司秉承"创新驱动、诚信为本、客户至上、精益求精"的核心价值观，已为超过30家企业提供了优质的数字化转型服务。
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-blue-600">10+</p>
                    <p className="text-gray-600">专业技术人员</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-blue-600">30+</p>
                    <p className="text-gray-600">成功案例</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">发展历程</h2>
              <p className="text-gray-600">
                江和软件自成立以来，始终坚持技术创新与客户价值创造，不断发展壮大
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* 时间线中轴线 */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:translate-x-px"></div>
                
                {/* 时间线内容 */}
                <div className="space-y-12">
                  {companyHistory.map((item, index) => (
                    <div key={index} className="relative flex flex-col md:flex-row items-center">
                      {/* 时间点 */}
                      <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold absolute left-0 md:left-1/2 transform md:-translate-x-1/2">
                        {index + 1}
                      </div>
                      
                      {/* 内容 */}
                      <div className={`w-full md:w-5/12 p-6 rounded-xl shadow-lg ${index % 2 === 0 ? 'md:ml-auto md:text-right' : 'md:mr-auto'}`}>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.year}</h3>
                        <p className="text-gray-600">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">核心团队</h2>
              <p className="text-gray-600">
                我们拥有一支专业、高效、创新的团队，为客户提供最优质的服务
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group"
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}