'use client'
import SideNav from '@/app/ui/dashboard/sidenav';
import { useState } from 'react';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  // 路由变化了之后, num 是否会重新渲染，起决于路由是全刷新，还是懒加载
  const [num, setNum] = useState(1);
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">
        <h3 onClick={() => setNum(s => s + 1)}>{num}</h3>
        {children}
      </div>
    </div>
  );
}