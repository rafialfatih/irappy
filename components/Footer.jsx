import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="mt-5 text-xs py-10 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="mx-6 my-6 md:mx-auto">
            <span className="font-semibold">Yang Baru</span>
            <ul className="mt-3">
              <li>Microsoft 365</li>
            </ul>
          </div>
          <div className="mx-6 my-6 md:mx-auto">
            <span className="font-semibold">Microsoft Store</span>
            <ul className="mt-3">
              <li className="mt-4">Profil akun</li>
              <li className="mt-4">Pusat unduh</li>
              <li className="mt-4">Pengembalian</li>
              <li className="mt-4">Pelacakan pesanan</li>
            </ul>
          </div>
          <div className="mx-6 my-6 md:mx-auto">
            <span className="font-semibold">Pendidikan</span>
            <ul className="mt-3">
              <li className="mt-4">Microsoft dalam pendidikan</li>
              <li className="mt-4">Office untuk pelajar</li>
              <li className="mt-4">Office 365 untuk sekolah</li>
            </ul>
          </div>
          <div className="mx-6 my-6 md:mx-auto">
            <span className="font-semibold">Enterprise</span>
            <ul className="mt-3">
              <li className="mt-4">Microsoft Azure</li>
              <li className="mt-4">Microsoft Industry</li>
              <li className="mt-4">Layanan Keuangan</li>
            </ul>
          </div>
          <div className="mx-6 my-6 md:mx-auto">
            <span className="font-semibold">Pengembang</span>
            <ul className="mt-3">
              <li className="mt-4">Microsoft Visual Studio</li>
              <li className="mt-4">Pusat pengembang</li>
              <li className="mt-4">Channel 9</li>
              <li className="mt-4">Microsoft 365 dev center</li>
              <li className="mt-4">Program pengembang Microsoft 365</li>
            </ul>
          </div>
          <div className="mx-6 my-6 md:mx-auto">
            <span className="font-semibold">Perusahaan</span>
            <ul className="mt-3">
              <li className="mt-4">Karier</li>
              <li className="mt-4">Tentang Microsoft</li>
              <li className="mt-4">Berita Perusahaan</li>
              <li className="mt-4">Privasi di Microsoft</li>
              <li className="mt-4">Investor</li>
            </ul>
          </div>
        </div>
        <div className="ml-6 mr-2 mt-14 md:px-10">
          <div className="block md:flex justify-end space-x-10">
            <a className="hover:underline" href="">
              Hubungi Microsoft
            </a>
            <a className="hover:underline" href="">
              Privasi
            </a>
            <a className="hover:underline" href="">
              Persyaratan penggunaan
            </a>
            <a className="hover:underline" href="">
              Merek dagang
            </a>
            <a className="hover:underline" href="">
              Mengenai iklan kami
            </a>
            <a className="hover:underline" href="">
              &copy; Microsoft 2021
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
