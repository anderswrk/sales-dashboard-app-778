
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart2, LineChart, PieChart, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // ここで実際のフォーム送信処理を行う代わりに、成功メッセージを表示
    setTimeout(() => {
      toast({
        title: "送信完了",
        description: "お問い合わせありがとうございます。近日中にご連絡いたします。",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* ヘッダー */}
      <header className="w-full py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <BarChart2 className="h-6 w-6 text-blue-600 mr-2" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">セールストラッカー</span>
        </div>
        <Link to="/dashboard">
          <Button variant="ghost" size="sm">
            ダッシュボード
          </Button>
        </Link>
      </header>

      {/* ヒーローセクション */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-6 md:px-12 max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 text-left mb-10 md:mb-0 md:pr-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Klivダッシュボード
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            インタラクティブなダッシュボードで販売実績を可視化。指標の追跡、傾向の分析、データに基づいた意思決定を行いましょう。
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg">
              ダッシュボードへ
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="relative z-10 bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100 rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 flex flex-col">
                <span className="text-sm text-gray-500 mb-1">総売上高</span>
                <span className="text-2xl font-bold text-gray-800">¥102M</span>
                <div className="mt-2 flex items-center text-green-600 text-sm">
                  <LineChart className="h-4 w-4 mr-1" />
                  <span>+12.5%</span>
                </div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4 flex flex-col">
                <span className="text-sm text-gray-500 mb-1">注文数</span>
                <span className="text-2xl font-bold text-gray-800">8,540</span>
                <div className="mt-2 flex items-center text-green-600 text-sm">
                  <LineChart className="h-4 w-4 mr-1" />
                  <span>+5.2%</span>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 flex flex-col">
                <span className="text-sm text-gray-500 mb-1">顧客数</span>
                <span className="text-2xl font-bold text-gray-800">3,240</span>
                <div className="mt-2 flex items-center text-red-600 text-sm">
                  <LineChart className="h-4 w-4 mr-1" />
                  <span>-2.4%</span>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 flex flex-col">
                <span className="text-sm text-gray-500 mb-1">コンバージョン率</span>
                <span className="text-2xl font-bold text-gray-800">3.2%</span>
                <div className="mt-2 flex items-center text-green-600 text-sm">
                  <PieChart className="h-4 w-4 mr-1" />
                  <span>+1.1%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* お問い合わせフォーム */}
      <section className="w-full py-16 px-6 bg-white/70 backdrop-blur-sm mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">お問い合わせ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ご質問やご要望がございましたら、以下のフォームからお気軽にお問い合わせください。
              担当者が迅速にご対応いたします。
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">お名前</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="山田 太郎"
                  required
                  className="border-blue-200 focus:border-blue-400"
                />
              </div>
              
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">メールアドレス</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your-email@example.com"
                  required
                  className="border-blue-200 focus:border-blue-400"
                />
              </div>
              
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">メッセージ</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="お問い合わせ内容をご記入ください"
                  required
                  className="min-h-[120px] border-blue-200 focus:border-blue-400"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    送信中...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    送信する
                  </span>
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>
      
      {/* フッター */}
      <footer className="w-full py-6 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} セールストラッカー. All rights reserved.
        </div>
      </footer>
      
      {/* 装飾要素 */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Index;
