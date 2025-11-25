import React from 'react';
import { FLIGHTS } from '../constants';
import { Plane, Clock, Info, Armchair } from 'lucide-react';

export const Flights: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-8 pb-20">
      
      {/* Summary Card */}
      <div className="bg-stone-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
         {/* Abstract BG shapes */}
         <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 rounded-full blur-[60px] opacity-20 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-24 h-24 bg-sky-500 rounded-full blur-[50px] opacity-20 pointer-events-none"></div>

         <div className="relative z-10">
             <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-2xl font-serif font-bold">Flight Schedule</h2>
                    <p className="text-stone-400 text-sm mt-1">台北 (TPE) ⇌ 安大略 (ONT)</p>
                </div>
                <div className="text-right">
                    <div className="text-2xl font-serif italic font-bold">STARLUX</div>
                    <div className="text-xs text-stone-400 font-mono tracking-wider">A350-900</div>
                </div>
             </div>
             <div className="flex gap-3 text-xs md:text-sm text-stone-300 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                 <Info size={16} className="flex-shrink-0 mt-0.5 text-amber-400" />
                 <p className="leading-relaxed">請於起飛前 3 小時抵達機場。安大略機場 (ONT) 通關通常較 LAX 快速。</p>
             </div>
         </div>
      </div>

      <div className="space-y-6">
        {FLIGHTS.map((flight, index) => {
          const isOutbound = flight.type === 'Outbound';
          const [arriveTime, ...arriveDateParts] = flight.arrives.split(' ');
          const arriveDate = arriveDateParts.join(' ');
          
          return (
            <div key={index} className="filter drop-shadow-lg">
                <div className="bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row relative">
                    
                    {/* Color Strip (Top on Mobile, Left on Desktop) */}
                    <div className={`h-2 md:h-auto md:w-5 ${isOutbound ? 'bg-sky-500' : 'bg-emerald-500'}`}></div>
                    
                    {/* Ticket Content */}
                    <div className="flex-1 p-5 md:p-8 relative">
                        {/* Boarding Pass Cutouts (Desktop Only for simpler mobile layout) */}
                        <div className="hidden md:block absolute -top-3 right-[25%] w-6 h-6 bg-[#FDFCF8] rounded-full z-10 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1)]"></div>
                        <div className="hidden md:block absolute -bottom-3 right-[25%] w-6 h-6 bg-[#FDFCF8] rounded-full z-10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"></div>
                        <div className="hidden md:block absolute top-4 bottom-4 right-[25%] border-r-2 border-dashed border-stone-200"></div>

                        {/* Mobile Header Row */}
                        <div className="flex justify-between items-center mb-6">
                            <span className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider ${
                                isOutbound ? 'bg-sky-50 text-sky-700' : 'bg-emerald-50 text-emerald-700'
                            }`}>
                                {isOutbound ? 'Outbound 去程' : 'Inbound 回程'}
                            </span>
                            <div className="flex items-center gap-1.5 text-stone-400 text-xs font-medium px-2 py-1 rounded bg-stone-50">
                                <Clock size={12} />
                                {flight.duration}
                            </div>
                        </div>

                        {/* Route & Time Row */}
                        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-0 md:pr-[28%] mb-8">
                            {/* Departs */}
                            <div className="text-center md:text-left w-full md:w-auto">
                                <div className="text-4xl font-black text-stone-800 tracking-tight">{flight.departs}</div>
                                <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mt-1">
                                    {flight.route.split('->')[0].trim()}
                                </div>
                                <div className="text-xs font-medium text-stone-500 mt-1">{flight.date}</div>
                            </div>

                            {/* Plane Icon */}
                            <div className="flex flex-col items-center justify-center w-full md:flex-1 md:px-8">
                                <div className="w-full flex items-center gap-2 opacity-30">
                                    <div className="h-[1px] bg-stone-900 flex-1"></div>
                                    <Plane className={`text-stone-900 ${isOutbound ? 'rotate-90' : '-rotate-90'}`} size={20} />
                                    <div className="h-[1px] bg-stone-900 flex-1"></div>
                                </div>
                            </div>

                            {/* Arrives */}
                            <div className="text-center md:text-right w-full md:w-auto">
                                <div className="text-4xl font-black text-stone-800 tracking-tight">{arriveTime}</div>
                                <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mt-1">
                                    {flight.route.split('->')[1].trim()}
                                </div>
                                <div className="text-xs font-medium text-stone-500 mt-1">
                                    {flight.type === 'Inbound' && arriveDate ? arriveDate : flight.date}
                                </div>
                            </div>
                        </div>

                        {/* Footer Info */}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-5 border-t border-stone-100 gap-4 md:gap-0">
                             <div className="flex flex-col">
                                 <span className="text-[10px] uppercase text-stone-400 font-bold tracking-wider">Flight No.</span>
                                 <span className="font-mono font-bold text-lg text-stone-700">{flight.flightNo}</span>
                             </div>
                             
                             {/* Seat Info - Shifted to ensure it fits mobile */}
                             <div className="w-full md:w-[25%] md:flex md:flex-col md:justify-center md:pl-8 md:border-l-0">
                                <div className="flex md:block items-center gap-2">
                                    <Armchair size={16} className="text-stone-300 md:mb-1" />
                                    <div>
                                        <span className="block text-[10px] uppercase text-stone-400 font-bold tracking-wider">Class</span>
                                        <span className="text-xs font-medium text-stone-600 leading-tight block">{flight.seats}</span>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};