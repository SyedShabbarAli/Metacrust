import appLogo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 mt-20 border-t-2 border-cyan-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={appLogo}
              alt="MetaCrust Logo"
              className="w-32 md:w-36 object-contain mb-4"
            />
            <p className="text-gray-600 text-sm text-center md:text-left max-w-xs">
              Secure, energy-efficient communication for IoT devices
            </p>
          </div>

          {/* Copyright and Legal */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-700 mb-3 font-medium">
              © 2025{" "}
              <span className="text-red-500 font-semibold">Meta</span>
              <span className="text-cyan-600 font-semibold">Crust</span>
              {" "}Services Ltd.
            </p>
            <p className="text-xs text-gray-600 mb-2">
              MetaCrust™ is a trademark of MetaCrust Services Ltd.
            </p>
            <p className="text-xs text-gray-600">
              Provisional patent filings protect core technologies.
            </p>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-full" />
      </div>
    </footer>
  );
}
