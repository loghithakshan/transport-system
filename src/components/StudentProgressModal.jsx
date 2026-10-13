import React from 'react';
import { useTransport } from '../context/TransportContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ShieldAlert, Activity, Clock, Book } from 'lucide-react';

const CircularProgress = ({ value, max, color }) => {
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const percentage = max > 0 ? (value / max) * 100 : 0;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <svg className="w-16 h-16 transform -rotate-90">
        <circle
          cx="32"
          cy="32"
          r={radius}
          className="text-slate-100"
          strokeWidth="6"
          stroke="currentColor"
          fill="transparent"
        />
        <circle
          cx="32"
          cy="32"
          r={radius}
          className={`${color} transition-all duration-1000 ease-out`}
          strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
        />
      </svg>
      <span className="absolute text-[11px] font-bold text-slate-700">
        {value}/{max}
      </span>
    </div>
  );
};

const StudentProgressModal = ({ isOpen, onClose }) => {
  const { student } = useTransport();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10 font-sans">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="w-full max-w-[1000px] bg-[#fffaf9] rounded-2xl overflow-hidden shadow-2xl relative z-10 border border-red-100 flex flex-col max-h-[90vh]"
        >
          {/* Mac-style Window Header */}
          <div className="bg-[#ffd9d9] px-4 py-2 flex items-center justify-between border-b border-red-200">
            <div className="flex gap-1.5">
              <div onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-600 transition" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-sm font-bold text-slate-800 absolute left-1/2 -translate-x-1/2">
              Student Progress
            </span>
            <div className="w-10"></div> {/* Spacer for centering */}
          </div>

          {/* Body Content */}
          <div className="flex-1 p-5 md:p-6 overflow-y-auto flex flex-col md:flex-row gap-6">
            
            {/* Left Column: Profile Card */}
            <div className="w-full md:w-[32%] flex flex-col gap-4">
              <div className="bg-white border border-red-200 rounded-2xl p-6 shadow-[0_2px_8px_rgba(220,38,38,0.05)] flex flex-col items-center text-center">
                
                <div className="w-24 h-24 rounded-full border-[3px] border-slate-700 p-0.5 mb-3 bg-white">
                  <img src="/profile.png" alt={student?.name || "Student"} className="w-full h-full rounded-full object-cover" />
                </div>
                
                <h2 className="text-[17px] font-bold text-slate-800 tracking-tight uppercase leading-none mb-1.5">{student?.name || "AISHWARYA S"}</h2>
                <p className="text-[13px] text-slate-500 font-medium mb-1">{student?.regNo || "192312533"}</p>
                <p className="text-[12px] text-slate-400 max-w-[200px] leading-tight mb-5">
                  B.Tech – Computer Science and Engineering
                </p>

                <div className="text-[44px] font-bold text-blue-600 leading-none mb-1 tracking-tight">9.00</div>
                <div className="text-[9px] font-bold text-slate-400 tracking-[0.15em] uppercase mb-4">
                  OVERALL CGPA
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-700 font-bold mb-4">
                  <Award className="w-3.5 h-3.5 text-slate-400" />
                  112 / 192 credits
                </div>

                <div className="bg-[#dcfce7] text-[#166534] px-4 py-1.5 rounded-full text-xs font-bold border border-green-200/50">
                  Excelling
                </div>
              </div>

              {/* Stats Widgets */}
              <div className="flex flex-col gap-2.5">
                <div className="bg-white border border-red-200 rounded-xl p-3.5 flex justify-between items-center shadow-[0_2px_8px_rgba(220,38,38,0.05)]">
                  <div className="flex items-center gap-2 text-[13px] font-bold text-slate-700">
                    <Activity className="w-4 h-4 text-blue-400" /> Happiness
                  </div>
                  <span className="font-bold text-slate-900 text-sm">65%</span>
                </div>
                <div className="bg-white border border-red-200 rounded-xl p-3.5 flex justify-between items-center shadow-[0_2px_8px_rgba(220,38,38,0.05)]">
                  <div className="flex items-center gap-2 text-[13px] font-bold text-slate-700">
                    <Clock className="w-4 h-4 text-emerald-400" /> Punctuality
                  </div>
                  <span className="font-bold text-slate-900 text-sm">97%</span>
                </div>
                <div className="bg-white border border-red-200 rounded-xl p-3.5 flex justify-between items-center shadow-[0_2px_8px_rgba(220,38,38,0.05)]">
                  <div className="flex items-center gap-2 text-[13px] font-bold text-slate-700">
                    <Book className="w-4 h-4 text-amber-400" /> Assignments
                  </div>
                  <span className="font-bold text-slate-400 text-sm">—</span>
                </div>
              </div>
            </div>

            {/* Right Column: Academic Progress */}
            <div className="w-full md:w-[68%] flex flex-col gap-5">
              
              {/* Academic Progress Section */}
              <div className="flex flex-col">
                <div className="bg-[#ffeaea] rounded-t-[14px] px-5 py-3.5 flex items-center justify-between border-t border-l border-r border-red-200">
                  <div className="flex items-center gap-2.5 font-bold text-[15px] text-slate-800">
                    <Award className="w-5 h-5 text-blue-600" /> Academic Progress
                  </div>
                  <button className="bg-[#fde8e8] text-slate-700 text-[11px] font-bold px-3 py-1.5 rounded-full border border-red-200 hover:bg-red-200 transition">
                    View Details
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 bg-transparent border-l border-r border-b border-red-200 rounded-b-[14px]">
                  {/* Card 1 */}
                  <div className="bg-white border border-red-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                    <CircularProgress value={7} max={10} color="text-blue-500" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">University Core</h4>
                      <p className="text-[11px] text-slate-500 font-semibold mt-1">CGPA <span className="text-slate-800 font-bold text-[13px] ml-1">9.00</span></p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white border border-red-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                    <CircularProgress value={0} max={2} color="text-sky-300" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">University Elective</h4>
                      <p className="text-[11px] text-slate-500 font-semibold mt-1">CGPA <span className="text-slate-800 font-bold text-[13px] ml-1">—</span></p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white border border-red-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                    <CircularProgress value={22} max={29} color="text-purple-500" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">Program Core</h4>
                      <p className="text-[11px] text-slate-500 font-semibold mt-1">CGPA <span className="text-slate-800 font-bold text-[13px] ml-1">9.00</span></p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white border border-red-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                    <CircularProgress value={0} max={6} color="text-pink-300" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">Program Elective</h4>
                      <p className="text-[11px] text-slate-500 font-semibold mt-1">CGPA <span className="text-slate-800 font-bold text-[13px] ml-1">—</span></p>
                    </div>
                  </div>

                  {/* Card 5 */}
                  <div className="bg-white border border-red-200 rounded-xl p-4 flex items-center gap-4 shadow-sm md:col-span-1">
                    <CircularProgress value={1} max={1} color="text-amber-500" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">Other</h4>
                      <p className="text-[11px] text-slate-500 font-semibold mt-1">CGPA <span className="text-slate-800 font-bold text-[13px] ml-1">—</span></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disciplinary Records Section */}
              <div className="flex flex-col border border-red-200 rounded-xl overflow-hidden shadow-sm bg-white">
                <div className="bg-[#ffeaea] px-5 py-3 flex items-center gap-2.5 font-bold text-[15px] text-slate-800 border-b border-red-200">
                  <ShieldAlert className="w-4 h-4 text-red-500" /> Disciplinary Records
                </div>
                <div className="p-8 flex items-center justify-center">
                  <p className="text-[13px] text-slate-600 font-medium tracking-wide">No disciplinary records found.</p>
                </div>
              </div>
              
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default StudentProgressModal;
