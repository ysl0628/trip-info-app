import React, { useState } from 'react';
import { Hotel, Sun, CheckSquare, FileText, Smartphone, Briefcase, Map, ShieldAlert, ThermometerSun, Globe, ExternalLink } from 'lucide-react';

export const GeneralInfo: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  const checklistItems = [
    { icon: FileText, title: 'ESTA 申請', desc: '出發前72小時, $21 USD' },
    { icon: FileText, title: '護照效期', desc: '入境時需有6個月以上效期' },
    { icon: Briefcase, title: '旅遊保險', desc: '建議包含高額醫療與突發疾病' },
    { icon: FileText, title: '列印憑證', desc: '機票、住宿、ESTA 紙本備查' },
    { icon: FileText, title: '駕照準備', desc: '台灣駕照正本 + 國際駕照' },
    { icon: Smartphone, title: '網卡/漫遊', desc: 'T-Mobile/AT&T 訊號較佳' },
    { icon: Map, title: '離線地圖', desc: '下載大峽谷/沙漠區 Google Maps' },
    { icon: Briefcase, title: '盥洗用品', desc: '牙刷牙膏拖鞋 (美國飯店不提供)' }
  ];

  const toggleCheck = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) { newChecked.delete(index); } else { newChecked.add(index); }
    setCheckedItems(newChecked);
  };

  return (
    <div className="space-y-6 pb-20">
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          
          {/* Emergency - High Priority */}
          <div className="md:col-span-12 bg-rose-50 rounded-3xl p-6 border border-rose-100 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm relative overflow-hidden">
             {/* Background Pattern */}
             <div className="absolute -right-10 -top-10 text-rose-100 opacity-50 rotate-12 pointer-events-none">
                <ShieldAlert size={180} />
             </div>

             <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-white rounded-2xl text-rose-600 shadow-sm shrink-0">
                    <ShieldAlert size={28} />
                </div>
                <div>
                    <h3 className="font-serif font-bold text-rose-900 text-xl">緊急聯絡</h3>
                    <p className="text-rose-800/70 text-sm mt-1 max-w-md">遇緊急狀況請保持冷靜。美國報案請撥 911 (可要求中文翻譯)。</p>
                </div>
             </div>
             
             <div className="flex flex-wrap items-center gap-3 relative z-10">
                 <a href="tel:911" className="group flex items-center gap-4 pl-5 pr-6 py-3 bg-white rounded-2xl border border-rose-100 shadow-sm hover:shadow-md hover:border-rose-300 transition-all cursor-pointer">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">當地報案</span>
                        <span className="text-2xl font-black text-rose-900 leading-none group-hover:scale-105 transition-transform origin-left">911</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                        <PhoneIcon size={16} />
                    </div>
                 </a>

                 <a href="tel:+12139233591" className="group flex items-center gap-4 pl-5 pr-6 py-3 bg-white rounded-2xl border border-rose-100 shadow-sm hover:shadow-md hover:border-rose-300 transition-all cursor-pointer">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">駐洛杉磯辦事處</span>
                        <span className="text-lg font-bold text-stone-800 leading-none group-hover:text-rose-900 transition-colors">213-923-3591</span>
                    </div>
                     <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-500 group-hover:bg-stone-800 group-hover:text-white transition-colors">
                        <PhoneIcon size={16} />
                    </div>
                 </a>
             </div>
          </div>

          {/* Checklist */}
          <div className="md:col-span-7 bg-white rounded-3xl shadow-sm border border-stone-200 p-6">
              <h3 className="font-serif font-bold text-stone-800 mb-6 flex items-center gap-2 text-lg">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <CheckSquare size={18} />
                  </div>
                  行前準備清單
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {checklistItems.map((item, index) => {
                    const isChecked = checkedItems.has(index);
                    const Icon = item.icon;
                    return (
                        <div 
                            key={index}
                            onClick={() => toggleCheck(index)}
                            className={`cursor-pointer p-3 rounded-2xl border transition-all duration-300 flex items-start gap-3 select-none group ${
                                isChecked 
                                ? 'bg-stone-50 border-stone-100 opacity-60' 
                                : 'bg-white border-stone-100 hover:border-emerald-200 hover:shadow-md hover:-translate-y-0.5'
                            }`}
                        >
                            <div className={`w-6 h-6 mt-0.5 rounded-lg border flex items-center justify-center shrink-0 transition-all ${
                                isChecked ? 'bg-emerald-500 border-emerald-500 text-white scale-100' : 'border-stone-200 bg-stone-50 text-transparent scale-90 group-hover:scale-100'
                            }`}>
                                <CheckSquare size={14} />
                            </div>
                            <div className="min-w-0">
                                <h4 className={`text-sm font-bold transition-colors ${isChecked ? 'line-through text-stone-400' : 'text-stone-800 group-hover:text-emerald-700'}`}>{item.title}</h4>
                                <p className="text-[11px] text-stone-500 leading-tight mt-0.5">{item.desc}</p>
                            </div>
                        </div>
                    );
                  })}
              </div>
          </div>

          {/* Weather */}
          <div className="md:col-span-5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-6 text-white shadow-lg shadow-orange-200/50 relative overflow-hidden flex flex-col justify-between">
             <Sun className="absolute -right-8 -top-8 w-48 h-48 text-yellow-300 opacity-20 animate-pulse-slow pointer-events-none" />

             <div className="relative z-10 mb-6">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold mb-4 border border-white/20">
                    <ThermometerSun size={14} />
                    <span>四月氣候</span>
                 </div>
                 <h3 className="font-serif font-bold text-2xl">加州陽光<br/>與沙漠溫差</h3>
             </div>
             
             <div className="relative z-10 space-y-3">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors cursor-default">
                    <div className="flex justify-between items-end mb-1">
                        <span className="font-bold text-sm text-amber-50">沿海 (LA/SD)</span>
                        <span className="font-mono font-bold text-2xl tracking-tighter">12°-25°C</span>
                    </div>
                    <p className="text-[11px] text-white/80 leading-relaxed">早晚溫差大，洋蔥式穿搭。海風涼爽。</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors cursor-default">
                    <div className="flex justify-between items-end mb-1">
                        <span className="font-bold text-sm text-amber-50">內陸/沙漠</span>
                        <span className="font-mono font-bold text-2xl tracking-tighter">5°-30°C+</span>
                    </div>
                    <p className="text-[11px] text-white/80 leading-relaxed">極乾燥。大峽谷清晨極冷，需備保濕用品。</p>
                </div>
             </div>
          </div>

          {/* Accommodation Guide */}
          <div className="md:col-span-6 bg-white rounded-3xl shadow-sm border border-stone-200 p-6">
               <h3 className="font-serif font-bold text-stone-800 mb-6 flex items-center gap-2 text-lg">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <Hotel size={18} />
                  </div>
                  住宿策略
              </h3>
              <div className="space-y-4">
                 {[
                     { area: '哈仙達崗', eng: 'Hacienda Heights', tag: '基地', desc: '華人區生活機能佳，輻射旅遊中心點。4/1-4/4 住宿於此。', address: '1251 Marchmont Avenue, Hacienda Heights, CA 91745', color: 'bg-indigo-50 text-indigo-700' },
                     { area: '拉斯維加斯', eng: 'Las Vegas', tag: '跟團', desc: '跟團行程已安排：拉斯維加斯楓丹白露 (Fontainebleau Las Vegas)。', address: '2777 S Las Vegas Blvd, Las Vegas, NV 89109', color: 'bg-amber-50 text-amber-700' },
                     { area: '佩吉', eng: 'Page, AZ', tag: '跟團', desc: '跟團行程已安排：佩奇/鮑威爾湖戴斯套房酒店。', address: 'Page, AZ (具體地址依實際預訂為準)', color: 'bg-amber-50 text-amber-700' },
                     { area: '棕櫚泉', eng: 'Palm Springs', tag: '度假', desc: '建議選擇附泳池的度假飯店，享受沙漠綠洲。', address: '', color: 'bg-sky-50 text-sky-700' },
                     { area: '聖地牙哥', eng: 'San Diego', tag: '海景', desc: '推薦 Downtown 或 La Jolla 享受無敵海景。', address: '', color: 'bg-emerald-50 text-emerald-700' }
                 ].map((item, i) => (
                     <div key={i} className="flex items-start gap-4 pb-4 border-b border-stone-100 last:border-0 last:pb-0">
                         <span className={`text-[10px] font-bold px-2.5 py-1.5 rounded-lg uppercase tracking-wider shrink-0 w-12 text-center ${item.color}`}>{item.tag}</span>
                         <div>
                             <h4 className="text-sm font-bold text-stone-800 flex items-baseline gap-2">
                                {item.area} 
                                <span className="text-[10px] text-stone-400 font-normal">{item.eng}</span>
                             </h4>
                             <p className="text-xs text-stone-500 mt-1 leading-relaxed">{item.desc}</p>
                             {item.address && (
                                 <p className="text-[10px] text-stone-400 mt-1 font-mono">{item.address}</p>
                             )}
                         </div>
                     </div>
                 ))}
              </div>
          </div>

          {/* Local Tips */}
          <div className="md:col-span-6 bg-stone-900 rounded-3xl p-6 border border-stone-800 text-stone-300">
             <h3 className="font-serif font-bold text-white mb-6 flex items-center gap-2 text-lg">
                  <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-amber-400">
                     <Globe size={18} />
                  </div>
                  在地小撇步
              </h3>
              <ul className="space-y-5">
                  <li className="flex gap-4 group">
                      <span className="font-serif font-bold text-stone-700 text-2xl leading-none group-hover:text-amber-500 transition-colors">01</span>
                      <span className="flex-1 text-sm leading-relaxed">看到 <strong className="text-rose-400">STOP</strong> 標誌務必完全停止 3 秒，這非常重要，警察抓很嚴。</span>
                  </li>
                  <li className="flex gap-4 group">
                      <span className="font-serif font-bold text-stone-700 text-2xl leading-none group-hover:text-amber-500 transition-colors">02</span>
                      <span className="flex-1 text-sm leading-relaxed">高乘載車道 (HOV) 通常需 2 人以上，請注意標示與進入時段。</span>
                  </li>
                  <li className="flex gap-4 group">
                      <span className="font-serif font-bold text-stone-700 text-2xl leading-none group-hover:text-amber-500 transition-colors">03</span>
                      <span className="flex-1 text-sm leading-relaxed">車內 <strong className="text-rose-400">切勿放置</strong> 任何包包或外套在明顯處，避免被破窗偷竊。</span>
                  </li>
                  <li className="flex gap-4 group">
                      <span className="font-serif font-bold text-stone-700 text-2xl leading-none group-hover:text-amber-500 transition-colors">04</span>
                      <span className="flex-1 text-sm leading-relaxed">商品標價不含稅，結帳時會外加約 8-10% 的消費稅。</span>
                  </li>
                  <li className="flex gap-4 group">
                      <span className="font-serif font-bold text-stone-700 text-2xl leading-none group-hover:text-amber-500 transition-colors">05</span>
                      <span className="flex-1 text-sm leading-relaxed">水龍頭生水雖安全但口感不佳，建議去超市買大桶水飲用。</span>
                  </li>
              </ul>
          </div>
      </div>
    </div>
  );
};

// Helper Icon
const PhoneIcon = ({ size }: { size: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);