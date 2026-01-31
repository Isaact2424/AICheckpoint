import React, { useState } from 'react';
import { ChevronRight, Home, BookOpen } from 'lucide-react';

const SenseiCheckpoint = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const modules = [
    { id: 1, color: 'bg-white', textColor: 'text-black' },
    { id: 2, color: 'bg-yellow-300', textColor: 'text-black' },
    { id: 3, color: 'bg-orange-500', textColor: 'text-white' },
    { id: 4, color: 'bg-green-500', textColor: 'text-black' },
    { id: 5, color: 'bg-blue-600', textColor: 'text-white' },
    { id: 6, color: 'bg-pink-500', textColor: 'text-white' },
    { id: 7, color: 'bg-amber-700', textColor: 'text-white' },
    { id: 8, color: 'bg-red-600', textColor: 'text-white' },
    { id: 9, color: 'bg-black', textColor: 'text-white' }
  ];

  const lessons = [
    { id: '1-1', color: 'bg-white', textColor: 'text-black' },
    { id: '1-2', color: 'bg-yellow-300', textColor: 'text-black' },
    { id: '1-3', color: 'bg-orange-500', textColor: 'text-white' },
    { id: '1-4', color: 'bg-green-500', textColor: 'text-black' },
    { id: '1-5', color: 'bg-blue-600', textColor: 'text-white' },
    { id: '1-6', color: 'bg-pink-500', textColor: 'text-white' },
    { id: '1-7', color: 'bg-amber-700', textColor: 'text-white' },
    { id: '1-8', color: 'bg-red-600', textColor: 'text-white' },
    { id: '1-9', color: 'bg-white', textColor: 'text-black' }
  ];

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-pink-700 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2 text-white">
            <Home size={24} />
            <span className="text-xl">Home</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg p-12 text-center">
          <div className="flex justify-between items-center mb-12">
            <div className="w-32 h-32 bg-cyan-400 rounded-lg flex items-center justify-center">
              <div className="w-24 h-24 bg-black rounded-full"></div>
            </div>
            
            <div>
              <h1 className="text-5xl font-bold text-white mb-2" style={{ fontFamily: 'monospace' }}>
                Sensei Isaac's
              </h1>
              <h2 className="text-5xl font-bold text-white" style={{ fontFamily: 'monospace' }}>
                AI Checkpoint
              </h2>
            </div>
            
            <div className="w-32 h-32 flex items-center justify-center">
              <div className="w-24 h-24 bg-black rounded-full"></div>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center mb-8">
            <button 
              onClick={() => setCurrentPage('modules')}
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              I'm ready to LEVEL UP
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Ninja Review
            </button>
          </div>
          
          <div className="bg-white rounded-lg p-4 inline-block">
            <div className="w-80 h-64 bg-gray-200 rounded flex items-center justify-center">
              <div className="text-6xl">🥷🤖</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ModuleSelectPage = () => (
    <div className="min-h-screen bg-blue-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-4">
            <button onClick={() => setCurrentPage('home')} className="text-white hover:text-gray-300">
              <Home size={24} />
            </button>
            <span className="text-white text-xl">/page</span>
          </div>
          <button className="text-white text-3xl">+</button>
        </div>

        <p className="text-blue-300 mb-4">Desktop · Primary</p>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="w-64 h-64 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <div className="text-6xl">🥷</div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-8 flex flex-col items-center justify-center">
            <div className="text-5xl mb-4">🎮</div>
            <h2 className="text-white text-3xl font-bold mb-2" style={{ fontFamily: 'monospace' }}>
              Level Select:
            </h2>
            <p className="text-white text-2xl" style={{ fontFamily: 'monospace' }}>
              Select Your Module
            </p>
          </div>

          <div className="w-64 h-64 bg-white rounded-lg flex items-center justify-center">
            <div className="text-6xl">🤖</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 rounded-lg p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full" 
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px),
                                  repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
              }}
            ></div>
          </div>
          
          <div className="relative grid grid-cols-4 gap-6 mb-6">
            {modules.slice(0, 4).map((module) => (
              <button
                key={module.id}
                onClick={() => setCurrentPage('lessons')}
                className={`${module.color} ${module.textColor} px-6 py-3 rounded-full font-bold text-lg hover:scale-110 transition-transform`}
              >
                Module {module.id}
              </button>
            ))}
          </div>
          
          <div className="relative grid grid-cols-3 gap-6 mb-6">
            {modules.slice(4, 7).map((module) => (
              <button
                key={module.id}
                onClick={() => setCurrentPage('lessons')}
                className={`${module.color} ${module.textColor} px-6 py-3 rounded-full font-bold text-lg hover:scale-110 transition-transform`}
              >
                Module {module.id}
              </button>
            ))}
          </div>
          
          <div className="relative grid grid-cols-2 gap-6">
            {modules.slice(7, 9).map((module) => (
              <button
                key={module.id}
                onClick={() => setCurrentPage('lessons')}
                className={`${module.color} ${module.textColor} px-6 py-3 rounded-full font-bold text-lg hover:scale-110 transition-transform`}
              >
                Module {module.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const LessonSelectPage = () => (
    <div className="min-h-screen bg-blue-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-4">
            <button onClick={() => setCurrentPage('modules')} className="text-white hover:text-gray-300">
              <Home size={24} />
            </button>
            <span className="text-white text-xl">/page-2</span>
          </div>
          <button className="text-white text-3xl">+</button>
        </div>

        <p className="text-blue-300 mb-4">Desktop · Primary</p>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-800 rounded-lg p-8 flex flex-col items-center justify-center">
            <div className="text-5xl mb-4">🎮</div>
            <h2 className="text-white text-3xl font-bold mb-2" style={{ fontFamily: 'monospace' }}>
              Level Select:
            </h2>
            <p className="text-white text-2xl" style={{ fontFamily: 'monospace' }}>
              Select Your Lesson
            </p>
          </div>

          <div className="bg-white rounded-lg flex items-center justify-center p-8">
            <div className="text-6xl">🥷🤖</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 rounded-lg p-8 relative overflow-hidden">
          <div className="absolute inset 0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px),
                                  repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
              }}
            ></div>
          </div>

          <div className="relative grid grid-cols-4 gap-6 mb-6">
            {lessons.slice(0, 4).map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => setCurrentPage('loading')}
                className={`${lesson.color} ${lesson.textColor} px-6 py-3 rounded-full font-bold text-lg hover:scale-110 transition-transform`}
              >
                Module {lesson.id}
              </button>
            ))}
          </div>

          <div className="relative grid grid-cols-3 gap-6 mb-6">
            {lessons.slice(4, 7).map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => setCurrentPage('loading')}
                className={`${lesson.color} ${lesson.textColor} px-6 py-3 rounded-full font-bold text-lg hover:scale-110 transition-transform`}
              >
                Module {lesson.id}
              </button>
            ))}
          </div>

          <div className="relative grid grid-cols-2 gap-6">
            {lessons.slice(7, 9).map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => setCurrentPage('loading')}
                className={`${lesson.color} ${lesson.textColor} px-6 py-3 rounded-full font-bold text-lg hover:scale-110 transition-transform`}
              >
                Module {lesson.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const LoadingPage = () => (
    <div className="min-h-screen bg-blue-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-4">
            <button onClick={() => setCurrentPage('lessons')} className="text-white hover:text-gray-300">
              <Home size={24} />
            </button>
            <span className="text-white text-xl">/page-3</span>
          </div>
          <button className="text-white text-3xl">+</button>
        </div>

        <p className="text-blue-300 mb-4">Desktop · Primary</p>

        <div className="flex gap-8 mb-8">
          <div className="w-48 h-48 bg-blue-800 rounded-lg flex items-center justify-center">
            <div className="text-6xl opacity-50">🥷</div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="text-6xl">🥷🤖🏄</div>
          </div>

          <div className="w-48 h-48 bg-blue-800 rounded-lg flex items-center justify-center">
            <div className="text-6xl opacity-50">🥷</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-24 flex items-center justify-center">
          <div className="animate-pulse">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-600">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'modules' && <ModuleSelectPage />}
      {currentPage === 'lessons' && <LessonSelectPage />}
      {currentPage === 'loading' && <LoadingPage />}
    </div>
  );
};

export default SenseiCheckpoint;