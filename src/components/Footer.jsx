import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="w-full  h-1/12 text-center  bg-slate-200  flex flex-col justify-center items-center">
      <div >
        <p className="text-xs text-gray-500">Copyright Ⓒ 2024 All rights reserved. 京ICP备2024093037号-1 拥有违法违规文件自动审查系统 请勿上传违法违规内容 Powerd by jiangmuran.com.</p>
      </div>
    </footer>
  );
}
