
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart2, LineChart, PieChart, Mail, Send } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    toast.success("お問い合わせを受け付けました。ありがとうございます。");
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
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
            Visualize your sales performance with an interactive dashboard. Track metrics, analyze trends, and make data-driven decisions.
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
      <section className="w-full py-16 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">お問い合わせ</h2>
          <p className="text-gray-600">ご質問やご要望がございましたら、お気軽にお問い合わせください。</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100 rounded-xl p-6 md:p-8 relative z-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">お名前</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="山田 太郎"
                required
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@example.com"
                required
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">メッセージ</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="お問い合わせ内容をご記入ください"
                required
                className="w-full min-h-[120px]"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full md:w-auto font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              送信する
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>
      
      {/* フッター */}
      <footer className="w-full py-6 px-6 text-center text-gray-600 text-sm">
        <div className="flex items-center justify-center mb-2">
          <BarChart2 className="h-5 w-5 text-blue-600 mr-2" />
          <span className="font-medium">セールストラッカー</span>
        </div>
        <p>© {new Date().getFullYear()} セールストラッカー. All rights reserved.</p>
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
