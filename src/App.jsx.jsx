import React, { useState } from 'react';
import { 
  Calendar, MapPin, Clock, CreditCard, Info, AlertTriangle, 
  Train, ShoppingBag, Utensils, Plane, ArrowRight, Home, 
  Star, Coffee, Zap, Store, Users, Navigation, Footprints, ExternalLink, Car
} from 'lucide-react';

const App = () => {
  const [activeDay, setActiveDay] = useState(0);

  // 外部連結與資訊
  const links = {
    subwayMap: "https://www.kotsu.city.nagoya.jp/rp/subway/routemap.html",
    kintetsuNagoyaToShiroko: "https://transfer.navitime.biz/kintetsu/pc/diagram/TrainDiagram?stCode=00000213&rrCode=00000055&updown=1",
    kintetsuShirokoToNagoya: "https://transfer.navitime.biz/kintetsu/pc/diagram/TrainDiagram?stCode=00000329&rrCode=00000055&updown=0",
    address: "〒464-0848 愛知縣名古屋市千種區春岡 1-5-5",
    stayName: "第47プロスパ (池下/今池)"
  };

  const tripData = [
    {
      day: "Day 1",
      date: "2026 7/7 (二)",
      title: "7/7 啟程名古屋 🏠 兩梯次集合",
      icon: <Plane className="text-blue-500" size={20} />,
      dailyAlert: "📢 暑假旺季人潮眾多，請務必提前抵達機場，預留安檢排隊時間！A組與B組將於民宿會合，晚上超市補給。",
      schedule: [
        { 
          time: "06:00", 
          event: "📍 A 組報到 (虎航 IT 706)", 
          desc: "【A組】虎航 09:00 起飛。\n報到建議：06:00 - 06:30 抵達桃園 T1 櫃檯。",
          transport: "建議最晚 06:30 完成集合。"
        },
        { 
          time: "08:45", 
          event: "📍 B 組報到 (國泰 CX 530)", 
          desc: "【B組】國泰 11:45 起飛。\n報到建議：08:45 - 09:15 抵達桃園 T2 櫃檯。",
          transport: "國泰櫃檯人潮較多，請提早抵達。"
        },
        { 
          time: "14:15", 
          event: "🚆 A 組前往名古屋市區", 
          desc: "A 組抵達後可先於機場 第一航廈4F 用餐。",
          transport: "【名鐵 名古屋機場 ➔ 名古屋站】\n• μ-SKY 14:07 / 特急 14:27\n票價：\n大人 🎫 ¥1,250 (μ-SKY)\n大人 🎫 ¥890 (特急一般)\n請在機場辦好小孩 IC 卡!"
        },
        { 
          time: "16:30", 
          event: "🚆 B 組前往名古屋市區", 
          desc: "B 組預計 15:35 抵達，直接前往民宿會合。",
          transport: "【地下鐵-東山線(黃線)】\n名古屋站 ➔ 池下站 (往藤之丘方向)\n經過 6 站 / 約 12 分鐘\n票價：\n🎫 ¥250",
          walkLink: "https://www.google.com/maps/dir/?api=1&destination=第47プロスパ&travelmode=walking"
        },
        { 
          event: "🏘️ 前往民宿辦理入住", 
          desc: "『第47プロスパ』放行李休息。",
          transport: "【轉乘指引：名鐵 ➔ 地鐵】\n名鐵名古屋站下車後走中央改札口，搭電梯至 B1 依照黃色 M 指標前往地鐵東山線中改札口。\n\n【地下鐵-東山線(黃線)】\n名古屋站 ➔ 池下站 (往藤之丘方向 / 6 站 / 12 分)\n\n票價：\n🎫 ¥250",
          walkLink: "https://www.google.com/maps/dir/?api=1&destination=第47プロスパ&travelmode=walking"
        },
        { 
          time: "18:00", 
          event: "🛒 MaxValu 今池店", 
          desc: "24 小時大型超市補給。",
          transport: "從民宿步行約 8 分鐘可達。",
          walkLink: "https://www.google.com/maps/dir/?api=1&destination=MaxValu+Imaike&travelmode=walking"
        },
        { 
          time: "23:10", 
          event: "📍 C 組報到 (樂桃 MM 722)", 
          desc: "【C組】樂桃 02:10 (7/8凌晨) 起飛。\n報到建議：23:10 抵達桃園 T1 櫃檯。",
          transport: "半夜安檢人潮雖少，但樂桃自助報到有時需排隊。"
        }
      ]
    },
    {
      day: "Day 2",
      date: "7/8 (三)",
      title: "7/8 C 組加入 🏯 12人全員到齊",
      icon: <Star className="text-cyan-500" size={20} />,
      dailyAlert: "C 組清晨抵達辛苦了！今日傍晚行程集中在榮商圈.Oasis 21 頂層拍照效果極佳！",
      schedule: [
        { 
          time: "06:05", 
          event: "🛬 C 組抵達名古屋", 
          desc: "【C組】樂桃 MM 722 (06:05 降落)。",
          transport: "預計 07:30 離開機場搭乘名鐵。\n票價：\n🎫 ¥890"
        },
        { 
          time: "09:30", 
          event: "🏯 名古屋城", 
          desc: "必看本丸御殿，金鯱橫丁逛街。開放時間：09:00 - 16:30",
          transport: "【地下鐵-東山線(黃線)】\n池下 ➔ 榮 (往高畑方向 / 4 站 / 7分)\n🎫 ¥210\n【地下鐵-名城線(紫線)】\n榮 ➔ 名古屋城站 (往大曾根方向 / 2 站 / 5分)\n🎫 ¥210\n出口：7 號出口電梯。",
          tickets: "大人 ¥500",
          walkLinks: [
            { label: '開啟步行導航 (前往名古屋城)', url: 'https://www.google.com/maps/dir/?api=1&destination=Nagoya+Castle&travelmode=walking' },
            { label: '開啟步行導航 (前往名古屋城地鐵站)', url: 'https://www.google.com/maps/dir/?api=1&destination=Nagoyajo+Station&travelmode=walking' }
          ]
        },
        { 
          time: "11:40", 
          event: "🍱 午餐：馬喰一代-飛驒牛", 
          desc: "榮站附近 BINO 5F。",
          transport: "【地下鐵-名城線(紫線)】\n名古屋城 ➔ 榮 (往金山、新瑞橋方向 / 2 站 / 4分)\n🎫 ¥210 \n建議出口：サカエチカ（Sakaechika）地下街 10 號出口",
          walkLink: "https://www.google.com/maps/dir/?api=1&destination=Hida+Gyu+Ittouya+Bakuroichidai+Nagoya+Sakae&travelmode=walking"
        },
        { 
          time: "15:30", 
          event: "⚡ 寶可夢中心 Nagoya", 
          desc: "名古屋 PARCO 東館 2F。",
          transport: "【地下鐵-名城線(紫線)】\n名古屋港 ➔ 矢場町 (往大曾根方向 / 10 站 / 22分)\n🎫 ¥270\n出口：南檢票口出來 4 號出口方向，直通地下聯絡通道往 PARCO B1。",
          walkLink: "https://www.google.com/maps/dir/?api=1&destination=Pokemon+Center+Nagoya&travelmode=walking"
        },
        { 
          time: "17:30", 
          event: "🍱 晚餐：蓬萊軒 鰻魚飯", 
          desc: "松坂屋南館 10F。",
          transport: "PARCO 與松坂屋有連通道，步行約 3-5 分鐘。",
          walkLink: "https://www.google.com/maps/dir/?api=1&destination=Atsuta+Horaiken+Matsuzakaya&travelmode=walking"
        },
        { 
          time: "19:30", 
          event: "🏙️ Oasis 21 展望台", 
          desc: "電視塔與水之宇宙船夜景。",
          transport: "從松坂屋/榮商圈步行約 10 分鐘。",
          tickets: "Tower：大人約 ¥1,300 / Oasis 21：免費",
          walkLink: "https://www.google.com/maps/dir/?api=1&destination=Oasis+21&travelmode=walking"
        },
        { 
          time: "21:15", 
          event: "🏠 返回民宿休息", 
          desc: "從榮站直接搭車回民宿。",
          transport: "【地下鐵-東山線(黃線)】\n榮 ➔ 池下 (往藤之丘方向 / 4 站 / 7分)\n🎫 ¥210",
          walkLink: "https://www.google.com/maps/dir/?api=1&destination=第47プロスパ&travelmode=walking"
        }
      ]
    },
    {
      day: "Day 3",
      date: "7/9 (三)",
      title: "7/9 樂高樂園 🧱 孩子的主場",
      icon: <Zap className="text-red-500" size={20} />,
      dailyAlert: "樂園 17 點關門。12 人團體較大，建議事先在 App 上確認遊樂設施排隊時間。",
      schedule: [
        { 
          time: "10:00", 
          event: "🎡 LEGOLAND Japan", 
          desc: "營業時間：10:00 - 17:00",
          transport: "【地下鐵-東山線(黃線)】\n池下 ➔ 名古屋 (往高畑方向 / 6 站 / 12分)\n🎫 ¥270\n【地下鐵-青波線(藍線)】\n名古屋 ➔ 金城埠頭 (往金城埠頭 / 10 站 / 24分)\n🎫 ¥360\n出口：終點站出站即達。",
          tickets: "大人約 ¥7,100 / 兒童 ¥4,600\n(可於KLOOK/KKDAY預購)",
          walkLink: "https://www.google.com/maps/dir/?api=1&destination=LEGOLAND+Japan+Resort&travelmode=walking"
        },
        { 
          time: "17:30", 
          event: "🍕 Maker's Pier 晚餐", 
          desc: "樂園門口餐廳區，多樣化選擇。",
          transport: "步行移動。",
          walkLink: "https://www.google.com/maps/dir/?api=1&destination=Maker's+Pier&travelmode=walking"
        },
        { 
          time: "20:00", 
          event: "🏠 返回民宿", 
          desc: "結束樂高之日。",
          transport: "【地下鐵-青波線(藍線)】\n金城埠頭 ➔ 名古屋 (24分)\n🎫 ¥360\n【地下鐵-東山線(黃線)】\n名古屋 ➔ 池下 (往藤之丘方向 / 12分)\n🎫 ¥270",
          walkLink: "https://www.google.com/maps/dir/?api=1&destination=第47プロスパ&travelmode=walking"
        }
      ]
    },
    {
      day: "Day 4",
      date: "7/10 (五)",
      title: "7/10 鈴鹿賽道 🏎️ 賽車體驗日",
      icon: <Zap className="text-orange-500" size={20} />,
      dailyAlert: "路程最遠，本日包車。\n玩水樂園要記得帶泳衣唷!",
      schedule: [
        { 
          time: "08:30", 
          event: "🚆 出發名古屋車站", 
        },
        { 
          time: "17:00", 
          event: "🏠 返回民宿", 
          desc: "今日車程長，大家在車上小睡休息。",
        }
      ]
    },
    {
      day: "Day 5",
      date: "7/11 (六)",
      title: "7/11 名古屋水族館 🐬與美食",
      icon: <Utensils className="text-yellow-600" size={20} />,
      dailyAlert: "週六建議購買『週末環保券 Eco Kippu (🎫 ¥620)』，今日地鐵無限次搭乘！",
      schedule: [
        { 
          time: "09:30", 
          event: "🐠 名古屋港水族館", 
          desc: "營業時間：09:30 - 17:30",
          transport: "【地下鐵-東山線(黃線)】\n池下 ➔ 榮 (往高畑方向 / 4 站 / 7分)\n🎫 ¥210\n【地下鐵-名城線(紫線)】\n榮 ➔ 名古屋港 (往名古屋港方向 / 8 站 / 18分)\n🎫 ¥250\n出口：3 號出口電梯。",
          tickets: "大人 ¥2,030 / 小學生 ¥1,010\n(可於KLOOK/KKDAY預購)",
          walkLink: "https://www.google.com/maps/dir/?api=1&destination=Nagoya+Public+Aquarium&travelmode=walking",
          extra: "🐬 表演提醒：\n• 海豚表演: 11:00 (北館 3F)\n• 虎鯨訓練: 12:00 (北館 3F)"
        },
        { 
          time: "14:30", 
          event: "🏮 大須商店街", 
          desc: "炸蝦三明治 (Konparu) 與藥妝購物。",
          transport: "【地下鐵-名城線(紫線)】\n名古屋港站 ➔ 上前津站 (往大曾根、大德寺方向 / 9 站 / 18分)\n🎫 ¥270\n出口：9 號出口電梯。",
          walkLink: "https://www.google.com/maps/dir/?api=1&destination=Osu+Shopping+District&travelmode=walking"
        },      
        { 
          time: "18:30", 
          event: "🍱 晚餐時間", 
          desc: "商店街附近或榮商圈聚餐。",
          transport: "【地下鐵-名城線(紫線)】\n上前津 ➔ 榮 (2 站 / 4分)\n🎫 ¥210\n【地下鐵-東山線(黃線)】\n榮 ➔ 池下 (往藤之丘方向 / 4 站 / 7分)\n🎫 ¥210",
          walkLink: "https://www.google.com/maps/dir/?api=1&destination=第47プロスパ&travelmode=walking"
        }
      ]
    },
    {
      day: "Day 6",
      date: "7/12 (日)",
      title: "7/12 賦歸 ✈️ 三梯次離境",
      icon: <ShoppingBag className="text-pink-500" size={20} />,
      dailyAlert: "今日三梯次離境時間不同，請務必記好自己的「機場報到時間」。行李可先寄放在名古屋車站。",
      schedule: [
        { 
          time: "10:30", 
          event: "🚄 磁浮鐵道館", 
          desc: "12 人最後的大團體活動。",
          transport: "【地下鐵-東山線(黃線)】\n池下 ➔ 名古屋 (往高畑方向 / 12分)\n🎫 ¥270\n【地下鐵-青波線(藍線)】\n名古屋 ➔ 金城埠頭 (往金城埠頭 / 10 站 / 24分)\n🎫 ¥360\n出口：出站步行 2 分鐘。",
          tickets: "大人 ¥1,000 / 兒童 ¥500\n(建議官網或現場購票)",
          walkLink: "https://www.google.com/maps/dir/?api=1&destination=SCMAGLEV+and+Railway+Park&travelmode=walking"
        },
        { 
          time: "13:45", 
          event: "📍 B 組報到 (國泰 CX 531)", 
          desc: "【B組】16:45 起飛。\n報到建議：13:45 批次抵達機場櫃檯。",
          transport: "【名鐵 μ-SKY】名古屋站 ➔ 機場\n票價：\n🎫 ¥1,250"
        },
        { 
          time: "16:55", 
          event: "📍 C 組報到 (星宇 JX 839)", 
          desc: "【C組】19:55 起飛。\n報到建議：16:55 批次抵達機場櫃檯。",
          transport: "【名鐵 μ-SKY】名古屋站 ➔ 機場\n票價：\n🎫 ¥1,250"
        },
        { 
          time: "18:20", 
          event: "📍 A 組報到 (虎航 IT 707)", 
          desc: "【A組】21:20 起飛。\n報到建議：18:20 批次抵達機場櫃檯。",
          transport: "【名鐵 μ-SKY】名古屋站 ➔ 機場\n票價：\n🎫 ¥1,250"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-200 flex justify-center py-0 sm:py-8 px-0 sm:px-4 font-sans text-slate-900">
      <div className="w-full max-w-[420px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.2)] sm:rounded-[3rem] overflow-hidden flex flex-col relative">
        
        {/* Top Header */}
        <div className="bg-gradient-to-br from-indigo-800 via-blue-700 to-sky-600 text-white px-5 pt-8 pb-6 shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-black tracking-tight leading-none mb-2">2026 名古屋行</h1>
              <p className="text-[12px] opacity-90 font-medium flex items-center gap-1">
                <Users size={12} /> 8 大 4 小 • 家族大團
              </p>
            </div>
            <div className="bg-white/20 p-2 rounded-2xl backdrop-blur-sm shadow-inner">
              <Plane size={24} />
            </div>
          </div>
        </div>

        {/* Day Tabs */}
        <div className="flex overflow-x-auto gap-2 px-4 py-4 no-scrollbar bg-white sticky top-0 z-20 border-b border-slate-200">
          {tripData.map((d, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-xl font-black text-sm transition-all ${
                activeDay === index 
                ? "bg-indigo-600 text-white shadow-lg scale-105" 
                : "bg-slate-100 text-slate-400 hover:bg-slate-200"
              }`}
            >
              D{index + 1}
            </button>
          ))}
        </div>

        {/* Daily Alert Section */}
        <div className="px-4 mt-2">
          <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-2xl shadow-md">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-orange-500 flex-shrink-0 mt-0.5" size={18} />
              <div>
                <h4 className="text-[11px] font-black text-orange-800 uppercase tracking-wider mb-1">今日特別注意事項</h4>
                <p className="text-[13px] font-bold text-orange-950 leading-snug">
                  {tripData[activeDay].dailyAlert}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule List */}
        <div className="px-4 mt-6 space-y-6 pb-28 overflow-y-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-indigo-50 rounded-lg">
              {tripData[activeDay].icon}
            </div>
            <h2 className="text-xl font-black text-slate-800 tracking-tight leading-none">
              {tripData[activeDay].title}
            </h2>
          </div>

          <div className="relative space-y-10 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
            {tripData[activeDay].schedule.map((item, i) => (
              <div key={i} className="relative pl-9 group">
                <div className="absolute left-0 top-1.5 w-6 h-6 bg-white border-4 border-indigo-600 rounded-full z-10 shadow-sm" />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-indigo-500 tracking-widest">{item.time}</span>
                  <h3 className="font-bold text-[17px] text-slate-800 leading-tight">{item.event}</h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed mb-2 whitespace-pre-line">{item.desc}</p>
                  
                  {/* Detailed Box - Darker Blue-Grey */}
                  <div className="bg-slate-300 p-4 rounded-2xl border border-slate-300 space-y-3 text-slate-800 shadow-sm">
                    <div className="flex items-start gap-2 text-[12px]">
                      <Train size={14} className="flex-shrink-0 mt-0.5 text-indigo-700" />
                      <span className="whitespace-pre-line leading-snug font-medium text-slate-900">{item.transport}</span>
                    </div>
                    
                    {(item.tickets || item.ticketsInfo) && (
                      <div className="flex items-start gap-2 text-[12px] font-bold text-emerald-800 pt-2 border-t border-slate-400/30">
                        <CreditCard size={14} className="flex-shrink-0 mt-0.5" />
                        <span className="whitespace-pre-line leading-normal font-bold">
                          {item.tickets}
                        </span>
                      </div>
                    )}

                    {item.extra && (
                      <div className="bg-white/70 p-3 rounded-lg text-[11px] font-medium text-slate-800 whitespace-pre-line border border-slate-300/30">
                        <div className="font-bold text-indigo-700 mb-1 flex items-center gap-1">
                          <Star size={10} /> 相關與表演資訊：
                        </div>
                        {item.extra}
                      </div>
                    )}

                    {/* 情況 A：只有單個連結時的渲染（相容其他行程） */}
                    {item.walkLink && !item.walkLinks && (
                      <a 
                        href={item.walkLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95"
                      >
                        {item.event.includes('計程車') ? <Car size={14} /> : <Navigation size={14} />} 
                        {item.event.includes('計程車') ? '開啟路線參考 (Google Maps)' : '開啟步行導航 (Google Maps)'}
                      </a>
                    )}

                    {/* 情況 B：有多個連結時的渲染（專屬名古屋城這類行程） */}
                    {item.walkLinks && (
                      <div className="space-y-2 w-full">
                        {item.walkLinks.map((link, linkIndex) => (
                          <a 
                            key={linkIndex}
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95"
                          >
                            <Navigation size={14} />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Spare Section & Address Section */}
            <div className="pt-4 mt-6 border-t-2 border-slate-100 space-y-4">
              {/* Links Box */}
              <div className="bg-slate-100 rounded-2xl p-4 border border-slate-200 shadow-inner">
                <div className="flex items-center gap-2 text-indigo-700 font-black text-sm mb-3">
                  <Info size={16} /> 備用
                </div>
                <div className="space-y-2">
                  <a href={links.subwayMap} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-indigo-50 transition-colors">
                    <span>中文版名古屋地鐵路線圖</span>
                    <ExternalLink size={14} className="text-indigo-600" />
                  </a>
                  <a href={links.kintetsuNagoyaToShiroko} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-indigo-50 transition-colors">
                    <span>近鐵特急時刻表 (名古屋➔白子)</span>
                    <ExternalLink size={14} className="text-indigo-600" />
                  </a>
                  <a href={links.kintetsuShirokoToNagoya} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-indigo-50 transition-colors">
                    <span>近鐵特急時刻表 (白子➔名古屋)</span>
                    <ExternalLink size={14} className="text-indigo-600" />
                  </a>
                </div>
              </div>

              {/* Accommodation Box */}
              <div className="bg-indigo-50 rounded-2xl p-4 border border-indigo-100">
                <div className="flex items-center gap-2 text-indigo-800 font-black text-sm mb-2">
                  <Home size={16} /> 住宿資訊
                </div>
                <div className="text-[11px] leading-relaxed text-indigo-900">
                  <span className="font-bold block text-sm mb-1">{links.stayName}</span>
                  {links.address}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 px-6 py-3 flex justify-between items-center text-[10px] font-bold text-slate-400 z-30">
          <div className="flex items-center gap-1">
            <Store size={12} /> 超市：MaxValu, 成城石井
          </div>
          <div className="flex items-center gap-1 text-orange-500">
            <Utensils size={12} /> 必吃：炸蝦三明治, 鰻魚飯
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
