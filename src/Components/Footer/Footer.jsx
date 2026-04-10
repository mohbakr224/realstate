import React from 'react';
import logo from "../../assets/images/Logo Option.png";

export default function Footer() {
  return (
    <footer className="bg-white text-base-content border-t border-gray-100">
      {/* Main Footer Grid */}
      <div className="footer p-10 max-w-7xl mx-auto flex justify-between">
        
        {/* Column 1: Brand */}
        <aside className="">
          <img src={logo} alt="Grand Atlas" className="w-32" />
           <p className="text-sm text-slate-500 mt-[-20px]">+1 (7635) 547-12-97</p>
          <div className="text-sm text-slate-500 mt-3 ">
            <p>support@lift.agency</p>
          </div>
        </aside>

        {/* Column 2: Quick Links */}
        <nav>
          <h6 className="footer-title opacity-100 text-slate-900 font-bold capitalize">Quick Links</h6>
          <a className="link link-hover text-slate-500">Home</a>
          <a className="link link-hover text-slate-500">Inventories</a>
          <a className="link link-hover text-slate-500">Zones</a>
          <a className="link link-hover text-slate-500">Developers</a>
          <a className="link link-hover text-slate-500">Contact Us</a>
        </nav>

        {/* Column 3: About */}
        <nav>
          <h6 className="footer-title opacity-100 text-slate-900 font-bold capitalize">About</h6>
          <a className="link link-hover text-slate-500">Grand Atlas</a>
          <a className="link link-hover text-slate-500">Privacy Policy</a>
          <a className="link link-hover text-slate-500">Legal</a>
          <a className="link link-hover text-slate-500">Help</a>
          <a className="link link-hover text-slate-500">Support</a>
        </nav>

        {/* Column 4: Newsletter */}
        <form>
          <h6 className="footer-title opacity-100 text-slate-900 font-bold capitalize">Get In Touch</h6>
          <div className="join border border-slate-200 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Get product updates"
              className="input join-item w-full focus:outline-none bg-white text-sm"
            />
            <button className="btn bg-[#8B1A1A] hover:bg-[#6b1414] text-white join-item border-none h-10 px-4">
              <span className="text-lg">→</span>
            </button>
          </div>

          <div className="flex gap-3 mt-6">
            <a className="w-8 h-8 rounded-full border border-red-800 flex items-center justify-center text-red-800 hover:bg-red-800 hover:text-white transition-all text-xs">in</a>
            <a className="w-8 h-8 rounded-full border border-red-800 flex items-center justify-center text-red-800 hover:bg-red-800 hover:text-white transition-all text-xs">f</a>
            <a className="w-8 h-8 rounded-full border border-red-800 flex items-center justify-center text-red-800 hover:bg-red-800 hover:text-white transition-all text-xs">t</a>
          </div>
        </form>
      </div>

      {/* FIXED COPYRIGHT SECTION */}
      <div className="  text-center p-6 border-t border-gray-100 text-slate-400 text-sm">
        <aside>
          <p>© 2020 Lift Media. All rights reserved</p>
        </aside>
      </div>
    </footer>
  );
}